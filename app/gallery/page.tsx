'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Camera, MessageCircle } from 'lucide-react';

const galleryImages = [
  // Small Chops
  { id: 1, src: '/menu/mini-bites.png', alt: 'Mini Bites Pack', category: 'Small Chops' },
  { id: 2, src: '/menu/otuns-poster.png', alt: 'Chop Lite Pack', category: 'Small Chops' },
  { id: 3, src: '/menu/taste-teaser.png', alt: 'Taste Teasers Pack', category: 'Small Chops' },
  { id: 4, src: '/menu/snacker-delight.png', alt: "Snacker's Delight Pack", category: 'Small Chops' },
  { id: 5, src: '/menu/quick-nibble.png', alt: 'Quick Nibble Pack', category: 'Small Chops' },
  { id: 6, src: '/menu/golden-morsel.png', alt: 'Golden Morsels Pack', category: 'Small Chops' },
  { id: 7, src: '/menu/elegant-finger.png', alt: 'Elegant Finger Treats Pack', category: 'Small Chops' },
  { id: 8, src: '/menu/royal-feast.png', alt: 'Royal Feast Pack', category: 'Small Chops' },
  { id: 9, src: '/menu/family-feast.png', alt: 'Family Feast Pack', category: 'Small Chops' },

  // Golden Linking Fries
  { id: 10, src: '/menu/gourmet-bite.png', alt: 'The Gourmet Bites Pack', category: 'Golden Linking Fries' },
  { id: 11, src: '/menu/grazing-pack.png', alt: 'Grazing Pack', category: 'Golden Linking Fries' },
  { id: 12, src: '/menu/exquisite-nibbles.png', alt: 'Exquisite Nibbles Pack', category: 'Golden Linking Fries' },
  { id: 13, src: '/menu/petite-delighs.png', alt: 'Petite Delights Pack', category: 'Golden Linking Fries' },
  { id: 14, src: '/menu/bite-sized.png', alt: 'Bite-Size D Bliss Pack', category: 'Golden Linking Fries' },
  { id: 15, src: '/menu/togetherness.png', alt: 'Togetherness Pack', category: 'Golden Linking Fries' },
  { id: 16, src: '/menu/platter.png', alt: 'The Platter Pack', category: 'Golden Linking Fries' },
  { id: 17, src: '/menu/luxury.png', alt: 'Luxury Chop Pack', category: 'Golden Linking Fries' },
  { id: 18, src: '/menu/essentials.png', alt: 'Essentials Pack', category: 'Golden Linking Fries' },
  { id: 19, src: '/menu/occassions.png', alt: "Occasion's Delight Pack", category: 'Golden Linking Fries' },
  { id: 20, src: '/menu/gather.png', alt: 'Gather & Munch Pack', category: 'Golden Linking Fries' },

  // Themed Packages
  { id: 21, src: '/menu/big-bites.png', alt: 'Big Bites Bundle Pack', category: 'Themed Packages' },
  { id: 22, src: '/menu/group-nibble.png', alt: 'Group Nibble Pack', category: 'Themed Packages' },
  { id: 23, src: '/menu/share.png', alt: 'Share & Savor Pack', category: 'Themed Packages' },
];

const categories = ['All', 'Small Chops', 'Golden Linking Fries', 'Themed Packages'];

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c_0.7px,transparent_0.7px)] bg-size-[35px_35px] opacity-5 -z-10" />

      {/* ================= HERO ================= */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-900 via-orange-700 to-zinc-700 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full bg-white/15 backdrop-blur px-4 py-2 text-sm font-medium mb-6"
          >
            📸 Fresh From Our Kitchen
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            A Taste Before You Order
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto"
          >
            Every dish is prepared fresh with premium ingredients, generous portions,
            and the rich flavours that keep our customers coming back.
          </motion.p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <section className="max-w-4xl mx-auto px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Freshly Prepared Daily</h2>
          <p className="text-gray-600 text-lg">
            From crispy small chops to rich Asun and party platters,
            every meal is carefully prepared to delight your taste buds.
          </p>
        </motion.div>
      </section>

      {/* ================= CATEGORY FILTERS ================= */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-orange-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ================= GALLERY GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-white"
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    priority={index < 3}
                  />
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                  {image.category}
                </span>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-lg">{image.alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No images in this category yet.
          </div>
        )}
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { emoji: '🍗', value: '1000+', label: 'Orders Served' },
            { emoji: '⭐', value: '4.9/5', label: 'Average Rating' },
            { emoji: '🔥', value: 'Daily', label: 'Freshly Prepared' },
            { emoji: '🚚', value: 'Fast', label: 'Delivery' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border shadow-sm p-6 text-center"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-2xl font-bold text-orange-600">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= INSTAGRAM CTA ================= */}
      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border shadow-lg p-10"
        >
          <Camera size={40} className="mx-auto text-pink-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Follow Our Journey</h2>
          <p className="text-gray-600 mb-6">
            See more of our daily creations and happy customers on Instagram
          </p>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
          >
            <Camera size={18} />
            @otunsfingerlickingfoods
          </a>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-600 to-zinc-500 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved what you saw?</h2>
          <p className="text-orange-50 text-lg mb-8 max-w-lg mx-auto">
            Order freshly prepared meals today and taste the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-full text-lg"
              >
                Browse Menu
              </Button>
            </Link>
            <a
              href="https://wa.me/2348088740343?text=Hi, I'd like to place an order"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-orange-400 transition"
            >
              ×
            </button>

            <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
                priority
              />
            </div>

            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}