'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Flame, Truck, Heart, Star, 
  MessageCircle, Camera, ChevronRight 
} from 'lucide-react';
import Hero from '@/component/Hero';
import AnimatedCounter from '@/component/AnimatedCounter';

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

const featuredDishes = [
  {
    title: 'Signature Asun',
    desc: 'The spicy flavour everyone keeps coming back for.',
    price: 'From ₦4,500',
    image: '/menu/royal-feast.png',
  },
  {
    title: 'Small Chops Packs',
    desc: 'From Mini Bites to Royal Feast — perfect for every occasion.',
    price: 'From ₦4,500',
    image: '/menu/mini-bites.png',
  },
  {
    title: 'Golden Linking Fries',
    desc: 'Crispy yam, plantain & sweet potato delights.',
    price: 'From ₦5,500',
    image: '/menu/gourmet-bite.png',
  },
];

const bestSellers = [
  {
    id: 1,
    name: 'MINI BITES PACK',
    price: 4500,
    rating: 5,
    description: 'Perfect starter pack of small chops',
    image: '/menu/mini-bites.png',
  },
  {
    id: 8,
    name: 'ROYAL FEAST PACK',
    price: 18500,
    rating: 5,
    description: 'Our most popular party pack',
    image: '/menu/royal-feast.png',
  },
  {
    id: 10,
    name: 'THE GOURMET BITES PACK',
    price: 7000,
    rating: 5,
    description: 'Golden fries with peppered chicken',
    image: '/menu/gourmet-bite.png',
  },
];

const galleryPreview = [
  '/menu/mini-bites.png',
  '/menu/taste-teaser.png',
  '/menu/gourmet-bite.png',
  '/menu/royal-feast.png',
  '/menu/platter.png',
  '/menu/big-bites.png',
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
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c_0.7px,transparent_0.7px)] bg-size-[45px_45px] opacity-5 -z-10" />

      {/* Hero */}
      <Hero />

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-orange-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-8 text-sm text-orange-800 font-medium">
          <span>⭐ 4.9 Customer Rating</span>
          <span>🔥 Prepared Fresh Daily</span>
          <span>🚚 Fast Delivery</span>
          <span>❤️ Made With Care</span>
        </div>
      </section>

      {/* ================= FEATURED DISHES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Dishes</h2>
          <p className="text-gray-600">Our most loved creations</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  priority={i === 0}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{dish.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-orange-600">{dish.price}</span>
                  <Link href="/menu">
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Order Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CUSTOMERS LOVE OTUNS ================= */}
      <section className="bg-orange-50/50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Customers Love Otuns</h2>
            <p className="text-gray-600">What makes us different</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Flame className="w-8 h-8 text-orange-600" />, title: 'Prepared Fresh Daily', text: 'Every order is made fresh using quality ingredients.' },
              { icon: <Truck className="w-8 h-8 text-amber-600" />, title: 'Fast Delivery', text: 'Hot meals delivered quickly to your doorstep.' },
              { icon: <Heart className="w-8 h-8 text-red-500" />, title: 'Made With Care', text: "Every pack is prepared like it's for family." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Best Sellers</h2>
          <p className="text-gray-600">Customer favourites</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {bestSellers.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border hover:shadow-2xl transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
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
              <div className="p-6">
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

      {/* ================= HOW ORDERING WORKS ================= */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How Ordering Works</h2>
            <p className="text-gray-600">Simple steps to delicious food</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Browse Menu', desc: 'Explore our packs and choose your favourites' },
              { step: '2', title: 'Add to Cart', desc: 'Select quantities and build your order' },
              { step: '3', title: 'Checkout on WhatsApp', desc: 'Send your order with one tap' },
              { step: '4', title: 'Enjoy!', desc: 'Sit back while we prepare and deliver' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">From Our Kitchen</h2>
          <p className="text-gray-600">A glimpse of what we prepare daily</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryPreview.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Gallery preview ${i + 1}`}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={75}
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery">
            <Button variant="outline" className="rounded-full">
              View Full Gallery
            </Button>
          </Link>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-orange-50/60 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Customers Say</h2>
            <p className="text-gray-600">Real feedback from real people</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-orange-600">— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { end: 1000, suffix: '+', label: 'Orders Delivered' },
            { end: 4.9, suffix: '★', label: 'Customer Rating', isDecimal: true },
            { end: 20, suffix: '+', label: 'Menu Options' },
            { end: 100, suffix: '%', label: 'Fresh Daily' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-1">
                {stat.isDecimal ? (
                  <span>4.9★</span>
                ) : (
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INSTAGRAM ================= */}
      <section className="max-w-3xl mx-auto px-6 py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border shadow-lg p-10"
        >
          <Camera size={40} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Follow Us</h2>
          <p className="text-gray-600 mb-6">See more of our daily creations</p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            @otunsfingerlickingfoods
          </a>
        </motion.div>
      </section>

      {/* ================= EVENT CATERING ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-zinc-500 rounded-[2rem] p-10 md:p-14 text-white text-center shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Catering?</h2>
          <p className="text-orange-50 text-lg mb-2">Birthday Parties • Wedding Events</p>
          <p className="text-orange-50 text-lg mb-8">Office Events • Corporate Gatherings</p>
          <a
            href="https://wa.me/234YOURNUMBER?text=Hi, I'd like to enquire about catering"
            target="_blank"
            className="inline-block bg-white text-orange-600 font-semibold px-10 py-4 rounded-full hover:bg-orange-50 transition"
          >
            Request Quote
          </a>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-zinc-500 rounded-[2rem] p-10 md:p-16 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hungry?</h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-xl mx-auto">
            Freshly prepared meals, delivered with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-7 rounded-full text-lg w-full sm:w-auto">
                Browse Menu
              </Button>
            </Link>
            <a
              href="https://wa.me/2348088740343?text=Hi, I'd like to place an order"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-10 py-4 rounded-full hover:bg-white/10 transition w-full sm:w-auto"
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