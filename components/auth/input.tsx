import { cn } from '@/utils/cn'

export function Input({ ...props }: React.JSX.IntrinsicElements['input']) {
  return (
    <input
      className={cn(
        'rounded-md h-8 text-sm px-4 py-5 bg-inherit border',
        props.className
      )}
      {...props}
    />
  )
}
