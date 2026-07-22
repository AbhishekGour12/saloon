"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowsAltH, FaImages } from "react-icons/fa";

const categories = [
  { id: "hair", name: "Hair Cut" },
  { id: "color", name: "Hair Color" },
  { id: "skin", name: "Skin Care" },
  { id: "bridal", name: "Bridal" },
  { id: "makeup", name: "Makeup" },
  { id: "nails", name: "Nails" },
];

const transformationData = {
  hair: {
    title: "Signature Pixie & Fringe Makeover",
    desc: "A transition from flat, dry layers to an editorial textured bob with signature gold highlights.",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
  },
  color: {
    title: "Dimensional Rose Gold Balayage",
    desc: "Replaced dull brassy roots with hand-painted rose gold dimensions using luxury botanical colours.",
    before: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
  },
  skin: {
    title: "Platinum Cellular Renewal",
    desc: "A complete skin transformation addressing pigmentation, pores, and dry texture after 3 sessions.",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  bridal: {
    title: "Royal HD Airbrush Bridal Transformation",
    desc: "Seamless, water-resistant HD face contours paired with a classic Indian royal bun.",
    before: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  },
  makeup: {
    title: "Hollywood Red Carpet Glam",
    desc: "A sharp, dewy editorial application focusing on symmetry, premium wispy lashes, and nude contour.",
    before: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  nails: {
    title: "Luxury Sculpted Chrome Gel Nails",
    desc: "Refinishing bitten and damaged nail plates into customized long coffin shapes with mirror gold finish.",
    before: "https://images.unsplash.com/photo-1610992015732-2449b76e44dc?auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80",
  },
};

export default function BeforeAfter() {
  const [activeCategory, setActiveCategory] = useState("hair");
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  const activeData = transformationData[activeCategory];

  return (
    <section id="before-after" className="relative py-28 bg-[#0a0a0a]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Metamorphosis Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Witness the <span className="gold-text">Transformations</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Drag the gold handle slider horizontally to interactively compare before-and-after results achieved by Nikkisha's artists.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#C5A880] text-[#080808] border-[#C5A880]"
                  : "bg-white/[0.02] border-white/5 text-white/80 hover:border-white/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Slider Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Draggable Slider Screen */}
          <div className="lg:col-span-7 flex justify-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full max-w-xl aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 select-none cursor-ew-resize shadow-2xl bg-black"
            >
              {/* After Image (Background) */}
              <img
                src={activeData.after}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute bottom-4 right-4 bg-black/60 backdrop-blur text-[10px] text-white font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg z-20 border border-white/10">
                After Transformation
              </span>

              {/* Before Image (Foreground, clipped) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src={activeData.before}
                  alt="Before transformation"
                  className="absolute inset-0 w-[576px] max-w-[576px] h-full object-cover"
                  style={{ width: containerRef.current ? containerRef.current.clientWidth : "auto" }}
                />
                <span className="absolute bottom-4 left-4 bg-[#C5A880]/85 backdrop-blur text-[10px] text-[#080808] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg z-20">
                  Before
                </span>
              </div>

              {/* Drag Handle Bar */}
              <div 
                className="absolute inset-y-0 w-[2px] bg-[#C5A880] z-30"
                style={{ left: `${sliderPos}%` }}
              >
                <div 
                  onMouseDown={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onTouchStart={(e) => {
                    setIsDragging(true);
                  }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#C5A880] text-[#080808] flex items-center justify-center shadow-2xl border-4 border-black/90 active:scale-95 transition"
                >
                  <FaArrowsAltH size={12} />
                </div>
              </div>

            </div>
          </div>

          {/* Description details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-6 border border-[#C5A880]/20">
              <FaImages size={18} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4 leading-snug">
                  {activeData.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-6">
                  {activeData.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-white/5 pt-6 mt-4 flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/50">Procedure</span>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold mt-1">100% Bespoke Styling</span>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-white/50">Sessions Required</span>
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold mt-1">Single Appointment</span>
              </div>
            </div>

            <a
              href="#booking"
              className="mt-8 px-8 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full text-center hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              Request My Consultation
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
