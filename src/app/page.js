// App.js - Luxury Celebrity Salon Redesign
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import {
  FaScissors,
  FaSpa,
  FaPaintBrush,
  FaLeaf,
  FaUserTie,
  FaStar,
  FaQuoteLeft,
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaArrowUp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaGem,
  FaHands,
  FaShieldAlt,
  FaCalendarAlt,
  FaCrown,
  FaPlayCircle,
  FaRegHeart,
  FaVideo,
  FaImages,
  FaGripfire,
} from "react-icons/fa";
import { GiLipstick, GiHairStrands, GiNailedHead, GiMassage } from "react-icons/gi";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// ---------- Utility Components ----------
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / total) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 z-50 origin-left"
      style={{ scaleX: progress / 100 }}
    />
  );
};

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
          className="fixed bottom-8 right-8 z-50 bg-rose-600 text-white p-3 rounded-full shadow-2xl hover:bg-rose-500 transition-all"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 left-8 z-50 bg-green-600 text-white p-3 rounded-full shadow-2xl hover:bg-green-700 transition-all flex items-center gap-2 group"
  >
    <FaWhatsapp size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">Book VIP via WhatsApp</span>
  </a>
);

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      const update = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) animationFrame = requestAnimationFrame(update);
        else setCount(end);
      };
      animationFrame = requestAnimationFrame(update);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const SectionWrapper = ({ children, className = "" }) => (
  <section className={`py-24 px-4 md:px-8 lg:px-20 overflow-hidden ${className}`}>{children}</section>
);

// ---------- Enhanced Data ----------
const heroSlides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Art of the Crown",
    subtitle: "Where celebrity glamour meets timeless elegance.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Your Spotlight Awaits",
    subtitle: "Red-carpet transformations by master artists.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Sanctuary of Beauty",
    subtitle: "Indulge in bespoke rituals that reveal your radiance.",
  },
];

