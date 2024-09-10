import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PersonalDetails from '../../components/profile/PersonalDetails'
import BranchDetails from '../../components/profile/BranchDetails'

const Profile = () => {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-2">
        <h1 className="text-3xl font-semibold">Profile</h1>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Details</CardTitle>
            <CardDescription>Used to identify.</CardDescription>
          </CardHeader>
          <CardContent>
            <PersonalDetails />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Branch Details</CardTitle>
            <CardDescription>Used to identify.</CardDescription>
          </CardHeader>
          <CardContent>
            <BranchDetails />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Profile
