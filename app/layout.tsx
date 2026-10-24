import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'
import WhatsAppButton from '@/component/WhatsAppButton'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Otuns Delicious Foods | Delicious Nigerian Delights in Lagos',
    template: '%s | Otuns Delicious Foods',
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
    title: 'Otuns Delicious Foods',
    description: 'Signature Asun, Small Chops, Party Packs & Golden Linking Fries – Fresh & Hot in Lagos',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Otuns Delicious Foods',
    images: [
    {
      url: "/og-image.jpg",           // <-- Change this later
      width: 1200,
      height: 630,
      alt: "Otuns Delicious Foods",
    },
  ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "gt5-hNdHp2OZA_5-mqsF-RvwC83w3_ZTfVCHvfGYIL0",
  },
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Otuns Delicious Foods",
  description: "Signature Asun, Small Chops, Party Packs & Golden Linking Fries – Fresh & Hot in Lagos",
  url: "https://otuns-foods.com.ng",
  telephone: "+2348088740343",
  address: {
    "@type": "Place",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  servesCuisine: "Nigerian, Small Chops, Party Foods",
  priceRange: "₦1,800 - ₦65,000",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  hasMenu: {
    "@type": "Menu",
    name: "Otuns Delicious Foods Menu",
    description: "Small Chops Packs, Golden Linking Fries & Themed Party Packs",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="/logo-1.jpg" />
  </head>
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <WhatsAppButton />
        </CartProvider>

        {/* ==================== SCHEMA MARKUP ==================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup),
          }}
        />

        {/* Google Analytics */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
></script>

<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-569LF1JTBC');
    `,
  }}
></script>
      </body>
    </html>
  )
}