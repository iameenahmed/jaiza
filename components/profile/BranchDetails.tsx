'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BranchDetailsSchema, BranchDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'
import { Button } from '../ui/button'
import { Save } from 'lucide-react'

const formFields = [
  { name: 'division', label: 'Division', placeholder: 'Gujranwala' },
  { name: 'zone', label: 'Zone', placeholder: 'Sialkot' },
  { name: 'branch', label: 'Branch Name', placeholder: 'Faizan-e-Madina' },
  { name: 'principle', label: 'Principle', placeholder: 'Abu Bakr' },
  { name: 'inspector', label: 'Inspector', placeholder: 'Zaid' },
  {
    name: 'academic_inspector',
    label: 'Academic Inspector',
    placeholder: 'Khalid',
  },
]

function onSubmit(values: BranchDetailsTypes) {
  console.log(values)
}

export default function BranchDetails() {
  const form = useForm<BranchDetailsTypes>({
    resolver: zodResolver(BranchDetailsSchema),
    defaultValues: {
      division: '',
      zone: '',
      branch: '',
      principle: '',
      inspector: '',
      academic_inspector: '',
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
