"use client";

import React, { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  {
    name: "Ramesh Kumar",
    location: "Hyderabad",
    stars: 5,
    text: "Srikara is the best thing that happened to Yadagirigutta! The ice creams are incredibly thick and creamy, and the seating area is kept spotlessly clean. Mango Magic and Kesar Badam are absolutely top-notch.",
  },
  {
    name: "Priya Sharma",
    location: "Local Resident",
    stars: 5,
    text: "Absolutely love their hygiene standards! The parlour is spacious, air-conditioned, and family-friendly. Because they retail official Masqati Ice Creams, you can taste the pure buffalo milk fat richness in every bite.",
  },
  {
    name: "Srinivas Rao",
    location: "Telangana Pilgrim",
    stars: 5,
    text: "Excellent service and a massive variety of flavours. Our kids went crazy for the Double Chocolate Fudge Sundaes. It's the perfect spot to cool down and relax with family after visiting the temple.",
  },
  {
    name: "Anitha Reddy",
    location: "Yadadri",
    stars: 5,
    text: "The staff is extremely polite and helps you choose flavours patiently. We regularly buy their Family Packs of Butterscotch and Pista for our family events. The quality is consistent and premium.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 6000);
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FFF8EC] to-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-20 left-[-5%] w-72 h-72 bg-[#005BFF]/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] tracking-tight">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass p-8 sm:p-12 rounded-3xl border border-[#0B2E59]/10 shadow-lg bg-white/70 max-w-2xl text-left relative flex flex-col space-y-4"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 right-8 text-[#005BFF]/15">
                <Quote size={64} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 text-[#FFD447]">
                {Array.from({ length: REVIEWS[current].stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#FFD447" strokeWidth={0} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg text-[#0B2E59]/90 leading-relaxed font-semibold italic">
                "{REVIEWS[current].text}"
              </p>

              {/* Reviewer Meta */}
              <div className="border-t border-[#0B2E59]/10 pt-4 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#005BFF]/10 flex items-center justify-center font-bold text-[#005BFF] text-sm border border-[#005BFF]/20 select-none">
                  {REVIEWS[current].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#0B2E59] font-display text-sm">{REVIEWS[current].name}</h4>
                  <p className="text-[10px] sm:text-xs text-[#0B2E59]/60 leading-none">{REVIEWS[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border-2 border-[#0B2E59]/20 text-[#0B2E59] hover:bg-[#005BFF] hover:border-[#005BFF] hover:text-white transition-all shadow-sm cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex space-x-2">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#005BFF] scale-125 w-6" : "bg-[#0B2E59]/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border-2 border-[#0B2E59]/20 text-[#0B2E59] hover:bg-[#005BFF] hover:border-[#005BFF] hover:text-white transition-all shadow-sm cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
