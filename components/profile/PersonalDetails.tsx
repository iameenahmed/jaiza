'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { PersonalDetailsSchema, PersonalDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import SelectFormField from '@/components/SelectFormField'

const gradeOptions = ['11', '13', '15', '17']
const categoryOptions = ['Madni', 'Academic', 'Both']

export default function PersonalDetails() {
  const form = useForm<PersonalDetailsTypes>({
    resolver: zodResolver(PersonalDetailsSchema),
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
          name="grade"
          control={form.control}
          label="Grade"
          placeholder="11"
          options={gradeOptions}
        />

        <SelectFormField
          name="category"
          control={form.control}
          label="Category"
          placeholder="Madni"
          options={categoryOptions}
        />
      </form>
    </Form>
  )
}
