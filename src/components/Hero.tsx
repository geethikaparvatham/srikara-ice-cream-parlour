"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SLIDES = [
  {
    image: "/images/storefront.png",
    title: "Srikara Ice Cream Parlour",
    subtitle: "Premium Masqati Ice Cream Experience",
    ctaText: "Explore Flavours",
    ctaLink: "/flavours",
  },
  {
    image: "/images/icecream_scoops.png",
    title: "Every Scoop Tells A Story",
    subtitle: "Fresh • Creamy • Delicious",
    ctaText: "Discover Our Story",
    ctaLink: "/#story",
  },
  {
    image: "/images/family_parlour.png",
    title: "A Perfect Place For Family & Friends",
    subtitle: "Indulge in sweet memories together",
    ctaText: "Visit Us Today",
    ctaLink: "/#contact",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [current]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Swipe support triggers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-[95vh] min-h-[550px] bg-black overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Parallax / Zoom Image background */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
            className="relative w-full h-full"
          >
            <Image
              src={SLIDES[current].image}
              alt={SLIDES[current].title}
              fill
              priority
              className="object-cover object-center brightness-50"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center text-white z-10 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-4 text-[#FFD447] text-xs font-bold uppercase tracking-widest">
                <Sparkles size={12} className="animate-spin-slow" />
                <span>Premium Quality Since 2025</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight mb-4 drop-shadow-lg max-w-3xl leading-tight">
                {SLIDES[current].title}
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-[#FFF8EC] mb-8 max-w-xl drop-shadow">
                {SLIDES[current].subtitle}
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href={SLIDES[current].ctaLink}
                  className="bg-[#005BFF] hover:bg-[#005BFF]/95 text-white font-extrabold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 tracking-wide text-base inline-flex items-center"
                >
                  {SLIDES[current].ctaText}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left/Right Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white z-20 transition-all duration-200 hidden md:block hover:scale-105"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white z-20 transition-all duration-200 hidden md:block hover:scale-105"
        aria-label="Next Slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#FFD447] scale-125 shadow-md w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
