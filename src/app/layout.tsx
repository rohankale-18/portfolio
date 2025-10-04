import type { Metadata } from 'next'
import './globals.css'
import { JetBrains_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: `Rohan Kale's Portfolio`,
  description: 'Personal portfolio of Rohan Kale, showcasing projects, experience, and skills.'
}

const mono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${mono.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}