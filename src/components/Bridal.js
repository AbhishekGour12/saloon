"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaChevronRight, FaRegGem } from "react-icons/fa";

const bridalPackages = [
  {
    name: "Royal Pre-Bridal Glow",
    price: "₹12,500",
    desc: "A series of rituals designed to prepare your hair, nails, and skin for the big day.",
    features: [
      "Platinum Skin Illuminating Facial",
      "Organic Rose Body Polish & Bath",
      "Signature Hair Spa & Scalp Detox",
      "Milk & Honey Deluxe Mani-Pedi"
    ]
  },
  {
    name: "The Signature Muhurtham Makeup",
    price: "₹18,000",
    desc: "Our highly sought-after HD airbrush package for the main wedding ceremony.",
    features: [
      "HD Airbrush Makeup by Senior Director",
      "Custom Silk Eyelashes & Brow Shaping",
      "Artistic Hair Updo with flower setting",
      "Saree Pleating, Draping & Jewelry Styling"
    ]
  },
  {
    name: "Imperial Empress VIP Package",
    price: "₹25,000",
    desc: "The ultimate royal treatment including trial sessions and full day-of concierge support.",
    features: [
      "Full Makeup Trial Session prior to wedding",
      "Assigned Director Stylist at venue",
      "Full Pre-Bridal Ritual Package included",
      "Post-ceremony Touch-up Kit & Lip shade"
    ]
  }
];

export default function Bridal() {
  return (
    <section id="bridal" className="relative py-28 bg-[#080808]">
      
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#F43F5E]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Banner Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-center bg-gradient-to-br from-[#121212] to-[#0A0A0A] rounded-[40px] p-8 md:p-16 border border-white/[0.03] shadow-2xl relative overflow-hidden">
          
          {/* Subtle design overlays */}
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#C5A880]/5 blur-3xl pointer-events-none" />
          
          {/* Left Side: Editorial Bridal Images */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80"
                    alt="Indian Bride Makeup"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="pt-8"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/5 group">
                  <img
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
                    alt="Bridal Hair bun styling"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Absolute badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-[#C5A880]/20 flex items-center gap-2 whitespace-nowrap shadow-xl">
              <FaRegGem className="text-[#C5A880] animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-[#E5D5C5] font-extrabold">Indore's Premier Bridal Studio</span>
            </div>
          </div>

          {/* Right Side: Text Description & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 flex items-center gap-2">
              <FaHeart className="text-[#F43F5E] text-xs" /> The Bridal Atelier
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
              Designing Your <br />
              <span className="gold-text">Bridal Dreamscape</span>
            </h2>
            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-6">
              Our Bridal Atelier offers an luxurious sanctuary where brides can envision their wedding day looks. We combine master class HD makeup artistry with exquisite hair designing to reflect your natural royalty.
            </p>
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed mb-8">
              Every package includes dedicated schedule management, hydration refreshments during dressing, and private suites for you and your bridesmaids.
            </p>
            <a
              href="#booking"
              className="px-8 py-4 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full flex items-center justify-center gap-2 self-start hover:scale-[1.02] transition-all shadow-xl"
            >
              Book Bridal Consultation <FaChevronRight size={8} />
            </a>
          </div>

        </div>

        {/* Packages Grid */}
        <div className="mt-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mb-2 block">Wedding Tariffs</span>
            <h3 className="font-serif text-3xl font-bold text-white">Bridal & Pre-Wedding Packages</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bridalPackages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border-white/[0.03] hover:border-[#C5A880]/30 transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] shadow-xl"
              >
                <div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                  <span className="font-serif text-3xl font-bold text-[#C5A880] block mb-4">{pkg.price}</span>
                  <p className="text-white/65 text-xs font-light leading-relaxed mb-6">{pkg.desc}</p>
                  
                  {/* Features list */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="#booking"
                  className="w-full text-center text-[10px] uppercase tracking-widest font-extrabold py-3.5 rounded-full bg-white/5 hover:bg-[#C5A880] text-white hover:text-[#080808] transition duration-300 border border-white/5"
                >
                  Reserve Wedding Slot
                </a>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
