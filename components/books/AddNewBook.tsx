import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import BookDetails from './BookDetails'
import { Plus } from 'lucide-react'

export default function AddNewBook() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Plus aria-label="add new book" />
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
      </DialogContent>
    </Dialog>
  )
}
