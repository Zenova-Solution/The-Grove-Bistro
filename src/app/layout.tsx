import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageWrapper from './page-wrapper'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Grove Bistro — Where Taste Meets Elegance',
  description:
    'The Grove Bistro — Where Taste Meets Elegance. Premium café-style restaurant offering specialty coffee, fresh drinks, and artisan fast food.',
  keywords: 'café, bistro, coffee, restaurant, gourmet, shawarma, burgers, premium dining',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
      </body>
    </html>
  )
}
