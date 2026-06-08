const fs = require('fs');
const path = require('path');

const packData = {
  "Classic Family Packs": ["Vanilla Family Pack", "Chocolate Family Pack", "Strawberry Family Pack", "Butterscotch Family Pack", "Mango Family Pack", "Black Currant Family Pack", "Kesar Pista Family Pack", "Coffee Delight Family Pack", "Tender Coconut Family Pack", "Pineapple Paradise Family Pack"],
  "Chocolate Family Packs": ["Belgian Chocolate Family Pack", "Chocolate Fudge Family Pack", "Dark Chocolate Family Pack", "Chocolate Brownie Family Pack", "Triple Chocolate Family Pack", "Choco Chip Family Pack", "Oreo Chocolate Family Pack", "KitKat Crunch Family Pack", "Choco Lava Family Pack", "Death By Chocolate Family Pack"],
  "Fruit Family Packs": ["Mixed Berry Family Pack", "Blueberry Blast Family Pack", "Kiwi Fresh Family Pack", "Lychee Delight Family Pack", "Peach Paradise Family Pack", "Raspberry Family Pack", "Tropical Fruit Family Pack", "Dragon Fruit Family Pack", "Fruit Fiesta Family Pack", "Watermelon Splash Family Pack"],
  "Dry Fruit & Nut Family Packs": ["Royal Kaju Family Pack", "Pista Royale Family Pack", "Badam Delight Family Pack", "Dry Fruit Supreme Family Pack", "Honey Almond Family Pack", "Cashew Crunch Family Pack", "Walnut Treasure Family Pack", "Nutty Celebration Family Pack", "Dates & Nuts Family Pack", "Maharaja Dry Fruit Family Pack"],
  "Dessert Family Packs": ["Red Velvet Family Pack", "Cheesecake Family Pack", "Tiramisu Family Pack", "Brownie Blast Family Pack", "Cookie Dough Family Pack", "Black Forest Family Pack", "Caramel Pudding Family Pack", "Choco Truffle Family Pack", "Walnut Brownie Family Pack", "Caramel Crunch Family Pack"]
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
  classic: [
    "/images/icecream_scoops.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic;
  if (name.includes('choco') || name.includes('fudge') || name.includes('brownie')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('peach') || name.includes('kiwi') || name.includes('lychee')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('cashew') || name.includes('badam') || name.includes('kaju')) pool = imagePool.nutty;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  if (n.includes('vanilla')) return "A timeless classic featuring rich, creamy vanilla bean perfection in a 1L family tub.";
  if (n.includes('dark chocolate')) return "Dive into deep, indulgent dark chocolate crafted from premium bitter cocoa.";
  if (n.includes('belgian')) return "Luxurious Belgian chocolate swirls packed perfectly to share with the whole family.";
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
  if (n.includes('kiwi') || n.includes('lychee') || n.includes('peach') || n.includes('dragon')) return "A refreshing, exotic fruit sensation that brings the taste of summer to your home.";
  if (n.includes('cookie dough')) return "Generous chunks of sweet, buttery chocolate chip cookie dough in every scoop.";
  if (n.includes('red velvet')) return "Rich red velvet cake crumbles blended seamlessly with sweet cream cheese frosting.";
  if (n.includes('tiramisu')) return "A sophisticated Italian dessert experience with espresso-soaked ladyfingers and cocoa.";
  
  const adjectives = ["Delightful", "Premium", "Exquisite", "Handcrafted", "Irresistible", "Signature", "Mouth-watering", "Decadent"];
  const finishes = ["packed into our premium family tub.", "perfect for sharing at home.", "crafted for ultimate family indulgence.", "guaranteed to satisfy everyone's sweet tooth.", "enough to go around for the whole party."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Family Pack', '').trim().toLowerCase() + ' ice cream, ' + fin;
};

const icons = {
  "Classic Family Packs": "🍨",
  "Chocolate Family Packs": "🍫",
  "Fruit Family Packs": "🍓",
  "Dry Fruit & Nut Family Packs": "🥜",
  "Dessert Family Packs": "🍰"
};

const badges = {
  "Classic Family Packs": "Classic",
  "Chocolate Family Packs": "Premium",
  "Fruit Family Packs": "Fruity",
  "Dry Fruit & Nut Family Packs": "Nutty",
  "Dessert Family Packs": "Dessert"
};

const colors = {
  "Classic Family Packs": "from-[#F5EAD4] to-[#DFD0B8]",
  "Chocolate Family Packs": "from-[#4E2F1D] to-[#2B1B10]",
  "Fruit Family Packs": "from-[#FF8DA1] to-[#FF4E72]",
  "Dry Fruit & Nut Family Packs": "from-[#7FA13B] to-[#4F6C1D]",
  "Dessert Family Packs": "from-[#FFB200] to-[#FF7A00]"
};

let outputData = Object.keys(packData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: packData[cat].map((flavour, idx) => ({
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

const PACK_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function FamilyPacks() {
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
            Family Packs Flavours
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Share the love at home with our premium 500ml and 1L party containers.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {PACK_CATEGORIES.map((categoryGroup, groupIndex) => (
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'FamilyPacks.tsx'), componentCode);
console.log("FamilyPacks.tsx updated with UNIQUE matter and variety of images!");
