"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaRegHeart, FaEye, FaShoppingBag, FaTimes } from "react-icons/fa";

const products = [
  {
    id: 1,
    brand: "Oribe",
    name: "Gold Lust Nourishing Hair Oil",
    price: "₹4,800",
    image: "https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&w=500&q=80",
    desc: "Restorative hair oil that deeply conditions, strengthens, and infuses hair with editorial shine.",
    size: "100ml"
  },
  {
    id: 2,
    brand: "Kérastase",
    name: "Elixir Ultime Regenerating Mask",
    price: "₹3,500",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80",
    desc: "Premium hydrating mask infused with Marula and Camellia oils to revitalize dull hair fibers.",
    size: "200ml"
  },
  {
    id: 3,
    brand: "L'Oréal Professionnel",
    name: "Metal Detox Protective Oil",
    price: "₹2,900",
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
    desc: "Anti-deposit concentrated oil that protects hair fibers from metal particles post-coloring.",
    size: "50ml"
  },
  {
    id: 4,
    brand: "Dyson Pro",
    name: "Supersonic Professional Styling Nozzle",
    price: "₹6,500",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    desc: "Precision engineered magnetic concentrator styling accessory for professional salon dryers.",
    size: "Standard"
  }
];

const brandLogos = ["ORIBE", "KÉRASTASE", "CHANEL BEAUTY", "L'ORÉAL PRO", "DYSON", "SCHWARZKOPF"];

export default function Products() {
  const [wishlist, setWishlist] = useState({});
  const [quickViewProd, setQuickViewProd] = useState(null);

  const toggleWishlist = (id) => {
    setWishlist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="store" className="relative py-28 bg-[#0a0a0a]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Retail Boutique</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Aesthetic <span className="gold-text">Boutique & Care</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Discover premium hair formulas, scalp treatments, and skin serums used during your salon therapy, available for home care.
          </p>
        </div>

        {/* Dynamic Brand Logo Strip */}
        <div className="border-y border-white/5 py-8 mb-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-white/30 text-xs font-serif tracking-[0.3em]">
            {[...Array(3)].flatMap(() => brandLogos).map((brand, idx) => (
              <span key={idx} className="hover:text-[#C5A880] transition duration-300">
                ✦ {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group glass-card rounded-3xl overflow-hidden border-white/[0.03] hover:border-[#C5A880]/20 transition-all duration-300 flex flex-col justify-between shadow-2xl relative"
            >
              
              {/* Image Section */}
              <div className="relative aspect-[1/1] w-full overflow-hidden bg-black/40">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 select-none"
                />

                {/* Wishlist Heart */}
                <button
                  onClick={() => toggleWishlist(prod.id)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:text-[#C5A880] transition"
                >
                  {wishlist[prod.id] ? (
                    <FaHeart className="text-[#F43F5E]" size={14} />
                  ) : (
                    <FaRegHeart size={14} />
                  )}
                </button>

                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setQuickViewProd(prod)}
                    className="w-10 h-10 rounded-full bg-white text-[#080808] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition"
                    title="Quick View"
                  >
                    <FaEye size={14} />
                  </button>
                  <button
                    onClick={() => alert(`Added ${prod.name} to wishlist!`)}
                    className="w-10 h-10 rounded-full bg-[#C5A880] text-[#080808] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition"
                    title="Request to Order"
                  >
                    <FaShoppingBag size={14} />
                  </button>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                  {prod.brand}
                </span>
                
                <h3 className="font-serif text-lg font-bold text-white mt-1 mb-3 leading-tight flex-grow line-clamp-2">
                  {prod.name}
                </h3>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <span className="font-serif text-xl font-bold text-white">{prod.price}</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/50">{prod.size}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Quick View Modal Box */}
      <AnimatePresence>
        {quickViewProd && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setQuickViewProd(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition text-3xl"
            >
              <FaTimes />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="glass-card w-full max-w-2xl rounded-[32px] overflow-hidden border-[#C5A880]/30 shadow-2xl grid md:grid-cols-12 gap-8 p-6 md:p-8"
            >
              <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-square border border-white/5">
                <img
                  src={quickViewProd.image}
                  alt={quickViewProd.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold">
                  {quickViewProd.brand}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mt-1 mb-4 leading-tight">
                  {quickViewProd.name}
                </h3>
                <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-6">
                  {quickViewProd.desc}
                </p>
                <div className="flex items-center gap-4 text-xs text-white/50 mb-6">
                  <span>Size: {quickViewProd.size}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="text-white/80">Available in Indore Outlets</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-4">
                  <span className="font-serif text-3xl font-bold text-[#C5A880]">
                    {quickViewProd.price}
                  </span>
                  <button
                    onClick={() => {
                      alert(`Purchase request sent to VIP concierge for ${quickViewProd.name}!`);
                      setQuickViewProd(null);
                    }}
                    className="px-6 py-3 bg-[#C5A880] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg"
                  >
                    Request Purchase
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
