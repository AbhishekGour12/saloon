"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, FaCut, FaUser, FaCalendarAlt, 
  FaCheckCircle, FaChevronRight, FaChevronLeft, FaRegEnvelope 
} from "react-icons/fa";

const steps = [
  { name: "Branch", icon: <FaMapMarkerAlt /> },
  { name: "Service", icon: <FaCut /> },
  { name: "Stylist", icon: <FaUser /> },
  { name: "Date & Time", icon: <FaCalendarAlt /> },
];

const branches = [
  { id: "vijay_nagar", name: "VIP Lounge, Vijay Nagar", address: "101, Near Vijay Nagar Sq, Indore" },
  { id: "ab_road", name: "Signature Studio, AB Road", address: "Orbit Mall Compound, AB Road, Indore" },
];

const services = [
  { id: "hair", name: "Signature Hair Cut (₹1,800)" },
  { id: "color", name: "Balayage Colour Couture (₹7,500)" },
  { id: "skin", name: "Lumière Platinum Facial (₹6,000)" },
  { id: "spa", name: "Deep Aromatherapy Spa (₹4,000)" },
  { id: "bridal", name: "Bridal HD Airbrush Makeup (₹18,000)" },
];

const stylists = [
  { id: "any", name: "Any Available Master Stylist", role: "Elite Team Director" },
  { id: "adriana", name: "Adriana Lopez", role: "Master Colorist & Stylist" },
  { id: "james", name: "James Carter", role: "Celebrity Cut Director" },
  { id: "maya", name: "Maya Singh", role: "Aesthetician & Spa Director" },
];

// Helper to generate next 7 days starting tomorrow
const getNextDays = () => {
  const list = [];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  for (let i = 1; i <= 7; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    list.push({
      dateStr: d.toISOString().split("T")[0],
      dayName: days[d.getDay()],
      dateNum: d.getDate(),
      monthName: months[d.getMonth()]
    });
  }
  return list;
};

const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];

