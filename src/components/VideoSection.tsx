"use client";

import React from "react";
import Image from "next/image";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/family_parlour.png"
          alt="Parlour Vibe Background"
          fill
          priority
          className="object-cover object-center brightness-40 scale-105"
        />
        {/* Color Overlay */}
        <div className="absolute inset-0 bg-[#0B2E59]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Floating Animated Sparks */}
      <div className="absolute top-12 left-12 text-[#FFD447] animate-float-slow pointer-events-none hidden md:block">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-12 right-12 text-[#FFD447] animate-float-fast pointer-events-none hidden md:block">
        <Sparkles size={32} />
      </div>

      {/* Center Content */}
      <div className="relative max-w-3xl mx-auto px-4 text-center text-white z-10 flex flex-col items-center">
        
        {/* Pulsing Play Button Interface */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative mb-6 cursor-pointer group"
        >
          {/* Pulsing rings */}
          <div className="absolute inset-0 rounded-full bg-white/20 scale-125 animate-ping" />
          <div className="absolute inset-0 rounded-full bg-[#005BFF]/30 scale-150 animate-pulse" />
          
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#005BFF] flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300 border-2 border-white">
            <Play size={28} fill="#005BFF" className="ml-1 text-[#005BFF]" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-[#FFD447] mb-4 drop-shadow-md leading-tight"
        >
          More Than Just Ice Cream
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-lg text-white/90 leading-relaxed font-semibold max-w-xl drop-shadow"
        >
          At Srikara, we believe every scoop is an invitation to connect. We are not just serving Hyderabad's finest Masqati treats; we are providing a warm, cheerful spot for families to share laughter, friends to catch up, and sweet memories to grow.
        </motion.p>
      </div>
    </section>
  );
}
