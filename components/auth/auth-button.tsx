import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const signOut = async () => {
    'use server'

    const supabase = createClient()
    await supabase.auth.signOut()
    return redirect('/auth/login')
  }

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <form action={signOut}>
        <button className="rounded-md bg-btn-background px-4 py-2 no-underline hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex gap-2">
      <Link
        href="/login"
        className="flex h-8 items-center justify-center rounded-md px-4 text-sm font-medium no-underline"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="flex h-8 items-center justify-center rounded-md bg-black px-4 text-sm font-medium text-white no-underline"
      >
        Sign up
      </Link>
    </div>
  )
}
