'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'

// Define the schema for validation
const FormSchema = z.object({
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
    message: 'Must be at least 2 characters.',
  }),
  academic_inspector: z.string().min(4, {
    message: 'Must be at least 2 characters.',
  }),
})

export default function BranchDetails() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  return (
    <Form {...form}>
      <form className="mb-6 grid grid-cols-2 gap-x-24 gap-y-4">
        <InputFormField
          name="division"
          control={form.control}
          label="Division"
          placeholder="John Doe"
        />

        <InputFormField
          name="zone"
          control={form.control}
          label="Zone"
          placeholder="John Smith"
        />

        <InputFormField
          name="branch"
          control={form.control}
          label="Branch Name"
          placeholder="123-456-7890"
        />

        <InputFormField
          name="principle"
          control={form.control}
          label="Principle"
          placeholder="John Smilga"
        />

        <InputFormField
          name="inspector"
          control={form.control}
          label="Inspector"
          placeholder="John Doe"
        />

        <InputFormField
          name="academic_inspector"
          control={form.control}
          label="Academic Inspector"
          placeholder="John Smith"
        />
      </form>
    </Form>
  )
}
