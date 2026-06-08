const fs = require('fs');
const path = require('path');

const chocolateData = {
  "Classic Chocolate Collection": ["Classic Chocolate Delight", "Rich Milk Chocolate", "Smooth Chocolate Cream", "Chocolate Bliss", "Creamy Chocolate Dream", "Chocolate Swirl", "Choco Classic", "Double Chocolate Scoop", "Velvet Chocolate", "Chocolate Indulgence"],
  "Dark Chocolate Collection": ["Dark Chocolate Supreme", "Midnight Chocolate", "Belgian Dark Chocolate", "Dark Chocolate Truffle", "Black Velvet Chocolate", "Intense Cocoa Delight", "Premium Dark Chocolate", "Cocoa Royale", "Chocolate Noir", "Dark Temptation"],
  "Cookies & Chocolate Collection": ["Oreo Chocolate Crunch", "Cookie Monster Chocolate", "Chocolate Cookie Dough", "Choco Biscuit Blast", "Chocolate Cream Cookie", "Oreo Fudge Delight", "Cookies & Cream Chocolate", "Crunchy Cookie Chocolate", "Choco Cookie Swirl", "Ultimate Cookie Chocolate"],
  "Brownie Chocolate Collection": ["Brownie Blast", "Chocolate Brownie Fudge", "Brownie Delight", "Choco Brownie Supreme", "Brownie Crunch", "Double Brownie Chocolate", "Brownie Swirl", "Walnut Brownie Chocolate", "Fudge Brownie Fantasy", "Brownie Explosion"],
  "Chocolate Nut Collection": ["Chocolate Almond Crunch", "Chocolate Hazelnut Delight", "Chocolate Pistachio Bliss", "Chocolate Cashew Treat", "Nutty Chocolate Dream", "Roasted Almond Chocolate", "Chocolate Walnut Crunch", "Honey Nut Chocolate", "Mixed Nut Chocolate Supreme", "Royal Nut Chocolate"],
  "Caramel Chocolate Collection": ["Chocolate Caramel Swirl", "Salted Caramel Chocolate", "Golden Caramel Chocolate", "Caramel Fudge Chocolate", "Chocolate Toffee Crunch", "Caramel Brownie Chocolate", "Choco Caramel Delight", "Sticky Toffee Chocolate", "Caramel Truffle Chocolate", "Caramel Crunch Supreme"]
};

// Variety of images to break the visual monotony
const imagePool = {
  classic_chocolate: [
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?auto=format&fit=crop&w=400&q=80"
  ],
  dark_chocolate: [
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511381939415-e440c9a18a56?auto=format&fit=crop&w=400&q=80"
  ],
  nutty_chocolate: [
    "/images/pistachio_cones.png",
    "https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?auto=format&fit=crop&w=400&q=80"
  ],
  cookie_chocolate: [
    "/images/icecream_scoops.png",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80"
  ],
  caramel_chocolate: [
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    "/images/seasonal_specials.png"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic_chocolate;
  if (name.includes('dark') || name.includes('midnight') || name.includes('noir') || name.includes('truffle')) pool = imagePool.dark_chocolate;
  else if (name.includes('cookie') || name.includes('oreo') || name.includes('biscuit')) pool = imagePool.cookie_chocolate;
  else if (name.includes('nut') || name.includes('almond') || name.includes('hazelnut') || name.includes('cashew') || name.includes('walnut') || name.includes('pistachio')) pool = imagePool.nutty_chocolate;
  else if (name.includes('caramel') || name.includes('toffee')) pool = imagePool.caramel_chocolate;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  if (n.includes('dark') || n.includes('noir') || n.includes('midnight')) return "A bold and intense experience crafted from premium bitter-sweet dark cocoa beans.";
  if (n.includes('milk') || n.includes('classic') || n.includes('smooth')) return "A timeless, creamy, and velvety smooth milk chocolate indulgence.";
  if (n.includes('truffle')) return "Rich, melt-in-your-mouth chocolate truffle layers blended into a luxurious dessert.";
  if (n.includes('brownie')) return "Decadent chunks of gooey chocolate brownie mixed generously with dense fudge.";
  if (n.includes('oreo') || n.includes('cookie') || n.includes('biscuit')) return "Generous chunks of sweet, buttery cookies and sweet cream folded into rich cocoa.";
  if (n.includes('caramel') || n.includes('toffee')) return "Golden, buttery caramel sauce cascading through thick chocolate with a sweet-salty crunch.";
  if (n.includes('almond') || n.includes('walnut') || n.includes('cashew') || n.includes('hazelnut') || n.includes('pistachio')) return "A deeply rich and dense chocolate creation loaded with premium roasted nuts.";
  if (n.includes('belgian')) return "Luxurious Belgian chocolate swirls packed perfectly to satisfy true connoisseurs.";
  if (n.includes('velvet')) return "An incredibly smooth, rich, and dense texture that literally melts in your mouth.";
  if (n.includes('supreme') || n.includes('royale') || n.includes('ultimate')) return "Our most luxurious chocolate offering featuring the absolute finest ingredients.";
  
  const adjectives = ["Decadent", "Ultimate", "Indulgent", "Handcrafted", "Irresistible", "Signature", "Mouth-watering", "Luxurious"];
  const finishes = ["crafted for true chocolate lovers.", "guaranteed to satisfy your sweetest cravings.", "perfectly balanced for a rich cocoa taste.", "crafted for ultimate indulgence.", "an absolute must-try special."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Chocolate', '').trim().toLowerCase() + ' chocolate treat, ' + fin;
};

const icons = {
  "Classic Chocolate Collection": "🍫",
  "Dark Chocolate Collection": "🖤",
  "Cookies & Chocolate Collection": "🍪",
  "Brownie Chocolate Collection": "🍰",
  "Chocolate Nut Collection": "🥜",
  "Caramel Chocolate Collection": "🍮"
};

const badges = {
  "Classic Chocolate Collection": "Classic",
  "Dark Chocolate Collection": "Intense",
  "Cookies & Chocolate Collection": "Crunchy",
  "Brownie Chocolate Collection": "Fudge",
  "Chocolate Nut Collection": "Nutty",
  "Caramel Chocolate Collection": "Sweet & Salty"
};

const colors = {
  "Classic Chocolate Collection": "from-[#78350F] to-[#451A03]",
  "Dark Chocolate Collection": "from-[#27272A] to-[#09090B]",
  "Cookies & Chocolate Collection": "from-[#B45309] to-[#78350F]",
  "Brownie Chocolate Collection": "from-[#4C1D95] to-[#2E1065]",
  "Chocolate Nut Collection": "from-[#3F6212] to-[#14532D]",
  "Caramel Chocolate Collection": "from-[#D97706] to-[#92400E]"
};

let outputData = Object.keys(chocolateData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: chocolateData[cat].map((flavour, idx) => ({
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

const CHOCOLATE_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

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

                  <div className="p-5 flex flex-col flex-grow text-left">
                    <h3 className="text-lg font-bold text-[#451A03] mb-2 font-display group-hover:text-[#78350F] transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#451A03]/80 leading-relaxed font-medium flex-grow">
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'ChocolateCollection.tsx'), componentCode);
console.log("ChocolateCollection.tsx updated with UNIQUE matter and variety of images!");
