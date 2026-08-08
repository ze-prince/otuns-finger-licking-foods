'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, Menu, ShoppingCart, Home, UtensilsCrossed, 
  Image, Info, Mail, ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/menu', label: 'Menu & Packs', icon: UtensilsCrossed },
    { href: '/gallery', label: 'Gallery', icon: Image },
    { href: '/about', label: 'About Us', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            O
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Otuns</h1>
            <p className="text-sm text-orange-600 -mt-1 font-medium">Finger Licking Foods</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`hover:text-orange-600 transition-colors ${
                pathname === link.href ? 'text-orange-600 font-semibold' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Cart Icon (Desktop) */}
          <Link
            href="/cart"
            className="relative hidden md:flex items-center justify-center"
          >
            <ShoppingCart
              size={26}
              className="hover:text-orange-600 transition"
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>

          {/* WhatsApp Button (Desktop) */}
          <a 
            href="https://wa.me/234YOURNUMBER" 
            target="_blank"
            className="hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            <Phone size={18} /> Order on WhatsApp
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={24} />
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-95 bg-[#fffaf6] flex flex-col"
            >
              {/* Header with Logo */}
              <div className="pb-8 border-b">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white font-bold text-2xl">
                    O
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Otuns</h2>
                    <p className="text-sm text-orange-600">Finger Licking Foods</p>
                  </div>
                </Link>
              </div>

              {/* Navigation Links */}
              <div className="mt-10 space-y-4 flex-1">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between rounded-xl border p-4 transition ${
                          isActive
                            ? 'bg-orange-100 border-orange-200 text-orange-600 font-semibold'
                            : 'border-zinc-200 hover:bg-orange-50'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={20} />
                          {link.label}
                        </span>
                        <ChevronRight size={18} />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Cart Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    href="/cart"
                    className="mt-4 flex items-center justify-between rounded-xl bg-orange-600 text-white p-4"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingCart size={22} />
                      <span>My Cart</span>
                    </div>
                    <span className="bg-white text-orange-600 rounded-full px-3 py-1 text-sm font-bold">
                      {totalItems}
                    </span>
                  </Link>
                </motion.div>

                {/* WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.48 }}
                >
                  <a
                    href="https://wa.me/234YOURNUMBER"
                    target="_blank"
                    className="mt-4 rounded-xl bg-green-600 text-white py-4 flex items-center justify-center gap-3 font-semibold"
                  >
                    <Phone size={20} />
                    Order on WhatsApp
                  </a>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-10 border-t">
                <p className="text-center text-sm text-zinc-500">
                  Freshly made • Delivered fast
                </p>
                <p className="text-center text-xs mt-2 text-zinc-400">
                  © 2026 Otuns Finger Licking Foods
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}