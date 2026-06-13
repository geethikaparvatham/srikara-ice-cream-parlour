"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[95vh] min-h-[550px] bg-white dark:bg-[#0A2540] overflow-hidden select-none"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="https://v.ftcdn.net/06/16/02/78/700_F_616027864_wUDUFPwOFhHamoEyND7jHzTrco23WCoB_NW.mp4?token=1781624787_tKfMSrVDyy5zzlrL9VhEMoHi9wFSv8Ad_FWxn7lrT5E"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-white/60 dark:bg-[#0B2E59]/40 mix-blend-overlay dark:mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-white/80 dark:from-[#0A2540]/90 dark:via-[#0A2540]/40 dark:to-[#0A2540]/80 pointer-events-none" />
      </div>

      {/* Floating Sparkles */}
      <div className="absolute top-1/4 left-10 md:left-20 text-[#FFD447] animate-float-slow pointer-events-none hidden sm:block">
        <Sparkles size={32} />
      </div>
      <div className="absolute bottom-1/3 right-10 md:right-20 text-[#FFD447] animate-float-fast pointer-events-none hidden sm:block">
        <Sparkles size={24} />
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-[#0B2E59] dark:text-white mb-4 sm:mb-6 leading-[1.1] drop-shadow-lg tracking-tight transition-colors duration-300">
            Welcome to Ice Cream World
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2E59]/90 dark:text-white/90 max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow-md leading-relaxed transition-colors duration-300">
            Premium Masqati Ice Cream Experience
          </p>

          <Link
            href="/flavours"
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 font-bold text-white bg-[#FF7A00] rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,122,0,0.4)] transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
            <span className="relative z-10 text-lg sm:text-xl tracking-wide">
              Shop Now
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
      >
        <span className="text-[#0B2E59]/70 dark:text-white/70 text-xs font-semibold tracking-widest uppercase mb-2 transition-colors duration-300">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-[#0B2E59]/40 dark:border-white/40 rounded-full flex justify-center p-1 transition-colors duration-300">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-2 bg-[#FFD447] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
