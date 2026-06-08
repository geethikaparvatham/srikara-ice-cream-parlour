"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, Heart, Sparkles, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const BADGES = [
  { icon: Award, label: "Premium Quality", color: "bg-[#005BFF]/10 text-[#005BFF] border-[#005BFF]/20" },
  { icon: ShieldCheck, label: "Hygienic Environment", color: "bg-[#184F2D]/10 text-[#184F2D] border-[#184F2D]/20" },
  { icon: Heart, label: "Family Friendly Atmosphere", color: "bg-[#FF7A00]/10 text-[#FF7A00] border-[#FF7A00]/20" },
  { icon: Sparkles, label: "Fresh Daily Stock", color: "bg-[#FFD447]/20 text-[#FF7A00] border-[#FFD447]/40" },
  { icon: Star, label: "Premium Taste", color: "bg-[#005BFF]/10 text-[#0B2E59] border-[#005BFF]/20" },
  { icon: CheckCircle, label: "Trusted Brand", color: "bg-[#0B2E59]/10 text-[#0B2E59] border-[#0B2E59]/20" },
];

export default function Welcome() {
  return (
    <section id="about" className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-20 right-[-10%] w-72 h-72 bg-[#FFD447]/20 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-10 left-[-10%] w-96 h-96 bg-[#005BFF]/10 rounded-full blur-3xl -z-10 animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Storefront Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/storefront.png"
                alt="Srikara Ice Cream Parlour Storefront"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Brand Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-white py-4 px-6 rounded-2xl shadow-xl border border-brand-yellow flex items-center space-x-3"
            >
              <div className="relative w-10 h-10 bg-[#FFF8EC] rounded-full p-1 border border-brand-yellow/30">
                <Image
                  src="/images/masqati_logo.png"
                  alt="Masqati Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-[10px] text-[#005BFF] font-bold tracking-widest leading-none">AUTHORIZED</p>
                <h4 className="text-sm font-extrabold text-[#0B2E59]">Masqati Retailer</h4>
              </div>
            </motion.div>
          </motion.div>

          {/* Welcoming Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div>
              <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
                Pure Happiness In Every Scoop
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] tracking-tight leading-tight">
                Welcome to Srikara Ice Cream Parlour
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#0B2E59]/80 leading-relaxed font-medium">
              Located in the spiritual town of Yadagirigutta, Telangana, Srikara Ice Cream Parlour brings you the legendary, ultra-creamy experience of **Masqati Ice Cream**. We are dedicated to serving premium, hygienic, and authentic milk-rich ice cream varieties.
            </p>
            <p className="text-sm sm:text-base text-[#0B2E59]/70 leading-relaxed">
              Whether you are looking for timeless classics like Vanilla and Chocolate, local favorites like Kesar Badam and Pista, or indulgent Sundaes, we provide a spacious, immaculate, and family-friendly seating environment to share happy moments.
            </p>

            {/* Badges Grid */}
            <div className="pt-4 grid grid-cols-2 gap-3 sm:gap-4">
              {BADGES.map((badge, idx) => {
                const IconComponent = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.4 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`flex items-center space-x-2 sm:space-x-3 px-3 py-3 sm:py-3.5 rounded-xl border glass shadow-sm transition-all cursor-default ${badge.color}`}
                  >
                    <IconComponent size={18} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-bold leading-tight">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
