const fs = require('fs');
const path = require('path');

const seasonalData = {
  "Summer Specials": ["Alphonso Mango Delight", "Mango Cheesecake Swirl", "Watermelon Splash", "Tender Coconut Bliss", "Lychee Paradise", "Pineapple Punch", "Kiwi Cooler", "Tropical Fruit Fiesta", "Mango Passion", "Summer Berry Burst"],
  "Monsoon Specials": ["Hot Chocolate Crunch Ice Cream", "Coffee Mocha Swirl", "Ginger Honey Cream", "Caramel Toffee Delight", "Choco Hazelnut Bliss", "Brownie Monsoon Magic", "Cinnamon Caramel Dream", "Dark Chocolate Temptation", "Mocha Almond Crunch", "Rainy Day Special"],
  "Autumn Specials": ["Apple Cinnamon Delight", "Caramel Apple Crunch", "Maple Walnut Dream", "Honey Almond Bliss", "Roasted Nut Delight", "Fig & Honey Ice Cream", "Cinnamon Cookie Cream", "Butterscotch Harvest", "Golden Caramel Swirl", "Autumn Nut Supreme"],
  "Winter Specials": ["Dry Fruit Royale", "Kesar Badam Delight", "Royal Pista Cream", "Walnut Caramel Crunch", "Chocolate Truffle Supreme", "Saffron Malai Magic", "Hazelnut Fudge Fantasy", "Rich Rabdi Cream", "Winter Nut Feast", "Maharaja Special"],
  "Seasonal Fruit Specials": ["Alphonso Mango Ice Cream", "Sitaphal Delight", "Jackfruit Magic", "Jamun Bliss", "Strawberry Harvest", "Muskmelon Dream", "Dragon Fruit Fantasy", "Guava Chilli Twist", "Peach Paradise", "Berry Festival"],
  "Festival Special Collection": ["Diwali Dry Fruit Delight", "Holi Rainbow Splash", "Sankranti Sweet Cream", "Ugadi Mango Special", "Christmas Plum Delight", "New Year Celebration Sundae", "Eid Royal Rabdi Cream", "Navratri Kesar Pista", "Ganesh Festival Modak Delight", "Festival Feast Ice Cream"],
  "Premium Limited Edition Specials": ["Golden Saffron Royale", "Maharaja Gold Delight", "Royal Heritage Cream", "Diamond Pistachio Delight", "King's Celebration Ice Cream", "Queen's Berry Bliss", "Signature Luxury Scoop", "Platinum Chocolate Supreme", "Velvet Royal Delight", "Heritage Special Reserve"],
  "Natural & Exotic Seasonal Specials": ["Rose Petal Delight", "Lavender Honey Cream", "Mint Chocolate Breeze", "Basil Berry Fusion", "Green Tea Matcha Cream", "Hibiscus Berry Bliss", "Saffron Rose Royale", "Lemon Mint Chill", "Honey Fig Delight", "Exotic Garden Cream"]
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
    "/images/seasonal_specials.png",
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80"
  ],
  festive: [
    "/images/seasonal_specials.png",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80"
  ]
};

const getDynamicImage = (flavorName, index) => {
  const name = flavorName.toLowerCase();
  let pool = imagePool.classic;
  if (name.includes('choco') || name.includes('brownie') || name.includes('mocha') || name.includes('fudge')) pool = imagePool.chocolate;
  else if (name.includes('berry') || name.includes('mango') || name.includes('fruit') || name.includes('peach') || name.includes('watermelon') || name.includes('lychee') || name.includes('apple') || name.includes('jamun') || name.includes('sitaphal')) pool = imagePool.fruit;
  else if (name.includes('nut') || name.includes('pista') || name.includes('almond') || name.includes('walnut') || name.includes('badam') || name.includes('cashew')) pool = imagePool.nutty;
  else if (name.includes('holi') || name.includes('christmas') || name.includes('new year') || name.includes('diwali') || name.includes('fest')) pool = imagePool.festive;
  
  return pool[index % pool.length];
};

