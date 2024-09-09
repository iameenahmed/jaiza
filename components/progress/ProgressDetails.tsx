'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ProgressDetailsSchema, ProgressDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'

const formFields = [
  { name: 'academic_days', label: 'Academic Days', placeholder: '25' },
  { name: 'pages_taught', label: 'Pages Taught', placeholder: '63' },
  { name: 'last_topic', label: 'Last Topic', placeholder: 'Ex# 3.1' },
]

export default function ProgressDetails() {
  const form = useForm<ProgressDetailsTypes>({
    resolver: zodResolver(ProgressDetailsSchema),
  })

  return (
    <Form {...form}>
      <form className="mb-4 grid gap-y-4 lg:grid-cols-2 lg:gap-x-20">
        {formFields.map((field) => (
          <InputFormField
            key={field.name}
            name={field.name}
            control={form.control}
            label={field.label}
            placeholder={field.placeholder}
          />
        ))}
      </form>
    </Form>
  )
}
