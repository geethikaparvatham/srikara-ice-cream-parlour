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
    <section className="py-20 bg-linear-to-b from-white to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-center w-full  sm:text-left mb-8">
            <span className="text-#005BFF font-bold text-sm uppercase tracking-widest block mb-2">
              Browse Menu
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-#0B2E59 tracking-tight">
              Flavour Categories
            </h2>
            <div className="w-16 h-1 bg-#FF7A00 mt-4 rounded-full mx-auto sm:mx-0" />
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 max-w-6xl mx-auto">
          {CATEGORIES.map((category, index) => {
            const slug = category.title.toLowerCase().replace(/\s+/g, '-');

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/flavours/${slug}`} className="block h-full group">
                  <div className="rounded-3xl overflow-hidden glass bg-white dark:bg-[#0A2540] shadow-xl hover:shadow-2xl border border-[#0B2E59]/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                    
                    {/* Image */}
                    <div className="relative w-full h-[240px] shrink-0 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md text-[#005BFF] shadow-lg group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                        <Sparkles size={16} />
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="p-8 text-left flex flex-col grow">
                      <h3 className="text-2xl font-bold text-[#0B2E59] dark:text-[#FFF8EC] mb-3 font-display group-hover:text-[#005BFF] transition-colors leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-sm text-[#0B2E59] dark:text-[#FFF8EC]/70 leading-relaxed font-medium grow">
                        {category.description}
                      </p>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
