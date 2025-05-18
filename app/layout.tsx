import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

// Add YWFT Hannah Narrow font
const hannahNarrow = {
  className: "font-['YWFT_Hannah_Narrow']",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thedivinehands.com'),
  title: {
    default: "The Divine Hands - Wholesome Food Products | Mumbai",
    template: "%s | The Divine Hands"
  },
  description: "Discover pure, wholesome, chemical-free food products curated by talented artisans across India. Shop healthy treats, drinks, pickles, and more. Free delivery in Mumbai for orders above ₹799.",
  keywords: [
    "healthy food",
    "natural food",
    "chemical-free products",
    "Mumbai food delivery",
    "wholesome food",
    "organic food",
    "Indian food products",
    "healthy snacks",
    "natural pickles",
    "healthy drinks",
    "traditional Indian food",
    "artisanal food",
    "homemade food",
    "healthy treats",
    "spice blends",
    "nuts and seeds",
    "healthy breakfast"
  ],
  authors: [{ name: "Akansha", url: "https://thedivinehands.com" }],
  creator: "The Divine Hands",
  publisher: "The Divine Hands",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thedivinehands.com",
    siteName: "The Divine Hands",
    title: "The Divine Hands - Wholesome Food Products | Mumbai",
    description: "Discover pure, wholesome, chemical-free food products curated by talented artisans across India. Shop healthy treats, drinks, pickles, and more.",
    images: [
      {
        url: "/images/TDH Logo.png",
        width: 800,
        height: 600,
        alt: "The Divine Hands Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Divine Hands - Wholesome Food Products | Mumbai",
    description: "Discover pure, wholesome, chemical-free food products curated by talented artisans across India.",
    images: ["/images/TDH Logo.png"],
    creator: "@thedivinehands",
  },
  icons: {
    icon: [
      { rel: 'icon', url: '/TDH Logo.png' },
      { rel: 'shortcut icon', url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
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
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://thedivinehands.com',
  },
  category: 'food',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="icon" href="/TDH Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="theme-color" content="#FDBE28" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="The Divine Hands" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={nunito.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen pt-[124px]">
              {children}
            </main>
            <Footer />
            <Analytics />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
