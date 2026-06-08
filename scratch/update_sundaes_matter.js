const fs = require('fs');
const path = require('path');

const sundaeData = {
  "Chocolate Sundaes": ["Hot Chocolate Fudge Sundae", "Triple Chocolate Sundae", "Brownie Blast Sundae", "Belgian Chocolate Sundae", "Choco Lava Sundae", "Oreo Crunch Sundae", "KitKat Sundae", "Chocolate Truffle Sundae", "Dark Chocolate Delight Sundae", "Death By Chocolate Sundae"],
  "Fruit Sundaes": ["Strawberry Dream Sundae", "Mango Magic Sundae", "Blueberry Bliss Sundae", "Mixed Berry Sundae", "Tropical Paradise Sundae", "Pineapple Delight Sundae", "Raspberry Rush Sundae", "Kiwi Splash Sundae", "Fruit Fiesta Sundae", "Peach Passion Sundae"],
  "Cookie & Brownie Sundaes": ["Cookie Monster Sundae", "Oreo Overload Sundae", "Chocolate Chip Cookie Sundae", "Brownie Supreme Sundae", "Cookie Dough Sundae", "Walnut Brownie Sundae", "Caramel Cookie Sundae", "Choco Cookie Crunch Sundae", "Double Brownie Sundae", "Ultimate Cookie Sundae"],
  "Candy Sundaes": ["Rainbow Sprinkle Sundae", "Cotton Candy Sundae", "Candy Crush Sundae", "M&M Sundae", "Marshmallow Delight Sundae", "Bubblegum Sundae", "Choco Candy Sundae", "Sweet Celebration Sundae", "Unicorn Sundae", "Party Blast Sundae"],
  "Nutty Sundaes": ["Almond Crunch Sundae", "Pista Royale Sundae", "Hazelnut Heaven Sundae", "Cashew Delight Sundae", "Honey Almond Sundae", "Dry Fruit Supreme Sundae", "Nutty Treasure Sundae", "Walnut Crunch Sundae", "Royal Badam Sundae", "Caramel Nut Sundae"],
  "Caramel & Butterscotch Sundaes": ["Caramel Crunch Sundae", "Salted Caramel Sundae", "Butterscotch Bliss Sundae", "Golden Caramel Sundae", "Sticky Toffee Sundae", "Caramel Brownie Sundae", "Caramel Nut Delight Sundae", "Butterscotch Almond Sundae", "Toffee Crunch Sundae", "Caramel Dream Sundae"]
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
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic;
  if (name.includes('choco') || name.includes('fudge') || name.includes('brownie')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('peach') || name.includes('kiwi') || name.includes('lychee')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('cashew') || name.includes('badam') || name.includes('kaju')) pool = imagePool.nutty;
  else if (name.includes('candy') || name.includes('rainbow') || name.includes('unicorn') || name.includes('bubblegum') || name.includes('m&m') || name.includes('marshmallow')) pool = imagePool.kids;
  else if (name.includes('caramel') || name.includes('butterscotch') || name.includes('toffee')) pool = imagePool.nutty;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  // Custom unique descriptions based on keywords
  if (n.includes('fudge')) return "Layers of warm, gooey chocolate fudge poured over signature ice cream scoops.";
  if (n.includes('dark chocolate')) return "A dark and mysterious delight layered with premium bitter cocoa fudge.";
  if (n.includes('belgian')) return "Luxurious Belgian chocolate swirls topped with whipped cream and choco chips.";
  if (n.includes('strawberry')) return "Bursting with real farm-fresh strawberries layered over creamy vanilla bean.";
  if (n.includes('butterscotch')) return "Sweet buttery goodness layered with signature crunchy caramel praline bits.";
  if (n.includes('mango')) return "A tropical delight loaded with real, sun-ripened Alphonso mango chunks.";
  if (n.includes('blueberry') || n.includes('berry')) return "A vibrant and tangy sensation packed with real berry compote and fresh fruits.";
  if (n.includes('coffee')) return "An aromatic espresso experience layered with chocolate sauce and whipped cream.";
  if (n.includes('pista') || n.includes('pistachio')) return "A royal treat infused with aromatic saffron and loaded with roasted pistachios.";
  if (n.includes('pineapple')) return "Refreshing and zesty tropical pineapple chunks layered in creamy perfection.";
  if (n.includes('brownie')) return "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.";
  if (n.includes('oreo')) return "Crushed Oreo cookies folded into sweet cream with generous chocolate syrup.";
  if (n.includes('almond')) return "Toasted almond slivers sprinkled generously over a rich caramel sundae base.";
  if (n.includes('hazelnut')) return "Premium roasted hazelnuts blended with rich nutella-like chocolate swirls.";
  if (n.includes('cashew') || n.includes('kaju')) return "Rich, buttery cashew nuts roasted to perfection and swirled in sweet honey.";
  if (n.includes('kiwi') || n.includes('lychee') || n.includes('peach') || n.includes('dragon')) return "A refreshing, exotic fruit sundae loaded with freshly diced fruit chunks.";
  if (n.includes('rainbow') || n.includes('party')) return "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.";
  if (n.includes('cotton candy') || n.includes('bubblegum')) return "A nostalgic carnival treat topped with marshmallow fluff and sweet syrup.";
  if (n.includes('cookie dough')) return "Generous chunks of sweet, buttery chocolate chip cookie dough in every bite.";
  if (n.includes('caramel') || n.includes('toffee')) return "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.";
  
  const adjectives = ["Decadent", "Ultimate", "Indulgent", "Handcrafted", "Irresistible", "Signature", "Mouth-watering", "Luxurious"];
  const finishes = ["served in a beautiful tall glass.", "topped with whipped cream and a cherry.", "layered perfectly for the ultimate treat.", "guaranteed to satisfy your dessert cravings.", "drizzled with our signature house-made sauces."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Sundae', '').trim().toLowerCase() + ' creation, ' + fin;
};

const icons = {
  "Chocolate Sundaes": "🍫",
  "Fruit Sundaes": "🍓",
  "Cookie & Brownie Sundaes": "🍪",
  "Candy Sundaes": "🍬",
  "Nutty Sundaes": "🥜",
  "Caramel & Butterscotch Sundaes": "🍮"
};

const badges = {
  "Chocolate Sundaes": "Premium",
  "Fruit Sundaes": "Fruity",
  "Cookie & Brownie Sundaes": "Crunchy",
  "Candy Sundaes": "Kids Fav",
  "Nutty Sundaes": "Nutty",
  "Caramel & Butterscotch Sundaes": "Sweet"
};

const colors = {
  "Chocolate Sundaes": "from-[#4E2F1D] to-[#2B1B10]",
  "Fruit Sundaes": "from-[#FF8DA1] to-[#FF4E72]",
  "Cookie & Brownie Sundaes": "from-[#795C34] to-[#4A3515]",
  "Candy Sundaes": "from-[#FF7EE2] to-[#C90095]",
  "Nutty Sundaes": "from-[#7FA13B] to-[#4F6C1D]",
  "Caramel & Butterscotch Sundaes": "from-[#FFB200] to-[#FF7A00]"
};

let outputData = Object.keys(sundaeData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: sundaeData[cat].map((flavour, idx) => ({
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

const SUNDAE_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function Sundaes() {
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
            Sundae Creations
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Luxurious layers of ice cream, house-made sauces, and crunchy toppings served in a beautiful glass.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {SUNDAE_CATEGORIES.map((categoryGroup, groupIndex) => (
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'Sundaes.tsx'), componentCode);
console.log("Sundaes.tsx updated with UNIQUE matter and variety of images!");
