const fs = require('fs');
const path = require('path');

const data = {
  FruitSalads: {
    name: "Fruit Salads",
    icon: "🥗",
    color: "from-[#10B981] to-[#047857]",
    categories: {
      "Tropical Fruit Salads": ["Classic Mix Fruit Salad", "Mango & Apple Delight", "Pineapple Papaya Bowl", "Kiwi Berry Splash", "Fresh Watermelon Bowl"],
      "Premium Fruit Salads": ["Royal Dry Fruit Salad", "Exotic Dragon Fruit Bowl", "Berry Blast Fruit Salad", "Pomegranate & Fig Delight", "Golden Kiwi & Apple Bowl"],
      "Ice Cream Fruit Salads": ["Vanilla Mix Fruit", "Mango Ice Cream Salad", "Strawberry Fruit Delight", "Butterscotch Apple Bowl", "Chocolate Berry Mix"]
    }
  },
  Smoothies: {
    name: "Smoothies",
    icon: "🥤",
    color: "from-[#8B5CF6] to-[#5B21B6]",
    categories: {
      "Fresh Fruit Smoothies": ["Mango Tango Smoothie", "Strawberry Banana Splash", "Mixed Berry Blast", "Tropical Papaya Smoothie", "Kiwi Apple Green"],
      "Healthy & Detox Smoothies": ["Green Detox Smoothie", "Oats & Apple Breakfast", "Avocado Honey Blend", "Beetroot & Carrot Power", "Spinach Banana Power"],
      "Premium Smoothies": ["Blueberry Almond Crunch", "Dragon Fruit Exotic Blend", "Acai Berry Super Blend", "Peanut Butter Banana", "Dates & Fig Royale"]
    }
  },
  Milkshakes: {
    name: "Milkshakes",
    icon: "🧋",
    color: "from-[#F59E0B] to-[#B45309]",
    categories: {
      "Classic Shakes": ["Thick Vanilla Shake", "Classic Chocolate Shake", "Strawberry Delight Shake", "Butterscotch Crunch Shake", "Mango Summer Shake"],
      "Premium & Nut Shakes": ["Kesar Badam Shake", "Rich Pista Shake", "Royal Kaju Shake", "Dates & Walnut Shake", "Anjeer Honey Shake"],
      "Indulgent Chocolate Shakes": ["Oreo Cookie Blast", "KitKat Crunch Shake", "Brownie Fudge Shake", "Ferrero Rocher Royale", "Nutella Hazelnut Shake"]
    }
  },
  Cassata: {
    name: "Cassata",
    icon: "🍰",
    color: "from-[#EC4899] to-[#BE185D]",
    categories: {
      "Classic Cassata": ["Traditional Tri-Color Cassata", "Vanilla Strawberry Cassata", "Chocolate Base Cassata", "Mango Layer Cassata", "Pista Base Cassata"],
      "Premium Cassata": ["Royal Dry Fruit Cassata", "Kesar Pista Cassata", "Chocolate Truffle Cassata", "Butterscotch Almond Cassata", "Rajwadi Cassata Cake"],
      "Exotic Cassata": ["Black Forest Cassata", "Red Velvet Cassata", "Blueberry Layer Cassata", "Fruit Punch Cassata", "Tutti Frutti Special"]
    }
  }
};

const imagePool = {
  FruitSalads: [
    "https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
  ],
  Smoothies: [
    "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1553530666-ba11a90a424b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1623065422900-05809dd04e46?auto=format&fit=crop&w=400&q=80"
  ],
  Milkshakes: [
    "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=80"
  ],
  Cassata: [
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80"
  ]
};

const getUniqueDescription = (name, categoryType) => {
  if (categoryType === 'FruitSalads') {
    return `A refreshing bowl of freshly cut fruits featuring ${name.toLowerCase().replace('salad', '').replace('bowl', '')}, handpicked daily for the perfect sweet bite.`;
  } else if (categoryType === 'Smoothies') {
    return `A thick, frosty, and incredibly refreshing blend of ${name.toLowerCase().replace('smoothie', '').replace('blend', '')}, offering a burst of pure energy and flavor.`;
  } else if (categoryType === 'Milkshakes') {
    return `A decadently rich, creamy, and irresistible milkshake blended with premium ${name.toLowerCase().replace('shake', '').replace('thick', '')} ice cream and pure milk.`;
  } else {
    return `Our signature multi-layered ice cream cake slice, the ${name}, featuring sponge cake, rich ice cream, and crunchy nuts.`;
  }
};

const generateComponent = (key, info) => {
  let outputData = Object.keys(info.categories).map((catName, catIdx) => {
    return {
      title: catName,
      icon: info.icon,
      flavours: info.categories[catName].map((flavour, idx) => ({
        name: flavour,
        description: getUniqueDescription(flavour, key),
        image: imagePool[key][(catIdx + idx) % imagePool[key].length],
        color: info.color,
        badge: "Fresh"
      }))
    };
  });

  const componentCode = `"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const ${key.toUpperCase()}_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function ${key}() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#005BFF]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2 flex items-center justify-center gap-2">
            <span>${info.icon}</span> Refreshing Flavours
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            ${info.name}
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Discover our rich and diverse range of ${info.name.toLowerCase()} that bring pure joy to every bite.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {${key.toUpperCase()}_CATEGORIES.map((categoryGroup, groupIndex) => (
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
}`;

  fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', key + '.tsx'), componentCode);
  console.log(key + '.tsx generated successfully!');
};

Object.keys(data).forEach(key => generateComponent(key, data[key]));
