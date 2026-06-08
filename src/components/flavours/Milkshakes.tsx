"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const MILKSHAKES_CATEGORIES = [
  {
    title: "Classic Shakes",
    icon: "🧋",
    flavours: [
      {
        name: "Thick Vanilla Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium  vanilla  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Classic Chocolate Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium classic chocolate  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Strawberry Delight Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium strawberry delight  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Butterscotch Crunch Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium butterscotch crunch  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Mango Summer Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium mango summer  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      }
    ]
  },
  {
    title: "Premium & Nut Shakes",
    icon: "🧋",
    flavours: [
      {
        name: "Kesar Badam Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium kesar badam  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Rich Pista Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium rich pista  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Royal Kaju Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium royal kaju  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Dates & Walnut Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium dates & walnut  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Anjeer Honey Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium anjeer honey  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      }
    ]
  },
  {
    title: "Indulgent Chocolate Shakes",
    icon: "🧋",
    flavours: [
      {
        name: "Oreo Cookie Blast",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium oreo cookie blast ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "KitKat Crunch Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium kitkat crunch  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Brownie Fudge Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium brownie fudge  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Ferrero Rocher Royale",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium ferrero rocher royale ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      },
      {
        name: "Nutella Hazelnut Shake",
        description: "A decadently rich, creamy, and irresistible milkshake blended with premium nutella hazelnut  ice cream and pure milk.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        color: "from-[#F59E0B] to-[#B45309]",
        badge: "Fresh"
      }
    ]
  }
];

export default function Milkshakes() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#005BFF]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2 flex items-center justify-center gap-2">
            <span>🧋</span> Refreshing Flavours
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Milkshakes
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Discover our rich and diverse range of milkshakes that bring pure joy to every bite.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {MILKSHAKES_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8 border-b border-[#0B2E59]/10 pb-2">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B2E59]">{categoryGroup.title}</h3>
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
                  className="relative rounded-2xl overflow-hidden glass shadow-md border border-[#0B2E59]/10 bg-white/70 group flex flex-col h-full"
                >
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#0B2E59]/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0B2E59] border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={10} className="text-[#005BFF] animate-spin-slow" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#FF7A00] hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer">
                      <Heart size={14} className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow text-left">
                    <h3 className="text-lg font-bold text-[#0B2E59] mb-2 font-display group-hover:text-[#005BFF] transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B2E59]/80 leading-relaxed font-medium flex-grow">
                      {flavor.description}
                    </p>
                  </div>

                  <div className={"h-1.5 w-full bg-gradient-to-r " + flavor.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}