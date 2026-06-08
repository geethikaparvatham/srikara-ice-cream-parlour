const fs = require('fs');
const path = require('path');

const kidsData = {
  "Rainbow Collection": ["Rainbow Sprinkle Surprise", "Rainbow Swirl Delight", "Rainbow Magic Scoop", "Color Splash Ice Cream", "Rainbow Party Cup", "Seven Colors Delight", "Unicorn Rainbow Dream", "Rainbow Carnival", "Rainbow Fantasy", "Rainbow Wonderland"],
  "Magic & Fantasy Collection": ["Unicorn Magic", "Fairy Tale Delight", "Magic Castle Ice Cream", "Princess Dream Scoop", "Dragon Sparkle Delight", "Enchanted Forest Cream", "Galaxy Unicorn Swirl", "Magical Moonlight Scoop", "Fairy Dust Delight", "Fantasy Kingdom Ice Cream"],
  "Candy Collection": ["Cotton Candy Cloud", "Candy Crush Delight", "Bubblegum Blast", "Jelly Bean Surprise", "Lollipop Swirl", "Marshmallow Magic", "Candy Carnival", "Sweet Treat Explosion", "Toffee Twist", "Candy Rainbow Delight"],
  "Chocolate Kids Favorites": ["Choco Buddy", "Choco Chip Party", "Chocolate Treasure", "Mini Brownie Blast", "Oreo Fun Scoop", "KitKat Crunch Delight", "Choco Cookie Dream", "Chocolate Galaxy", "Choco Monster Delight", "Choco Volcano"],
  "Cookie Collection": ["Cookie Monster Scoop", "Cookie Dough Party", "Crunchy Cookie Blast", "Choco Cookie Crunch", "Oreo Adventure", "Cookie Kingdom", "Mini Cookie Fiesta", "Sweet Cookie Delight", "Cookie Rainbow Treat", "Cookie Wonderland"],
  "Fruity Fun Collection": ["Strawberry Star", "Mango Sunshine", "Blueberry Buddy", "Watermelon Splash", "Pineapple Pop", "Berry Blast", "Tropical Treasure", "Fruit Carnival", "Peachy Paradise", "Fruity Rainbow"]
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
  kids: [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    "/images/seasonal_specials.png"
  ],
  classic: [
    "/images/icecream_scoops.png",
    "/images/pistachio_cones.png"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.kids; // Default to kids colorful for this section
  if (name.includes('choco') || name.includes('brownie') || name.includes('oreo')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('peach') || name.includes('watermelon') || name.includes('pineapple') || name.includes('strawberry')) pool = imagePool.fruit;
  else if (name.includes('cookie') && !name.includes('monster')) pool = imagePool.classic;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  // Custom unique descriptions based on keywords
  if (n.includes('rainbow')) return "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.";
  if (n.includes('unicorn')) return "A sparkly, pastel-colored dream topped with edible glitter and magical unicorn dust.";
  if (n.includes('cotton candy') || n.includes('bubblegum')) return "A nostalgic carnival treat topped with marshmallow fluff and sweet pink syrup.";
  if (n.includes('marshmallow') || n.includes('jelly bean')) return "A fun and squishy treat packed with mini marshmallows and chewy jelly beans.";
  if (n.includes('chocolate') || n.includes('choco')) return "A kid-approved mega chocolate blast overloaded with cocoa chips and thick fudge.";
  if (n.includes('oreo') || n.includes('cookie')) return "Generous chunks of sweet, buttery cookies and sweet cream folded into every bite.";
  if (n.includes('brownie')) return "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.";
  if (n.includes('strawberry') || n.includes('berry')) return "A sweet pink fruity sensation packed with real berry compote and fresh fruits.";
  if (n.includes('mango') || n.includes('pineapple') || n.includes('watermelon')) return "A bright, sunny, and refreshing tropical treat that bursts with natural fruit flavor.";
  if (n.includes('dragon') || n.includes('magic') || n.includes('fairy')) return "A mystical and enchanting dessert experience designed specifically for little dreamers.";
  if (n.includes('monster')) return "A wild, blue, and monstrously delicious creation loaded with crushed cookies!";
  
  const adjectives = ["Magical", "Colorful", "Fun-filled", "Super", "Awesome", "Yummy", "Sparkly", "Delightful"];
  const finishes = ["guaranteed to put a massive smile on their face.", "topped with extra sprinkles just for fun.", "crafted specifically for kids' ultimate joy.", "packed with exciting hidden treats inside.", "the absolute perfect sweet surprise."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.trim().toLowerCase() + ' treat, ' + fin;
};

const icons = {
  "Rainbow Collection": "🌈",
  "Magic & Fantasy Collection": "🦄",
  "Candy Collection": "🍭",
  "Chocolate Kids Favorites": "🍫",
  "Cookie Collection": "🍪",
  "Fruity Fun Collection": "🍓"
};

const badges = {
  "Rainbow Collection": "Colorful",
  "Magic & Fantasy Collection": "Magical",
  "Candy Collection": "Sweet",
  "Chocolate Kids Favorites": "Choco",
  "Cookie Collection": "Crunchy",
  "Fruity Fun Collection": "Fruity"
};

const colors = {
  "Rainbow Collection": "from-[#FF7EE2] to-[#FFB200]",
  "Magic & Fantasy Collection": "from-[#D946EF] to-[#8B5CF6]",
  "Candy Collection": "from-[#F472B6] to-[#DB2777]",
  "Chocolate Kids Favorites": "from-[#78350F] to-[#451A03]",
  "Cookie Collection": "from-[#B45309] to-[#78350F]",
  "Fruity Fun Collection": "from-[#EF4444] to-[#B91C1C]"
};

let outputData = Object.keys(kidsData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: kidsData[cat].map((flavour, idx) => ({
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

const KIDS_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function KidsCollection() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#FF7EE2]/20 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#FFB200]/20 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#DB2777] font-bold text-sm uppercase tracking-widest block mb-2">
            Fun & Magical
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Kids Collection
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Colorful, magical, and super yummy treats designed specifically to bring out the biggest smiles!
          </p>
          <div className="w-16 h-1 bg-[#DB2777] mx-auto mt-4 rounded-full" />
        </div>

        {KIDS_CATEGORIES.map((categoryGroup, groupIndex) => (
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'KidsCollection.tsx'), componentCode);
console.log("KidsCollection.tsx updated with UNIQUE matter and variety of images!");
