"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft, FaStar, FaPlay, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    name: "Emma Watson",
    role: "Aesthetic Consultant",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Nikkisha's is the only salon I trust. The attention to detail during my Balayage colouring was impeccable, and their single-suite styling is so peaceful.",
    rating: 5,
  },
  {
    name: "Sophia Sen",
    role: "Founder, Indore Fashion Hub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "An absolute sanctuary of wellness. From the coffee ritual to the scalp diagnosis, the entire experience felt equivalent to high-end spas in Milan.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    role: "Lifestyle Blogger",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    text: "Their HD Airbrush Bridal package is masterclass level! My wedding makeup was flawless, sat beautifully under studio lights, and lasted for 12 hours straight.",
    rating: 5,
  },
  {
    name: "Aman Malhotra",
    role: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The gentleman's haircut and charcoal scalp therapy exceeded all expectations. Extremely professional directors, sterile tools, and great private lounge.",
    rating: 5,
  },
];

const videoReviews = [
  {
    thumbnail: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=500&q=80",
    client: "Rhea Kapoor",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=500&q=80",
    client: "Natasha Jain",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video
  },
];

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="testimonials" className="relative py-28 bg-[#0a0a0a]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Voices of <span className="gold-text">Glamour</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Read verified reviews from our elite guests, fashion influencers, and executives who experience beauty at Nikkisha's.
          </p>
        </div>

        {/* Carousel of Reviews */}
        <div className="mb-24">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="pb-16"
          >
            {reviews.map((r, idx) => (
              <SwiperSlide key={idx}>
                <div className="glass-card p-8 rounded-3xl border-white/[0.03] shadow-xl flex flex-col justify-between h-72 hover:border-[#C5A880]/20 transition-all duration-300">
                  <div>
                    <FaQuoteLeft className="text-[#C5A880]/30 text-3xl mb-4" />
                    <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed italic">
                      "{r.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-6">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-12 h-12 rounded-full border-2 border-[#C5A880] object-cover shrink-0"
                    />
                    <div>
                      <h4 className="font-serif text-md font-bold text-white leading-tight">{r.name}</h4>
                      <p className="text-[10px] text-[#C5A880] mt-0.5">{r.role}</p>
                    </div>
                    <div className="flex gap-0.5 ml-auto text-xs text-[#C5A880]">
                      {[...Array(r.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Video Testimonials Showcase */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold mb-2 block">Vlog Reviews</span>
            <h3 className="font-serif text-2xl font-bold text-white">Visual Stories & Makeovers</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {videoReviews.map((v, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveVideo(v.videoUrl)}
                className="relative aspect-[16/10] rounded-3xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
              >
                <img
                  src={v.thumbnail}
                  alt={v.client}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 filter brightness-75 group-hover:brightness-[0.85]"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white/15 hover:bg-[#C5A880] text-white hover:text-[#080808] flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/20 active:scale-90">
                    <FaPlay size={16} className="ml-1" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-lg border border-white/5">
                    Watch {v.client}'s Journey
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition text-3xl"
            >
              <FaTimes />
            </button>
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <iframe
                title="video review"
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
