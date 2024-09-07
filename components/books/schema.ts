import { z } from 'zod'

export const BookDetailsSchema = z.object({
  name: z.string().min(3, {
    message: 'Must be at least 3 characters.',
  }),
  class: z.string().min(4, {
    message: 'Must be at least 4 characters.',
  }),
  section: z.string().min(1, {
    message: 'Must be at least 1 characters.',
  }),
  total_pages: z.string().min(2, {
    message: 'Must be at least 2 digits.',
  }),
  total_days: z.string().min(2, {
    message: 'Must be at least 2 digits.',
  }),
  daily_target: z.string().min(2, {
    message: 'Must be at least 2 digits.',
  }),
})

export type BookDetailsTypes = z.infer<typeof BookDetailsSchema>
