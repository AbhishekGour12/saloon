"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

// Import Custom Modular Components
import LuxuryLoader from "@/components/LuxuryLoader";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Bridal from "@/components/Bridal";
import Products from "@/components/Products";
import Booking from "@/components/Booking";
import Membership from "@/components/Membership";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VipConcierge from "@/components/VipConcierge";
import LuxeSuites from "@/components/LuxeSuites";

// ---------- Scroll Progress Indicator ----------
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = (window.scrollY / total) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C5A880] via-[#E5D5C5] to-[#C5A880] z-[999] origin-left pointer-events-none"
      style={{ scaleX: progress / 100 }}
    />
  );
};

// ---------- Back to Top Button ----------
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-[90] bg-[#C5A880] text-[#080808] p-3.5 rounded-full shadow-2xl hover:bg-[#A6875E] transition-all border border-[#C5A880]/30 hover:scale-105 active:scale-95"
        >
          <FaArrowUp size={14} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ---------- Floating WhatsApp Concierge ----------
const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20a%20VIP%20session%20at%20Nikkisha's."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 left-8 z-[90] bg-[#15803d]/90 hover:bg-[#15803d] text-white p-3.5 rounded-full shadow-2xl transition-all flex items-center gap-2 group border border-white/10"
  >
    <FaWhatsapp size={20} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-[10px] uppercase tracking-widest font-extrabold pr-0 group-hover:pr-2">
      Book via WhatsApp
    </span>
  </a>
);

export default function Home() {
  return (
    <div className="bg-[#080808] text-white/90 overflow-x-hidden min-h-screen relative antialiased selection:bg-[#C5A880] selection:text-[#080808]">
      
      {/* 1. Luxury Loading Entrance */}
      <LuxuryLoader />

      {/* 2. Desktop Cursor Trail Glow */}
      <CursorGlow />

      {/* 3. Global Scroll & Progress Utilities */}
      <ScrollProgress />
      <FloatingWhatsApp />
      <BackToTop />
      <VipConcierge />

      {/* 4. Core Navigation Shell */}
      <Navbar />

      {/* 5. Section Layout Stack */}
      <main>
        {/* Hero Banner Section */}
        <Hero />
        
        {/* About Salon Heritage */}
        <About />
        
        {/* Curated Service Offerings */}
        <Services />
        
        {/* Standards of Nikkisha's */}
        <WhyChooseUs />

        {/* L'Atelier Private Suites Atmosphere customizer */}
        <LuxeSuites />
        
        {/* Before & After Interactive Gallery */}
        <BeforeAfter />
        
        {/* Stylists Director Team */}
        <Team />
        
        {/* Testimonials Review Slider */}
        <Testimonials />
        
        {/* Dedicated Bridal Atelier Banner */}
        <Bridal />
        
        {/* Retail Boutique Store */}
        <Products />
        
        {/* Multi-step VIP Appointment Booking */}
        <Booking />
        
        {/* Membership Privileges Tier */}
        <Membership />
        
        {/* Instagram Grid Feed */}
        <Instagram />
        
        {/* FAQ Accordion Block */}
        <FAQ />
        
        {/* Map Coordinates & Contact details */}
        <Contact />
      </main>

      {/* 6. Footer Content Block */}
      <Footer />

      {/* 7. Sticky Mobile Footer CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#080808]/90 backdrop-blur-xl border-t border-white/5 p-3.5 z-[99] flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-xs font-bold text-white tracking-wider">NIKKISHA'S</span>
          <span className="text-[7px] uppercase tracking-widest text-[#C5A880] mt-0.5">Luxury Unisex Salon</span>
        </div>
        <a
          href="#booking"
          className="bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] px-5 py-2.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest shadow-lg hover:scale-102 active:scale-98 transition"
        >
          Book Session
        </a>
      </div>

    </div>
  );
}