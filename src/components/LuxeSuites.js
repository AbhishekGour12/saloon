"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCrown, FaLightbulb, FaWineGlassAlt, FaVolumeMute } from "react-icons/fa";

const moods = [
  {
    id: "warm_amber",
    name: "Warm Amber",
    overlayClass: "bg-amber-500/20 mix-blend-color-burn",
    glowColor: "shadow-amber-500/20",
    themeDesc: "Soft golden light matching evening sunsets, inducing deep physical relaxation and calm."
  },
  {
    id: "cool_daylight",
    name: "Cool Daylight",
    overlayClass: "bg-sky-400/10 mix-blend-color-burn",
    glowColor: "shadow-sky-400/10",
    themeDesc: "High-luminance crisp daylight designed to reveal absolute precision color tones during styling."
  },
  {
    id: "tranquil_lavender",
    name: "Tranquil Lavender",
    overlayClass: "bg-purple-500/20 mix-blend-color-burn",
    glowColor: "shadow-purple-500/20",
    themeDesc: "Tranquil lavender aromatherapy light reducing visual stress, ideal for luxury skin & massage therapy."
  }
];

export default function LuxeSuites() {
  const [activeMood, setActiveMood] = useState("warm_amber");
  
  const currentMoodData = moods.find(m => m.id === activeMood);

  return (
    <section className="relative py-28 bg-[#080808] border-b border-white/[0.03]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Private Atelier</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            L'Atelier <span className="gold-text">Private Suites</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Experience ultimate discretion. Indulge in private soundproof chambers featuring customized refreshment bars and adjustable mood lighting.
          </p>
        </div>

        {/* Horizontal Split Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Mood Selection Controls */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#C5A880] font-bold mb-2">Atmosphere Customizer</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-6">Select Suite Ambiance</h3>
            </div>

            {/* Mood selector buttons */}
            <div className="flex flex-col gap-4">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setActiveMood(mood.id)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                    activeMood === mood.id
                      ? "glass-card border-[#C5A880]/50 shadow-xl"
                      : "bg-white/[0.01] border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors ${
                      activeMood === mood.id ? "text-[#C5A880] bg-[#C5A880]/10" : "text-white/40"
                    }`}>
                      <FaLightbulb size={12} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-white font-bold">{mood.name}</h4>
                      <p className="text-[10px] text-white/50 mt-1 font-light max-w-xs">{mood.themeDesc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Core Suite features */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8 mt-4">
              <div className="flex items-center gap-3 text-xs text-white/80">
                <FaVolumeMute className="text-[#C5A880]" size={14} />
                <span>Acoustic Isolation</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/80">
                <FaWineGlassAlt className="text-[#C5A880]" size={14} />
                <span>Single-Estate Bar</span>
              </div>
            </div>

            <a
              href="#booking"
              className="mt-4 px-8 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full text-center hover:scale-[1.01] active:scale-95 transition"
            >
              Reserve Private Suite
            </a>
          </div>

          {/* Right Column: Dynamic Suite Image frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div className={`relative w-full max-w-xl aspect-[1.4/1] rounded-[36px] overflow-hidden border border-white/10 shadow-2xl transition-shadow duration-500 bg-[#0f0f0f] ${currentMoodData.glowColor}`}>
              
              {/* Dynamic Overlay Layer */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMood}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute inset-0 z-10 ${currentMoodData.overlayClass}`}
                />
              </AnimatePresence>
              
              {/* Dark grading overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

              {/* Main Suite Photo */}
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="L'Atelier Private Suite Interior"
                className="w-full h-full object-cover select-none pointer-events-none"
              />

              {/* Custom Monogram Badge overlay */}
              <div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                <FaCrown className="text-[#C5A880]" size={12} />
                <span className="text-[9px] uppercase tracking-widest text-[#E5D5C5] font-extrabold">VIP Chamber I</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
