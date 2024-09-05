import { FormMessage, Message } from '@/components/auth/form-message'
import { Input } from '@/components/auth/input'
import { Label } from '@/components/auth/label'
import { SubmitButton } from '@/components/auth/submit-button'
import { createClient } from '@/utils/supabase/server'
import { encodedRedirect } from '@/utils/utils'
import Link from 'next/link'

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Message
}) {
  const resetPassword = async (formData: FormData) => {
    'use server'
    const supabase = createClient()

    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!password || !confirmPassword) {
      encodedRedirect(
        'error',
        '/auth/reset-password',
        'Password and confirm password are required'
      )
    }

    if (password !== confirmPassword) {
      encodedRedirect('error', '/auth/reset-password', 'Passwords do not match')
    }

    const { error } = await supabase.auth.updateUser({
      password: password,
    })

    if (error) {
      encodedRedirect('error', '/auth/reset-password', 'Password update failed')
    }

    encodedRedirect('success', '/auth/reset-password', 'Password updated')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Link
        href="/"
        className="bg-secondary-background text-secondary-text group absolute left-8 top-8 flex items-center rounded-md px-4 py-2 text-sm no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{' '}
        Back
      </Link>

      <form className="bg-secondary-background flex w-full max-w-md flex-col gap-2 rounded-3xl px-12 py-10 shadow-2xl [&>input]:mb-4">
        <h1 className="text-3xl font-medium">Reset password</h1>
        <p className="text-secondary-text mb-8 text-sm">
          Please enter your new password below.
        </p>

        <Label htmlFor="password">New password</Label>
        <Input
          type="password"
          name="password"
          placeholder="New password"
          required
        />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
        />
        <SubmitButton formAction={resetPassword}>Reset password</SubmitButton>
        <FormMessage message={searchParams} />
      </form>
    </div>
  )
}
