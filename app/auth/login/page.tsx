import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { SubmitButton } from '../../../components/auth/submit-button'
import { Label } from '@/components/auth/label'
import { Input } from '@/components/auth/input'
import { FormMessage, Message } from '@/components/auth/form-message'
import { encodedRedirect } from '@/utils/utils'

export default function Login({ searchParams }: { searchParams: Message }) {
  const signIn = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return encodedRedirect(
        'error',
        '/auth/login',
        'Could not authenticate user'
      )
    }

    return redirect('/auth/protected')
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <form className="text-primary-text md:bg-secondary-background flex w-full max-w-md flex-1 flex-col justify-center gap-2 rounded-3xl px-12 py-10 md:shadow-2xl [&>input]:mb-6">
        <h1 className="text-3xl font-medium">Log in</h1>
        <p className="text-secondary-text text-sm">
          Don't have an account?{' '}
          <Link
            className="text-accent-blue font-medium hover:underline"
            href="/auth/signup"
          >
            Create now!
          </Link>
        </p>
        <div className="mt-6 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>

            <Link
              className="text-accent-blue text-sm hover:underline"
              href="/auth/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <SubmitButton formAction={signIn} pendingText="Signing In...">
            Log in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  )
}
