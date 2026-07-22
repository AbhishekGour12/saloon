"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaUserGraduate, FaGem, FaCrown, FaSpa, FaTools, 
  FaPercent, FaSmileBeam, FaCut 
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaUserGraduate />,
    title: "Certified Experts",
    desc: "Our stylists are certified by academies in Paris and Milan, mastering global trends.",
  },
  {
    icon: <FaGem />,
    title: "Premium Products",
    desc: "We exclusively style using elite brands like Kérastase, Oribe, Dyson, and Chanel.",
  },
  {
    icon: <FaCrown />,
    title: "Luxury Ambience",
    desc: "A sensory haven featuring private treatment rooms, acoustic ceilings, and custom mocktails.",
  },
  {
    icon: <FaSpa />,
    title: "Hygiene First",
    desc: "Hospital-grade UV sterilization of tools and single-use towels for absolute peace of mind.",
  },
  {
    icon: <FaTools />,
    title: "Latest Equipment",
    desc: "Aesthetic tools, diagnostic hair scanners, and state-of-the-art beauty equipment.",
  },
  {
    icon: <FaPercent />,
    title: "Affordable Luxury",
    desc: "Red-carpet premium experiences and results, priced with honest luxury structures.",
  },
  {
    icon: <FaSmileBeam />,
    title: "Elite Clientele",
    desc: "Trusted by over 10,000+ fashion bloggers, entrepreneurs, and lifestyle VIPs in Indore.",
  },
  {
    icon: <FaCut />,
    title: "Experienced Stylists",
    desc: "Senior directors boasting a combined team experience of over three decades.",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Years of Legacy" },
  { value: 45, suffix: "+", label: "Beauty Awards" },
  { value: 10000, suffix: "+", label: "Happy Guests" },
  { value: 100, suffix: "%", label: "Sterile Standard" },
];

function CounterItem({ value, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const update = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        } else {
          setCount(value);
        }
      };
      animationFrame = requestAnimationFrame(update);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);

  // Format large numbers (e.g. 10000 -> 10k)
  const displayVal = count >= 10000 ? `${(count/1000).toFixed(0)}K` : count;

  return (
    <span ref={ref} className="font-serif text-3xl md:text-5xl font-bold text-[#C5A880]">
      {displayVal}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#080808] border-y border-white/[0.03]">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Unmatched Quality</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            The Standards of <span className="gold-text">Nikkisha's</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Discover why Indore's style curators and premium tastemakers choose our salon for their beauty transformations.
          </p>
        </div>

        {/* 8 Reason Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-card border-white/[0.03] hover:border-[#C5A880]/20 hover:scale-[1.02] transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] mb-5 border border-[#C5A880]/20">
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/60 text-xs font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Counter strip */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border-white/[0.04] grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative overflow-hidden">
          {/* Accent lighting behind counters */}
          <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-white/[0.03] hidden md:block" />
          <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-white/[0.03] hidden md:block" />
          
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <CounterItem value={stat.value} suffix={stat.suffix} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-2 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
