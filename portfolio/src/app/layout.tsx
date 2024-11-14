import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nevbar from '@/components/Nevbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tantai's Portfolio",
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
      <body className={inter.className}>
        <Nevbar/>
        {children}
      </body>
    </html>
  )
}
