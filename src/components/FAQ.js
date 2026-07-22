"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaRegQuestionCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Do you offer on-location home services for bridal makeup?",
    answer: "Yes, our Senior Styling Directors and Bridal Atelier teams travel across Indore and global destination wedding sites. We bring customized mobile lighting, styling mirrors, and full trial portfolios directly to your venue."
  },
  {
    question: "What luxury products and color brands do you style with?",
    answer: "We style and treat exclusively with premium international labels including Kérastase, Oribe, Dyson Professional, L'Oréal Professionnel Serie Expert, and Chanel beauty lines."
  },
  {
    question: "How early should I book my wedding or bridal package?",
    answer: "To secure your preferred Date Director and private lounge suite, we highly recommend reserving wedding sessions 3 to 6 months in advance. Pre-bridal skin and hair detox packages usually begin 4 to 8 weeks before the wedding date."
  },
  {
    question: "What are the UV-sterilization procedures for your styling tools?",
    answer: "Hygiene is our highest commandment. All metal tools, combs, and scissors undergo chemical sanitization followed by deep medical-grade UV sterilizer box treatment after every single guest session. Clean towels are fresh out of thermal laundry packages."
  },
  {
    question: "What is Nikkisha's rescheduling or cancellation policy?",
    answer: "Rescheduling or cancellations can be placed up to 24 hours prior to your slot without any charges. Cancellations under 24 hours are subject to a nominal retainer fee depending on the director stylist assigned."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-28 bg-[#0a0a0a] border-b border-white/[0.03]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">FAQ Directory</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Curious <span className="gold-text">Questions</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Find immediate answers regarding pre-bookings, tools hygiene standards, and bridal destination visits.
          </p>
        </div>

        {/* Accordions wrapper */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "glass-card border-[#C5A880]/30 shadow-xl" 
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <FaRegQuestionCircle className={`shrink-0 transition-colors ${isOpen ? "text-[#C5A880]" : "text-white/40"}`} size={16} />
                    <span className="font-serif text-md md:text-lg font-bold text-white tracking-wide">
                      {item.question}
                    </span>
                  </div>
                  <FaChevronDown 
                    size={12} 
                    className={`text-[#C5A880] shrink-0 transition-transform duration-350 ${isOpen ? "rotate-180" : ""}`} 
                  />
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-xs md:text-sm text-white/70 font-light leading-relaxed border-t border-white/[0.03] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
