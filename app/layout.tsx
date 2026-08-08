import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import WhatsAppButton from "@/component/WhatsAppButton";
import {CartProvider} from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otuns Finger Licking Foods | Best Nigerian Small Chops & Asun",
  description: "Order delicious Nigerian small chops, jollof, asun delights & party packs. Fast delivery in Lagos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
  );
}