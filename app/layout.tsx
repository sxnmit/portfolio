import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

const title = 'Sanmit Singh — Software Engineer and Product Manager'
const description =
  '4th-year Computer Science student at McMaster University with hands-on industry experience in automation, data workflows, full-stack development, and AI-powered systems.'

export const metadata: Metadata = {
  metadataBase: new URL('https://sanmitsingh.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Sanmit Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
