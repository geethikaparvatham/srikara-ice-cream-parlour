"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, ThermometerSnowflake, Star } from "lucide-react";
import { motion } from "framer-motion";

const PROMISES = [
  {
    icon: ThermometerSnowflake,
    title: "-18°C Cold Chain Integrity",
    desc: "Strict temperature controls maintain texture density, preventing crystal formations so every bite is velvety soft.",
  },
  {
    icon: ShieldCheck,
    title: "100% Pure Buffalo Milk Fat",
    desc: "We exclusively serve Masqati Ice Cream products containing pure dairy fat, without vegetable oil additions.",
  },
  {
    icon: CheckCircle2,
    title: "Sourced Daily & Local",
    desc: "Fresh, premium stock is delivered daily from Masqati's production centers directly to our parlour.",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-20 bg-gradient-to-b from-white dark:from-[#041224] to-white dark:to-[#0A2540] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-left flex flex-col space-y-6"
          >
            <div>
              <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
                Uncompromising Standards
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] tracking-tight leading-tight">
                Our Quality Promise
              </h2>
              <div className="w-16 h-1 bg-[#FF7A00] mt-4 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-[#0B2E59] dark:text-[#FFF8EC]/80 leading-relaxed font-medium">
              We understand that the perfect ice cream is a delicate craft. That is why Srikara Ice Cream Parlour adheres to strict quality guidelines to guarantee that every scoop served is as clean, rich, and delicious as possible.
            </p>

            {/* Promises list */}
            <div className="space-y-6 pt-2">
              {PROMISES.map((prom, idx) => {
                const IconComponent = prom.icon;
                return (
                  <div key={prom.title} className="flex items-start space-x-4">
                    <div className="mt-1 p-2 rounded-lg bg-[#005BFF]/10 text-[#005BFF] flex-shrink-0">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2E59] dark:text-[#FFF8EC] font-display">{prom.title}</h3>
                      <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/75 mt-1 font-medium">{prom.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/parlour_interior.png"
                alt="Hygienic Ice Cream Cabinet"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Visual Assurance Stamp */}
            <motion.div
              initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
              whileInView={{ rotate: -5, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-6 -left-4 bg-[#FF7A00] text-white py-3 px-5 rounded-2xl shadow-xl flex items-center space-x-2 border-2 border-white"
            >
              <Star size={16} fill="white" className="animate-pulse" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                100% Quality Assured
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
