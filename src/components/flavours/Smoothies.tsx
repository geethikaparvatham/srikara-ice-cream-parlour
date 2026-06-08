"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const SMOOTHIES_CATEGORIES = [
  {
    title: "Fresh Fruit Smoothies",
    icon: "🥤",
    flavours: [
      {
        name: "Mango Tango Smoothie",
        description: "A thick, frosty, and incredibly refreshing blend of mango tango , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Strawberry Banana Splash",
        description: "A thick, frosty, and incredibly refreshing blend of strawberry banana splash, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Mixed Berry Blast",
        description: "A thick, frosty, and incredibly refreshing blend of mixed berry blast, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Tropical Papaya Smoothie",
        description: "A thick, frosty, and incredibly refreshing blend of tropical papaya , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Kiwi Apple Green",
        description: "A thick, frosty, and incredibly refreshing blend of kiwi apple green, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      }
    ]
  },
  {
    title: "Healthy & Detox Smoothies",
    icon: "🥤",
    flavours: [
      {
        name: "Green Detox Smoothie",
        description: "A thick, frosty, and incredibly refreshing blend of green detox , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Oats & Apple Breakfast",
        description: "A thick, frosty, and incredibly refreshing blend of oats & apple breakfast, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Avocado Honey Blend",
        description: "A thick, frosty, and incredibly refreshing blend of avocado honey , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Beetroot & Carrot Power",
        description: "A thick, frosty, and incredibly refreshing blend of beetroot & carrot power, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Spinach Banana Power",
        description: "A thick, frosty, and incredibly refreshing blend of spinach banana power, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      }
    ]
  },
  {
    title: "Premium Smoothies",
    icon: "🥤",
    flavours: [
      {
        name: "Blueberry Almond Crunch",
        description: "A thick, frosty, and incredibly refreshing blend of blueberry almond crunch, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Dragon Fruit Exotic Blend",
        description: "A thick, frosty, and incredibly refreshing blend of dragon fruit exotic , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Acai Berry Super Blend",
        description: "A thick, frosty, and incredibly refreshing blend of acai berry super , offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Peanut Butter Banana",
        description: "A thick, frosty, and incredibly refreshing blend of peanut butter banana, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      },
      {
        name: "Dates & Fig Royale",
        description: "A thick, frosty, and incredibly refreshing blend of dates & fig royale, offering a burst of pure energy and flavor.",
        image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
        color: "from-[#8B5CF6] to-[#5B21B6]",
        badge: "Fresh"
      }
    ]
  }
];

export default function Smoothies() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#005BFF]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2 flex items-center justify-center gap-2">
            <span>🥤</span> Refreshing Flavours
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Smoothies
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Discover our rich and diverse range of smoothies that bring pure joy to every bite.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {SMOOTHIES_CATEGORIES.map((categoryGroup, groupIndex) => (
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