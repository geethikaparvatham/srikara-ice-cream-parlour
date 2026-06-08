"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const CATEGORIES = [
  {
    title: "Cups",
    description: "Perfect portion sizes served in clean, convenient cups. Ideal for quick indulgence.",
    image: "https://www.yoonpak.com/wp-content/uploads/2023/10/image-23.png",
  },
  {
    title: "Cones",
    description: "Crispy waffle cones baked to perfection, loaded with your favorite double scoops.",
    image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/7/21/0/FNK_Chocolate-Dipped-Ice-Cream-Cone_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1437500974957.webp",
  },

  {
    title: "Sundaes",
    description: "Artistic creations loaded with sweet sauces, dry fruits, wafers, cherries, and whipped cream.",
    image: "https://www.shutterstock.com/image-photo/whimsical-ice-cream-sundae-variety-260nw-2473306563.jpg",
  },
  {
    title: "Kulfi",
    description: "Traditional slow-frozen malai kulfi infused with saffron, pistachio, and almond slivers.",
    image: "https://www.sharmispassions.com/wp-content/uploads/2016/06/MalaiKulfi2.jpg",
  },


  {
    title: "Chocolate Collection",
    description: "A pure haven for chocolate lovers, ranging from dark Belgian cocoa to milk fudge crunch.",
    image: "https://media.istockphoto.com/id/936205772/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=xBDPxGzIgWcE8tFZ4azKm1P_OoxP8H22XkyHguZlVhw=",
  },

];

export default function Categories() {

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF8EC] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left w-full text-center sm:text-left mb-8">
            <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
              Browse Menu
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] tracking-tight">
              Flavour Categories
            </h2>
            <div className="w-16 h-1 bg-[#FF7A00] mt-4 rounded-full mx-auto sm:mx-0" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto py-10">
          
          {/* The vertical Center Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#005BFF]/20 to-transparent rounded-full" />

          {CATEGORIES.map((category, index) => {
            const slug = category.title.toLowerCase().replace(/\s+/g, '-');
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full mb-20 md:mb-32 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                
                {/* Timeline Dot & Connectors */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  
                  {/* Connector Line Left (Only for Even items on Desktop) */}
                  {isEven && (
                    <div className="hidden md:block absolute right-full w-8 lg:w-16 h-[2px] bg-[#005BFF]/30" />
                  )}

                  {/* The Dot */}
                  <div className="w-5 h-5 rounded-full bg-[#005BFF] shadow-[0_0_0_8px_rgba(255,255,255,1),0_0_0_10px_rgba(0,91,255,0.15)] relative z-10" />
                  
                  {/* Connector Line Right (Only for Odd items on Desktop) */}
                  {!isEven && (
                    <div className="hidden md:block absolute left-full w-8 lg:w-16 h-[2px] bg-[#005BFF]/30" />
                  )}
                </div>

                {/* Card Content */}
                <div className={`w-full pl-20 md:pl-0 md:w-[45%] flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                  <Link href={`/flavours/${slug}`} className="block w-full max-w-sm group">
                    <div className="rounded-3xl overflow-hidden glass bg-white shadow-xl hover:shadow-2xl border border-[#0B2E59]/10 transition-all duration-500 hover:-translate-y-2">
                      
                      {/* Image */}
                      <div className="relative w-full h-[220px] overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#005BFF] shadow-lg group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                          <Sparkles size={16} />
                        </div>
                      </div>

                      {/* Text Details */}
                      <div className={`p-8 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                        <h3 className="text-2xl font-bold text-[#0B2E59] mb-3 font-display group-hover:text-[#005BFF] transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-sm text-[#0B2E59]/70 leading-relaxed font-medium">
                          {category.description}
                        </p>
                      </div>

                    </div>
                  </Link>
                </div>

                {/* Empty Space for the alternating side on Desktop */}
                <div className="hidden md:block md:w-[45%]" />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