export default function Booking() {
  const [step, setStep] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const [customerInfo, setCustomerInfo] = useState({ name: "", phone: "", email: "", notes: "" });
  const [confirmed, setConfirmed] = useState(false);

  const nextStep = () => {
    if (step === 0 && !selectedBranch) return alert("Please select a branch.");
    if (step === 1 && !selectedService) return alert("Please select a service.");
    if (step === 2 && !selectedStylist) return alert("Please select a stylist.");
    if (step === 3 && (!selectedDate || !selectedTime)) return alert("Please select date and time.");
    
    setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.phone) return alert("Please fill name and phone.");
    setConfirmed(true);
  };

  const getBranchLabel = () => branches.find(b => b.id === selectedBranch)?.name || "";
  const getServiceLabel = () => services.find(s => s.id === selectedService)?.name || "";
  const getStylistLabel = () => stylists.find(st => st.id === selectedStylist)?.name || "";

  return (
    <section id="booking" className="relative py-28 bg-[#080808]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#C5A880]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-3 block">VIP Concierge</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">
            Reserve Your <span className="gold-text">Experience</span>
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed">
            Reserve a VIP appointment slot instantly. Your digital booking will be synchronized with our outlet receptionists.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-[36px] border-white/[0.04] p-8 md:p-12 shadow-2xl relative min-h-[500px]">
          
          <AnimatePresence mode="wait">
            {!confirmed ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Step Progress indicators */}
                {step < 4 && (
                  <div className="flex justify-between items-center mb-12 relative max-w-lg mx-auto">
                    <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/10 -translate-y-1/2 z-0" />
                    {steps.map((st, idx) => (
                      <div key={idx} className="relative z-10 flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition duration-300 ${
                          step >= idx
                            ? "bg-[#C5A880] text-[#080808] border-[#C5A880]"
                            : "bg-[#080808] text-white/50 border-white/10"
                        }`}>
                          {st.icon}
                        </div>
                        <span className={`text-[9px] uppercase tracking-wider mt-2 font-semibold ${step >= idx ? "text-[#C5A880]" : "text-white/40"}`}>
                          {st.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 0: Branch selection */}
                {step === 0 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-xl text-white font-bold mb-6 text-center">Select Preferred Branch</h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                      {branches.map(b => (
                        <div
                          key={b.id}
                          onClick={() => setSelectedBranch(b.id)}
                          className={`p-6 rounded-2xl border cursor-pointer transition ${
                            selectedBranch === b.id
                              ? "bg-white/[0.03] border-[#C5A880] shadow-xl"
                              : "bg-transparent border-white/5 hover:border-white/20"
                          }`}
                        >
                          <h4 className="font-serif text-lg font-bold text-white mb-2">{b.name}</h4>
                          <p className="text-white/60 text-xs font-light">{b.address}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 1: Service selection */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-xl text-white font-bold mb-6 text-center">Select Signature Service</h3>
                    <div className="flex flex-col gap-3 max-w-xl mx-auto">
                      {services.map(s => (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                            selectedService === s.id
                              ? "bg-white/[0.03] border-[#C5A880]"
                              : "bg-transparent border-white/5 hover:border-white/20"
                          }`}
                        >
                          <span className="text-xs uppercase tracking-widest text-white/90 font-medium">{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Stylist selection */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <h3 className="font-serif text-xl text-white font-bold mb-6 text-center">Select Master Artist</h3>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      {stylists.map(st => (
                        <div
                          key={st.id}
                          onClick={() => setSelectedStylist(st.id)}
                          className={`p-5 rounded-2xl border cursor-pointer transition ${
                            selectedStylist === st.id
                              ? "bg-white/[0.03] border-[#C5A880]"
                              : "bg-transparent border-white/5 hover:border-white/20"
                          }`}
                        >
                          <h4 className="font-serif text-md font-bold text-white">{st.name}</h4>
                          <p className="text-[#C5A880] text-[10px] uppercase tracking-wider mt-1">{st.role}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Date and Time selection */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto">
                    <h3 className="font-serif text-xl text-white font-bold mb-6 text-center">Choose Date & Time</h3>
                    
                    {/* Date Picker Grid */}
                    <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 mb-8">
                      {getNextDays().map(d => (
                        <div
                          key={d.dateStr}
                          onClick={() => setSelectedDate(d.dateStr)}
                          className={`p-3 rounded-xl border text-center cursor-pointer transition flex flex-col justify-center ${
                            selectedDate === d.dateStr
                              ? "bg-[#C5A880] border-[#C5A880] text-[#080808]"
                              : "bg-transparent border-white/5 hover:border-white/20 text-white"
                          }`}
                        >
                          <span className="text-[9px] uppercase tracking-wider opacity-70">{d.dayName}</span>
                          <span className="text-xl font-bold font-serif my-0.5">{d.dateNum}</span>
                          <span className="text-[9px] uppercase tracking-wider opacity-70">{d.monthName}</span>
                        </div>
                      ))}
                    </div>

                    {/* Time Slots Grid */}
                    <h4 className="text-white/70 text-xs uppercase tracking-widest font-bold mb-4 text-center">Available Hour Slots</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {timeSlots.map(t => (
                        <div
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`p-3 rounded-lg border text-center cursor-pointer text-xs transition ${
                            selectedTime === t
                              ? "bg-white/10 border-[#C5A880] text-[#C5A880] font-bold"
                              : "bg-transparent border-white/5 hover:border-white/15 text-white/75"
                          }`}
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Personal Info Details */}
                {step === 4 && (
                  <motion.form 
                    initial={{ opacity: 0, y: 15 }} 
                    animate={{ opacity: 1, y: 0 }}
                    onSubmit={handleConfirmSubmit}
                    className="max-w-xl mx-auto"
                  >
                    <h3 className="font-serif text-xl text-white font-bold mb-2 text-center">VIP Guest Information</h3>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest text-center mb-8">Confirming reservation for Indore branches</p>

                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] uppercase tracking-wider text-white/60 block mb-1">Full Guest Name</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          className="w-full bg-[#080808] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C5A880] transition text-sm"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] uppercase tracking-wider text-white/60 block mb-1">WhatsApp Mobile Contact</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91"
                            value={customerInfo.phone}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                            className="w-full bg-[#080808] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C5A880] transition text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] uppercase tracking-wider text-white/60 block mb-1">Email (For Digital Ticket)</label>
                          <input
                            type="email"
                            value={customerInfo.email}
                            onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                            className="w-full bg-[#080808] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C5A880] transition text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[9px] uppercase tracking-wider text-white/60 block mb-1">Special Requests (Allergies, Beverages...)</label>
                        <textarea
                          rows={2}
                          value={customerInfo.notes}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                          className="w-full bg-[#080808] border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-[#C5A880] transition text-xs"
                          placeholder="E.g., prefer iced coffee, allergy to nut oils..."
                        />
                      </div>
                    </div>
                  </motion.form>
                )}

                {/* Form Navigation Controls */}
                <div className="flex items-center justify-between border-t border-white/5 pt-8 mt-12 max-w-xl mx-auto">
                  {step > 0 && (
                    <button
                      onClick={prevStep}
                      className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 hover:text-[#C5A880] transition font-bold"
                    >
                      <FaChevronLeft size={10} /> Back
                    </button>
                  )}
                  
                  {step < 4 ? (
                    <button
                      onClick={nextStep}
                      className="ml-auto flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-6 py-3 bg-[#C5A880] text-[#080808] rounded-full shadow-lg hover:scale-[1.01] active:scale-95 transition"
                    >
                      Continue <FaChevronRight size={10} />
                    </button>
                  ) : (
                    <button
                      onClick={handleConfirmSubmit}
                      className="ml-auto flex items-center gap-2 text-xs uppercase tracking-widest font-bold px-8 py-3.5 bg-gradient-to-r from-[#C5A880] to-[#A6875E] text-[#080808] rounded-full shadow-lg hover:scale-[1.01] active:scale-95 transition"
                    >
                      Confirm Booking <FaCheckCircle size={12} className="ml-1" />
                    </button>
                  )}
                </div>

              </motion.div>
            ) : (
              // STEP 5: Animated confirmation card (envelope reveal)
              <motion.div
                key="booking-confirmed"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 100 }}
                className="flex flex-col items-center text-center py-8"
              >
                
                {/* Envelope opening reveal */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="text-[#C5A880] mb-8 relative"
                >
                  <FaRegEnvelope size={72} className="opacity-90 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#080808] p-1.5 rounded-full">
                    <FaCheckCircle className="text-[#C5A880] text-3xl" />
                  </div>
                </motion.div>

                <h3 className="font-serif text-3xl text-white font-bold mb-3">Reservation Placed</h3>
                <p className="text-[#C5A880] text-[10px] uppercase tracking-widest font-bold mb-6">VIP Digital Pass Issued</p>
                
                {/* Confirmation Ticket Details */}
                <div className="w-full max-w-sm rounded-2xl bg-white/[0.02] border border-white/5 p-6 text-left space-y-3.5 text-xs text-white/90 relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 right-4 w-[1px] bg-dashed bg-white/5" />
                  
                  <div className="flex justify-between">
                    <span className="opacity-60">Guest Name</span>
                    <span className="font-bold text-white">{customerInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Reserved Branch</span>
                    <span className="font-bold text-[#C5A880]">{getBranchLabel()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Service</span>
                    <span className="font-bold text-white">{getServiceLabel()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-60">Stylist Assigned</span>
                    <span className="font-bold text-white">{getStylistLabel()}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/5 pt-3.5">
                    <span className="opacity-60">Date & Hour</span>
                    <span className="font-bold text-[#C5A880]">{selectedDate} at {selectedTime}</span>
                  </div>
                </div>

                <p className="text-white/60 text-[10px] leading-relaxed max-w-xs mt-8">
                  A verification confirmation ticket has been dispatched to your WhatsApp number <strong className="text-white">{customerInfo.phone}</strong>. Welcome to Nikkisha's.
                </p>

                <button
                  onClick={() => {
                    setConfirmed(false);
                    setStep(0);
                    setSelectedBranch("");
                    setSelectedService("");
                    setSelectedStylist("");
                    setSelectedDate("");
                    setSelectedTime("");
                    setCustomerInfo({ name: "", phone: "", email: "", notes: "" });
                  }}
                  className="mt-8 text-[9px] uppercase tracking-widest font-bold border border-white/10 hover:border-[#C5A880] text-white/80 hover:text-[#C5A880] px-6 py-3 rounded-full transition"
                >
                  Create New Reservation
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
