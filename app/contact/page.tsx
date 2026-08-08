'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Zap, 
  Camera, 
  MessageCircle,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you deliver?",
      a: "Yes. We deliver across selected areas in Lagos including Lekki, Ajah, Victoria Island, Ikoyi, Yaba and Surulere."
    },
    {
      q: "Can I place party orders?",
      a: "Absolutely. We specialise in party packs and large orders. We recommend ordering at least 24 hours in advance for events."
    },
    {
      q: "How early should I order?",
      a: "For regular orders, same-day delivery is often possible. For parties and large packs, please order at least 24 hours ahead."
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c_0.7px,transparent_1px)] bg-size:[45px_45px] opacity-5 -z-10" />

      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden rounded-b-[3rem] bg-linear-to-br from-orange-600 via-amber-800 to-amber-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
        
        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-5 py-2 rounded-full text-sm mb-6"
          >
            📞 We'd Love To Hear From You
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-100 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Whether you're planning a party, placing a quick order,
            or simply have a question, we're always ready to help.
          </motion.p>
        </div>
      </div>

      {/* ================= CONTACT CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white shadow-lg border p-7 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-5">
              <Phone size={22} />
            </div>
            <h3 className="font-semibold text-lg mb-1">Call or WhatsApp</h3>
            <p className="text-2xl font-bold text-green-600 mb-1">+2348088740343</p>
            <p className="text-sm text-gray-500">Available 8am – 10pm daily</p>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-white shadow-lg border p-7 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 mb-5">
              <Zap size={22} />
            </div>
            <h3 className="font-semibold text-lg mb-1">Average WhatsApp Reply</h3>
            <p className="text-2xl font-bold text-amber-600 mb-1">Within 5 minutes</p>
            <p className="text-sm text-gray-500">We respond quickly during business hours</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-white shadow-lg border p-7 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-5">
              <MapPin size={22} />
            </div>
            <h3 className="font-semibold text-lg mb-1">Location</h3>
            <p className="text-xl font-medium mb-1">Lagos, Nigeria</p>
            <p className="text-sm text-gray-500">We deliver to selected areas across the city</p>
          </motion.div>

          {/* Hours + Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white shadow-lg border p-7 hover:-translate-y-1 transition"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-5">
              <Clock size={22} />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-600 font-medium text-sm">Open Now</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
            <p className="text-gray-700">Monday – Sunday</p>
            <p className="text-sm text-gray-500">8:00 AM – 10:00 PM</p>
          </motion.div>
        </div>
      </section>

      {/* ================= DELIVERY AREAS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white shadow-lg border p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-orange-600" size={24} />
            <h2 className="text-2xl font-bold">Delivery Areas</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Lekki", "Ajah", "Victoria Island", "Ikoyi", "Yaba", "Surulere"].map((area) => (
              <div 
                key={area}
                className="bg-orange-50 text-orange-800 rounded-xl py-3 px-4 text-center text-sm font-medium"
              >
                {area}
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-5">
            Not sure if we deliver to your area? Just send us a WhatsApp message.
          </p>
        </motion.div>
      </section>

      {/* ================= MAP ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-lg border h-80 md:h-96 bg-gray-100"
        >
          {/* Replace with real Google Maps embed later */}
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-3 opacity-50" />
              <p>Google Map will appear here</p>
              <p className="text-sm mt-1">Paste your embed URL when ready</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SOCIAL ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          Connect With Us
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "WhatsApp", icon: <MessageCircle size={22} />, color: "bg-green-500", href: "https://wa.me/2348088740343" },
            { name: "Instagram", icon: <Camera size={22} />, color: "bg-pink-500", href: "https://instagram.com/yourhandle" },
            { name: "Call Us", icon: <Phone size={22} />, color: "bg-orange-500", href: "tel:+2348088740343" },
            { name: "Menu", icon: <MessageCircle size={22} />, color: "bg-amber-500", href: "/menu" },
          ].map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`${social.color} text-white rounded-2xl p-5 flex flex-col items-center gap-2 hover:scale-105 transition shadow-md`}
            >
              {social.icon}
              <span className="text-sm font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium"
              >
                {faq.q}
                <ChevronDown 
                  size={18} 
                  className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`} 
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TRUST BADGES ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Freshly Prepared Daily",
            "Hygienic Kitchen",
            "Fast Delivery",
            "Secure Ordering",
          ].map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 bg-orange-50 text-orange-800 rounded-xl py-3 px-4 text-sm font-medium"
            >
              <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
              {badge}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-orange-600 to-amber-500 rounded-4xl p-10 md:p-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-orange-50 text-lg mb-8 max-w-lg mx-auto">
            Fresh meals. Fast delivery. Finger-licking taste.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348088740343?text=Hi, I'd like to place an order"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
            <Link href="/menu">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full"
              >
                Browse Menu
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}