const getUniqueDescription = (name) => {
  const n = name.toLowerCase();
  
  // Custom unique descriptions based on keywords
  if (n.includes('mango')) return "A seasonal delight made with real, sun-ripened Alphonso mangoes at their peak freshness.";
  if (n.includes('watermelon') || n.includes('lychee') || n.includes('kiwi')) return "Incredibly refreshing and cooling, crafted to beat the intense summer heat.";
  if (n.includes('coffee') || n.includes('mocha')) return "A warm, comforting blend of rich espresso and chocolate, perfect for a rainy afternoon.";
  if (n.includes('ginger') || n.includes('cinnamon')) return "Infused with aromatic warming spices, creating a comforting treat for cooler weather.";
  if (n.includes('apple') || n.includes('maple')) return "The quintessential taste of autumn, featuring crisp notes and rich, warm syrups.";
  if (n.includes('dry fruit') || n.includes('badam') || n.includes('pista')) return "A deeply rich and dense creation loaded with premium roasted nuts and dry fruits.";
  if (n.includes('sitaphal') || n.includes('jackfruit') || n.includes('jamun')) return "An authentic Indian seasonal exotic fruit, hand-pulped and blended into a creamy base.";
  if (n.includes('guava')) return "A perfect tangy-sweet balance with a signature Indian chili powder twist.";
  if (n.includes('diwali') || n.includes('holi') || n.includes('navratri')) return "A festive special crafted with premium ingredients to celebrate joyous Indian occasions.";
  if (n.includes('christmas') || n.includes('plum')) return "A rich, festive blend loaded with soaked fruits, nuts, and warm holiday spices.";
  if (n.includes('modak')) return "Inspired by the beloved festival sweet, featuring coconut, jaggery, and cardamom notes.";
  if (n.includes('royal') || n.includes('maharaja') || n.includes('king') || n.includes('queen') || n.includes('platinum')) return "Our most luxurious, limited-edition offering featuring the finest ingredients from around the world.";
  if (n.includes('saffron') || n.includes('gold')) return "A truly opulent creation infused with pure golden saffron threads and rich cream.";
  if (n.includes('rose') || n.includes('lavender') || n.includes('hibiscus')) return "Delicately infused with natural, aromatic floral extracts for a uniquely elegant taste.";
  if (n.includes('mint') || n.includes('basil')) return "A vibrant and refreshing herbal twist that perfectly complements the creamy base.";
  
  const adjectives = ["Exclusive", "Limited Edition", "Seasonal", "Signature", "Premium", "Exotic", "Handcrafted", "Delightful"];
  const finishes = ["available only for a limited time.", "crafted to celebrate the season.", "an absolute must-try special.", "guaranteed to surprise your taste buds.", "crafted using seasonal fresh ingredients."];
  
  const adj = adjectives[name.length % adjectives.length];
  const fin = finishes[name.length % finishes.length];
  
  return adj + ' ' + name.replace('Special', '').replace('Delight', '').trim().toLowerCase() + ' creation, ' + fin;
};

const icons = {
  "Summer Specials": "☀️",
  "Monsoon Specials": "🌧️",
  "Autumn Specials": "🍂",
  "Winter Specials": "❄️",
  "Seasonal Fruit Specials": "🥭",
  "Festival Special Collection": "🎉",
  "Premium Limited Edition Specials": "👑",
  "Natural & Exotic Seasonal Specials": "🌿"
};

const badges = {
  "Summer Specials": "Summer",
  "Monsoon Specials": "Monsoon",
  "Autumn Specials": "Autumn",
  "Winter Specials": "Winter",
  "Seasonal Fruit Specials": "Seasonal",
  "Festival Special Collection": "Festive",
  "Premium Limited Edition Specials": "Premium",
  "Natural & Exotic Seasonal Specials": "Exotic"
};

const colors = {
  "Summer Specials": "from-[#FFB200] to-[#FF7A00]",
  "Monsoon Specials": "from-[#005BFF] to-[#0B2E59]",
  "Autumn Specials": "from-[#D97706] to-[#92400E]",
  "Winter Specials": "from-[#E0F2FE] to-[#0284C7]",
  "Seasonal Fruit Specials": "from-[#FF8DA1] to-[#FF4E72]",
  "Festival Special Collection": "from-[#D946EF] to-[#86198F]",
  "Premium Limited Edition Specials": "from-[#D4AF37] to-[#AA8A25]",
  "Natural & Exotic Seasonal Specials": "from-[#4ADE80] to-[#166534]"
};

let outputData = Object.keys(seasonalData).map(cat => {
  return {
    title: cat,
    icon: icons[cat],
    flavours: seasonalData[cat].map((flavour, idx) => ({
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

const SEASONAL_CATEGORIES = ${JSON.stringify(outputData, null, 2).replace(/"([^"]+)":/g, '$1:')};

export default function SeasonalSpecials() {
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
            Seasonal Specials
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Limited-time creations crafted with the freshest seasonal ingredients to celebrate every occasion.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {SEASONAL_CATEGORIES.map((categoryGroup, groupIndex) => (
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

fs.writeFileSync(path.join('c:', 'Users', 'PARVATHAM GEETHIKA', 'OneDrive', 'Desktop', 'Ice Cream Parlour', 'src', 'components', 'flavours', 'SeasonalSpecials.tsx'), componentCode);
console.log("SeasonalSpecials.tsx updated with UNIQUE matter and variety of images!");
