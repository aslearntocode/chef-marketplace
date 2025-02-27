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
  description: "Home-cooked meals delivered to your doorstep",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
