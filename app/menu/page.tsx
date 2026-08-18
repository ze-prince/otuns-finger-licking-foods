'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart, MenuItem } from '@/context/CartContext';

const menuItems: (MenuItem & { image: string })[] = [
  // ======================
  // SMALL CHOPS PACKS
  // ======================
  { 
    id: 1, 
    name: "MINI BITES PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken wing", 
    price: 4500, 
    category: "Small Chops",
    image: "/menu/mini.jpg"
  },
  { 
    id: 2, 
    name: "CHOP LITE PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Kebab", 
    price: 5000, 
    category: "Small Chops",
    image: "/menu/chop.jpg"
  },
  { 
    id: 3, 
    name: "TASTE TEASERS PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken drum stick", 
    price: 5500, 
    category: "Small Chops",
    image: "/menu/taste.jpg"
  },
  { 
    id: 4, 
    name: "SNACKER'S DELIGHT PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken wing, 1 Stick sausage", 
    price: 6500, 
    category: "Small Chops",
    image: "/menu/snacker.jpg"
  },
  { 
    id: 5, 
    name: "QUICK NIBBLE PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken, 1 Stick sausage, 1 Puff prawns", 
    price: 7500, 
    category: "Small Chops",
    image: "/menu/quick.jpg"
  },
  { 
    id: 6, 
    name: "GOLDEN MORSELS PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken, 1 Puff prawns, 1 Peppered gizzard", 
    price: 8500, 
    category: "Small Chops",
    image: "/menu/golden.jpg"
  },
  { 
    id: 7, 
    name: "ELEGANT FINGER TREATS PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken, 1 Peppered snail, 1 Puff prawns, 1 Peppered gizzard", 
    price: 9500, 
    category: "Small Chops",
    image: "/menu/elegant.jpg"
  },
  { 
    id: 8, 
    name: "ROYAL FEAST PACK", 
    description: "2 Samosa, 2 Spring roll, 8 Mosa, 12 Puff puff, 2 Chicken, 2 Peppered snail, 2 Puff prawns, 2 Peppered gizzard", 
    price: 18500, 
    category: "Small Chops",
    image: "/menu/royal.jpg"
  },
  { 
    id: 9, 
    name: "FAMILY FEAST PACK", 
    description: "4 Samosa, 4 Spring roll, 16 Mosa, 24 Puff puff, 4 Chicken, 4 Peppered snail, 4 Puff prawns, 4 Peppered gizzard", 
    price: 32000, 
    category: "Small Chops",
    image: "/menu/family.jpg"
  },

  // ======================
  // OTUNS GOLDEN LINKING FRIES
  // ======================
  { 
    id: 10, 
    name: "THE GOURMET BITES PACK", 
    description: "4 Fried Yam, 4 Sweet Potatoes, 4 Slices of Fried Plantain, 1 Peppered Chicken, Peppered Sauce", 
    price: 7000, 
    category: "Golden Linking Fries",
    image: "/menu/gourmet.jfif"
  },
  { 
    id: 11, 
    name: "GRAZING PACK", 
    description: "5 Fried Yam, 6 Sweet Potatoes, 4 Slices of Fried Plantain, Peppered Sauce", 
    price: 5500, 
    category: "Golden Linking Fries",
    image: "/menu/grazing.jfif"
  },
  { 
    id: 12, 
    name: "EXQUISITE NIBBLES PACK", 
    description: "5 Fried Yam, 6 Sweet Potatoes, 4 Slices of Plantain, Peppered Sauce, 1 Ponmo, 1 Boiled Egg", 
    price: 7500, 
    category: "Golden Linking Fries",
    image: "/menu/exquisite.jfif"
  },
  { 
    id: 13, 
    name: "PETITE DELIGHTS PACK", 
    description: "5 Fried Yam, 6 Sweet Potatoes, 4 Slices of Plantain, 1 Sausage, Peppered Sauce", 
    price: 7000, 
    category: "Golden Linking Fries",
    image: "/menu/petite.jfif"
  },
  { 
    id: 14, 
    name: "BITE-SIZE D BLISS PACK", 
    description: "5 Fried Yam, 6 Sweet Potatoes, 4 Slices of Plantain, Peppered Sauce, 1 Boiled Egg, 1 Peppered Chicken, 1 Sausage", 
    price: 9000, 
    category: "Golden Linking Fries",
    image: "/menu/bite.jfif"
  },
  { 
    id: 15, 
    name: "TOGETHERNESS PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Fried Plantain, 2 Peppered Chicken, Peppered Sauce", 
    price: 14000, 
    category: "Golden Linking Fries",
    image: "/menu/together.jfif"
  },
  { 
    id: 16, 
    name: "THE PLATTER PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Fried Plantain, Peppered Sauce", 
    price: 11000, 
    category: "Golden Linking Fries",
    image: "/menu/platter.jfif"
  },
  { 
    id: 17, 
    name: "LUXURY CHOP PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Plantain, Peppered Sauce, 2 Kebab, 2 Ponmo, 2 Boiled Eggs", 
    price: 16000, 
    category: "Golden Linking Fries",
    image: "/menu/luxury.jfif"
  },
  { 
    id: 18, 
    name: "ESSENTIALS PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Plantain, 2 Sausage, 2 Kebab, Peppered Sauce", 
    price: 14500, 
    category: "Golden Linking Fries",
    image: "/menu/essentials.jfif"
  },
  { 
    id: 19, 
    name: "OCCASION'S DELIGHT PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Plantain, Peppered Sauce, 2 Boiled Egg, 2 Peppered Chicken, 2 Sausage", 
    price: 16500, 
    category: "Golden Linking Fries",
    image: "/menu/occassion.jfif"
  },
  { 
    id: 20, 
    name: "GATHER & MUNCH PACK", 
    description: "10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Plantain, Peppered Sauce, 2 Boiled Egg, 2 Peppered Chicken, 2 Sausage, 2 Ponmo", 
    price: 18000, 
    category: "Golden Linking Fries",
    image: "/menu/gather.jfif"
  },

  // ======================
  // OTUNS THEMED PACKAGES
  // ======================
  { 
    id: 21, 
    name: "BIG BITES BUNDLE PACK", 
    description: "1 Samosa, 1 Spring roll, 4 Mosa, 6 Puff puff, 1 Chicken, 1 Peppered snail, 1 Puff prawn, 1 Peppered gizzard, 1 Stick sausage, 5 Fried Yam, 6 Sweet Potatoes, 4 Slices of Plantain, 1 Ponmo, 1 Boiled Egg, 1 Peppered Chicken, 1 Sausage, 1 Stick of Kebab, Peppered Sauce", 
    price: 22000, 
    category: "Themed Packages",
    image: "/menu/big.jfif"
  },
  { 
    id: 22, 
    name: "GROUP NIBBLE PACK", 
    description: "2 Samosa, 2 Spring roll, 8 Mosa, 12 Puff puff, 2 Chicken, 2 Peppered snail, 2 Puff prawn, 2 Peppered gizzard, 2 Stick sausage, 10 Fried Yam, 12 Sweet Potatoes, 8 Slices of Plantain, 2 Ponmo, 2 Boiled Egg, 2 Peppered Chicken, 2 Sausage, 2 Sticks of Kebab, Peppered Sauce", 
    price: 38000, 
    category: "Themed Packages",
    image: "/menu/group.jfif"
  },
  { 
    id: 23, 
    name: "SHARE & SAVOR PACK", 
    description: "4 Samosa, 4 Spring roll, 16 Mosa, 24 Puff puff, 4 Chicken, 4 Peppered snail, 4 Puff prawn, 4 Peppered gizzard, 4 Stick sausage, 20 Fried Yam, 24 Sweet Potatoes, 16 Slices of Plantain, 4 Ponmo, 4 Boiled Egg, 4 Peppered Chicken, 4 Sausage, 4 Sticks of Kebab, Peppered Sauce", 
    price: 65000, 
    category: "Themed Packages",
    image: "/menu/share.jfif"
  },
];

