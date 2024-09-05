import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { SubmitButton } from '../../../components/auth/submit-button'
import { Label } from '@/components/auth/label'
import { Input } from '@/components/auth/input'
import { FormMessage, Message } from '@/components/auth/form-message'
import { headers } from 'next/headers'
import { encodedRedirect } from '@/utils/utils'

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: Message
}) {
  const forgotPassword = async (formData: FormData) => {
    'use server'

    const email = formData.get('email')?.toString()
    const supabase = createClient()
    const origin = headers().get('origin')
    const callbackUrl = formData.get('callbackUrl')?.toString()

    if (!email) {
      return encodedRedirect(
        'error',
        '/auth/forgot-password',
        'Email is required'
      )
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/auth/callback?redirect_to=/auth/reset-password`,
    })

    if (error) {
      console.error(error.message)
      return encodedRedirect(
        'error',
        '/auth/forgot-password',
        'Could not reset password'
      )
    }

    if (callbackUrl) {
      return redirect(callbackUrl)
    }

    return encodedRedirect(
      'success',
      '/auth/forgot-password',
      'Check your email for a link to reset your password.'
    )
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="bg-secondary-background text-primary-text flex w-full max-w-md flex-1 flex-col justify-center gap-2 rounded-3xl px-12 py-10 shadow-2xl [&>input]:mb-6">
        <h1 className="text-3xl font-medium">Reset Password</h1>
        <p className="text-secondary-text text-sm">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>

        <div className="mt-6 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <SubmitButton formAction={forgotPassword}>
            Reset Password
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
        <Link
          className="text-accent-blue mt-2 text-center text-sm font-medium hover:underline"
          href="/auth/login"
        >
          Return to Log in
        </Link>
      </form>
    </div>
  )
}
