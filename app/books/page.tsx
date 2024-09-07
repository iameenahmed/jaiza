import AddNewBook from '@/components/books/AddNewBook'
import Empty from '@/components/books/Empty'

export default function BooksPage() {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-muted/40 p-4 md:min-h-screen md:gap-8 md:p-10">
      <div className="mx-auto flex w-full max-w-6xl justify-between gap-2">
        <h1 className="text-3xl font-semibold">Books</h1>
        <AddNewBook />
      </div>
      <Empty />
    </div>
  )
}
