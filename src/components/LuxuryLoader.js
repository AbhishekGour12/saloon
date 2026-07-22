"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LuxuryLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 bg-[#080808] z-[9999] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#C5A880]/10 blur-[80px]" />
          
          <div className="relative flex flex-col items-center">
            {/* Elegant Monogram Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 360,
                transition: { duration: 1.5, ease: "easeOut" }
              }}
              className="w-24 h-24 rounded-full border border-dashed border-[#C5A880]/40 flex items-center justify-center relative mb-6"
            >
              <div className="absolute inset-2 rounded-full border border-[#C5A880]/20 animate-pulse" />
              <motion.span 
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-serif text-4xl font-light text-[#C5A880] tracking-wide"
              >
                N
              </motion.span>
            </motion.div>

            {/* Brand Logo Text */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-serif text-3xl font-bold tracking-[0.2em] text-white text-center"
            >
              NIKKISHA'S
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.7 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] text-[#E5D5C5] mt-2 font-light"
            >
              Unisex Salon & Spa
            </motion.p>
          </div>

          {/* Loader bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2, repeat: 0, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-[#C5A880]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
