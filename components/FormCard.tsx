import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Save } from 'lucide-react'

interface FormCardProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function FormCard({
  title,
  description,
  children,
}: FormCardProps) {
  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>
            <Save className="me-2 h-4 w-4" />
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
