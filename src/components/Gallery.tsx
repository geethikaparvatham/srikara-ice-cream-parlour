"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_ITEMS = [
  { src: "/images/storefront.png", alt: "Srikara Storefront Exterior", size: "md:col-span-2 md:row-span-1 h-[250px] sm:h-[300px]" },
  { src: "/images/parlour_interior.png", alt: "Clean & Spacious Interior Seating", size: "md:col-span-1 md:row-span-2 h-[250px] sm:h-[620px]" },
  { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80", alt: "Premium Chocolate Fudge Sundae", size: "md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]" },
  { src: "/images/family_parlour.png", alt: "Families Sharing Memorable Moments", size: "md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]" },
  { src: "/images/pistachio_cones.png", alt: "Gourmet Pistachio & Vanilla Cones", size: "md:col-span-1 md:row-span-2 h-[250px] sm:h-[620px]" },
  { src: "/images/icecream_scoops.png", alt: "Signature Gourmet Scoops Array", size: "md:col-span-2 md:row-span-1 h-[250px] sm:h-[300px]" },
  { src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", alt: "Belgian Dark Cocoa Tub Selection", size: "md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]" },
  { src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80", alt: "Fresh Fruit Fusion Splashes", size: "md:col-span-1 md:row-span-1 h-[250px] sm:h-[300px]" },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIdx(index);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-[#FFF8EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] tracking-tight">
            Our Parlour Gallery
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Take a visual tour of Srikara Ice Cream Parlour—our clean setup, happy guests, and mouthwatering scoop designs.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden rounded-3xl border-2 border-white shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer ${item.size}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#0B2E59]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <div className="mx-auto w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/40 mb-2 scale-75 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 size={18} />
                  </div>
                  <p className="text-sm font-bold tracking-wide uppercase drop-shadow">
                    {item.alt}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 select-none"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-50 cursor-pointer"
              aria-label="Close Gallery"
            >
              <X size={24} />
            </button>

            {/* Left controller */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-40 hidden sm:block cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right controller */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all z-40 hidden sm:block cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image Stage */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full h-[70vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={GALLERY_ITEMS[activeIdx].src}
                  alt={GALLERY_ITEMS[activeIdx].alt}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Photo Caption */}
              <div className="text-center text-white/80 mt-4 max-w-xl text-sm font-semibold">
                {activeIdx + 1} / {GALLERY_ITEMS.length} • {GALLERY_ITEMS[activeIdx].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
