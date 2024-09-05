'use client'

import { useFormStatus } from 'react-dom'
import { type ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
  pendingText?: string
}

export function SubmitButton({
  children,
  pendingText = 'Submitting...',
  ...props
}: Props) {
  const { pending, action } = useFormStatus()

  const isPending = pending && action === props.formAction

  return (
    <button
      {...props}
      className="mt-2 flex h-12 items-center justify-center rounded-md bg-primary text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      type="submit"
      aria-disabled={pending}
    >
      {isPending ? pendingText : children}
    </button>
  )
}
