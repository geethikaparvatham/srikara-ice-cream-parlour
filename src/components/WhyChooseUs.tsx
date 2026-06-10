"use client";

import React from "react";
import { Leaf, ShieldCheck, Sparkles, Heart, Award, Percent, Smile, IceCream } from "lucide-react";
import { motion } from "framer-motion";

const VALUES = [
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description: "Sourced from 100% pure buffalo milk and fresh natural flavorings with no synthetic emulsifiers.",
    color: "text-[#184F2D] bg-[#184F2D]/10 border-[#184F2D]/20",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Storage",
    description: "Stored under strict sub-zero temperature conditions (-18°C) in high-efficiency cooling freezers.",
    color: "text-[#005BFF] bg-[#005BFF]/10 border-[#005BFF]/20",
  },
  {
    icon: Sparkles,
    title: "Fresh Daily Stock",
    description: "Daily inventory updates ensure that you experience rich texture and fresh creaminess in every bite.",
    color: "text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/20",
  },
  {
    icon: Heart,
    title: "Family Friendly Environment",
    description: "Clean, spacious seating layout designed for children, couples, and family group visits.",
    color: "text-[#FF4E72] bg-[#FF4E72]/10 border-[#FF4E72]/20",
  },
  {
    icon: Award,
    title: "Trusted Masqati Brand",
    description: "Authorized seller of Masqati Ice Cream, carrying 50+ years of Hyderabad's dairy legacy.",
    color: "text-[#0B2E59] dark:text-[#FFF8EC] bg-[#0B2E59]/10 border-[#0B2E59]/20",
  },
  {
    icon: Percent,
    title: "Affordable Pricing",
    description: "Top-tier premium quality ice cream treats priced fairly to accommodate daily family sweets cravings.",
    color: "text-[#184F2D] bg-[#184F2D]/10 border-[#184F2D]/20",
  },
  {
    icon: Smile,
    title: "Excellent Customer Service",
    description: "Friendly, courteous parlour staff committed to serving you with a happy smile.",
    color: "text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/20",
  },
  {
    icon: IceCream,
    title: "Wide Variety of Flavours",
    description: "Over 50+ delicious varieties spanning cups, cones, family packs, sundaes, and local kulfis.",
    color: "text-[#005BFF] bg-[#005BFF]/10 border-[#005BFF]/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white dark:from-[#0A2540] to-[#FFF8EC] dark:to-[#041224] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 left-[-5%] w-80 h-80 bg-[#005BFF]/5 rounded-full blur-3xl -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-[-5%] w-80 h-80 bg-[#FFD447]/10 rounded-full blur-3xl -z-10 animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] tracking-tight">
            Our Quality Standards
          </h2>
          <p className="text-base text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-4 font-medium">
            We combine high-end international storage tech with local dairy heritage to bring you the best scoop in town.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUES.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-6 sm:p-8 rounded-2xl glass shadow-sm hover:shadow-lg border border-[#0B2E59]/10 bg-white/ dark:bg-[#0A2540]/ flex flex-col text-left transition-all duration-300"
              >
                {/* Icon Wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${val.color}`}>
                  <IconComponent size={24} />
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-[#FFF8EC] mb-3 font-display">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/80 leading-relaxed font-medium flex-grow">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
