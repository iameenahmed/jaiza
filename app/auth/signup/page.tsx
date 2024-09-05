import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import Link from 'next/link'
import { SubmitButton } from '../../../components/auth/submit-button'
import { Input } from '@/components/auth/input'
import { Label } from '@/components/auth/label'
import { FormMessage, Message } from '@/components/auth/form-message'
import { encodedRedirect } from '@/utils/utils'

export default function Signup({ searchParams }: { searchParams: Message }) {
  const signUp = async (formData: FormData) => {
    'use server'
    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString()
    const supabase = createClient()
    const origin = headers().get('origin')

    if (!email || !password) {
      return { error: 'Email and password are required' }
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.error(error.code + ' ' + error.message)
      return encodedRedirect('error', '/auth/signup', 'Error trying to sign up')
    } else {
      return encodedRedirect(
        'success',
        '/auth/signup',
        'Thanks for signing up! Please check your email for a verification link.'
      )
    }
  }

  if ('message' in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    )
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="bg-secondary-background text-primary-text flex w-full max-w-md flex-col justify-center gap-2 rounded-3xl px-12 py-10 shadow-2xl [&>input]:mb-6">
        <h1 className="text-3xl font-medium">Sign up</h1>
        <p className="text-secondary-text text-sm">
          Already have an account?{' '}
          <Link
            className="text-accent-blue font-medium hover:underline"
            href="/auth/login"
          >
            Log in
          </Link>
        </p>
        <div className="mt-6 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton formAction={signUp} pendingText="Signing up...">
            Sign up
          </SubmitButton>
        </div>
        <FormMessage message={searchParams} />
      </form>
    </div>
  )
}
