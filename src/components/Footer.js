"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Nikkisha's Gazette. Welcome to our elite beauty circle!");
  };

  return (
    <footer className="relative bg-[#060606] text-white pt-24 pb-12 border-t border-white/[0.03]">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#C5A880]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-white">NIKKISHA'S</span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A880] font-light mt-0.5">Luxury Unisex Salon</span>
            </div>
            
            <p className="text-white/60 text-xs font-light leading-relaxed max-w-sm">
              Indore's premier destination for high-fashion hair styling, clinical skin rituals, and aesthetic bridal transformations. Elevating standards since 2011.
            </p>

            {/* Social handles */}
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram size={14} />, href: "https://instagram.com/nikkishasalon" },
                { icon: <FaFacebookF size={12} />, href: "https://facebook.com/nikkishasalon" },
                { icon: <FaTwitter size={14} />, href: "#" },
                { icon: <FaYoutube size={14} />, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/10 hover:border-[#C5A880] text-white/70 hover:text-[#C5A880] flex items-center justify-center transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest text-[#E5D5C5] font-bold">Discover</h4>
            <ul className="flex flex-col gap-3 text-xs text-white/60 font-light">
              <li><a href="#home" className="hover:text-[#C5A880] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#C5A880] transition">About legacy</a></li>
              <li><a href="#services" className="hover:text-[#C5A880] transition">Services menu</a></li>
              <li><a href="#bridal" className="hover:text-[#C5A880] transition">Bridal Atelier</a></li>
              <li><a href="#membership" className="hover:text-[#C5A880] transition">Membership VIP</a></li>
            </ul>
          </div>

          {/* Outlets Col */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest text-[#E5D5C5] font-bold">Indore Branches</h4>
            <ul className="flex flex-col gap-4 text-xs text-white/60 font-light">
              <li className="flex flex-col gap-1">
                <strong className="text-white/80 font-medium">VIP Lounge Vijay Nagar</strong>
                <span>AB Road, Near Square, Indore</span>
                <span className="text-[10px] text-[#C5A880]">+91 98765 43210</span>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-white/80 font-medium">Signature Studio AB Road</strong>
                <span>Orbit Mall Compound, AB Road</span>
                <span className="text-[10px] text-[#C5A880]">+91 98765 43211</span>
              </li>
            </ul>
          </div>

          {/* Gazette / Newsletter Col */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-[10px] uppercase tracking-widest text-[#E5D5C5] font-bold">The Gazette</h4>
            <p className="text-white/60 text-xs font-light leading-relaxed">
              Subscribe to receive exclusive beauty collection updates and private salon events.
            </p>
            <form onSubmit={handleSubscribe} className="flex relative">
              <input
                type="email"
                required
                placeholder="Enter VIP email"
                className="w-full bg-[#0c0c0c] border border-white/5 rounded-full px-5 py-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C5A880] transition pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 w-9 rounded-full bg-[#C5A880] text-[#080808] flex items-center justify-center shadow-md active:scale-95 transition"
              >
                <FaPaperPlane size={10} />
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5 w-full mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-light">
          <span>&copy; {new Date().getFullYear()} Nikkisha's Unisex Salon & Spa. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
