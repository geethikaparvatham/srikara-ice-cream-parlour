"use client";

import React from "react";
import Image from "next/image";
import { Phone, Navigation, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function VisitCTA() {
  return (
    <section className="relative w-full py-24 flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/storefront.png"
          alt="Srikara Storefront Banner"
          fill
          className="object-cover object-center brightness-40 scale-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-[#0B2E59]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 text-center text-white z-10 flex flex-col items-center">
        
        {/* Small badge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-1 bg-[#FF7A00] text-white px-4 py-1.5 rounded-full border border-white/20 mb-6 text-xs font-bold uppercase tracking-wider"
        >
          <Heart size={12} fill="white" className="animate-pulse" />
          <span>Yadagirigutta Store</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#FFD447] mb-6 drop-shadow-md leading-tight"
        >
          Come Experience Happiness In Every Scoop
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-lg text-white/90 leading-relaxed font-semibold max-w-2xl mb-10 drop-shadow"
        >
          Take a sweet break after a temple visit or drive down for an evening dessert treat. Srikara Ice Cream Parlour welcomes you with over 50+ classic and gourmet Masqati flavours in a sparkling clean, family-friendly seating environment.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="tel:9030303222"
            className="flex items-center justify-center space-x-2 bg-white dark:bg-[#0A2540] text-[#0B2E59] dark:text-[#FFF8EC] hover:bg-white/95 px-8 py-4 rounded-full font-extrabold text-base w-full sm:w-60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={18} fill="#0B2E59" />
            <span>Call 9030303222</span>
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Srikara+Ice+Cream+Parlour+Yadagirigutta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#FF7A00] hover:bg-[#FF7A00]/95 text-white px-8 py-4 rounded-full font-extrabold text-base w-full sm:w-60 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-[#FF7A00]"
          >
            <Navigation size={18} fill="white" />
            <span>Get Directions</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
