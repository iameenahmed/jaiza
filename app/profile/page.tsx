import FormCard from '@/components/FormCard'
import PersonalDetails from '../../components/profile/PersonalDetails'
import BranchDetails from '../../components/profile/BranchDetails'

const Profile = () => {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Profile</h1>
      </div>
      <FormCard title="Personal Details" description="Used to identify">
        <PersonalDetails />
      </FormCard>

      <FormCard title="Branch Details" description="Used to identify">
        <BranchDetails />
      </FormCard>
    </div>
  )
}

export default Profile
