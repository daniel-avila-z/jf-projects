// import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from './head'
import './styles/globals.css'
const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'JF Projects',
//   description: 'E-Commerce'
// }

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <Head />
      <body>
        {children}
      </body>
    </html>
  )
}
