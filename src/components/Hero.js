"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80",
    title: "Experience Luxury Beauty Beyond Expectations",
    tagline: "Indore's Premier Sanctuary of Glamour & Elegance",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=80",
    title: "Master Artistry, Personalized for You",
    tagline: "Red-Carpet Hair Couture and Exquisite Skin Rituals",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1920&q=80",
    title: "Step Into Your Sanctuary of Serenity",
    tagline: "Bridal Masterpieces & Rejuvenating Wellness Spa",
  },
];

const stats = [
  { value: "15+", label: "Years of Artistry" },
  { value: "35+", label: "Master Stylists" },
  { value: "10K+", label: "Elite Guests Served" },
  { value: "4.9★", label: "Google Rated" },
];

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] md:min-h-[850px] bg-[#080808] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#C5A880]/5 blur-[120px] pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#F43F5E]/5 blur-[100px] pointer-events-none z-10" />

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full flex items-center justify-center">
              
              {/* Ken Burns Background Image */}
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.12 }}
                transition={{ duration: 12, ease: "linear" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-black/60 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/30 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-[#080808]/20 z-10" />

              {/* Slide Content */}
              <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-16 pb-32 md:pb-40">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#C5A880] font-semibold mb-4 block"
                >
                  {slide.tagline}
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-[1.1] mb-8"
                >
                  {slide.id === 1 ? (
                    <>
                      Experience Luxury Beauty <br className="hidden md:inline" />
                      <span className="gold-text">Beyond Expectations</span>
                    </>
                  ) : (
                    slide.title
                  )}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-sm md:text-lg text-white/95 max-w-2xl mx-auto font-light leading-relaxed mb-10"
                >
                  Indulge in a premium salon experience that blends luxury ambience, highly certified experts, and state-of-the-art beauty rituals.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="#booking"
                    className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] font-bold text-xs uppercase tracking-widest rounded-full shadow-xl hover:shadow-[#C5A880]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Book Appointment
                  </a>
                  <a
                    href="#services"
                    className="w-full sm:w-auto px-10 py-4 border border-[#C5A880]/40 text-[#C5A880] hover:text-white hover:bg-white/5 font-bold text-xs uppercase tracking-widest rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Explore Services
                  </a>
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Floating stats banner (glass card) at the bottom */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-30 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="glass-card rounded-2xl py-6 px-10 grid grid-cols-4 gap-6 text-center border-white/[0.04]"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-r border-white/5 last:border-0">
              <span className="font-serif text-3xl font-bold text-[#C5A880]">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-white/60 mt-1 font-light">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition duration-300">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaChevronDown size={10} className="text-[#C5A880]" />
        </motion.div>
      </div>

    </section>
  );
}
