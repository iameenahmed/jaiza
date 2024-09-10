'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BookDetailsSchema, BookDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'
import { Button } from '../ui/button'
import { Save } from 'lucide-react'

const formFields = [
  { name: 'name', label: 'Name', placeholder: 'English' },
  { name: 'class', label: 'Class', placeholder: '9th Grade' },
  { name: 'section', label: 'Section', placeholder: 'A' },
  { name: 'total_pages', label: 'Total Pages', placeholder: '120' },
  { name: 'total_days', label: 'Total Days', placeholder: '90' },
  { name: 'daily_target', label: 'Daily Target', placeholder: '2.56' },
]

function onSubmit(values: BookDetailsTypes) {
  console.log(values)
}

export default function BookDetails() {
  const form = useForm<BookDetailsTypes>({
    resolver: zodResolver(BookDetailsSchema),
    defaultValues: {
      name: '',
      class: '',
      section: '',
      total_pages: '',
      total_days: '',
      daily_target: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-4 grid gap-y-4 lg:grid-cols-2 lg:gap-x-20">
          {formFields.map((field) => (
            <InputFormField
              key={field.name}
              name={field.name}
              control={form.control}
              label={field.label}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <Button type="submit" className="mt-8">
          <Save className="me-2 h-4 w-4" />
          Save changes
        </Button>
      </form>
    </Form>
  )
}
