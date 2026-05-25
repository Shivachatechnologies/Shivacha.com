import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SchemaOrg } from '@/components/common/SchemaOrg';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000008',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.shivacha.com'),
  title: {
    default: 'Shivacha Technologies | Enterprise Blockchain, AI & Fintech Infrastructure',
    template: '%s | Shivacha Technologies',
  },
  description:
    'Shivacha Technologies is a global enterprise infrastructure company delivering scalable blockchain, AI, fintech, forex trading, neo banking, and cloud ecosystems for enterprises, institutions, and governments worldwide.',
  keywords: [
    'enterprise blockchain infrastructure',
    'AI development company',
    'fintech infrastructure',
    'crypto exchange platform',
    'neo banking platform',
    'forex infrastructure',
    'trading technology',
    'smart contract development',
    'DeFi platform',
    'tokenization platform',
    'enterprise AI agents',
    'white-label fintech',
    'blockchain development company USA',
    'blockchain development company India UK',
    'Shivacha Technologies',
  ],
  authors: [{ name: 'Shivacha Technologies', url: 'https://www.shivacha.com' }],
  creator: 'Shivacha Technologies',
  publisher: 'Shivacha Technologies',
  category: 'Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.shivacha.com',
    siteName: 'Shivacha Technologies',
    title: 'Shivacha Technologies | Enterprise Blockchain, AI & Fintech Infrastructure',
    description:
      'Global enterprise infrastructure company. Blockchain, AI, Fintech, Neo Banking, Forex, Trading & Cloud ecosystems powering the digital economy.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shivacha Technologies — Enterprise Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Shivachatech',
    creator: '@Shivachatech',
    title: 'Shivacha Technologies | Enterprise Blockchain & AI Infrastructure',
    description: 'Powering the digital economy with enterprise blockchain, AI, fintech & cloud infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://www.shivacha.com' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <SchemaOrg />
      </head>
      <body className="font-sans antialiased bg-white text-[#F0F6FF] overflow-x-hidden">
        <Header />
        <main className="relative">{children}</main>
        <Footer />
        {/* WhatsApp float */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Shivacha%20Technologies%2C%20I%20want%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-2xl bg-green-500 hover:bg-green-400 shadow-2xl shadow-green-900/40 flex items-center justify-center text-2xl transition-all hover:scale-110 hover:-translate-y-1">
          💬
        </a>
      </body>
    </html>
  );
}
