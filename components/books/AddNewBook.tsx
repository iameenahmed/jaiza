import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import BookDetails from './BookDetails'
import { Save, Plus } from 'lucide-react'

export default function AddNewBook() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-56">
          <Plus className="me-2 h-5 w-5" />
          Add New Book
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[26rem] md:max-w-[36rem] lg:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle>Add New Book</DialogTitle>
          <DialogDescription>
            Make changes here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <BookDetails />
        <DialogFooter>
          <Button type="submit">
            <Save className="me-2 h-4 w-4" />
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
