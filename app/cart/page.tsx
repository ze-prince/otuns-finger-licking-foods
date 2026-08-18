'use client';

import { Button } from '@/components/ui/button';
import { Plus, Minus, Trash2 } from 'lucide-react';
import Link from 'next/link';
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

  const sendToWhatsApp = () => {
    if (cart.length === 0) return;

    let message = `Hello Otuns Finger Licking Foods!\n\nMy Order:\n\n`;

    cart.forEach(({ item, quantity }) => {
      message += `• ${item.name} ×${quantity} - ₦${(item.price * quantity).toLocaleString()}\n`;
    });

    message += `\nTotal: ₦${totalPrice.toLocaleString()}\n\nCustomer Details:\nName: [Enter your name]\nPhone Number: [Enter your phone number]\nDelivery Address: [Enter your full address]\n\nThank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348088740343?text=${encodedMessage}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Your Cart is Empty
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Looks like you haven’t added anything yet.
        </p>
        <Link href="/menu">
          <Button size="lg" className="w-full sm:w-auto">
            Browse Menu
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-28 md:pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">Your Cart</h1>
        <Button
          variant="ghost"
          onClick={clearCart}
          className="text-red-500 self-start sm:self-auto"
        >
          Clear Cart
        </Button>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cart.map(({ item, quantity }) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 border-b pb-6"
          >
            {/* Item Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg sm:text-xl">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Controls Row */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => decreaseQuantity(item.id)}
                  className="h-10 w-10"
                >
                  <Minus size={16} />
                </Button>
                <span className="font-semibold w-8 text-center text-lg">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => increaseQuantity(item.id)}
                  className="h-10 w-10"
                >
                  <Plus size={16} />
                </Button>
              </div>

              {/* Price + Remove */}
              <div className="flex items-center gap-4">
                <div className="font-bold text-lg sm:text-xl">
                  ₦{(item.price * quantity).toLocaleString()}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 h-10 w-10"
                >
                  <Trash2 size={20} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total + Checkout */}
      <div className="mt-10 sm:mt-12 pt-8 border-t">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg sm:text-xl font-medium text-gray-600">Total</span>
          <p className="text-3xl sm:text-4xl font-bold">
            ₦{totalPrice.toLocaleString()}
          </p>
        </div>

        <Button
          onClick={sendToWhatsApp}
          className="w-full bg-green-600 hover:bg-green-700 text-lg py-6 sm:py-8 text-white rounded-xl"
        >
          Send Order to WhatsApp
        </Button>
      </div>
    </div>
  );
}