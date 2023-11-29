import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import './globals.css'
import './area-inktrap.css'

// const areaInktrap = localFont({
//   src: [
//     {
//       path: '../../public/fonts/AreaInktrap-Regular.ttf',
//       weight: '400'
//     },
//     {
//       path: '../../public/fonts/AreaInktrap-Semibold.ttf',
//       weight: '500'
//     },
//     {
//       path: '../../public/fonts/AreaInktrap-Bold.ttf',
//       weight: '700'
//     }
//   ],
//   variable: '--font-area-inktrap'
// })


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
