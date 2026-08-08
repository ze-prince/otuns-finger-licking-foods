'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Star, 
  Truck, 
  Leaf, 
  ShieldCheck, 
  Heart, 
  Clock,
  UtensilsCrossed
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff7ed,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,237,213,.35))]" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-24 left-10 w-44 h-44 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl" />

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange-600 font-medium mb-3">Our Story</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              About Otuns Finger Licking Foods
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Born from a love for authentic Nigerian flavours, we craft every pack 
              with care — from our signature Asun to our carefully assembled small chops 
              and party packs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/menu">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Explore Menu
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-orange-100 to-orange-200 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-7xl mb-4">🍛</div>
              <p className="text-orange-700 font-medium">Signature Asun Pack</p>
              <p className="text-sm text-orange-600/70 mt-1">Photo coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10+", label: "Signature Packs" },
            { value: "★★★★★", label: "Customer Rating" },
            { value: "Fast", label: "Delivery" },
            { value: "Daily", label: "Fresh Meals" },
          ].map((stat, i) => (
            <div 
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-orange-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Started</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Otuns Finger Licking Foods began in a home kitchen, preparing small chops 
            for family gatherings and close friends. Word of mouth grew quickly, and 
            soon we were packing for birthday parties, office events, and celebrations. 
            Today, we continue that same passion — serving hot, flavourful, carefully 
            prepared meals to families across Lagos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 max-w-2xl mx-auto">
          {[
            { year: "Beginning", text: "Started in a home kitchen" },
            { year: "Growth", text: "Served first regular customers" },
            { year: "Expansion", text: "Introduced party packs & fries platters" },
            { year: "Today", text: "Serving hundreds of happy families" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-orange-600" />
                {i < 3 && <div className="w-0.5 flex-1 bg-orange-200 mt-2" />}
              </div>
              <div className="pb-8">
                <p className="font-semibold text-orange-600 mb-1">{item.year}</p>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What We Stand For
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Leaf className="w-8 h-8 text-emerald-600" />,
              title: "Fresh Ingredients",
              text: "Every ingredient is carefully selected each morning for maximum flavour and quality.",
            },
            {
              icon: <UtensilsCrossed className="w-8 h-8 text-orange-600" />,
              title: "Authentic Recipes",
              text: "Traditional Nigerian flavours prepared with consistent quality and care.",
            },
            {
              icon: <Truck className="w-8 h-8 text-amber-600" />,
              title: "Fast Delivery",
              text: "Hot meals delivered quickly so you can enjoy them at their best.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-sm"
            >
              <div className="mb-5">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <Leaf size={20} />, text: "Fresh Daily" },
            { icon: <ShieldCheck size={20} />, text: "Hygienic Kitchen" },
            { icon: <Truck size={20} />, text: "Reliable Delivery" },
            { icon: <Heart size={20} />, text: "Great Value" },
            { icon: <Star size={20} />, text: "Excellent Taste" },
            { icon: <Clock size={20} />, text: "Quick Preparation" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`flex items-center gap-4 rounded-xl p-5 ${
                i % 2 === 0 
                  ? "bg-orange-50 text-orange-800" 
                  : "bg-white border border-zinc-100"
              }`}
            >
              <div className="text-orange-600">{item.icon}</div>
              <span className="font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FOUNDER QUOTE ================= */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-3xl p-10 text-center shadow-sm"
        >
          <div className="text-orange-500 text-2xl mb-4">★★★★★</div>
          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 italic">
            “Every pack that leaves our kitchen is prepared with care, 
            so you can enjoy the true taste of home.”
          </p>
          <p className="font-semibold text-orange-600">Otuns Kitchen</p>
        </motion.div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-orange-500 text-xl mb-3">⭐⭐⭐⭐⭐</p>
          <p className="text-lg text-gray-700 mb-2">
            Trusted by hundreds of customers
          </p>
          <p className="text-gray-500">
            Birthday Parties • Corporate Events • Family Gatherings
          </p>
        </motion.div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-orange-600 to-amber-500 rounded-4xl p-10 md:p-16 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hungry already?
          </h2>
          <p className="text-lg md:text-xl text-orange-50 mb-8 max-w-xl mx-auto">
            Explore our menu and place your order in just a few taps.
          </p>
          <Link href="/menu">
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-7 rounded-full"
            >
              View Menu
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}