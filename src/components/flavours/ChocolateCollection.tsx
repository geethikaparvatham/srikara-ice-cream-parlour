"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CHOCOLATE_CATEGORIES = [
  {
    title: "Classic Chocolate Collection",
    icon: "🍫",
    flavours: [
      {
        name: "Classic Chocolate Delight",
        description: "A timeless, creamy, and velvety smooth milk chocolate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Py4vC-B4fh7HlVM4ZUTygqWB7komaPy7TA&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Rich Milk Chocolate",
        description: "A timeless, creamy, and velvety smooth milk chocolate indulgence.",
        image: "https://www.clementinescreamery.com/cdn/shop/articles/IMG_7137.jpg?v=1739378404&width=1100",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Smooth Chocolate Cream",
        description: "A timeless, creamy, and velvety smooth milk chocolate indulgence.",
        image: "https://tiimg.tistatic.com/fp/1/007/598/-sweet-tasty-delicious-yummy-chocolate-ice-cream-flavor-with-low-fat-and-calories--411.jpg",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Chocolate Bliss",
        description: "Luxurious bliss chocolate treat, crafted for true chocolate lovers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWk9m6T3ogne-HJ5j_j42foPEA4Ir8dyQeMA&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Creamy Chocolate Dream",
        description: "Mouth-watering creamy  dream chocolate treat, perfectly balanced for a rich cocoa taste.",
        image: "https://i.ytimg.com/vi/arq--QYI2Ug/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCwmitWt0ZLRFaeZ_FKNW-LS-HjHA",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Chocolate Swirl",
        description: "Luxurious swirl chocolate treat, crafted for true chocolate lovers.",
        image: "https://m.media-amazon.com/images/I/711RGo0DvLL._AC_UF350,350_QL80_.jpg",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Choco Classic",
        description: "A timeless, creamy, and velvety smooth milk chocolate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZA4DYyH-ye8caLPfcG898sSkapK0dg6JiQ&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Double Chocolate Scoop",
        description: "Mouth-watering double  scoop chocolate treat, perfectly balanced for a rich cocoa taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlumVZt8BV-7xSQj04s0lNfAezSRfVUWX6sQ&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Velvet Chocolate",
        description: "An incredibly smooth, rich, and dense texture that literally melts in your mouth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZVsxrMsoV4JbdpLZsluGY1nVvhS1EhpR_yQ&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      },
      {
        name: "Chocolate Indulgence",
        description: "Irresistible indulgence chocolate treat, crafted for true chocolate lovers.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteB2aAkz3GK0piuvuqZQ0UBkJDlgYV3FqIQ&s",
        color: "from-[#78350F] to-[#451A03]",
        badge: "Classic"
      }
    ]
  },

];

export default function ChocolateCollection() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#78350F]/20 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#27272A]/20 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#78350F] font-bold text-sm uppercase tracking-widest block mb-2">
            The Ultimate Indulgence
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#451A03]">
            Chocolate Collection
          </h2>
          <p className="text-base text-[#451A03]/80 mt-4 font-medium">
            Dive into our decadent world of rich, premium cocoa featuring dark chocolate, loaded brownies, and nutty clusters.
          </p>
          <div className="w-16 h-1 bg-[#78350F] mx-auto mt-4 rounded-full" />
        </div>

        {CHOCOLATE_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#451A03]">{categoryGroup.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categoryGroup.flavours.map((flavor, index) => (
                <motion.div
                  key={flavor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl overflow-hidden glass shadow-md border border-[#451A03]/10 bg-white/70 group flex flex-col h-full"
                >
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#451A03]/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#451A03] border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={10} className="text-[#78350F] animate-spin-slow" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#FF7A00] hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer">
                      <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow text-left">
                    <h3 className="text-lg font-bold text-[#451A03] mb-2 font-display group-hover:text-[#78350F] transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#451A03]/80 leading-relaxed font-medium grow">
                      {flavor.description}
                    </p>
                  </div>

                  <div className={"h-1.5 w-full bg-linear-to-r " + flavor.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}