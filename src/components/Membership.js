"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCrown, FaGem, FaCheckCircle, FaPercent } from "react-icons/fa";

const memberships = [
  {
    name: "Gold Club Member",
    price: "₹2,500 / mo",
    accent: "from-[#D4AF37] to-[#C5A880]",
    icon: <FaPercent />,
    popular: false,
    benefits: [
      "1 complimentary Haircut & Blowdry per month",
      "15% flat discount on all chemical services",
      "Priority weekday reservation slots",
      "Complimentary single-estate gourmet coffees"
    ]
  },
  {
    name: "Platinum Elite Club",
    price: "₹4,500 / mo",
    accent: "from-[#E5D5C5] via-[#C5A880] to-[#E5D5C5]",
    icon: <FaGem />,
    popular: true,
    benefits: [
      "2 complimentary styling services per month",
      "25% flat discount on all retail products",
      "Priority weekend & holiday reservation access",
      "Complimentary private styling suite upgrades",
      "Custom grooming box on your birthday"
    ]
  },
  {
    name: "Royal VIP Sovereign",
    price: "₹8,000 / mo",
    accent: "from-[#A6875E] to-[#080808]",
    icon: <FaCrown />,
    popular: false,
    benefits: [
      "Unlimited hair styling & beard grooming services",
      "35% flat discount on aesthetic skin & spa rituals",
      "Assigned personal beauty concierge manager",
      "Unlimited private suite bookings at no charge",
      "Priority invitations to editorial launch events"
    ]
  }
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-28 bg-[#0a0a0a]">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-2/3 w-[450px] h-[450px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">Privilege Club</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Membership <span className="gold-text">Royalty</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Unlock priority reservations, exclusive savings, and customized pampering rituals by enrolling in Nikkisha's VIP Privilege Clubs.
          </p>
        </div>

        {/* Memberships Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((club, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative shadow-2xl overflow-hidden border ${
                club.popular 
                  ? "bg-gradient-to-b from-[#161616] to-[#0A0A0A] border-[#C5A880] shadow-[#C5A880]/5" 
                  : "bg-gradient-to-b from-[#121212] to-[#080808] border-white/[0.03]"
              }`}
            >
              
              {/* Popular Tag */}
              {club.popular && (
                <div className="absolute top-0 right-0 bg-[#C5A880] text-[#080808] text-[8px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
                  Highly Requested
                </div>
              )}

              <div>
                
                {/* Header Icon */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${club.accent} flex items-center justify-center text-[#080808] mb-6 shadow-lg`}>
                  {React.cloneElement(club.icon, { size: 18 })}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2">{club.name}</h3>
                <span className="font-serif text-3xl font-bold text-[#C5A880] block mb-6">{club.price}</span>

                <ul className="space-y-4 mb-8">
                  {club.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-white/80">
                      <FaCheckCircle className="text-[#C5A880] mt-1 shrink-0" size={12} />
                      <span className="font-light leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <button
                onClick={() => alert(`Privilege request sent for ${club.name}! Our VIP concierge will contact you for enrollment.`)}
                className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-widest transition duration-300 ${
                  club.popular
                    ? "bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808]"
                    : "bg-white/5 border border-white/10 hover:border-[#C5A880] text-white hover:text-[#C5A880]"
                }`}
              >
                Enroll In Privilege
              </button>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
