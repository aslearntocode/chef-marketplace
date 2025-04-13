import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'

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
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="icon" href="/TDH Logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={nunito.className}>
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
