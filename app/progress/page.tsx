import FormCard from '@/components/FormCard'
import ProgressDetails from '@/components/progress/ProgressDetails'

export default function ProgressPage() {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:min-h-screen md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Progress</h1>
      </div>
      <FormCard
        title="Progress Details"
        description="Used to make your monthly report"
      >
        <ProgressDetails />
      </FormCard>
    </div>
  )
}
