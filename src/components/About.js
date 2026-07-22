"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaCalendarAlt } from "react-icons/fa";

const timelineEvents = [
  { year: "2011", title: "Atelier Genesis", desc: "First flagship salon launched, introducing high-fashion hair styling to Indore." },
  { year: "2016", title: "VIP Lounge Vijay Nagar", desc: "Unveiled a multi-story premium studio with private luxury suites and custom bars." },
  { year: "2020", title: "Elite Academy Inception", desc: "Initiated a master artist program training stylists under French & Italian masters." },
  { year: "2024", title: "Bridal Atelier Launch", desc: "Opened our dedicated luxury wedding studio, offering bespoke high-end bridal transformations." },
];

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  return (
    <section id="about" className="relative py-28 bg-[#080808] border-b border-white/[0.03]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Magazine Grid Images */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-12 gap-4 items-end">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-8"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative group border border-white/10">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500" />
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Salon Interior"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-4"
              >
                <div className="aspect-[1/1] rounded-2xl overflow-hidden shadow-2xl relative mb-6 border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
                    alt="Hairstyling"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="aspect-[1/1.2] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=800&q=80"
                    alt="VIP Suite"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Float Experience Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-[#C5A880]/30 shadow-2xl flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] shrink-0 border border-[#C5A880]/20">
                <FaAward size={20} />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white leading-tight">15+ Years</h4>
                <p className="text-[10px] uppercase tracking-wider text-[#E5D5C5] mt-0.5">Luxury Experience</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Text content + Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3">L'Atelier Legacy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
              Where Beauty Becomes <br />
              <span className="gold-text">High Art</span>
            </h2>
            
            <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-6">
              Nikkisha's Unisex Salon & Spa is Indore's crown jewel of hair couture and premium body aesthetics. Founded under the core philosophy of "uncompromised luxury," we blend international techniques with bespoke personal care.
            </p>
            <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed mb-8">
              Every detail of our space—from the customized dimmable lighting to the single-origin Italian coffee and private styling suites—has been curated to ensure you don't just receive a service, but embark on a transformative aesthetic journey.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C5A880] shrink-0" size={14} />
                <span className="text-xs uppercase tracking-wider text-white/90">L'Oréal Pro Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C5A880] shrink-0" size={14} />
                <span className="text-xs uppercase tracking-wider text-white/90">VIP Private Lounges</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C5A880] shrink-0" size={14} />
                <span className="text-xs uppercase tracking-wider text-white/90">Kérastase Ambassadors</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C5A880] shrink-0" size={14} />
                <span className="text-xs uppercase tracking-wider text-white/90">Steri-Max Hygiene</span>
              </div>
            </div>

            {/* Founder Note & Signature */}
            <div className="border-t border-white/10 pt-8 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white">Nikkisha Sharma</span>
                <span className="text-[9px] uppercase tracking-wider text-[#C5A880]">Founder & Creative Director</span>
              </div>
              <span className="font-serif text-3xl italic text-[#C5A880]/60 pr-4 select-none tracking-widest font-light">
                Nikkisha S.
              </span>
            </div>

          </div>

        </div>

        {/* Timeline Section */}
        <div className="mt-28 border-t border-white/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-2 block">Our Milestones</span>
            <h3 className="font-serif text-3xl font-bold text-white">The Luxury Chronology</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Timeline line */}
            <div className="absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-white/10 hidden md:block z-0" />
            
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveTimeline(index)}
                className={`relative z-10 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeTimeline === index 
                    ? "glass-card border-[#C5A880] shadow-2xl scale-[1.03]" 
                    : "bg-transparent border-white/5 hover:border-white/20 hover:scale-[1.01]"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 border transition ${
                  activeTimeline === index
                    ? "bg-[#C5A880] text-[#080808] border-[#C5A880]"
                    : "bg-[#080808] text-[#C5A880] border-white/10"
                }`}>
                  <FaCalendarAlt size={14} />
                </div>
                <span className="text-2xl font-serif font-bold text-[#C5A880]">{event.year}</span>
                <h4 className="font-serif text-md font-bold text-white mt-2">{event.title}</h4>
                <p className="text-white/60 text-xs mt-2 font-light leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
