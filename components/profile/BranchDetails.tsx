'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BranchDetailsSchema, BranchDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'

const formFields = [
  { name: 'division', label: 'Division', placeholder: 'John Doe' },
  { name: 'zone', label: 'Zone', placeholder: 'John Smith' },
  { name: 'branch', label: 'Branch Name', placeholder: '123-456-7890' },
  { name: 'principle', label: 'Principle', placeholder: 'John Smilga' },
  { name: 'inspector', label: 'Inspector', placeholder: 'John Doe' },
  {
    name: 'academic_inspector',
    label: 'Academic Inspector',
    placeholder: 'John Smith',
  },
]

export default function BranchDetails() {
  const form = useForm<BranchDetailsTypes>({
    resolver: zodResolver(BranchDetailsSchema),
  })

  return (
    <Form {...form}>
      <form className="mb-4 grid gap-y-4 lg:grid-cols-2 lg:gap-x-24">
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
