'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const galleryImages = [
  // Small Chops
  {
    id: 1,
    src: '/menu/mini.jpg',
    alt: 'Mini Bites Pack',
    category: 'Small Chops',
  },
  {
    id: 2,
    src: '/menu/chop.jpg',
    alt: 'Chop Lite Pack',
    category: 'Small Chops',
  },
  {
    id: 3,
    src: '/menu/taste.jpg',
    alt: 'Taste Teasers Pack',
    category: 'Small Chops',
  },
  {
    id: 4,
    src: '/menu/snacker.jpg',
    alt: "Snacker's Delight Pack",
    category: 'Small Chops',
  },
  {
    id: 5,
    src: '/menu/quick.jpg',
    alt: 'Quick Nibble Pack',
    category: 'Small Chops',
  },
  {
    id: 6,
    src: '/menu/golden.jpg',
    alt: 'Golden Morsels Pack',
    category: 'Small Chops',
  },
  {
    id: 7,
    src: '/menu/elegant.jpg',
    alt: 'Elegant Finger Treats Pack',
    category: 'Small Chops',
  },
  {
    id: 8,
    src: '/menu/royal.jpg',
    alt: 'Royal Feast Pack',
    category: 'Small Chops',
  },
  {
    id: 9,
    src: '/menu/family.jpg',
    alt: 'Family Feast Pack',
    category: 'Small Chops',
  },

  // Golden Linking Fries
  {
    id: 10,
    src: '/menu/gourmet.jpg',
    alt: 'The Gourmet Bites Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 11,
    src: '/menu/grazing-pack.png',
    alt: 'Grazing Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 12,
    src: '/menu/exquisite-nibbles.png',
    alt: 'Exquisite Nibbles Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 13,
    src: '/menu/petite-delighs.png',
    alt: 'Petite Delights Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 14,
    src: '/menu/bite-sized.png',
    alt: 'Bite-Size D Bliss Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 15,
    src: '/menu/togetherness.png',
    alt: 'Togetherness Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 16,
    src: '/menu/platter.png',
    alt: 'The Platter Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 17,
    src: '/menu/luxury.png',
    alt: 'Luxury Chop Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 18,
    src: '/menu/essentials.png',
    alt: 'Essentials Pack',
    category: 'Golden Linking Fries',
  },
  {
    id: 19,
    src: '/menu/occassions.png',
    alt: "Occasion's Delight Pack",
    category: 'Golden Linking Fries',
  },
  {
    id: 20,
    src: '/menu/gather.png',
    alt: 'Gather & Munch Pack',
    category: 'Golden Linking Fries',
  },

  // Themed Packages
  {
    id: 21,
    src: '/menu/big-bites.png',
    alt: 'Big Bites Bundle Pack',
    category: 'Themed Packages',
  },
  {
    id: 22,
    src: '/menu/group-nibble.png',
    alt: 'Group Nibble Pack',
    category: 'Themed Packages',
  },
  {
    id: 23,
    src: '/menu/share.png',
    alt: 'Share & Savor Pack',
    category: 'Themed Packages',
  },
];

const categories = [
  'All',
  'Small Chops',
  'Golden Linking Fries',
  'Themed Packages',
];

