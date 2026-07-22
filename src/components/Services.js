"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FaClock, FaCheck, FaCut, FaLeaf, FaGem, 
  FaSpa, FaCrown, FaPaintBrush, FaUserTie, FaSmile 
} from "react-icons/fa";

const categories = [
  { id: "hair", name: "Hair", icon: <FaCut /> },
  { id: "skin", name: "Skin", icon: <FaLeaf /> },
  { id: "nails", name: "Nails", icon: <FaGem /> },
  { id: "spa", name: "Spa", icon: <FaSpa /> },
  { id: "bridal", name: "Bridal", icon: <FaCrown /> },
  { id: "makeup", name: "Makeup", icon: <FaPaintBrush /> },
  { id: "groom", name: "Groom", icon: <FaUserTie /> },
  { id: "kids", name: "Kids", icon: <FaSmile /> },
];

const servicesData = {
  hair: [
    {
      name: "Signature Royal Haircut",
      price: "from ₹1,800",
      duration: "45 Mins",
      description: "Custom consultation, precision designer cut, shampoo, structural blowdry, and style.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Balayage & Colour Couture",
      price: "from ₹7,500",
      duration: "180 Mins",
      description: "French hand-painted highlights tailored to complement your skin tone and hair volume.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Pro-Keratin Infusion Ritual",
      price: "from ₹4,500",
      duration: "120 Mins",
      description: "Intense smoothing treatment that reconstructs hair fibers and seals cuticles for frizz-free gloss.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
  ],
  skin: [
    {
      name: "Lumière Platinum Facial",
      price: "from ₹6,000",
      duration: "75 Mins",
      description: "Advanced anti-aging facial utilizing real platinum peptides to lift and illuminate your skin.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Hydraderm Skin Radiance",
      price: "from ₹5,000",
      duration: "60 Mins",
      description: "Multi-step vacuum exfoliation, hydration replenishment, and deep antioxidant serum infusion.",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Collagen Elastin Lift Therapy",
      price: "from ₹8,500",
      duration: "90 Mins",
      description: "Non-invasive radiofrequency lifting that stimulates deep layer collagen matrix production.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  nails: [
    {
      name: "Sculpted Gel Extensions",
      price: "from ₹2,500",
      duration: "90 Mins",
      description: "Perfectly balanced long-wear gel structures designed and finished with premium high-shine gloss.",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Luxury Chrome Manicure",
      price: "from ₹1,800",
      duration: "60 Mins",
      description: "Nail shaping, cuticle therapy, luxury massage, and custom metallic mirror chrome overlay.",
      image: "https://images.unsplash.com/photo-1610992015732-2449b76e44dc?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Organic Honey Pedicure Spa",
      price: "from ₹2,200",
      duration: "75 Mins",
      description: "Warm organic milk foot bath, real honey scrub, moisturizing mask, and hot stone foot massage.",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  spa: [
    {
      name: "Deep Aromatherapy Ritual",
      price: "from ₹4,000",
      duration: "90 Mins",
      description: "Customized pressure point massage with single-estate essential oils to dissolve muscle tension.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Hot Stone Basalt Massages",
      price: "from ₹4,500",
      duration: "90 Mins",
      description: "Heated volcanic stones placed along energy pathways to induce profound physical calmness.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Royal Moroccan Hammam",
      price: "from ₹6,500",
      duration: "120 Mins",
      description: "Exfoliation with black olive soap, kessa mitt scrub, and a cooling rosewater body mask wash.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  bridal: [
    {
      name: "HD Airbrush Bridal Makeup",
      price: "from ₹18,000",
      duration: "180 Mins",
      description: "Ultra-fine airbrush application, custom premium lashes, hair styling, draping, and setting.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Pre-Bridal Luxury Glow Ritual",
      price: "from ₹12,000",
      duration: "240 Mins",
      description: "Bridal facial, organic body scrub, customized hair spa, deluxe manicure, and pedicure.",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Muhurtham Hair & Draping",
      price: "from ₹3,500",
      duration: "60 Mins",
      description: "Artistic hair bun/braid styling, jasmine flower weaving, and pristine saree pleating/draping.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  makeup: [
    {
      name: "Hollywood Red Carpet Makeover",
      price: "from ₹8,000",
      duration: "90 Mins",
      description: "Editorial-grade contouring, premium lash placement, and professional photo-ready lighting set.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Dewy Celebrity Party Glam",
      price: "from ₹5,500",
      duration: "75 Mins",
      description: "Ultra-hydrated skin base, soft focused eyes, and dynamic lip highlight shading style.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Monochromatic Day Chic",
      price: "from ₹4,000",
      duration: "60 Mins",
      description: "Soft minimal contour, matching blush-eye-lip tones, and a radiant velvet base finish.",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  groom: [
    {
      name: "Executive Haircut & Detox",
      price: "from ₹1,500",
      duration: "60 Mins",
      description: "Grooming consultation, custom scissor cut, warm charcoal mask, head massage, and style.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      popular: true,
    },
    {
      name: "Royal Beard Shaping & Trim",
      price: "from ₹1,200",
      duration: "45 Mins",
      description: "Precision razor beard shaping, essential hot oils massage, and organic balm conditioning.",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Gentleman's Under-Eye Lift",
      price: "from ₹3,500",
      duration: "60 Mins",
      description: "Brightening caffeine facial combined with cryogenic therapy to reduce eye bags and expression lines.",
      image: "https://images.unsplash.com/photo-1622000809648-2b1d3ef9798c?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
  kids: [
    {
      name: "Princess Haircut & Braids",
      price: "from ₹800",
      duration: "30 Mins",
      description: "Gentle detangling cut followed by customized fairy braids or glitter spray extensions.",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
    {
      name: "Little Prince Style Cut",
      price: "from ₹600",
      duration: "30 Mins",
      description: "Fun, rapid styling cut incorporating customized kids styling clay products.",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      popular: false,
    },
  ],
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("hair");

  return (
    <section id="services" className="relative py-28 bg-[#0a0a0a]">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#C5A880]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Signature Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Curated <span className="gold-text">Rituals & Services</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Select a category below to explore our tailored beauty transformations, detailed durations, and premium rates.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C5A880] text-[#080808] border-[#C5A880] shadow-lg shadow-[#C5A880]/25 scale-[1.02]"
                  : "bg-white/[0.02] border-white/5 text-white/80 hover:border-white/20 hover:text-white"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Showcase Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]"
          >
            {servicesData[activeCategory]?.map((service, index) => (
              <div
                key={service.name}
                className="group flex flex-col glass-card rounded-3xl overflow-hidden border-white/[0.03] hover:border-[#C5A880]/30 transition-all duration-500 hover:-translate-y-2 relative shadow-xl"
              >
                {/* Image Section with Arch mask */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {/* Premium Badge */}
                  {service.popular && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Recommended
                    </div>
                  )}

                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-serif text-xl font-bold text-white leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  <p className="text-white/60 text-xs font-light leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 text-[10px] text-white/50 mb-6 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[#C5A880]" />
                      {service.duration}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1 text-white/70">
                      <FaCheck className="text-[#C5A880] text-[8px]" /> Luxury Products
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-[#E5D5C5]/60">Starting Rates</span>
                      <span className="font-serif text-2xl font-bold text-[#C5A880] mt-0.5">{service.price}</span>
                    </div>
                    <a
                      href="#booking"
                      className="text-[10px] uppercase tracking-widest font-extrabold px-5 py-3 rounded-full border border-[#C5A880]/30 text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#080808] group-hover:border-[#C5A880] transition-all duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
