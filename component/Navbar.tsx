'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Menu,
  ShoppingCart,
  Home,
  UtensilsCrossed,
  Images,
  Info,
  Mail,
  ChevronRight,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { totalItems } = useCart();
  const pathname = usePathname();

  const navLinks = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
    },
    {
      href: '/menu',
      label: 'Menu & Packs',
      icon: UtensilsCrossed,
    },
    {
      href: '/gallery',
      label: 'Gallery',
      icon: Images,
    },
    {
      href: '/about',
      label: 'About Us',
      icon: Info,
    },
    {
      href: '/contact',
      label: 'Contact',
      icon: Mail,
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-orange-100/70 bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* =========================
              LOGO
          ========================== */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white shadow-lg shadow-orange-500/20"
            >
              O
            </motion.div>

            <div className="leading-none">
              <h1 className="text-[21px] font-extrabold tracking-tight text-zinc-900">
                Otuns
              </h1>

              <p className="mt-1 text-[11px] font-semibold tracking-wide text-orange-600">
                FINGER LICKING FOODS
              </p>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium"
                >
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      active
                        ? 'font-semibold text-orange-600'
                        : 'text-zinc-600 hover:text-orange-600'
                    }`}
                  >
                    {link.label}
                  </span>

                  {active && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-x-2 -bottom-[2px] h-0.5 rounded-full bg-orange-600"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* =========================
              RIGHT SIDE ACTIONS
          ========================== */}
          <div className="flex items-center gap-2.5">

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping cart with ${totalItems} items`}
              className="group relative hidden md:flex"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-200 group-hover:border-orange-200 group-hover:bg-orange-50">
                <ShoppingCart
                  size={19}
                  className="text-zinc-700 transition-colors group-hover:text-orange-600"
                />
              </div>

              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-[10px] font-bold text-white ring-2 ring-white"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* WhatsApp */}
            <a
              href="https://wa.me/234YOURNUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-600/25 md:flex"
            >
              <Phone size={16} />
              <span>Order Now</span>
            </a>

            {/* =========================
                MOBILE MENU
            ========================== */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full border border-zinc-200 bg-white hover:bg-orange-50 hover:text-orange-600 md:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu size={22} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] border-l border-orange-100 bg-[#fffaf6] p-0 sm:w-[380px]"
              >

                {/* Mobile Header */}
                <div className="border-b border-orange-100 px-6 py-6">
                  <div className="flex items-center justify-between">

                    <Link
                      href="/"
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 text-xl font-black text-white shadow-lg shadow-orange-500/20">
                        O
                      </div>

                      <div>
                        <h2 className="text-xl font-extrabold text-zinc-900">
                          Otuns
                        </h2>

                        <p className="text-[11px] font-semibold tracking-wide text-orange-600">
                          FINGER LICKING FOODS
                        </p>
                      </div>
                    </Link>

                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-1 flex-col px-5 py-7">

                  <p className="mb-4 px-2 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Explore
                  </p>

                  <div className="space-y-2">
                    {navLinks.map((link, index) => {
                      const Icon = link.icon;
                      const active = isActive(link.href);

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.06,
                            duration: 0.25,
                          }}
                        >
                          <SheetClose asChild>
                            <Link
                              href={link.href}
                              className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-200 ${
                                active
                                  ? 'bg-orange-100 text-orange-700 shadow-sm'
                                  : 'text-zinc-700 hover:bg-white hover:text-orange-600'
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                    active
                                      ? 'bg-orange-600 text-white'
                                      : 'bg-white text-zinc-500 group-hover:bg-orange-50 group-hover:text-orange-600'
                                  }`}
                                >
                                  <Icon size={18} />
                                </span>

                                <span className="font-medium">
                                  {link.label}
                                </span>
                              </span>

                              <ChevronRight
                                size={18}
                                className={`transition-transform duration-200 group-hover:translate-x-1 ${
                                  active
                                    ? 'text-orange-600'
                                    : 'text-zinc-400'
                                }`}
                              />
                            </Link>
                          </SheetClose>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Cart */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="mt-7"
                  >
                    <SheetClose asChild>
                      <Link
                        href="/cart"
                        className="flex items-center justify-between rounded-2xl border border-orange-200 bg-white p-4 shadow-sm transition hover:border-orange-300 hover:shadow-md"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                            <ShoppingCart size={20} />
                          </div>

                          <div>
                            <p className="font-semibold text-zinc-900">
                              My Cart
                            </p>
                            <p className="text-xs text-zinc-500">
                              {totalItems === 0
                                ? 'Your cart is empty'
                                : `${totalItems} item${
                                    totalItems > 1 ? 's' : ''
                                  }`}
                            </p>
                          </div>
                        </div>

                        <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-orange-600 px-2 text-xs font-bold text-white">
                          {totalItems}
                        </span>
                      </Link>
                    </SheetClose>
                  </motion.div>

                  {/* WhatsApp CTA */}
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.42 }}
                    href="https://wa.me/234YOURNUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2.5 rounded-2xl bg-green-600 py-4 font-bold text-white shadow-lg shadow-green-600/20 transition-all hover:bg-green-700"
                  >
                    <Phone size={19} />
                    Order on WhatsApp
                  </motion.a>

                  {/* Bottom */}
                  <div className="mt-auto border-t border-orange-100 pt-7">
                    <p className="text-center text-sm font-medium text-zinc-500">
                      Freshly made • Delivered fast
                    </p>

                    <p className="mt-2 text-center text-xs text-zinc-400">
                      © 2026 Otuns Finger Licking Foods
                    </p>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}