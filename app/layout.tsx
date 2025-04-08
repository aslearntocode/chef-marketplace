import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Divine Hands",
  description: "Handcrafted food products made with love",
  icons: {
    icon: [
      { rel: 'icon', url: '/TDH Logo.png' },
      { rel: 'shortcut icon', url: '/favicon.ico' }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TDH Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen pt-[72px]">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
