import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Acharya Timbers & Furnitures - Premium Sawmill Solutions',
  description: 'Industrial-grade sawmill solutions featuring advanced timber cutting, wood processing machines, and precision woodworking equipment. Professional equipment for the timber industry.',
  generator: 'v0.app',
  openGraph: {
    title: 'Acharya Timbers & Furnitures - Premium Sawmill Solutions',
    description: 'Industrial-grade sawmill solutions featuring advanced timber cutting and processing machines.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-4xl font-bold text-primary">Acharya Timbers & Furnitures</div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#products" className="text-sm hover:text-primary transition-colors">Products</a>
              <a href="#machines" className="text-sm hover:text-primary transition-colors">Machines</a>
              <a href="#gallery" className="text-sm hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
