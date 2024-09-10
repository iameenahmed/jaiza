'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { PersonalDetailsSchema, PersonalDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import SelectFormField from '@/components/SelectFormField'
import { Button } from '../ui/button'
import { Save } from 'lucide-react'

const inputFields = [
  { name: 'username', label: 'Name', placeholder: 'Abdul Rahman' },
  { name: 'father_name', label: "Father's Name", placeholder: 'Abdullah' },
  { name: 'phone', label: 'Mobile Number', placeholder: '0300 1234567' },
]

const gradeOptions = ['11', '13', '15', '17']
const categoryOptions = ['Madni', 'Academic', 'Both']

function onSubmit(values: PersonalDetailsTypes) {
  console.log(values)
}

export default function PersonalDetails() {
  const form = useForm<PersonalDetailsTypes>({
    resolver: zodResolver(PersonalDetailsSchema),
    defaultValues: {
      username: '',
      father_name: '',
      phone: '',
      grade: '11',
      category: 'Madni',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid gap-y-6 lg:grid-cols-2 lg:gap-x-24">
          {inputFields.map((field) => (
            <InputFormField
              key={field.name}
              name={field.name}
              control={form.control}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}

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
        </div>
        <Button type="submit" className="mt-8">
          <Save className="me-2 h-4 w-4" />
          Save
        </Button>
      </form>
    </Form>
  )
}
