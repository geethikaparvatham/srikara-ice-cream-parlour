"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "What flavours are available at Srikara Ice Cream Parlour?",
    a: "We offer a rich menu of over 50+ gourmet varieties sourced directly from Masqati Ice Cream. This includes classics like Chocolate Delight, Vanilla Classic, and Strawberry Bliss, premium specialties like Belgian Chocolate and Butterscotch Crunch, and authentic local Indian treats like Kesar Badam, Kulfi, and Pista Paradise.",
  },
  {
    q: "What are your store operating hours?",
    a: "We are open seven days a week, from Monday to Sunday, from 10:00 AM to 10:00 PM. We welcome you to visit us at any time during these hours for scoops, cones, and family packs.",
  },
  {
    q: "Is family seating available at the Yadagirigutta parlour?",
    a: "Yes, we feature a clean, spacious, and air-conditioned family seating area. The parlour layout is designed to comfortably accommodate children, couples, and large family groups.",
  },
  {
    q: "Is vehicle parking available near the parlour?",
    a: "Yes! There is dedicated street parking available in front of Srikara Ice Cream Parlour, making it convenient and safe for customers driving cars or riding two-wheelers.",
  },
  {
    q: "Do you accept bulk party orders?",
    a: "Absolutely! We supply premium ice creams, family tubs, and custom sundae combinations for birthdays, family get-togethers, school events, and special occasions. Call us at 9030303222 or contact us via WhatsApp to arrange party packages.",
  },
  {
    q: "Where exactly is Srikara Ice Cream Parlour located?",
    a: "We are situated on Main Road, Sivalayam Veedhi, in the temple town of Yadagirigutta, Nalgonda, Telangana. You can scroll down to our contact section to view the location on Google Maps or click 'Get Directions' to navigate directly using GPS.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white dark:from-[#0A2540] to-[#FFF8EC] dark:to-[#041224] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass rounded-2xl border border-[#0B2E59]/10 bg-white/ dark:bg-[#0A2540]/ overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:text-[#005BFF] dark:hover:text-[#FFD447] transition-colors focus:outline-none"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle size={18} className="text-[#005BFF]/80 dark:!text-[#FFD447] flex-shrink-0" />
                    <span className="font-bold text-sm sm:text-base leading-snug text-[#0B2E59] dark:!text-[#0B2E59]">{faq.q}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#0B2E59] dark:text-[#FFF8EC] flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#0B2E59] dark:!text-[#0B2E59] font-medium leading-relaxed border-t border-[#0B2E59]/5 dark:border-[#0B2E59]/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
