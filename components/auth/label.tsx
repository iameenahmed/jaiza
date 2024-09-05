import { cn } from '@/utils/cn'
import React from 'react'

export function Label({
  children,
  ...props
}: { children: React.ReactNode } & React.JSX.IntrinsicElements['label']) {
  return (
    <label className={cn('text-lg font-medium', props.className)} {...props}>
      {children}
    </label>
  )
}
