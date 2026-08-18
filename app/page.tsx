'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Flame, Truck, Heart, Star,
  MessageCircle, Camera, ChevronRight,
} from 'lucide-react';
import Hero from '@/component/Hero';
import AnimatedCounter from '@/component/AnimatedCounter';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

// NOTE: "royal-feast.png" is a placeholder here — it's actually a Small Chops
// pack, not Asun. Swap in a real Asun photo (e.g. /menu/signature-asun.png)
// once you have one; a mismatched hero photo undercuts trust fast.
const featuredDishes = [
  {
    title: 'Signature Asun',
    desc: 'The spicy flavour everyone keeps coming back for.',
    price: 'From ₦4,500',
    image: '/menu/royal.jpg',
  },
  {
    title: 'Small Chops Packs',
    desc: 'From Mini Bites to Royal Feast — perfect for every occasion.',
    price: 'From ₦4,500',
    image: '/menu/mini.jpg',
  },
  {
    title: 'Golden Linking Fries',
    desc: 'Crispy yam, plantain & sweet potato delights.',
    price: 'From ₦5,500',
    image: '/menu/gourmet.jpg',
  },
];

const bestSellers = [
  {
    id: 1,
    name: 'MINI BITES PACK',
    price: 4500,
    rating: 5,
    description: 'Perfect starter pack of small chops',
    image: '/menu/mini.jpg',
  },
  {
    id: 8,
    name: 'ROYAL FEAST PACK',
    price: 18500,
    rating: 5,
    description: 'Our most popular party pack',
    image: '/menu/royal.jpg',
  },
  {
    id: 10,
    name: 'THE GOURMET BITES PACK',
    price: 7000,
    rating: 5,
    description: 'Golden fries with peppered chicken',
    image: '/menu/gourmet.jpg',
  },
];

const galleryPreview = [
  '/menu/mini.jpg',
  '/menu/taste.jpg',
  '/menu/gourmet.jfif',
  '/menu/royal.jpg',
  '/menu/platter.jfif',
  '/menu/big.jfif',
];

