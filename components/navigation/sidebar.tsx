import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Navlinks from './navlinks'

export default function Sidebar() {
  return (
    <div>
      <aside className="fixed hidden h-full w-[14rem] border-r bg-muted/40 md:block lg:w-[16rem]">
        <div className="flex min-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="">jaiza</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start gap-y-1 px-2 font-medium lg:px-4">
              <Navlinks />
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Button size="sm" className="w-full">
              Log Out
            </Button>
          </div>
        </div>
      </aside>
      <div className="flex flex-col md:hidden">
        <header className="flex h-14 items-center gap-4 border-2 bg-muted/40 px-4 lg:h-0 lg:px-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 pt-8 text-lg font-medium">
                <Navlinks />
              </nav>
              <div className="mt-auto">
                <Button className="w-full">Log Out</Button>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1"></div>
        </header>
      </div>
    </div>
  )
}
