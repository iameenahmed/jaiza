'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ProgressDetailsSchema, ProgressDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'
import { Save } from 'lucide-react'
import { Button } from '../ui/button'

const formFields = [
  { name: 'academic_days', label: 'Academic Days', placeholder: '25' },
  { name: 'pages_taught', label: 'Pages Taught', placeholder: '63' },
  { name: 'last_topic', label: 'Last Topic', placeholder: 'Ex# 3.1' },
]

function onSubmit(values: ProgressDetailsTypes) {
  console.log(values)
}

export default function ProgressDetails() {
  const form = useForm<ProgressDetailsTypes>({
    resolver: zodResolver(ProgressDetailsSchema),
    defaultValues: {
      academic_days: '',
      pages_taught: '',
      last_topic: '',
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
          Save
        </Button>
      </form>
    </Form>
  )
}
