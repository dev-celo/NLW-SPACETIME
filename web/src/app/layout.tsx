import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjure' })

export const metadata = {
  title: 'Space Time',
  description: 'Uma capsula do tempo contruída com React, Next.js, TailwindCSS e TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree} font-sans text-gray-100 bg-gray-900`}>{children}</body>
    </html>
  )
}
