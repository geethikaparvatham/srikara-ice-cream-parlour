const fs = require('fs');
const path = require('path');

const kulfiData = {
  "Traditional Kulfi Collection": ["Classic Malai Kulfi", "Kesar Kulfi", "Pista Kulfi", "Elaichi Kulfi", "Rabdi Kulfi", "Shahi Kulfi", "Mawa Kulfi", "Saffron Malai Kulfi", "Rich Cream Kulfi", "Traditional Matka Kulfi"],
  "Dry Fruit Kulfi Collection": ["Kesar Pista Kulfi", "Badam Kulfi", "Cashew Delight Kulfi", "Dry Fruit Special Kulfi", "Anjeer Kulfi", "Honey Almond Kulfi", "Walnut Kulfi", "Mixed Nuts Kulfi", "Royal Dry Fruit Kulfi", "Maharaja Kulfi"],
  "Premium Fusion Kulfi": ["Chocolate Kulfi", "Chocolate Almond Kulfi", "Belgian Chocolate Kulfi", "Oreo Kulfi", "Brownie Kulfi", "Caramel Kulfi", "Butterscotch Kulfi", "Coffee Kulfi", "Chocolate Truffle Kulfi", "Choco Nut Kulfi"],
  "Fruit Kulfi Collection": ["Mango Kulfi", "Strawberry Kulfi", "Lychee Kulfi", "Pineapple Kulfi", "Blueberry Kulfi", "Mixed Berry Kulfi", "Coconut Kulfi", "Kiwi Kulfi", "Fruit Fiesta Kulfi", "Tropical Delight Kulfi"],
  "Matka Kulfi Specials": ["Malai Matka Kulfi", "Kesar Pista Matka Kulfi", "Rabdi Matka Kulfi", "Badam Matka Kulfi", "Mango Matka Kulfi", "Dry Fruit Matka Kulfi", "Royal Matka Kulfi", "Shahi Matka Kulfi", "Maharaja Matka Kulfi", "Signature Matka Kulfi"],
  "Indian Sweet-Inspired Kulfi": ["Gulab Jamun Kulfi", "Rasmalai Kulfi", "Rabdi Malai Kulfi", "Gajar Halwa Kulfi", "Paan Kulfi", "Falooda Kulfi", "Kesar Badam Kulfi", "Jalebi Kulfi", "Shahi Tukda Kulfi", "Royal Dessert Kulfi"],
  "Signature Kulfi Collection": ["Royal Crown Kulfi", "Golden Saffron Kulfi", "Creamy Heritage Kulfi", "Indian Royal Kulfi", "Palace Special Kulfi", "King's Delight Kulfi", "Queen's Choice Kulfi", "Heritage Kulfi Supreme", "Maharaja Gold Kulfi", "Signature Paradise Kulfi"]
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
  traditional: [
    "/images/pistachio_cones.png",
    "/images/icecream_scoops.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.traditional;
  if (name.includes('choco') || name.includes('brownie') || name.includes('oreo')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('lychee') || name.includes('pineapple') || name.includes('kiwi')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('cashew') || name.includes('badam') || name.includes('anjeer') || name.includes('walnut')) pool = imagePool.nutty;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  if (n.includes('malai')) return "Rich, creamy, and traditional malai base slow-cooked to perfection.";
  if (n.includes('kesar') && n.includes('pista')) return "A regal blend of aromatic saffron threads and crushed premium green pistachios.";
  if (n.includes('kesar') || n.includes('saffron')) return "Infused with pure golden saffron for a rich, royal aromatic flavor.";
  if (n.includes('pista')) return "Loaded with crunchy roasted pistachios in a dense, sweet mawa base.";
  if (n.includes('badam')) return "Packed with pureed and crushed almonds for a rich, nutty Indian dessert experience.";
  if (n.includes('elaichi')) return "Traditionally flavored with fragrant green cardamom for an authentic sweet aroma.";
  if (n.includes('rabdi')) return "Extra rich and thick slow-reduced milk for a deeply caramelized authentic taste.";
  if (n.includes('mawa')) return "Dense, grainy, and deeply satisfying milk solid texture that melts in the mouth.";
  if (n.includes('chocolate')) return "A delicious modern twist blending rich cocoa with dense traditional kulfi texture.";
  if (n.includes('oreo')) return "Crushed Oreo cookies folded into rich malai for the ultimate fusion dessert.";
  if (n.includes('mango')) return "Made with pure Alphonso mango pulp mixed into a traditional creamy base.";
  if (n.includes('strawberry')) return "Sweet and tangy real strawberries folded into dense, rich malai.";
  if (n.includes('anjeer')) return "Naturally sweetened with rich fig puree and chunks for a healthy traditional treat.";
  if (n.includes('matka')) return "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.";
  if (n.includes('gulab jamun')) return "Soft, sweet gulab jamun pieces crushed into rich rabdi kulfi base.";
  if (n.includes('rasmalai')) return "The ultimate Indian dessert fusion with real rasmalai essence and texture.";
  if (n.includes('paan')) return "Refreshing sweet paan flavor with gulkand and fennel, a perfect after-meal treat.";
  if (n.includes('falooda')) return "Rich kulfi paired with the classic flavors of rose, sweet basil seeds, and vermicelli.";
  if (n.includes('gajar halwa')) return "Warm notes of slow-cooked carrot halwa wrapped in a chilled kulfi stick.";
  if (n.includes('shahi')) return "A truly royal recipe dating back generations, loaded with rich nuts and mawa.";
  if (n.includes('maharaja') || n.includes('royal')) return "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.";
  
  const adjectives = ["Authentic", "Traditional", "Premium", "Handcrafted", "Rich", "Signature", "Mouth-watering", "Classic"];
  const finishes = ["served on a traditional stick.", "frozen to dense perfection.", "crafted using age-old recipes.", "guaranteed to give you a taste of royalty.", "slow-cooked for an authentic Indian taste."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Kulfi', '').trim().toLowerCase() + ' kulfi, ' + fin;
};

const icons = {
  "Traditional Kulfi Collection": "🥛",
  "Dry Fruit Kulfi Collection": "🥜",
  "Premium Fusion Kulfi": "🍫",
  "Fruit Kulfi Collection": "🥭",
  "Matka Kulfi Specials": "🏺",
  "Indian Sweet-Inspired Kulfi": "🇮🇳",
  "Signature Kulfi Collection": "🌟"
};

const badges = {
  "Traditional Kulfi Collection": "Classic",
  "Dry Fruit Kulfi Collection": "Nutty",
  "Premium Fusion Kulfi": "Fusion",
  "Fruit Kulfi Collection": "Fruity",
  "Matka Kulfi Specials": "Earthy",
  "Indian Sweet-Inspired Kulfi": "Desi",
  "Signature Kulfi Collection": "Premium"
};

const colors = {
  "Traditional Kulfi Collection": "from-[#F5EAD4] to-[#DFD0B8]",
  "Dry Fruit Kulfi Collection": "from-[#7FA13B] to-[#4F6C1D]",
  "Premium Fusion Kulfi": "from-[#4E2F1D] to-[#2B1B10]",
  "Fruit Kulfi Collection": "from-[#FFB200] to-[#FF7A00]",
  "Matka Kulfi Specials": "from-[#8B5A2B] to-[#5C3A21]",
  "Indian Sweet-Inspired Kulfi": "from-[#FF4E72] to-[#C90095]",
  "Signature Kulfi Collection": "from-[#D4AF37] to-[#AA8A25]"
};

let outputData = Object.keys(kulfiData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: kulfiData[cat].map((flavour, idx) => ({
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

const KULFI_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function Kulfi() {
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
            Traditional Kulfi
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Dense, slow-cooked traditional Indian ice cream crafted with authentic recipes and rich mawa.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {KULFI_CATEGORIES.map((categoryGroup, groupIndex) => (
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'Kulfi.tsx'), componentCode);
console.log("Kulfi.tsx updated with UNIQUE matter and variety of images!");
