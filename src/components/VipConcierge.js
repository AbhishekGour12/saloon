"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserAstronaut, FaTimes, FaRegComments, FaCompass, FaChevronRight } from "react-icons/fa";

const conciergeSteps = {
  start: {
    message: "Greetings! I am Sarah, your Nikkisha VIP Concierge. How may I guide your aesthetic journey today?",
    options: [
      { text: "View Balayage & Hair Rates", next: "hair" },
      { text: "Inquire Bridal Packages", next: "bridal" },
      { text: "Check Indore Outlets Hours", next: "outlets" },
    ]
  },
  hair: {
    message: "Our dimensional balayage and hair couture starts from ₹7,500, tailored by Senior Direct Stylists using Kérastase treatments. Would you like to reserve a styling session?",
    options: [
      { text: "Book Hair Session Now", action: "book" },
      { text: "Back to Menu", next: "start" }
    ]
  },
  bridal: {
    message: "Our dedicated Bridal Atelier offers customized HD Airbrush makeovers starting at ₹18,000. We recommend booking a complimentary 1-on-1 trial consultation.",
    options: [
      { text: "Request Bridal Consultation", action: "book" },
      { text: "Back to Menu", next: "start" }
    ]
  },
  outlets: {
    message: "We operate two luxury outlets in Indore (Vijay Nagar VIP Lounge & AB Road Signature Studio). Both are open daily from 9:00 AM to 9:00 PM. Valet parking is complimentary.",
    options: [
      { text: "Get Directions", action: "directions" },
      { text: "Back to Menu", next: "start" }
    ]
  }
};

export default function VipConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("start");
  const [chatHistory, setChatHistory] = useState([
    { sender: "assistant", text: conciergeSteps.start.message }
  ]);

  const handleOptionClick = (opt) => {
    // If it triggers an external action
    if (opt.action === "book") {
      setIsOpen(false);
      window.location.hash = "#booking";
      return;
    }
    if (opt.action === "directions") {
      setIsOpen(false);
      window.location.hash = "#contact";
      return;
    }

    // Otherwise, transition conversation step
    const nextStepData = conciergeSteps[opt.next];
    if (nextStepData) {
      setCurrentStep(opt.next);
      setChatHistory(prev => [
        ...prev,
        { sender: "user", text: opt.text },
        { sender: "assistant", text: nextStepData.message }
      ]);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-24 right-8 z-[80]">
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            // Reset conversation when opening
            if (!isOpen) {
              setCurrentStep("start");
              setChatHistory([{ sender: "assistant", text: conciergeSteps.start.message }]);
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] flex items-center justify-center shadow-2xl border border-[#C5A880]/30 hover:shadow-[#C5A880]/35 transition relative"
        >
          <FaRegComments size={22} className="animate-pulse" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F43F5E] rounded-full border-2 border-[#080808]" />
        </motion.button>
      </div>

      {/* Glassmorphic Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-40 right-8 w-[calc(100vw-64px)] sm:w-80 md:w-96 bg-[#0c0c0c]/98 sm:bg-black/90 backdrop-blur-2xl rounded-[32px] border border-[#C5A880]/20 shadow-2xl z-[99] overflow-hidden flex flex-col h-[420px]"
          >
            
            {/* Header info */}
            <div className="p-5 border-b border-white/5 bg-white/[0.02] flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A880]/15 flex items-center justify-center border border-[#C5A880]/30 relative text-[#C5A880]">
                  <FaUserAstronaut size={16} />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-[#080808]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white tracking-wide leading-none">Sarah</h4>
                  <span className="text-[8px] uppercase tracking-widest text-[#C5A880] font-bold">VIP Concierge Advisor</span>
                </div>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition p-1.5"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* Conversation Messages area */}
            <div className="flex-grow p-5 overflow-y-auto space-y-4 flex flex-col">
              {chatHistory.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`p-4 rounded-2xl max-w-[80%] text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#C5A880] text-[#080808] font-medium rounded-tr-none"
                      : "bg-white/[0.03] text-white/90 border border-white/5 rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* User Interaction Menu Options */}
            <div className="p-4 border-t border-white/5 bg-black/60 flex flex-col gap-2">
              {conciergeSteps[currentStep]?.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full text-left p-3 rounded-xl bg-white/[0.02] hover:bg-[#C5A880]/10 border border-white/5 hover:border-[#C5A880]/30 text-[10px] uppercase tracking-wider text-white hover:text-[#C5A880] transition-all flex items-center justify-between group font-semibold"
                >
                  {opt.text}
                  <FaChevronRight size={8} className="transform group-hover:translate-x-1 transition" />
                </button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
