const fs = require('fs');
const path = require('path');

const premiumData = {
  "Royal Heritage Collection": ["Maharaja Malai Royale", "Shahi Kesar Pista", "Royal Badam Delight", "Nawabi Kulfi Supreme", "Heritage Rabdi Royale", "Rajwadi Dry Fruit Feast", "Golden Saffron Cream", "Royal Indian Treasure", "Palace Special Delight", "King's Choice Ice Cream"],
  "Luxury Chocolate Collection": ["Belgian Chocolate Royale", "Swiss Chocolate Supreme", "Dark Chocolate Truffle", "Chocolate Gold Reserve", "Cocoa Majesty", "Chocolate Crown", "Velvet Chocolate Indulgence", "Platinum Chocolate Delight", "Royal Choco Fudge", "Signature Cocoa Bliss"],
  "Gourmet Nut Collection": ["Roasted Pistachio Royale", "Sicilian Pistachio Cream", "Almond Praline Supreme", "Honey Walnut Delight", "Hazelnut Heaven", "Cashew Caramel Crunch", "Royal Nut Symphony", "Dry Fruit Majesty", "Nutty Treasure Collection", "Premium Mixed Nuts Royale"],
  "International Collection": ["Belgian Bliss", "Swiss Alpine Delight", "Italian Tiramisu Supreme", "French Vanilla Royale", "Mediterranean Pistachio", "European Chocolate Indulgence", "New York Cheesecake Cream", "Italian Gelato Inspiration", "Parisian Caramel Delight", "Global Gourmet Collection"],
  "Exotic Fruit Collection": ["Alphonso Mango Royale", "Dragon Fruit Paradise", "Blueberry Majesty", "Raspberry Velvet", "Lychee Luxury", "Passion Fruit Supreme", "Kiwi Emerald Delight", "Tropical Treasure", "Berry Symphony", "Exotic Orchard Delight"]
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
  luxury: [
    "/images/icecream_scoops.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    "/images/seasonal_specials.png"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.luxury;
  if (name.includes('choco') || name.includes('cocoa') || name.includes('truffle') || name.includes('fudge')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('lychee') || name.includes('kiwi') || name.includes('raspberry') || name.includes('orchard')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('almond') || name.includes('hazelnut') || name.includes('cashew') || name.includes('walnut') || name.includes('pistachio') || name.includes('pista') || name.includes('badam')) pool = imagePool.nutty;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  if (n.includes('maharaja') || n.includes('nawabi') || n.includes('rajwadi') || n.includes('palace') || n.includes('king') || n.includes('royal')) return "A majestic and luxurious Indian dessert crafted with recipes passed down through generations of royalty.";
  if (n.includes('saffron') || n.includes('kesar')) return "Infused with pure golden saffron threads, offering a rich, opulent, and aromatic flavor profile.";
  if (n.includes('truffle') || n.includes('velvet') || n.includes('belgian') || n.includes('swiss')) return "The finest imported cocoa and chocolate truffles folded into an incredibly smooth, velvety base.";
  if (n.includes('gold') || n.includes('platinum')) return "Our most exclusive and premium offering, featuring ingredients that are the absolute gold standard in luxury.";
  if (n.includes('sicilian') || n.includes('mediterranean') || n.includes('italian')) return "Authentic Mediterranean ingredients imported directly to provide a genuine, world-class gelato experience.";
  if (n.includes('french') || n.includes('paris') || n.includes('european')) return "A sophisticated and elegant dessert inspired by the finest patisseries and chocolatiers of Europe.";
  if (n.includes('new york')) return "A dense, rich, and decadent dessert experience modeled after the world's most famous bakery treats.";
  if (n.includes('dragon fruit') || n.includes('passion fruit') || n.includes('exotic')) return "A vibrant and breathtaking fusion of the rarest and most visually stunning tropical fruits.";
  if (n.includes('pistachio') || n.includes('pista')) return "Loaded with the finest, brightest green roasted pistachios for an unparalleled crunchy texture.";
  if (n.includes('praline') || n.includes('caramel') || n.includes('toffee')) return "Rich, buttery caramelized nuts and sauce folded perfectly into a dense cream base.";
  
  const adjectives = ["Luxurious", "Exquisite", "Premium", "Opulent", "Majestic", "Signature", "Elite", "Gourmet"];
  const finishes = ["crafted for true connoisseurs.", "an unforgettable indulgence.", "made with the rarest global ingredients.", "the pinnacle of dessert luxury.", "a masterpiece of flavor."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Royale', '').replace('Supreme', '').replace('Delight', '').trim().toLowerCase() + ' creation, ' + fin;
};

const icons = {
  "Royal Heritage Collection": "👑",
  "Luxury Chocolate Collection": "🍫",
  "Gourmet Nut Collection": "🥜",
  "International Collection": "🌍",
  "Exotic Fruit Collection": "🍓"
};

const badges = {
  "Royal Heritage Collection": "Heritage",
  "Luxury Chocolate Collection": "Luxury",
  "Gourmet Nut Collection": "Gourmet",
  "International Collection": "Global",
  "Exotic Fruit Collection": "Exotic"
};

const colors = {
  "Royal Heritage Collection": "from-[#D4AF37] to-[#AA8A25]",
  "Luxury Chocolate Collection": "from-[#4E2F1D] to-[#2B1B10]",
  "Gourmet Nut Collection": "from-[#8B5A2B] to-[#5C3A21]",
  "International Collection": "from-[#0F172A] to-[#020617]",
  "Exotic Fruit Collection": "from-[#BE123C] to-[#881337]"
};

let outputData = Object.keys(premiumData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: premiumData[cat].map((flavour, idx) => ({
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
import { Snowflake, Heart, Crown } from "lucide-react";
import { motion } from "framer-motion";

const PREMIUM_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function PremiumCollection() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#D4AF37]/20 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest block mb-2 flex items-center justify-center gap-2">
            <Crown size={16} /> Elite Indulgence
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Premium Collection
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Our most luxurious, opulent, and exclusive flavours crafted with the finest ingredients from around the world.
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {PREMIUM_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8 border-b border-[#D4AF37]/30 pb-2">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#D4AF37]">{categoryGroup.title}</h3>
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
                  className="relative rounded-2xl overflow-hidden glass shadow-[0_4px_20px_rgba(212,175,55,0.15)] border border-[#D4AF37]/30 bg-white/70 group flex flex-col h-full"
                >
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#0B2E59]/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#D4AF37] border border-[#D4AF37]/50 shadow-sm flex items-center space-x-1">
                      <Crown size={10} className="text-[#D4AF37]" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B2E59] transition-colors duration-200 shadow-sm cursor-pointer border border-[#D4AF37]/50">
                      <Heart size={14} className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow text-left">
                    <h3 className="text-lg font-bold text-[#0B2E59] mb-2 font-display group-hover:text-[#D4AF37] transition-colors leading-tight">
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'PremiumCollection.tsx'), componentCode);
console.log("PremiumCollection.tsx updated with UNIQUE matter and variety of images!");
