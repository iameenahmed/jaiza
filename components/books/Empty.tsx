import { LibraryBig } from 'lucide-react'
import AddNewBook from './AddNewBook'

export default function Empty() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <LibraryBig className="mb-4 h-12 w-12" />
      <h1 className="mb-1 text-xl font-medium">Your list is empty!</h1>
      <p className="mb-2 text-muted-foreground">Click + button to add books </p>
      <AddNewBook />
    </div>
  )
}
