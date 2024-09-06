'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { BranchDetailsSchema, BranchDetailsTypes } from './schema'

import InputFormField from '../InputFormField'
import { Form } from '@/components/ui/form'

export default function BranchDetails() {
  const form = useForm<BranchDetailsTypes>({
    resolver: zodResolver(BranchDetailsSchema),
  })

  return (
    <Form {...form}>
      <form className="mb-6 grid gap-y-4 md:grid-cols-2 md:gap-x-24">
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
