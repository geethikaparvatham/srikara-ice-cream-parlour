const fs = require('fs');
const path = require('path');

const coneData = {
  "Classic Cone Collection": ["Vanilla Cone", "Chocolate Cone", "Strawberry Cone", "Butterscotch Cone", "Mango Cone", "Black Currant Cone", "Coffee Cone", "Kesar Pista Cone", "Pineapple Cone", "Tender Coconut Cone"],
  "Chocolate Lovers Cones": ["Belgian Chocolate Cone", "Dark Chocolate Cone", "Chocolate Fudge Cone", "Chocolate Brownie Cone", "Triple Chocolate Cone", "Choco Chip Cone", "Chocolate Truffle Cone", "Oreo Chocolate Cone", "KitKat Crunch Cone", "Choco Lava Cone"],
  "Nutty Cones": ["Almond Crunch Cone", "Roasted Hazelnut Cone", "Pista Delight Cone", "Cashew Crunch Cone", "Honey Almond Cone", "Dry Fruit Cone", "Walnut Caramel Cone", "Nutty Treasure Cone", "Royal Badam Cone", "Maharaja Nut Cone"],
  "Fruit Fantasy Cones": ["Blueberry Cone", "Mixed Berry Cone", "Kiwi Cone", "Lychee Cone", "Peach Cone", "Dragon Fruit Cone", "Watermelon Cone", "Tropical Fruit Cone", "Fruit Fiesta Cone", "Raspberry Cone"],
  "Kids Special Cones": ["Rainbow Sprinkle Cone", "Cotton Candy Cone", "Bubblegum Cone", "Unicorn Cone", "Candy Blast Cone", "Cookie Monster Cone", "Marshmallow Cone", "Choco Candy Cone", "Funfetti Cone", "Jelly Bean Cone"],
  "Dessert Cones": ["Red Velvet Cone", "Cheesecake Cone", "Tiramisu Cone", "Black Forest Cone", "Brownie Blast Cone", "Cookie Dough Cone", "Caramel Pudding Cone", "Choco Lava Cone", "Walnut Brownie Cone", "Death by Chocolate Cone"]
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
    "/images/pistachio_cones.png",
    "/images/icecream_scoops.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic;
  if (name.includes('choco') || name.includes('fudge') || name.includes('brownie')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('peach') || name.includes('kiwi') || name.includes('lychee')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('cashew') || name.includes('badam')) pool = imagePool.nutty;
  else if (name.includes('candy') || name.includes('rainbow') || name.includes('unicorn') || name.includes('bubblegum') || name.includes('jelly')) pool = imagePool.kids;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  // Custom unique descriptions based on keywords
  if (n.includes('vanilla')) return "A timeless classic featuring rich, creamy vanilla bean perfection in a crunchy waffle.";
  if (n.includes('dark chocolate')) return "Dive into deep, indulgent dark chocolate crafted from premium bitter cocoa.";
  if (n.includes('belgian')) return "Luxurious Belgian chocolate swirls folded into a freshly baked crispy cone.";
  if (n.includes('strawberry')) return "Bursting with the sweet and tangy goodness of real, farm-fresh strawberries.";
  if (n.includes('butterscotch')) return "Sweet buttery goodness layered with signature crunchy caramel praline bits.";
  if (n.includes('mango')) return "A tropical delight made with real, sun-ripened Alphonso mango pulp.";
  if (n.includes('black currant')) return "A vibrant and tangy sensation packed with real black currant berries.";
  if (n.includes('coffee')) return "An aromatic and smooth espresso experience for the true coffee aficionado.";
  if (n.includes('pista') || n.includes('pistachio')) return "A royal treat infused with aromatic saffron and roasted green pistachios.";
  if (n.includes('pineapple')) return "Refreshing and zesty tropical pineapple chunks layered in creamy perfection.";
  if (n.includes('coconut')) return "Cool and refreshing, made with delicate pieces of real tender coconut malai.";
  if (n.includes('brownie')) return "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.";
  if (n.includes('fudge')) return "Thick ribbons of gooey chocolate fudge swirled into our signature creamy base.";
  if (n.includes('oreo')) return "Crushed Oreo cookies folded into sweet cream for the ultimate cookies and cream treat.";
  if (n.includes('almond')) return "Toasted almond slivers folded into a rich, creamy, and mildly sweet base.";
  if (n.includes('hazelnut')) return "Premium roasted hazelnuts blended with a touch of creamy chocolate cocoa.";
  if (n.includes('cashew') || n.includes('kaju')) return "Rich, buttery cashew nuts roasted to perfection and swirled in sweet cream.";
  if (n.includes('blueberry') || n.includes('berry')) return "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.";
  if (n.includes('kiwi') || n.includes('lychee') || n.includes('peach') || n.includes('dragon')) return "A refreshing, exotic fruit sensation that brings the taste of summer to your cone.";
  if (n.includes('rainbow') || n.includes('funfetti')) return "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.";
  if (n.includes('cotton candy') || n.includes('bubblegum')) return "A nostalgic carnival treat bringing back your favorite sweet childhood memories.";
  if (n.includes('cookie dough')) return "Generous chunks of sweet, buttery chocolate chip cookie dough in every bite.";
  if (n.includes('red velvet')) return "Rich red velvet cake crumbles blended seamlessly with sweet cream cheese frosting.";
  if (n.includes('tiramisu')) return "A sophisticated Italian dessert experience with espresso-soaked ladyfingers and cocoa.";
  
  // Fallback dynamic generator
  const adjectives = ["Delightful", "Premium", "Exquisite", "Handcrafted", "Irresistible", "Signature", "Mouth-watering", "Decadent"];
  const finishes = ["served in our signature waffle cone.", "topped with a touch of magic.", "crafted for ultimate indulgence.", "guaranteed to satisfy your sweet tooth.", "perfectly balanced for a rich taste."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Cone', '').trim().toLowerCase() + ' ice cream, ' + fin;
};

const icons = {
  "Classic Cone Collection": "🍦",
  "Chocolate Lovers Cones": "🍫",
  "Nutty Cones": "🥜",
  "Fruit Fantasy Cones": "🍓",
  "Kids Special Cones": "🍪",
  "Dessert Cones": "🍰"
};

const badges = {
  "Classic Cone Collection": "Classic",
  "Chocolate Lovers Cones": "Premium",
  "Nutty Cones": "Nutty",
  "Fruit Fantasy Cones": "Fruity",
  "Kids Special Cones": "Kids Fav",
  "Dessert Cones": "Dessert"
};

const colors = {
  "Classic Cone Collection": "from-[#F5EAD4] to-[#DFD0B8]",
  "Chocolate Lovers Cones": "from-[#4E2F1D] to-[#2B1B10]",
  "Nutty Cones": "from-[#7FA13B] to-[#4F6C1D]",
  "Fruit Fantasy Cones": "from-[#FF8DA1] to-[#FF4E72]",
  "Kids Special Cones": "from-[#005BFF] to-[#0B2E59]",
  "Dessert Cones": "from-[#FFB200] to-[#FF7A00]"
};

let outputData = Object.keys(coneData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: coneData[cat].map((flavour, idx) => ({
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

const CONE_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function Cones() {
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
            Cones Flavours
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Crispy waffle cones baked to perfection, loaded with your favorite double scoops.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {CONE_CATEGORIES.map((categoryGroup, groupIndex) => (
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
}
`;

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'Cones.tsx'), componentCode);
console.log("Cones.tsx updated with UNIQUE matter and variety of images!");
