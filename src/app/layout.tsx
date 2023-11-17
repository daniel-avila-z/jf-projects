import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JF Projects',
  description: 'E-Commerce'
}

export default function RootLayout ({
  children
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
