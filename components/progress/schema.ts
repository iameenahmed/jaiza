import { z } from 'zod'

export const ProgressDetailsSchema = z.object({
  academic_days: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  pages_taught: z.string().min(2, {
    message: 'Must be at least 2 characters.',
  }),
  last_topic: z.string().min(4, {
    message: 'Must be at least 4 characters.',
  }),
})

export type ProgressDetailsTypes = z.infer<typeof ProgressDetailsSchema>
