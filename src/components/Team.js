"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaAward, FaCalendarAlt } from "react-icons/fa";

const stylists = [
  {
    name: "Adriana Lopez",
    role: "Master Colorist & Stylist",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    exp: "12 Years",
    award: "L'Oréal Pro Color Trophy '22",
    specialty: "Balayage, Creative Tone & Color Correction",
    instagram: "https://instagram.com/adrianastyles",
  },
  {
    name: "James Carter",
    role: "Celebrity Cut Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    exp: "15 Years",
    award: "Indore's Top Scissors Award '24",
    specialty: "Editorial Cuts, Textured Bobs & French Pixies",
    instagram: "https://instagram.com/jamescartercut",
  },
  {
    name: "Maya Singh",
    role: "Aesthetician & Spa Director",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    exp: "10 Years",
    award: "Vogue Skincare Advisor Cert.",
    specialty: "Cellular renewal peels, Cryo facial & Aromatherapy",
    instagram: "https://instagram.com/mayaskincare",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-[#080808]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">The Artists</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Masters of <span className="gold-text">Transformation</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Meet our senior salon directors. Certified internationally and trained in the world's most sophisticated beauty techniques.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stylists.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group glass-card rounded-3xl overflow-hidden border-white/[0.03] hover:border-[#C5A880]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-2xl relative"
            >
              
              {/* Profile Image Column */}
              <div className="relative aspect-[1/1] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 select-none"
                />
                
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center gap-4 z-10">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A880] text-white hover:text-[#080808] flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    <FaInstagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5A880] text-white hover:text-[#080808] flex items-center justify-center backdrop-blur-md transition-all duration-300"
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">
                  {member.role}
                </span>
                
                <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-4 leading-none">
                  {member.name}
                </h3>

                <p className="text-white/60 text-xs font-light leading-relaxed mb-6">
                  <strong className="text-white/80 font-medium">Expertise:</strong> {member.specialty}
                </p>

                {/* Stats / Badges */}
                <div className="flex flex-col gap-2 mt-auto border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3 text-white/70 text-xs">
                    <FaCalendarAlt className="text-[#C5A880]" size={12} />
                    <span>{member.exp} Active Practice</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-xs">
                    <FaAward className="text-[#C5A880]" size={12} />
                    <span>{member.award}</span>
                  </div>
                </div>

                <a
                  href="#booking"
                  className="mt-8 text-center text-[10px] uppercase tracking-widest font-extrabold py-3.5 rounded-full border border-white/10 text-white/90 hover:border-[#C5A880] hover:text-[#C5A880] transition-all duration-350"
                >
                  Reserve Stylist
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
