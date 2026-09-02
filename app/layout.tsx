import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'
import WhatsAppButton from '@/component/WhatsAppButton'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Otuns Finger Licking Foods | Finger Licking Nigerian Delights in Lagos',
    template: '%s | Otuns Finger Licking Foods',
  },
  description: 'Premium Nigerian small chops, party packs, golden linking fries & asun delivery in Lagos. Fresh, hot & delivered fast. Order on WhatsApp now!',
  keywords: [
    'small chops Lagos',
    'party packs Lagos',
    'asun delivery',
    'Nigerian food delivery',
    'finger foods Lagos',
    'best small chops in Lagos',
    'food delivery Lekki',
    'Small chops delivery',
    'Food delivery Lagos',
  ],
  openGraph: {
    title: 'Otuns Finger Licking Foods',
    description: 'Signature Asun, Small Chops, Party Packs & Golden Linking Fries – Fresh & Hot in Lagos',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Otuns Finger Licking Foods',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}