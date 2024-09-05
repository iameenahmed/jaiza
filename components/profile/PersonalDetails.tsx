'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'
import { SelectFormField } from '@/components/SelectFormField'

// Define the schema for validation
const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  father_name: z.string().min(2, {
    message: "Father's name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  grade: z.string(),
  category: z.string(),
})

const gradeOptions = ['11', '13', '15', '17']
const categoryOptions = ['Madni', 'Academic', 'Both']

export default function PersonalDetails() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      grade: '11',
      category: 'Madni',
    },
  })

  return (
    <Form {...form}>
      <form className="mb-8 grid grid-cols-2 gap-x-24 gap-y-6">
        <InputFormField
          name="username"
          control={form.control}
          label="Name"
          placeholder="John Doe"
        />

        <InputFormField
          name="father_name"
          control={form.control}
          label="Father's Name"
          placeholder="John Smith"
        />

        <InputFormField
          name="phone"
          control={form.control}
          label="Mobile Number"
          placeholder="123-456-7890"
        />

        <SelectFormField
          name="phone"
          control={form.control}
          label="Grade"
          placeholder="11"
          options={gradeOptions}
        />

        <SelectFormField
          name="phone"
          control={form.control}
          label="Category"
          placeholder="Madni"
          options={categoryOptions}
        />
      </form>
    </Form>
  )
}
