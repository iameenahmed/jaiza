import { z } from 'zod'

export const PersonalDetailsSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  father_name: z.string().min(2, {
    message: "Father's name must be at least 2 characters.",
  }),
  phone: z.string().length(10, {
    message: 'Phone number must be 11 digits.',
  }),
  grade: z.string(),
  category: z.string(),
})

export const BranchDetailsSchema = z.object({
  division: z.string().min(4, {
    message: 'Must be at least 2 characters.',
  }),
  zone: z.string().min(4, {
    message: "Father's name must be at least 2 characters.",
  }),
  branch: z.string().min(11, {
    message: 'Phone number must be at least 11 digits.',
  }),
  principle: z.string().min(4, {
    message: 'Must be at least 2 characters.',
  }),
  inspector: z.string().min(4, {
    message: 'Must be at least 4 characters.',
  }),
  academic_inspector: z.string().min(4, {
    message: 'Must be at least 4 characters.',
  }),
})

export type BranchDetailsTypes = z.infer<typeof BranchDetailsSchema>
export type PersonalDetailsTypes = z.infer<typeof PersonalDetailsSchema>
