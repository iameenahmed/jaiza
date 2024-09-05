'use client'

import {
  UserRoundPen,
  Library,
  NotebookPen,
  ChartLine,
  ShieldCheck,
  Settings,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' // Import the cn utility

const links = [
  { href: '/profile', icon: UserRoundPen, label: 'Profile' },
  { href: '/books', icon: Library, label: 'Books' },
  { href: '/progress', icon: NotebookPen, label: 'Progress' },
  { href: '/reports', icon: ChartLine, label: 'Reports' },
  { href: '/admin', icon: ShieldCheck, label: 'Admin' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export default function Navlinks() {
  const pathname = usePathname() // Get the current route path

  return (
    <>
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          className={cn(
            'flex items-center gap-4 rounded-lg px-3 py-2 transition-all hover:text-primary',
            {
              'bg-muted text-primary': pathname === href, // Active state
              'text-muted-foreground': pathname !== href, // Inactive state
            }
          )}
        >
          <Icon />
          {label}
        </Link>
      ))}
    </>
  )
}