const servicesList = [
  {
    icon: <GiHairStrands />,
    name: "Signature Hair Couture",
    price: "from $180",
    description: "Precision cuts, bespoke color, and editorial styling.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    icon: <GiLipstick />,
    name: "Bridal Atelier",
    price: "from $550",
    description: "Trial, airbrush makeup, and touch-up service.",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    icon: <FaSpa />,
    name: "Spa Rituals",
    price: "from $220",
    description: "Aromatherapy massages, hot stones, and body treatments.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    icon: <FaLeaf />,
    name: "Lumière Facial",
    price: "from $250",
    description: "Platinum-grade peels and rejuvenation therapies.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    icon: <GiNailedHead />,
    name: "Nail Architecture",
    price: "from $85",
    description: "Sculpted gel, art, and luxury hand treatments.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
  {
    icon: <FaPaintBrush />,
    name: "Colour Metamorphosis",
    price: "from $280",
    description: "Balayage, glossing, and dimensional color.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: false,
  },
];

const whyChoose = [
  { icon: <FaUserTie />, title: "Celebrity Artists", desc: "Trained in Paris & NYC" },
  { icon: <FaGem />, title: "House of Luxury Brands", desc: "Chanel, La Mer, Oribe" },
  { icon: <FaCrown />, title: "Private Suites", desc: "Ultimate discretion & comfort" },
  { icon: <FaRegHeart />, title: "VIP Concierge", desc: "Personal beauty assistant" },
  { icon: <FaHands />, title: "Bespoke Rituals", desc: "Tailored to your DNA" },
  { icon: <FaShieldAlt />, title: "Sterile Excellence", desc: "Hospital-grade hygiene" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
];

const pricingPlans = [
  {
    name: "Signature Experience",
    price: "$280",
    features: ["Haircut & Style", "Deep Conditioning", "Blowout", "Champagne"],
    popular: false,
  },
  {
    name: "Bridal Royalty",
    price: "$950",
    features: ["Trial + Day-of", "Airbrush Makeup", "Updo + Veil", "Touch-up kit"],
    popular: true,
  },
  {
    name: "The Lumière Ritual",
    price: "$520",
    features: ["Facial + Massage", "Body Scrub", "Aromatherapy", "Lunch included"],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Emma Roberts",
    role: "Actress",
    text: "The only place I trust before the red carpet. Pure magic.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Sophia Chen",
    role: "CEO, Luxe Group",
    text: "A sanctuary of beauty. Every detail is perfection.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Isabella Rossi",
    role: "Influencer",
    text: "They don’t just style you—they transform you into art.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
];

const teamMembers = [
  {
    name: "Adriana Lopez",
    role: "Master Colorist",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "James Carter",
    role: "Celebrity Stylist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maya Singh",
    role: "Spa Director",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

const beforeAfterData = [
  {
    before:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Platinum Blonde Transformation",
  },
  {
    before:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Bridal Glow Up",
  },
];

const membershipPlans = [
  {
    name: "Gold",
    price: "$350/month",
    benefits: ["1 haircut/mo", "20% off color", "Priority booking", "Champagne"],
    popular: false,
  },
  {
    name: "Platinum",
    price: "$650/month",
    benefits: ["2 services/mo", "30% off all", "VIP lounge access", "Free blowout"],
    popular: true,
  },
  {
    name: "Bridal VIP",
    price: "$1,200",
    benefits: ["Entire bridal package", "Pre-wedding glow", "On-site day-of"],
    popular: false,
  },
];

const instaFeed = [
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
];

// ---------- Main App ----------
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your VIP concierge will confirm within 1 hour.");
    setFormData({ name: "", phone: "", email: "", service: "", date: "", message: "" });
  };

  return (
    <div className="font-['Poppins'] bg-[#0F0F0F] text-gray-200 overflow-x-hidden">
      <ScrollProgress />
      <FloatingWhatsApp />
      <BackToTop />

      {/* ---------- Premium Navbar (Glassmorphism + Shrink) ---------- */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-rose-900/30 shadow-2xl transition-all duration-300"
      >
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="text-2xl font-serif font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-amber-300 to-rose-400"
          >
            GLAMOUR ATELIER
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-white">
            {["Home", "About", "Services", "Gallery", "Pricing", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm uppercase tracking-wider hover:text-rose-300 transition group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-rose-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-rose-500/50 transition-all"
            >
              VIP Booking
            </motion.button>
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-5 text-white">
                {["Home", "About", "Services", "Gallery", "Pricing", "Testimonials", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="py-2 text-lg hover:text-rose-300 border-b border-rose-900/30"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )
                )}
                <button className="bg-rose-600 text-white px-5 py-3 rounded-full text-center font-semibold mt-2">
                  VIP Booking
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ---------- Hero Section (Cinematic + Ken Burns) ---------- */}
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 6000 }}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <motion.img
                  src={slide.image}
                  alt="luxury salon"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-900/10 to-transparent" />
                <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6 max-w-4xl mx-auto">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl mt-6 text-gray-200 max-w-2xl"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-6 mt-10 flex-wrap justify-center"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-rose-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-rose-500/50 transition"
                    >
                      Book VIP Experience
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="border-2 border-rose-400 px-10 py-4 rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition"
                    >
                      Discover Collections
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-7 h-12 border-2 border-rose-300 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-rose-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ---------- Luxury Experience Banner (NEW) ---------- */}
      <div className="bg-gradient-to-r from-[#2A1A12] via-[#1A0F0A] to-[#2A1A12] py-12 border-y border-rose-900/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-12 items-center"
          >
            <div className="flex items-center gap-3">
              <FaAward className="text-rose-400 text-3xl" />
              <span className="text-2xl font-serif">Trusted by 10,000+ Elite Clients</span>
            </div>
            <div className="h-8 w-px bg-rose-700/50 hidden md:block"></div>
            <div className="flex gap-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vogue_Logo.svg/2560px-Vogue_Logo.svg.png"
                className="h-8 opacity-70"
                alt="vogue"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bazaar_logo.svg/2560px-Bazaar_logo.svg.png"
                className="h-8 opacity-70"
                alt="bazaar"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Services (upgraded gold) */}
      <div className="bg-black py-6 overflow-hidden border-y border-rose-900/30">
        <div className="flex animate-marquee whitespace-nowrap gap-12 text-rose-300 font-light text-sm uppercase tracking-wider">
          {[...Array(2)].flatMap(() => [
            "Hair Couture",
            "Bridal Atelier",
            "Spa Rituals",
            "Lumière Facial",
            "Nail Architecture",
            "Colour Metamorphosis",
            "Scalp Therapy",
            "VIP Lounge",
          ]).map((service, idx) => (
            <span key={idx} className="text-lg flex items-center gap-2">
              ✦ {service}
            </span>
          ))}
        </div>
      </div>

      {/* About Section (enhanced) */}
      <SectionWrapper className="bg-[#0F0F0F]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="rounded-2xl shadow-2xl"
                alt="salon interior"
              />
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                className="rounded-2xl shadow-2xl mt-8"
                alt="hair styling"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-rose-900/80 backdrop-blur p-5 rounded-xl shadow-xl border border-rose-500">
              <FaAward className="text-rose-300 text-4xl inline" />{" "}
              <span className="font-bold text-white text-lg">15+ Years of Artistry</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-rose-400 font-semibold tracking-wider uppercase text-sm">L'HERITAGE</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-2 text-white">Where Beauty Becomes Art</h2>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Glamour Atelier is a sanctuary for those who seek the ultimate in hair, makeup, and wellness.
              Our atelier merges Parisian elegance with Hollywood glamour, using only the world’s most
              exclusive products. Every visit is a bespoke journey.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <h3 className="font-bold text-3xl text-rose-400">
                  <AnimatedCounter end={5000} />+
                </h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h3 className="font-bold text-3xl text-rose-400">
                  <AnimatedCounter end={35} />+
                </h3>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </div>
            <button className="mt-8 bg-rose-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-rose-500 transition shadow-lg">
              Discover Our Story <FaChevronRight />
            </button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us (glassmorphism + gold borders) */}
      <SectionWrapper className="bg-gradient-to-br from-[#1A0F0A] to-[#0F0F0F]">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-rose-400 font-semibold uppercase tracking-wider">THE DIFFERENCE</span>
          <h2 className="text-4xl font-serif mt-2 text-white">Why the World's Elite Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {whyChoose.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-rose-800/30 hover:border-rose-500/50 transition-all duration-300"
            >
              <div className="text-4xl text-rose-400">{item.icon}</div>
              <h3 className="text-xl font-bold mt-4 text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Services Showcase (glass + shine effect) */}
      <SectionWrapper className="bg-[#0F0F0F]">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">SIGNATURE RITUALS</span>
          <h2 className="text-4xl font-serif text-white">The Art of Transformation</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 to-black border border-rose-900/30 hover:border-rose-500/50 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-rose-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                    MOST REQUESTED
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur p-2 rounded-full text-rose-400">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{service.name}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-serif text-rose-400">{service.price}</span>
                  <button className="bg-rose-600 text-white px-5 py-2 rounded-full text-sm hover:bg-rose-500 transition shadow-md">
                    Book Ritual →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Before & After Transformations (NEW) */}
      <SectionWrapper className="bg-gradient-to-r from-[#1A0F0A] to-[#0F0F0F]">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">METAMORPHOSIS</span>
          <h2 className="text-4xl font-serif text-white">Witness the Glow</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {beforeAfterData.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="relative h-96">
                <img src={item.before} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-2xl font-serif">BEFORE → AFTER</p>
                    <p className="mt-2 text-sm uppercase tracking-wider">{item.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Gallery (masonry + hover cinematic) */}
      <SectionWrapper className="bg-black">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">VISUAL NARRATIVES</span>
          <h2 className="text-4xl font-serif text-white">Our Editorial Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer overflow-hidden rounded-xl shadow-2xl group"
              onClick={() => setLightboxImage(img)}
            >
              <img
                src={img}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-all"></div>
            </motion.div>
          ))}
        </div>
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <img src={lightboxImage} className="max-w-4xl max-h-screen rounded-xl shadow-2xl" />
          </div>
        )}
      </SectionWrapper>

      {/* Luxury Video Showcase (NEW) */}
      <div className="relative h-[600px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-getting-a-facial-treatment-32816-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-white/20 backdrop-blur rounded-full p-6 hover:bg-white/30 transition"
            >
              <FaPlayCircle size={70} className="text-rose-400" />
            </motion.button>
            <h3 className="text-3xl md:text-5xl font-serif mt-6">Experience Beauty Beyond Expectations</h3>
          </div>
        </div>
      </div>

      {/* Spa Experience (PRESERVED - only enhanced styling) */}
      <div
        className="relative h-[550px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
          <div className="text-center text-white px-4">
            <FaSpa className="text-rose-400 text-6xl mx-auto mb-4" />
            <h3 className="text-5xl md:text-6xl font-serif font-light">Relax, Rejuvenate & Glow</h3>
            <p className="mt-4 text-xl max-w-xl mx-auto text-gray-100">
              Escape into our signature spa rituals – a journey of pure serenity.
            </p>
            <button className="mt-8 bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-500 transition shadow-2xl">
              Discover Spa Menu
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section (luxury glow) */}
      <SectionWrapper>
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">INVESTMENT IN BEAUTY</span>
          <h2 className="text-4xl font-serif text-white">Luxury Pricing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-rose-900 to-rose-800 text-white shadow-2xl border border-rose-400"
                  : "bg-gray-900 shadow-xl border border-gray-800"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="text-rose-200 text-sm font-semibold tracking-wider mb-2">✦ BEST SELLER ✦</div>
              )}
              <h3 className="text-2xl font-bold mt-2">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-serif">{plan.price}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaStar className="text-rose-400 text-xs" /> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-rose-600 text-white hover:bg-rose-500"
                }`}
              >
                Choose Experience
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Luxury Membership Section (NEW) */}
      <SectionWrapper className="bg-gradient-to-br from-[#1A0F0A] to-black">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">THE COLLECTOR'S CLUB</span>
          <h2 className="text-4xl font-serif text-white">Membership Royalty</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {membershipPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "bg-rose-900/20 backdrop-blur border border-rose-500 shadow-2xl"
                  : "bg-gray-900/50 border border-gray-800"
              }`}
            >
              {plan.popular && <div className="text-rose-400 text-sm font-bold">PLATINUM ELITE</div>}
              <h3 className="text-2xl font-serif mt-2">{plan.name}</h3>
              <div className="mt-4 text-3xl font-bold text-rose-400">{plan.price}</div>
              <ul className="mt-6 space-y-2">
                {plan.benefits.map((b, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaGem className="text-rose-400 text-xs" /> {b}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-rose-600 text-white py-2 rounded-full hover:bg-rose-500 transition">
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials (premium glass) */}
      <SectionWrapper className="bg-black">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">CLIENT TESTIMONIALS</span>
          <h2 className="text-4xl font-serif text-white">Voices of Glamour</h2>
        </div>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          autoplay={{ delay: 4500 }}
          navigation
          className="mt-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-rose-800/30">
                <FaQuoteLeft className="text-rose-400 text-4xl mb-4" />
                <p className="text-gray-300 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-6">
                  <img src={t.image} className="w-12 h-12 rounded-full border-2 border-rose-400" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <div className="flex text-rose-400">★★★★★</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionWrapper>

      {/* Team Section (luxury circular) */}
      <SectionWrapper className="bg-gradient-to-t from-[#0F0F0F] to-[#1A0F0A]">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">THE ARTISANS</span>
          <h2 className="text-4xl font-serif text-white">Masters of Transformation</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          {teamMembers.map((member, idx) => (
            <motion.div key={idx} whileHover={{ y: -8 }} className="text-center group">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rose-500 shadow-2xl">
                <img src={member.image} className="w-full h-full object-cover group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-white">{member.name}</h3>
              <p className="text-rose-400">{member.role}</p>
              <div className="flex justify-center gap-3 mt-3 text-gray-400">
                <FaInstagram className="hover:text-rose-400 cursor-pointer" />
                <FaFacebookF className="hover:text-rose-400 cursor-pointer" />
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Luxury Appointment Process (NEW Timeline) */}
      <SectionWrapper className="bg-black">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">YOUR JOURNEY</span>
          <h2 className="text-4xl font-serif text-white">The Glamour Ritual</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { step: "01", title: "Consultation", icon: <FaCalendarAlt /> },
            { step: "02", title: "Personalized Design", icon: <GiLipstick /> },
            { step: "03", title: "Luxury Treatment", icon: <FaSpa /> },
            { step: "04", title: "The Reveal", icon: <FaCrown /> },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="bg-rose-900/30 backdrop-blur w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-rose-400 border border-rose-500">
                {item.step}
              </div>
              <div className="mt-4">
                <div className="text-3xl text-rose-400 mx-auto">{item.icon}</div>
                <h3 className="font-bold text-white mt-2">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Booking CTA (premium) */}
      <div className="relative bg-gradient-to-r from-rose-900 to-rose-700 py-24 text-center text-white overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif">Book Your Royal Session</h2>
          <p className="mt-4 text-xl">Limited VIP slots available for celebrity artists.</p>
          <div className="flex gap-6 justify-center mt-10 flex-wrap">
            <button className="bg-white text-rose-900 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 transition">
              Schedule Appointment
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
              Contact Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section (upgraded) */}
      <SectionWrapper className="bg-[#0F0F0F]">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif text-white">Reserve Your Experience</h2>
            <p className="mt-4 text-gray-400">Your VIP concierge will confirm within 1 hour</p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl focus:ring-2 focus:ring-rose-400 text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <select
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option>Signature Hair Couture</option>
                <option>Bridal Atelier</option>
                <option>Spa Rituals</option>
                <option>Lumière Facial</option>
              </select>
              <input
                type="date"
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
              <textarea
                rows={3}
                placeholder="Special requests (allergies, preferred artist...)"
                className="w-full p-3 bg-gray-900 border border-gray-800 rounded-xl text-white"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <button
                type="submit"
                className="bg-rose-600 text-white w-full py-3 rounded-full font-semibold hover:bg-rose-500 transition shadow-lg"
              >
                Request VIP Appointment
              </button>
            </form>
          </div>
          <div className="bg-gray-900 rounded-2xl overflow-hidden p-6 border border-rose-800/30">
            <iframe
              title="map"
              className="w-full h-64 rounded-xl"
              src="https://maps.google.com/maps?q=Beverly+Hills&t=&z=13&output=embed"
            ></iframe>
            <div className="mt-4 space-y-2 text-gray-300">
              <p>
                <FaMapMarkerAlt className="inline text-rose-400" /> 450 Rodeo Drive, Beverly Hills, CA
              </p>
              <p>
                <FaPhoneAlt className="inline text-rose-400" /> +1 (310) 555-1234
              </p>
              <p>
                <FaEnvelope className="inline text-rose-400" /> vip@glamouratelier.com
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Instagram Feed Section (NEW) */}
      <div className="bg-black py-12">
        <div className="text-center">
          <span className="text-rose-400 uppercase tracking-wider">@GLAMOURATELIER</span>
          <h2 className="text-3xl font-serif text-white">Follow Our Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-8">
          {instaFeed.map((img, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.02 }} className="cursor-pointer overflow-hidden">
              <img src={img} className="h-64 w-full object-cover transition hover:scale-110 duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer (multi-layer luxury) */}
      <footer className="bg-black text-white pt-20 pb-8 relative border-t border-rose-900/30">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28...V0Z" fill="#1A0F0A" opacity="0.8"></path>
          </svg>
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-serif text-rose-300">GLAMOUR ATELIER</h2>
            <p className="mt-2 text-gray-400">Where beauty becomes art.</p>
            <div className="flex gap-5 mt-4 text-rose-400 text-xl">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-rose-300">Explore</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li className="hover:text-rose-300">About</li>
              <li className="hover:text-rose-300">Services</li>
              <li className="hover:text-rose-300">Gallery</li>
              <li className="hover:text-rose-300">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-rose-300">Opening Hours</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>Mon-Fri: 9am – 9pm</li>
              <li>Sat: 10am – 7pm</li>
              <li>Sun: By appointment only</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-rose-300">The Gazette</h3>
            <div className="flex mt-3">
              <input
                placeholder="Your email"
                className="p-2 rounded-l w-full text-black bg-gray-200"
              />
              <button className="bg-rose-600 px-4 rounded-r hover:bg-rose-500">→</button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Get exclusives & VIP offers</p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm pt-12 border-t border-gray-800 mt-8">
          © 2025 Glamour Atelier. All rights reserved. Luxury beauty redefined.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-rose-800/30 p-3 z-40 flex justify-between items-center">
        <span className="text-rose-400 text-sm font-semibold">VIP Booking →</span>
        <button className="bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
          Call / WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Home;