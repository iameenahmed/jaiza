import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface Book {
  id: number
  name: string
  category: string
  class: string
  section: string
  totalPages: number
  totalDays: number
  dailyTarget: number
}

interface BookCardProps {
  books: Book[]
}

export default function BooksTable({ books }: BookCardProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Books Table</CardTitle>
          <CardDescription>Your added book</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>A list of your added books.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sr. No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Total Pages</TableHead>
                <TableHead>Total Days</TableHead>
                <TableHead>Daily Target</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-medium">{book.id}</TableCell>
                  <TableCell>{book.name}</TableCell>
                  <TableCell>{book.category}</TableCell>
                  <TableCell>{book.class}</TableCell>
                  <TableCell>{book.section}</TableCell>
                  <TableCell>{book.totalPages}</TableCell>
                  <TableCell>{book.totalDays}</TableCell>
                  <TableCell>{book.dailyTarget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
