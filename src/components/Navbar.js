"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Bridal", href: "#bridal" },
  { name: "Membership", href: "#membership" },
  { name: "Before & After", href: "#before-after" },
  { name: "Contact", href: "#contact" },
];

const serviceCategories = [
  { name: "Hair Couture", href: "#services" },
  { name: "Skin Radiance", href: "#services" },
  { name: "Nail Artistry", href: "#services" },
  { name: "Spa Serenity", href: "#services" },
  { name: "Bridal Atelier", href: "#services" },
  { name: "Groom & Executive", href: "#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[990] transition-all duration-500 ${
        scrolled 
          ? "py-3 glass-nav shadow-2xl bg-black/80" 
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col select-none group">
          <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-[#C5A880] transition duration-300">
            NIKKISHA'S
          </span>
          <span className="text-[9px] uppercase tracking-[0.38em] text-[#C5A880] font-light">
            Luxury Unisex Salon
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden xl:flex items-center gap-7">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
              onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
            >
              <a
                href={item.href}
                className="text-xs uppercase tracking-widest text-white/85 hover:text-[#C5A880] hover-line-trigger font-medium py-2 flex items-center gap-1 transition"
              >
                {item.name}
                {item.hasDropdown && (
                  <FaChevronDown size={8} className={`transition duration-300 ${dropdownOpen ? "rotate-180 text-[#C5A880]" : ""}`} />
                )}
              </a>

              {/* Service Categories Hover Dropdown */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      transition={{ duration: 0.25 }}
                      className="absolute top-full -left-4 w-52 glass-dropdown rounded-lg p-3 mt-1 shadow-2xl flex flex-col gap-2"
                    >
                      {serviceCategories.map((cat) => (
                        <a
                          key={cat.name}
                          href={cat.href}
                          className="text-[11px] uppercase tracking-wider text-white/80 hover:text-[#C5A880] hover:pl-2 transition-all duration-300 py-1.5 border-b border-white/[0.03] last:border-0"
                        >
                          {cat.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center gap-4">
          <a
            href="tel:+919876543210"
            className="text-white/80 hover:text-[#C5A880] transition p-2 border border-white/10 hover:border-[#C5A880]/30 rounded-full"
          >
            <FaPhoneAlt size={12} />
          </a>
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-xs uppercase tracking-widest bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-[#C5A880]/20 transition duration-300"
          >
            VIP Booking
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="xl:hidden flex items-center gap-4">
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.03 }}
            className="text-[10px] uppercase tracking-wider bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold px-4 py-2 rounded-full shadow-md"
          >
            Book Now
          </motion.a>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-[#C5A880] transition text-xl p-1"
          >
            <FaBars />
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 bg-[#080808] z-[999] flex flex-col p-6 overflow-y-auto"
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-white">NIKKISHA'S</span>
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A880]">Luxury Unisex Salon</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-[#C5A880] transition text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col gap-6 pl-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-white/90 hover:text-[#C5A880] transition"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 flex flex-col gap-4">
              <a 
                href="tel:+919876543210" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white/70 hover:text-[#C5A880] transition justify-center py-3 border border-white/10 rounded-full"
              >
                <FaPhoneAlt size={14} />
                <span className="text-xs uppercase tracking-widest">Call Concierge</span>
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] py-4 rounded-full font-bold text-xs uppercase tracking-widest text-center shadow-lg"
              >
                Book VIP Appointment
              </a>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
