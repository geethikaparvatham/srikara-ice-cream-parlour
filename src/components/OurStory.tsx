"use client";

import React from "react";
import { Milestone, ShieldAlert, Heart } from "lucide-react";
import { motion } from "framer-motion";

const STORY_ITEMS = [
  {
    tag: "Our Vision",
    title: "The Foundation",
    description: "Srikara Ice Cream Parlour was envisioned to provide local families and visiting pilgrims a highly hygienic, modern space to enjoy premium dairy desserts.",
    icon: Milestone,
    gradient: "from-[#005BFF] to-[#0B2E59]",
    iconColor: "text-[#005BFF]",
    bgColor: "bg-[#005BFF]/10",
  },
  {
    tag: "Partnership",
    title: "Masqati Collaboration",
    description: "To ensure absolute taste superiority, we partnered with Masqati Dairy. Sourcing ice creams made from pure, rich buffalo milk for creamy perfection.",
    icon: ShieldAlert,
    gradient: "from-[#FF7A00] to-[#E65C40]",
    iconColor: "text-[#FF7A00]",
    bgColor: "bg-[#FF7A00]/10",
  },
  {
    tag: "The Experience",
    title: "Premium Standards",
    description: "With advanced sub-zero storage at -18°C, Srikara has evolved into a local landmark focusing on community engagement and quality first.",
    icon: Heart,
    gradient: "from-[#184F2D] to-[#0B2E59]",
    iconColor: "text-[#184F2D]",
    bgColor: "bg-[#184F2D]/10",
  },
];

export default function OurStory() {
  return (
    <section id="story" className="py-24 bg-[#FFF8EC] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            The Srikara Story
          </h2>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-6 rounded-full" />
        </div>

        {/* 3 Card Unique Arrangement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STORY_ITEMS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Connecting Line (Desktop only) */}
                {idx !== 2 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#0B2E59]/20 to-transparent z-0" />
                )}

                {/* Card */}
                <div className="h-full flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl bg-white/70 glass border border-[#0B2E59]/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative z-10 overflow-hidden">
                  
                  {/* Top Gradient Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Icon Container */}
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${item.bgColor} border border-white shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    <IconComponent size={32} className={item.iconColor} />
                  </div>

                  {/* Tag */}
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold ${item.bgColor} ${item.iconColor} mb-4`}>
                    {item.tag}
                  </span>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-[#0B2E59] mb-4 font-display leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0B2E59]/80 leading-relaxed font-medium">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
