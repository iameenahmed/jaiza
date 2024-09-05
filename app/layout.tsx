import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/navigation/sidebar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Jaiza',
  description: '',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`bg-main-background text-primary-text min-h-screen ${inter.className}`}
      >
        <div className="grid md:grid-cols-[14rem_1fr] lg:grid-cols-[16rem_1fr]">
          <Sidebar />
          <main className="flex flex-col items-center">{children}</main>
        </div>
      </body>
    </html>
  )
}
