"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaHeart, FaComment, FaPlay } from "react-icons/fa";

const feed = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    likes: "1.2k",
    comments: "84",
    isReel: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80",
    likes: "940",
    comments: "42",
    isReel: false,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    likes: "2.1k",
    comments: "156",
    isReel: true,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    likes: "850",
    comments: "30",
    isReel: false,
  },
];

export default function Instagram() {
  return (
    <section className="relative py-28 bg-[#080808]">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C5A880]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Social Sphere</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Follow the <span className="gold-text">Glamour Journey</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Stay inspired. Witness daily blowouts, before-after makeovers, and behind-the-scenes clips on our Instagram feed.
          </p>
          <a
            href="https://instagram.com/nikkishasalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A880] font-bold mt-6 border border-[#C5A880]/30 hover:border-[#C5A880] px-6 py-3 rounded-full transition duration-300"
          >
            <FaInstagram size={14} /> @nikkishasalon
          </a>
        </div>

        {/* Grid Feed */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {feed.map((post) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/nikkishasalon"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-3xl overflow-hidden group shadow-xl border border-white/5 bg-black"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 select-none"
              />

              {/* Reel Play icon overlay if active */}
              {post.isReel && (
                <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 text-white group-hover:scale-110 transition duration-300">
                  <FaPlay size={10} className="ml-0.5" />
                </div>
              )}

              {/* Likes & Comments Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-6 z-20">
                <div className="flex items-center gap-2 text-white">
                  <FaHeart className="text-[#F43F5E]" />
                  <span className="text-xs uppercase tracking-widest font-bold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <FaComment className="text-[#C5A880]" />
                  <span className="text-xs uppercase tracking-widest font-bold">{post.comments}</span>
                </div>
              </div>

            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