const testimonials = [
  {
    name: 'Chioma',
    text: 'The Small Chops were amazing. Everyone at the party kept asking where I got them.',
    rating: 5,
  },
  {
    name: 'David',
    text: 'Delivery was incredibly fast and the food was still hot. Will order again.',
    rating: 5,
  },
  {
    name: 'Mary',
    text: 'Best Asun in Lagos. The flavour is unmatched.',
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#ea580c_0.7px,transparent_0.7px)] opacity-5 -z-10"
        style={{ backgroundSize: '45px 45px' }}
      />

      {/* Hero */}
      <Hero />

      {/* ================= TRUST STRIP (cream) ================= */}
      <section className="bg-orange-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-orange-800 font-medium">
          <span>⭐ 4.9 Customer Rating</span>
          <span>🔥 Prepared Fresh Daily</span>
          <span>🚚 Fast Delivery</span>
          <span>❤️ Made With Care</span>
        </div>
      </section>

      {/* ================= FEATURED DISHES (white) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6 mb-10 md:mb-12"
        >
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Customer Favourites
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-2">
              Made to Make You Hungry
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl text-sm sm:text-base">
              A few of the dishes our customers keep coming back for.
            </p>
          </div>

          <Link href="/menu" className="self-start md:self-auto">
            <Button variant="outline" className="rounded-full px-6">
              View Full Menu
              <ChevronRight size={17} className="ml-1" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[1.75rem] overflow-hidden shadow-sm border border-zinc-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  priority={i === 0}
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Price */}
                <div className="absolute top-4 right-4">
                  <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-orange-600 shadow-lg">
                    {dish.price}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-black">{dish.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{dish.desc}</p>

                  <Link href="/menu">
                    <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-600 transition hover:bg-orange-50">
                      Order Now
                      <ChevronRight size={16} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CUSTOMERS LOVE OTUNS (cream) ================= */}
      <section className="bg-[#fff7f1] py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              The Otuns Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">
              Why Customers Keep Coming Back
            </h2>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              Great food is more than just taste. It's freshness,
              consistency and the care that goes into every order.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <Flame />,
                number: '01',
                title: 'Fresh Every Day',
                text: 'Every order is freshly prepared using carefully selected ingredients.',
              },
              {
                icon: <Truck />,
                number: '02',
                title: 'Fast Delivery',
                text: 'We work to get your food to you fresh, hot and ready to enjoy.',
              },
              {
                icon: <Heart />,
                number: '03',
                title: 'Made With Care',
                text: 'Every pack is prepared with the same care we would give our own family.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white rounded-[1.75rem] p-7 sm:p-8 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <span className="absolute top-5 sm:top-6 right-6 sm:right-7 text-4xl sm:text-5xl font-black text-orange-100">
                  {item.number}
                </span>

                <div className="relative w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-7 text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEST SELLERS (white) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Fan Favourites
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-2">Best Sellers</h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base">Customer favourites</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {bestSellers.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[1.75rem] overflow-hidden shadow-sm border border-zinc-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <span className="absolute top-4 left-4 z-10 bg-orange-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  BEST SELLER
                </span>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">
                    ₦{item.price.toLocaleString()}
                  </span>
                  <Link href="/menu">
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Order
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/menu">
            <Button variant="outline" size="lg" className="rounded-full">
              View Full Menu <ChevronRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= HOW ORDERING WORKS (black) ================= */}
      <section className="bg-zinc-950 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Simple & Easy
            </span>
            <h2 className="text-3xl md:text-4xl font-black mt-3">
              From Our Kitchen to Your Door
            </h2>
            <p className="text-zinc-400 mt-4 text-sm sm:text-base">
              Getting your favourite Otuns meals is easy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {[
              ['01', 'Browse Menu', 'Explore our delicious packs and choose your favourites.'],
              ['02', 'Build Your Order', 'Select your quantities and add everything to your cart.'],
              ['03', 'Send on WhatsApp', 'Review your order and send it directly to us.'],
              ['04', 'Enjoy Your Meal', 'We prepare your order and get it delivered to you.'],
            ].map(([number, title, description], i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-black text-orange-600/30">{number}</div>
                <h3 className="text-xl font-bold mt-3">{title}</h3>
                <p className="text-zinc-400 mt-3 leading-7 text-sm sm:text-base">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW (white) ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">From Our Kitchen</h2>
          <p className="text-gray-600 text-sm sm:text-base">A glimpse of what we prepare daily</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {galleryPreview.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <Image
                src={src}
                alt={`Otuns food ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Link href="/gallery">
            <Button variant="outline" className="rounded-full">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= TESTIMONIALS (cream) ================= */}
      <section className="bg-orange-50/60 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-gray-600 text-sm sm:text-base">Real feedback from real people</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[1.75rem] p-7 sm:p-8 border border-orange-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 leading-7 text-base sm:text-lg">"{t.text}"</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-gray-500">Otuns Customer</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS (orange) ================= */}
      <section className="bg-linear-to-r from-orange-950 via-orange-800 to-zinc-950 py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            {[
              { end: 1000, suffix: '+', label: 'Orders Delivered' },
              { value: '4.9★', label: 'Customer Rating' },
              { end: 20, suffix: '+', label: 'Menu Options' },
              { value: '100%', label: 'Fresh Daily' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-black">
                  {stat.value ?? (
                    <AnimatedCounter end={stat.end!} suffix={stat.suffix} />
                  )}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-orange-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTAGRAM (white, light card) ================= */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border shadow-lg p-8 sm:p-10"
        >
          <Camera size={40} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Follow Us</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">See more of our daily creations</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-6 sm:px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            @otunsfingerlickingfoods
          </a>
        </motion.div>
      </section>

      {/* ================= EVENT CATERING (dark card, distinct from Instagram) ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-950 rounded-[2rem] p-8 sm:p-10 md:p-14 text-white text-center shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">Need Catering?</h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-1">Birthday Parties • Wedding Events</p>
          <p className="text-zinc-400 text-base sm:text-lg mb-8">Office Events • Corporate Gatherings</p>
          <a
            href="https://wa.me/2348088740343?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20catering"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full transition"
          >
            Request Quote
          </a>
        </motion.div>
      </section>

      {/* ================= FINAL CTA (clean, white, strongest on page) ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-5">Hungry?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-9 sm:mb-10 max-w-xl mx-auto">
            Freshly prepared meals, delivered with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 px-10 py-7 rounded-full text-lg"
              >
                Browse Menu
              </Button>
            </Link>
            <a
              href="https://wa.me/2348088740343?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 font-semibold px-10 py-4 rounded-full hover:bg-orange-50 transition w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}