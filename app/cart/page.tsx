'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Plus,
  Minus,
  Trash2,
  MapPin,
  Loader2,
  ShoppingBag,
  ArrowLeft,
  MessageCircle,
  User,
  Phone,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const totalItems = useMemo(() => {
    return cart.reduce((total, { quantity }) => total + quantity, 0);
  }, [cart]);

  // Load saved customer details
  useEffect(() => {
    const saved = localStorage.getItem('otunsCustomerDetails');

    if (saved) {
      try {
        const parsed = JSON.parse(saved);

        setName(parsed.name || '');
        setPhone(parsed.phone || '');
        setAddress(parsed.address || '');
        setNotes(parsed.notes || '');
      } catch (error) {
        console.error('Failed to load saved customer details:', error);
      }
    }

    setHasMounted(true);
  }, []);

  // Save customer details after initial load
  useEffect(() => {
    if (!hasMounted) return;

    const details = {
      name,
      phone,
      address,
      notes,
    };

    localStorage.setItem(
      'otunsCustomerDetails',
      JSON.stringify(details)
    );
  }, [name, phone, address, notes, hasMounted]);

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      address: '',
    };

    if (!name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    }

    if (!address.trim()) {
      newErrors.address = 'Please enter your delivery address.';
    }

    setErrors(newErrors);

    return !newErrors.name &&
      !newErrors.phone &&
      !newErrors.address;
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    setIsGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                'Accept-Language': 'en',
              },
            }
          );

          if (!response.ok) {
            throw new Error('Failed to fetch location');
          }

          const data = await response.json();

          if (data?.display_name) {
            setAddress(data.display_name);

            setErrors((prev) => ({
              ...prev,
              address: '',
            }));
          } else {
            alert(
              'Could not get a readable address. Please enter it manually.'
            );
          }
        } catch (error) {
          console.error('Location error:', error);

          alert(
            'Failed to get your address. Please enter it manually.'
          );
        } finally {
          setIsGettingLocation(false);
        }
      },
      (error) => {
        setIsGettingLocation(false);

        if (error.code === error.PERMISSION_DENIED) {
          alert(
            'Location permission was denied. Please allow location access or enter your address manually.'
          );
        } else {
          alert(
            'Unable to get your location. Please enter your address manually.'
          );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    if (!validateForm()) {
      return;
    }

    let message =
      `Hello Otuns Finger Licking Foods! 👋\n\n` +
      `🛒 *MY ORDER*\n\n`;

    cart.forEach(({ item, quantity }) => {
      const itemTotal = item.price * quantity;

      message +=
        `• ${item.name}\n` +
        `  Quantity: ${quantity}\n` +
        `  Subtotal: ₦${itemTotal.toLocaleString()}\n\n`;
    });

    message +=
      `━━━━━━━━━━━━━━━━\n` +
      `💰 *TOTAL: ₦${totalPrice.toLocaleString()}*\n` +
      `━━━━━━━━━━━━━━━━\n\n`;

    message +=
      `📦 *DELIVERY DETAILS*\n\n` +
      `👤 Name: ${name}\n` +
      `📞 Phone: ${phone}\n` +
      `📍 Address: ${address}\n`;

    if (notes.trim()) {
      message += `📝 Notes: ${notes}\n`;
    }

    message += `\nThank you! 😊`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/2348088740343?text=${encodedMessage}`,
      '_blank'
    );
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
            <ShoppingBag
              size={42}
              className="text-orange-600"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-3">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 leading-relaxed mb-8">
            Looks like you haven't added any delicious food yet.
            Explore our menu and find something you'll love.
          </p>

          <Link href="/menu">
            <Button
              size="lg"
              className="rounded-full bg-orange-600 hover:bg-orange-700 px-8"
            >
              <ShoppingBag className="mr-2" size={18} />
              Browse Our Menu
            </Button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfb]">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#ea580c_0.7px,transparent_0.7px)] bg-[size:45px_45px] opacity-[0.035]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-32 lg:pb-12">

        {/* Back button */}
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-orange-600 transition mb-6"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-full px-4 py-2 mb-3">
              <ShoppingBag size={15} />
              {totalItems} {totalItems === 1 ? 'Item' : 'Items'} in your cart
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900">
              Your Cart
            </h1>

            <p className="text-gray-500 mt-2">
              Review your order before checkout.
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={clearCart}
            className="text-red-500 hover:text-red-600 hover:bg-red-50 self-start sm:self-auto"
          >
            <Trash2 size={17} className="mr-2" />
            Clear Cart
          </Button>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Cart Items */}
            <section>
              <h2 className="text-xl font-bold mb-5">
                Your Order
              </h2>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {cart.map(({ item, quantity }) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="group bg-white border border-zinc-100 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">

                        {/* Product Image */}
                        {item.image && (
                          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-2xl bg-orange-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="120px"
                            />
                          </div>
                        )}

                        <div className="flex-1 min-w-0">

                          <div className="flex justify-between gap-3">
                            <div>
                              <h3 className="font-bold text-base sm:text-lg text-zinc-900">
                                {item.name}
                              </h3>

                              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                {item.description}
                              </p>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={18} />
                            </Button>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-3 mt-5">

                            {/* Quantity */}
                            <div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-xl p-1">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white hover:shadow-sm transition"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>

                              <span className="w-9 text-center font-bold">
                                {quantity}
                              </span>

                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center hover:bg-orange-700 transition"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <p className="text-xs text-gray-400">
                                ₦{item.price.toLocaleString()} each
                              </p>

                              <p className="font-black text-lg text-zinc-900">
                                ₦{(item.price * quantity).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>

            {/* Delivery Details */}
            <section className="bg-white rounded-3xl border border-orange-100 shadow-sm overflow-hidden">

              <div className="bg-orange-50/70 px-5 sm:px-7 py-5 border-b border-orange-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-orange-600 text-white flex items-center justify-center">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">
                      Delivery Details
                    </h2>
                    <p className="text-sm text-gray-500">
                      Tell us where to deliver your order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 space-y-5">

                {/* Name */}
                <div>
                  <label className="text-sm font-semibold text-zinc-700 flex items-center gap-2 mb-2">
                    <User size={15} className="text-orange-600" />
                    Full Name
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        name: '',
                      }));
                    }}
                    placeholder="Enter your full name"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                      errors.name
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-sm font-semibold text-zinc-700 flex items-center gap-2 mb-2">
                    <Phone size={15} className="text-orange-600" />
                    Phone Number
                    <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        phone: '',
                      }));
                    }}
                    placeholder="e.g. 08012345678"
                    className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
                      errors.phone
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <label className="text-sm font-semibold text-zinc-700 flex items-center gap-2">
                      <MapPin size={15} className="text-orange-600" />
                      Delivery Address
                      <span className="text-red-500">*</span>
                    </label>

                    <button
                      type="button"
                      onClick={getCurrentLocation}
                      disabled={isGettingLocation}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 disabled:opacity-60 transition"
                    >
                      {isGettingLocation ? (
                        <>
                          <Loader2
                            size={15}
                            className="animate-spin"
                          />
                          Getting location...
                        </>
                      ) : (
                        <>
                          <MapPin size={15} />
                          Use current location
                        </>
                      )}
                    </button>
                  </div>

                  <textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        address: '',
                      }));
                    }}
                    placeholder="House number, street, area and nearest landmark..."
                    rows={4}
                    className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
                      errors.address
                        ? 'border-red-400 ring-2 ring-red-100'
                        : 'border-zinc-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100'
                    }`}
                  />

                  {errors.address && (
                    <p className="text-red-500 text-xs mt-2">
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div>
                  <label className="text-sm font-semibold text-zinc-700 flex items-center gap-2 mb-2">
                    <FileText size={15} className="text-orange-600" />
                    Additional Notes
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Special requests, landmarks, delivery instructions..."
                    rows={3}
                    className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-100"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-6 h-fit">
            <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl">

              <h2 className="text-xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 pb-5 border-b border-white/10">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Subtotal</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>

                <div className="flex justify-between text-sm text-zinc-400">
                  <span>Delivery</span>
                  <span>Confirmed via WhatsApp</span>
                </div>
              </div>

              <div className="flex justify-between items-end py-6">
                <span className="text-zinc-300">
                  Total
                </span>

                <span className="text-3xl font-black text-white">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </div>

              <Button
                onClick={sendToWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-2xl py-7 text-base font-bold shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                Order on WhatsApp
              </Button>

              <p className="text-center text-xs text-zinc-400 mt-4 leading-relaxed">
                Your order details will be sent directly to us on WhatsApp.
              </p>

              <Link
                href="/menu"
                className="flex items-center justify-center gap-2 text-sm text-orange-400 hover:text-orange-300 mt-5 font-medium"
              >
                Add more items
                <ChevronRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-zinc-200 p-3 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">
              Total
            </p>
            <p className="font-black text-lg">
              ₦{totalPrice.toLocaleString()}
            </p>
          </div>

          <Button
            onClick={sendToWhatsApp}
            className="flex-1 bg-green-600 hover:bg-green-700 rounded-xl py-6"
          >
            <MessageCircle size={18} className="mr-2" />
            Checkout
          </Button>
        </div>
      </div>
    </main>
  );
}