const categories = ["All", "Small Chops", "Golden Linking Fries", "Themed Packages"];

const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

export default function MenuPage() {
  const { cart, addToCart, decreaseQuantity, increaseQuantity, totalItems } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const menuRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    
    if (menuRef.current) {
      const offset = 160;
      const top = menuRef.current.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
      <h1 className="text-4xl font-bold text-center mb-4">Our Menu</h1>
      <p className="text-center text-gray-600 mb-8">
        Choose from our delicious packs
      </p>

      {/* Sticky Category Navigation */}
      <div className="z-40 bg-white/90 backdrop-blur-md py-4 mb-10 border-b">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div ref={menuRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const cartItem = cart.find(i => i.item.id === item.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <Card key={item.id} className="food-card overflow-hidden group">
              <div className="relative h-60 overflow-hidden bg-orange-50">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  priority={index < 3}
                />
              </div>

              <CardContent className="p-6">
                <Badge className="mb-3">{item.category}</Badge>
                <h3 className="font-semibold text-xl mb-3">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    ₦{item.price.toLocaleString()}
                  </span>

                  {quantity > 0 ? (
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        onClick={() => decreaseQuantity(item.id)}
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
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => addToCart(item)} 
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No items found in this category.
        </div>
      )}

      {/* ================= FLOATING CART BUTTON ================= */}
      {totalItems > 0 && (
        <Link
          href="/cart"
          className="fixed bottom-24 right-6 z-50 flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span> 
          </div>
          <span className="font-medium hidden sm:inline">View Cart</span>
        </Link>
      )}
    </div>
  );
}