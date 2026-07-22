"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle, FaCompass } from "react-icons/fa";

const mapSources = {
  vijay_nagar: "https://maps.google.com/maps?q=Vijay+Nagar+Square+Indore&t=&z=15&output=embed",
  ab_road: "https://maps.google.com/maps?q=Orbit+Mall+Indore&t=&z=15&output=embed"
};

const branches = {
  vijay_nagar: {
    name: "VIP Lounge Vijay Nagar",
    address: "101, Near Vijay Nagar Square, AB Road, Indore, MP 452010",
    phone: "+91 98765 43210",
    hours: "09:00 AM – 09:00 PM"
  },
  ab_road: {
    name: "Signature Studio AB Road",
    address: "Orbit Mall Compound, Scheme 54, AB Road, Indore, MP 452010",
    phone: "+91 98765 43211",
    hours: "09:00 AM – 09:00 PM"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [activeBranch, setActiveBranch] = useState("vijay_nagar");

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your VIP concierge has received your message and will contact you shortly.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#080808]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Connect With Us</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            The Salon <span className="gold-text">Conciérge</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Have questions regarding wedding contracts, customized memberships, or stylist bookings? Reach our receptionists directly.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Side: Branch Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Branch Cards */}
            <div className="space-y-6">
              
              {/* Vijay Nagar */}
              <div 
                onClick={() => setActiveBranch("vijay_nagar")}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg border ${
                  activeBranch === "vijay_nagar"
                    ? "glass-card border-[#C5A880] shadow-[#C5A880]/5"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 text-[#C5A880]">
                    <FaMapMarkerAlt size={16} />
                    <h4 className="font-serif text-lg font-bold text-white">VIP Lounge Vijay Nagar</h4>
                  </div>
                  {activeBranch === "vijay_nagar" && (
                    <FaCheckCircle className="text-[#C5A880] text-sm" />
                  )}
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-4">
                  {branches.vijay_nagar.address}
                </p>
                <a 
                  href={`tel:${branches.vijay_nagar.phone}`}
                  className="text-xs text-white/80 hover:text-[#C5A880] transition flex items-center gap-2 inline-flex"
                >
                  <FaPhoneAlt size={10} /> {branches.vijay_nagar.phone}
                </a>
              </div>

              {/* AB Road */}
              <div 
                onClick={() => setActiveBranch("ab_road")}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg border ${
                  activeBranch === "ab_road"
                    ? "glass-card border-[#C5A880] shadow-[#C5A880]/5"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 text-[#C5A880]">
                    <FaMapMarkerAlt size={16} />
                    <h4 className="font-serif text-lg font-bold text-white">Signature Studio AB Road</h4>
                  </div>
                  {activeBranch === "ab_road" && (
                    <FaCheckCircle className="text-[#C5A880] text-sm" />
                  )}
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed mb-4">
                  {branches.ab_road.address}
                </p>
                <a 
                  href={`tel:${branches.ab_road.phone}`}
                  className="text-xs text-white/80 hover:text-[#C5A880] transition flex items-center gap-2 inline-flex"
                >
                  <FaPhoneAlt size={10} /> {branches.ab_road.phone}
                </a>
              </div>

            </div>

            {/* Timings */}
            <div className="glass-card p-6 rounded-2xl border-white/[0.03] shadow-lg flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880]">
                <FaClock size={16} />
              </div>
              <div>
                <h4 className="font-serif text-md font-bold text-white">Working Hours</h4>
                <p className="text-white/60 text-xs mt-1 font-light">Open Every Day: 09:00 AM – 09:00 PM</p>
              </div>
            </div>

            {/* Quick Actions (Call / WhatsApp) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919876543210?text=Hi!%20I'd%20like%20to%20book%20a%20VIP%20session%20at%20Nikkisha's."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-[#15803d]/90 hover:bg-[#15803d] text-white rounded-full font-bold text-xs uppercase tracking-widest text-center shadow-lg flex items-center justify-center gap-2 transition"
              >
                <FaWhatsapp size={14} /> WhatsApp Booking
              </a>
              <a
                href={`tel:${branches[activeBranch].phone}`}
                className="flex-1 py-4 border border-white/10 hover:border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest text-center transition flex items-center justify-center gap-2"
              >
                <FaPhoneAlt size={10} /> Call Receptionist
              </a>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[32px] p-8 md:p-12 border-white/[0.03] shadow-2xl relative">
              <h3 className="font-serif text-2xl font-bold text-white mb-8">Send VIP Message</h3>
              
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div>
                  <label className="text-[9px] uppercase tracking-wider text-white/50 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#080808] border border-white/5 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C5A880] transition text-xs"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-white/50 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080808] border border-white/5 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C5A880] transition text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] uppercase tracking-wider text-white/50 block mb-1">Mobile Contact</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#080808] border border-white/5 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C5A880] transition text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-wider text-white/50 block mb-1">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080808] border border-white/5 rounded-xl p-3.5 text-white focus:outline-none focus:border-[#C5A880] transition text-xs"
                    placeholder="Tell us what you are looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:scale-[1.01] active:scale-95 transition duration-300"
                >
                  Send Inquiry Message
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Map with Glass Overlay */}
        <div className="rounded-[36px] overflow-hidden border border-white/10 h-[450px] shadow-2xl relative bg-black">
          
          {/* Dynamic Map Iframe */}
          <iframe
            key={activeBranch}
            title="Nikkisha's Branch Coordinates Map"
            src={mapSources[activeBranch]}
            className="w-full h-full grayscale invert-[0.9] contrast-[1.2] opacity-75"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Floating Glassmorphic Details Card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-96 glass-card p-6 rounded-2xl border-white/10 shadow-2xl z-10">
            <span className="text-[8px] uppercase tracking-widest text-[#C5A880] font-bold">Currently Displaying</span>
            <h4 className="font-serif text-lg font-bold text-white mt-1 mb-2">
              {branches[activeBranch].name}
            </h4>
            <p className="text-white/60 text-[10px] font-light leading-relaxed mb-4">
              {branches[activeBranch].address}
            </p>
            <div className="flex gap-4 border-t border-white/5 pt-4 mt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(branches[activeBranch].address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#C5A880] font-bold"
              >
                <FaCompass size={12} /> Get Directions
              </a>
              <span className="text-white/15">|</span>
              <span className="text-[10px] text-white/50 flex items-center gap-1.5">
                <FaClock size={10} /> 9am – 9pm
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