const blurDataURL =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const selectedIndex = selectedImage
    ? filteredImages.findIndex(
        (image) => image.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (selectedIndex <= 0) return;

    setSelectedImage(filteredImages[selectedIndex - 1]);
  };

  const showNext = () => {
    if (
      selectedIndex === -1 ||
      selectedIndex >= filteredImages.length - 1
    )
      return;

    setSelectedImage(filteredImages[selectedIndex + 1]);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffaf6]">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]">
        <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500 blur-3xl" />
        <div className="absolute right-0 top-[40%] h-96 w-96 rounded-full bg-orange-400 blur-3xl" />
      </div>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-zinc-950 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-orange-800 to-zinc-950" />

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center md:py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-md">
              <Camera size={15} className="text-blue-300" />
              Fresh From Our Kitchen
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl"
          >
            A Taste Before
            <span className="block text-orange-300">
              You Order
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-orange-100/90 sm:text-lg"
          >
            Take a look at some of our freshly prepared favourites,
            made with quality ingredients and a whole lot of flavour.
          </motion.p>

        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-600">
            Our Gallery
          </p>

          <h2 className="text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">
            Made Fresh. Served Beautifully.
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600 md:text-lg">
            From crispy small chops to generous sharing platters,
            every Otuns creation is prepared to look as good as it
            tastes.
          </p>
        </motion.div>

      </section>

      {/* ================= FILTERS ================= */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide md:justify-center">

          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20'
                    : 'bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>

      </section>

      {/* ================= GALLERY ================= */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">

        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >

          <AnimatePresence mode="popLayout">

            {filteredImages.map((image, index) => (

              <motion.article
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.03,
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >

                <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-black/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      priority={index < 3}
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-orange-700 shadow-sm backdrop-blur">
                      {image.category}
                    </span>

                    {/* Bottom Text */}
                    <div className="absolute inset-x-0 bottom-0 p-5">

                      <h3 className="text-lg font-bold text-white">
                        {image.alt}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
                        <span>View image</span>
                        <span className="h-1 w-1 rounded-full bg-orange-300" />
                        <span>Tap to enlarge</span>
                      </div>

                    </div>

                  </div>

                </div>

              </motion.article>

            ))}

          </AnimatePresence>

        </motion.div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center text-zinc-500">
            No images in this category yet.
          </div>
        )}

      </section>

      {/* ================= STATS ================= */}

      <section className="mx-auto max-w-6xl px-6 pb-20">

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            {
              emoji: '🍗',
              value: '1000+',
              label: 'Orders Served',
            },
            {
              emoji: '⭐',
              value: '4.9/5',
              label: 'Average Rating',
            },
            {
              emoji: '🔥',
              value: 'Daily',
              label: 'Freshly Prepared',
            },
            {
              emoji: '🚚',
              value: 'Fast',
              label: 'Delivery',
            },
          ].map((stat, index) => (

            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-white p-5 text-center ring-1 ring-zinc-200/70"
            >
              <div className="mb-2 text-2xl">
                {stat.emoji}
              </div>

              <div className="text-xl font-black text-orange-600">
                {stat.value}
              </div>

              <div className="mt-1 text-xs font-medium text-zinc-500">
                {stat.label}
              </div>
            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= INSTAGRAM ================= */}

      <section className="mx-auto max-w-3xl px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-orange-100 bg-white p-8 text-center shadow-sm md:p-10"
        >

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 text-white shadow-lg">
            <Camera size={25} />
          </div>

          <h2 className="text-2xl font-black text-zinc-900">
            Follow Our Journey
          </h2>

          <p className="mx-auto mt-3 max-w-md text-zinc-600">
            See more of our creations, behind-the-scenes moments
            and happy customers on Instagram.
          </p>

          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Camera size={18} />
            @otunsfingerlickingfoods
          </a>

        </motion.div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="mx-auto max-w-6xl px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-600 to-orange-800 px-6 py-14 text-center text-white shadow-2xl md:px-12"
        >

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-orange-200">
              Ready to eat?
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Loved What You Saw?
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-orange-100">
              Order freshly prepared meals today and discover
              what makes Otuns Finger Licking Foods special.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link href="/menu">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white px-8 py-6 text-lg font-bold text-orange-600 hover:bg-orange-50 sm:w-auto"
                >
                  Browse Menu
                </Button>
              </Link>

              <a
                href="https://wa.me/2348088740343?text=Hi%2C%20I'd%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-3 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={20} />
                Order on WhatsApp
              </a>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImage(null)}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              aria-label="Close image"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-8"
                aria-label="Previous image"
              >
                <ChevronLeft size={25} />
              </button>
            )}

            {/* Next */}
            {selectedIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-8"
                aria-label="Next image"
              >
                <ChevronRight size={25} />
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative h-[75vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="95vw"
                quality={95}
                priority
              />

            </motion.div>

            {/* Caption */}
            <div className="absolute bottom-6 left-0 right-0 text-center">

              <p className="text-lg font-bold text-white">
                {selectedImage.alt}
              </p>

              <p className="mt-1 text-sm text-white/60">
                {selectedIndex + 1} of {filteredImages.length}
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}