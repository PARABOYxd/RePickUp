import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { FloatingButtons } from '@/components/common/floating-buttons';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yoursite.com'),
  title: {
    default: 'ElectroFurni Pickup - Electronics & Furniture Resale Service',
    template: '%s | ElectroFurni Pickup'
  },
  description: 'Professional electronics and furniture pickup and resale service. Get instant quotes, schedule free pickups, and sell your items hassle-free.',
  keywords: ['electronics pickup', 'furniture resale', 'sell electronics', 'furniture buyer', 'pickup service'],
  authors: [{ name: 'ElectroFurni Pickup' }],
  creator: 'ElectroFurni Pickup',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'ElectroFurni Pickup',
    title: 'ElectroFurni Pickup - Electronics & Furniture Resale Service',
    description: 'Professional electronics and furniture pickup and resale service. Get instant quotes, schedule free pickups, and sell your items hassle-free.',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'ElectroFurni Pickup Service'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectroFurni Pickup - Electronics & Furniture Resale Service',
    description: 'Professional electronics and furniture pickup and resale service.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingButtons />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}