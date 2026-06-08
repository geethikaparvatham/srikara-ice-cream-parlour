const fs = require('fs');
const path = require('path');

const partyData = {
  "Birthday Party Packs": ["Birthday Blast Party Pack", "Celebration Vanilla Party Pack", "Chocolate Birthday Treat Pack", "Rainbow Sprinkle Party Pack", "Funfetti Party Pack", "Kids' Favorite Party Pack", "Birthday Brownie Party Pack", "Cookie Celebration Pack", "Sweet Memories Party Pack", "Happy Birthday Special Pack"],
  "Chocolate Lovers Party Packs": ["Triple Chocolate Party Pack", "Belgian Chocolate Party Pack", "Brownie Blast Party Pack", "Oreo Overload Party Pack", "Chocolate Fudge Party Pack", "Choco Lava Party Pack", "Dark Chocolate Supreme Pack", "KitKat Crunch Party Pack", "Chocolate Truffle Party Pack", "Death By Chocolate Party Pack"],
  "Fruit Fiesta Party Packs": ["Mango Magic Party Pack", "Strawberry Delight Party Pack", "Mixed Berry Party Pack", "Tropical Paradise Party Pack", "Lychee Fiesta Party Pack", "Pineapple Punch Party Pack", "Kiwi Splash Party Pack", "Fruit Carnival Party Pack", "Blueberry Celebration Pack", "Summer Fruit Party Pack"],
  "Dry Fruit Party Packs": ["Royal Kaju Party Pack", "Kesar Pista Party Pack", "Badam Delight Party Pack", "Dry Fruit Supreme Pack", "Honey Almond Party Pack", "Nutty Celebration Pack", "Walnut Crunch Party Pack", "Maharaja Dry Fruit Pack", "Mixed Nuts Party Pack", "Royal Feast Party Pack"]
};

// Variety of images to break the visual monotony
const imagePool = {
  chocolate: [
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&w=400&q=80"
  ],
  fruit: [
    "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
    "/images/mango_magic.png"
  ],
  nutty: [
    "/images/pistachio_cones.png",
    "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?auto=format&fit=crop&w=400&q=80"
  ],
  kids: [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80"
  ],
  classic: [
    "/images/icecream_scoops.png",
    "/images/seasonal_specials.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic;
  if (name.includes('choco') || name.includes('brownie') || name.includes('fudge') || name.includes('oreo')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('lychee') || name.includes('pineapple') || name.includes('kiwi') || name.includes('strawberry')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('walnut') || name.includes('badam') || name.includes('kaju')) pool = imagePool.nutty;
  else if (name.includes('birthday') || name.includes('kids') || name.includes('rainbow') || name.includes('funfetti')) pool = imagePool.kids;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  // Custom unique descriptions based on keywords
  if (n.includes('birthday')) return "The ultimate large-scale celebration pack perfectly curated for birthday parties.";
  if (n.includes('rainbow') || n.includes('funfetti')) return "A massive, colorful party pack loaded with sweet sprinkles to bring joy to any gathering.";
  if (n.includes('chocolate')) return "A rich, indulgent chocolate feast packed in a large tub to satisfy a crowd of cocoa lovers.";
  if (n.includes('belgian')) return "Luxurious Belgian chocolate swirls packed perfectly to share at your premium celebration.";
  if (n.includes('strawberry') || n.includes('berry')) return "Bursting with real farm-fresh berries, perfect for a refreshing party treat.";
  if (n.includes('mango')) return "A massive tropical party delight loaded with real, sun-ripened Alphonso mango chunks.";
  if (n.includes('brownie')) return "Decadent chunks of gooey chocolate brownie mixed into a large fudge-based party tub.";
  if (n.includes('oreo')) return "Crushed Oreo cookies folded into sweet cream in a mega pack for the ultimate party dessert.";
  if (n.includes('almond') || n.includes('walnut') || n.includes('cashew') || n.includes('kaju') || n.includes('badam')) return "A deeply rich and dense creation loaded with premium roasted nuts for a regal celebration.";
  if (n.includes('pista') || n.includes('kesar')) return "A royal Indian party treat infused with aromatic saffron and loaded with roasted pistachios.";
  if (n.includes('lychee') || n.includes('kiwi') || n.includes('pineapple')) return "A refreshing, exotic fruit sensation packed in bulk for a cool summer party.";
  if (n.includes('royal') || n.includes('maharaja') || n.includes('feast')) return "Our most luxurious, large-scale offering featuring the finest ingredients for a grand feast.";
  
  const adjectives = ["Massive", "Celebration-ready", "Premium Bulk", "Signature Party", "Ultimate Feast", "Giant", "Mega", "Festive"];
  const finishes = ["packed securely in a large premium tub.", "perfect for sharing at big events.", "crafted for ultimate party indulgence.", "enough to satisfy the entire guest list.", "the perfect centerpiece for your dessert table."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Party Pack', '').replace('Pack', '').trim().toLowerCase() + ' serving, ' + fin;
};

const icons = {
  "Birthday Party Packs": "🎈",
  "Chocolate Lovers Party Packs": "🍫",
  "Fruit Fiesta Party Packs": "🍓",
  "Dry Fruit Party Packs": "🥜"
};

const badges = {
  "Birthday Party Packs": "Party",
  "Chocolate Lovers Party Packs": "Premium Bulk",
  "Fruit Fiesta Party Packs": "Fruity Bulk",
  "Dry Fruit Party Packs": "Nutty Bulk"
};

const colors = {
  "Birthday Party Packs": "from-[#FF7EE2] to-[#C90095]",
  "Chocolate Lovers Party Packs": "from-[#4E2F1D] to-[#2B1B10]",
  "Fruit Fiesta Party Packs": "from-[#FF8DA1] to-[#FF4E72]",
  "Dry Fruit Party Packs": "from-[#7FA13B] to-[#4F6C1D]"
};

let outputData = Object.keys(partyData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: partyData[cat].map((flavour, idx) => ({
      name: flavour,
      description: getUniqueDescription(flavour),
      image: getDynamicImage(flavour, idx),
      color: colors[cat],
      badge: badges[cat]
    }))
  };
});

const componentCode = `"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const PARTY_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function PartyPacks() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#005BFF]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Category Selection
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Party Packs
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Giant 4L and 5L tubs perfectly curated to make your big celebrations and parties unforgettable.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {PARTY_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8">
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
                      <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
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
}`;

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'PartyPacks.tsx'), componentCode);
console.log("PartyPacks.tsx updated with UNIQUE matter and variety of images!");
