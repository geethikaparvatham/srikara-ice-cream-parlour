"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const FLAVOURS = [
  {
    name: "Vanilla Delight Cup",
    description: "Rich, velvety Belgian cocoa base loaded with premium dark chocolate chips for ultimate cocoa pleasure.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    color: "from-[#4E2F1D] to-[#2B1B10]",
    accent: "#4E2F1D",
    badge: "Bestseller",
  },
  {
    name: "Vanilla Classic",
    description: "Pure Madagascar bourbon vanilla bean extract churned with double cream for an authentic, timeless taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    color: "from-[#F5EAD4] to-[#DFD0B8]",
    accent: "#DFD0B8",
    badge: "All-Time Fav",
  },
  {
    name: "Strawberry Bliss",
    description: "Freshly harvested ripe strawberries blended into premium milk, offering a refreshing and natural fruit notes.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FF8DA1] to-[#FF4E72]",
    accent: "#FF4E72",
    badge: "Fresh Fruits",
  },
  {
    name: "Mango Magic",
    description: "Made with the king of mangoes - premium Alphonso mango pulp, giving a rich, aromatic, and sun-kissed flavour.",
    image: "/images/mango_magic.png",
    color: "from-[#FFB200] to-[#FF7A00]",
    accent: "#FF7A00",
    badge: "Seasonal Special",
  },
  {
    name: "Butterscotch Crunch",
    description: "Sweet caramelized brown sugar cream studded with buttery, crunchy praline nuggets.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E6B325] to-[#B37D14]",
    accent: "#B37D14",
    badge: "Extra Crunchy",
  },
  {
    name: "Black Currant",
    description: "Tangy blackcurrant berries swirled in premium cream, providing a beautiful purple hue and berry punch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    color: "from-[#5B2A6B] to-[#341242]",
    accent: "#5B2A6B",
    badge: "Popular Choice",
  },
  {
    name: "Pista Paradise",
    description: "Creamy pistachio base packed with crushed roasted pistachios, presenting an authentic Indian delicacy flavor.",
    image: "/images/pista_paradise.png",
    color: "from-[#7FA13B] to-[#4F6C1D]",
    accent: "#4F6C1D",
    badge: "Royal Flavour",
  },
  {
    name: "Kesar Badam",
    description: "A royal combination of saffron-infused milk, real almond slivers, and cardamom hints.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FCA93A] to-[#D66B15]",
    accent: "#D66B15",
    badge: "Desi Delight",
  },
  {
    name: "Belgian Chocolate",
    description: "A darker, more intense dark chocolate experience crafted with authentic imported cocoa solids.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    color: "from-[#351E10] to-[#1E1109]",
    accent: "#351E10",
    badge: "Gourmet Dark",
  },
  {
    name: "Fruit Fusion",
    description: "A colorful, vibrant celebration of mixed tropical fruits, offering a refreshing multi-fruit punch scoop.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E65C40] to-[#C8341A]",
    accent: "#E65C40",
    badge: "Mixed Fruits",
  },
  {
    name: "Chocolate Delight",
    description: "Rich, velvety Belgian cocoa base loaded with premium dark chocolate chips for ultimate cocoa pleasure.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    color: "from-[#4E2F1D] to-[#2B1B10]",
    accent: "#4E2F1D",
    badge: "Bestseller",
  },
  {
    name: "Vanilla Classic",
    description: "Pure Madagascar bourbon vanilla bean extract churned with double cream for an authentic, timeless taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    color: "from-[#F5EAD4] to-[#DFD0B8]",
    accent: "#DFD0B8",
    badge: "All-Time Fav",
  },
  {
    name: "Strawberry Bliss",
    description: "Freshly harvested ripe strawberries blended into premium milk, offering a refreshing and natural fruit notes.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FF8DA1] to-[#FF4E72]",
    accent: "#FF4E72",
    badge: "Fresh Fruits",
  },
  {
    name: "Mango Magic",
    description: "Made with the king of mangoes - premium Alphonso mango pulp, giving a rich, aromatic, and sun-kissed flavour.",
    image: "/images/mango_magic.png",
    color: "from-[#FFB200] to-[#FF7A00]",
    accent: "#FF7A00",
    badge: "Seasonal Special",
  },
  {
    name: "Butterscotch Crunch",
    description: "Sweet caramelized brown sugar cream studded with buttery, crunchy praline nuggets.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E6B325] to-[#B37D14]",
    accent: "#B37D14",
    badge: "Extra Crunchy",
  },
  {
    name: "Black Currant",
    description: "Tangy blackcurrant berries swirled in premium cream, providing a beautiful purple hue and berry punch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    color: "from-[#5B2A6B] to-[#341242]",
    accent: "#5B2A6B",
    badge: "Popular Choice",
  },
  {
    name: "Pista Paradise",
    description: "Creamy pistachio base packed with crushed roasted pistachios, presenting an authentic Indian delicacy flavor.",
    image: "/images/pista_paradise.png",
    color: "from-[#7FA13B] to-[#4F6C1D]",
    accent: "#4F6C1D",
    badge: "Royal Flavour",
  },
  {
    name: "Kesar Badam",
    description: "A royal combination of saffron-infused milk, real almond slivers, and cardamom hints.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FCA93A] to-[#D66B15]",
    accent: "#D66B15",
    badge: "Desi Delight",
  },
  {
    name: "Belgian Chocolate",
    description: "A darker, more intense dark chocolate experience crafted with authentic imported cocoa solids.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    color: "from-[#351E10] to-[#1E1109]",
    accent: "#351E10",
    badge: "Gourmet Dark",
  },
  {
    name: "Fruit Fusion",
    description: "A colorful, vibrant celebration of mixed tropical fruits, offering a refreshing multi-fruit punch scoop.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E65C40] to-[#C8341A]",
    accent: "#E65C40",
    badge: "Mixed Fruits",
  },
  {
    name: "Chocolate Delight",
    description: "Rich, velvety Belgian cocoa base loaded with premium dark chocolate chips for ultimate cocoa pleasure.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    color: "from-[#4E2F1D] to-[#2B1B10]",
    accent: "#4E2F1D",
    badge: "Bestseller",
  },
  {
    name: "Vanilla Classic",
    description: "Pure Madagascar bourbon vanilla bean extract churned with double cream for an authentic, timeless taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    color: "from-[#F5EAD4] to-[#DFD0B8]",
    accent: "#DFD0B8",
    badge: "All-Time Fav",
  },
  {
    name: "Strawberry Bliss",
    description: "Freshly harvested ripe strawberries blended into premium milk, offering a refreshing and natural fruit notes.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FF8DA1] to-[#FF4E72]",
    accent: "#FF4E72",
    badge: "Fresh Fruits",
  },
  {
    name: "Mango Magic",
    description: "Made with the king of mangoes - premium Alphonso mango pulp, giving a rich, aromatic, and sun-kissed flavour.",
    image: "/images/mango_magic.png",
    color: "from-[#FFB200] to-[#FF7A00]",
    accent: "#FF7A00",
    badge: "Seasonal Special",
  },
  {
    name: "Butterscotch Crunch",
    description: "Sweet caramelized brown sugar cream studded with buttery, crunchy praline nuggets.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E6B325] to-[#B37D14]",
    accent: "#B37D14",
    badge: "Extra Crunchy",
  },
  {
    name: "Black Currant",
    description: "Tangy blackcurrant berries swirled in premium cream, providing a beautiful purple hue and berry punch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    color: "from-[#5B2A6B] to-[#341242]",
    accent: "#5B2A6B",
    badge: "Popular Choice",
  },
  {
    name: "Pista Paradise",
    description: "Creamy pistachio base packed with crushed roasted pistachios, presenting an authentic Indian delicacy flavor.",
    image: "/images/pista_paradise.png",
    color: "from-[#7FA13B] to-[#4F6C1D]",
    accent: "#4F6C1D",
    badge: "Royal Flavour",
  },
  {
    name: "Kesar Badam",
    description: "A royal combination of saffron-infused milk, real almond slivers, and cardamom hints.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FCA93A] to-[#D66B15]",
    accent: "#D66B15",
    badge: "Desi Delight",
  },
  {
    name: "Belgian Chocolate",
    description: "A darker, more intense dark chocolate experience crafted with authentic imported cocoa solids.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    color: "from-[#351E10] to-[#1E1109]",
    accent: "#351E10",
    badge: "Gourmet Dark",
  },
  {
    name: "Fruit Fusion",
    description: "A colorful, vibrant celebration of mixed tropical fruits, offering a refreshing multi-fruit punch scoop.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E65C40] to-[#C8341A]",
    accent: "#E65C40",
    badge: "Mixed Fruits",
  },
  {
    name: "Chocolate Delight",
    description: "Rich, velvety Belgian cocoa base loaded with premium dark chocolate chips for ultimate cocoa pleasure.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    color: "from-[#4E2F1D] to-[#2B1B10]",
    accent: "#4E2F1D",
    badge: "Bestseller",
  },
  {
    name: "Vanilla Classic",
    description: "Pure Madagascar bourbon vanilla bean extract churned with double cream for an authentic, timeless taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    color: "from-[#F5EAD4] to-[#DFD0B8]",
    accent: "#DFD0B8",
    badge: "All-Time Fav",
  },
  {
    name: "Strawberry Bliss",
    description: "Freshly harvested ripe strawberries blended into premium milk, offering a refreshing and natural fruit notes.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FF8DA1] to-[#FF4E72]",
    accent: "#FF4E72",
    badge: "Fresh Fruits",
  },
  {
    name: "Mango Magic",
    description: "Made with the king of mangoes - premium Alphonso mango pulp, giving a rich, aromatic, and sun-kissed flavour.",
    image: "/images/mango_magic.png",
    color: "from-[#FFB200] to-[#FF7A00]",
    accent: "#FF7A00",
    badge: "Seasonal Special",
  },
  {
    name: "Butterscotch Crunch",
    description: "Sweet caramelized brown sugar cream studded with buttery, crunchy praline nuggets.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E6B325] to-[#B37D14]",
    accent: "#B37D14",
    badge: "Extra Crunchy",
  },
  {
    name: "Black Currant",
    description: "Tangy blackcurrant berries swirled in premium cream, providing a beautiful purple hue and berry punch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    color: "from-[#5B2A6B] to-[#341242]",
    accent: "#5B2A6B",
    badge: "Popular Choice",
  },
  {
    name: "Pista Paradise",
    description: "Creamy pistachio base packed with crushed roasted pistachios, presenting an authentic Indian delicacy flavor.",
    image: "/images/pista_paradise.png",
    color: "from-[#7FA13B] to-[#4F6C1D]",
    accent: "#4F6C1D",
    badge: "Royal Flavour",
  },
  {
    name: "Kesar Badam",
    description: "A royal combination of saffron-infused milk, real almond slivers, and cardamom hints.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FCA93A] to-[#D66B15]",
    accent: "#D66B15",
    badge: "Desi Delight",
  },
  {
    name: "Belgian Chocolate",
    description: "A darker, more intense dark chocolate experience crafted with authentic imported cocoa solids.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    color: "from-[#351E10] to-[#1E1109]",
    accent: "#351E10",
    badge: "Gourmet Dark",
  },
  {
    name: "Fruit Fusion",
    description: "A colorful, vibrant celebration of mixed tropical fruits, offering a refreshing multi-fruit punch scoop.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E65C40] to-[#C8341A]",
    accent: "#E65C40",
    badge: "Mixed Fruits",
  },
  {
    name: "Chocolate Delight",
    description: "Rich, velvety Belgian cocoa base loaded with premium dark chocolate chips for ultimate cocoa pleasure.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    color: "from-[#4E2F1D] to-[#2B1B10]",
    accent: "#4E2F1D",
    badge: "Bestseller",
  },
  {
    name: "Vanilla Classic",
    description: "Pure Madagascar bourbon vanilla bean extract churned with double cream for an authentic, timeless taste.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=400&q=80",
    color: "from-[#F5EAD4] to-[#DFD0B8]",
    accent: "#DFD0B8",
    badge: "All-Time Fav",
  },
  {
    name: "Strawberry Bliss",
    description: "Freshly harvested ripe strawberries blended into premium milk, offering a refreshing and natural fruit notes.",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FF8DA1] to-[#FF4E72]",
    accent: "#FF4E72",
    badge: "Fresh Fruits",
  },
  {
    name: "Mango Magic",
    description: "Made with the king of mangoes - premium Alphonso mango pulp, giving a rich, aromatic, and sun-kissed flavour.",
    image: "/images/mango_magic.png",
    color: "from-[#FFB200] to-[#FF7A00]",
    accent: "#FF7A00",
    badge: "Seasonal Special",
  },
  {
    name: "Butterscotch Crunch",
    description: "Sweet caramelized brown sugar cream studded with buttery, crunchy praline nuggets.",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E6B325] to-[#B37D14]",
    accent: "#B37D14",
    badge: "Extra Crunchy",
  },
  {
    name: "Black Currant",
    description: "Tangy blackcurrant berries swirled in premium cream, providing a beautiful purple hue and berry punch.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80",
    color: "from-[#5B2A6B] to-[#341242]",
    accent: "#5B2A6B",
    badge: "Popular Choice",
  },
  {
    name: "Pista Paradise",
    description: "Creamy pistachio base packed with crushed roasted pistachios, presenting an authentic Indian delicacy flavor.",
    image: "/images/pista_paradise.png",
    color: "from-[#7FA13B] to-[#4F6C1D]",
    accent: "#4F6C1D",
    badge: "Royal Flavour",
  },
  {
    name: "Kesar Badam",
    description: "A royal combination of saffron-infused milk, real almond slivers, and cardamom hints.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=400&q=80",
    color: "from-[#FCA93A] to-[#D66B15]",
    accent: "#D66B15",
    badge: "Desi Delight",
  },
  {
    name: "Belgian Chocolate",
    description: "A darker, more intense dark chocolate experience crafted with authentic imported cocoa solids.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80",
    color: "from-[#351E10] to-[#1E1109]",
    accent: "#351E10",
    badge: "Gourmet Dark",
  },
  {
    name: "Fruit Fusion",
    description: "A colorful, vibrant celebration of mixed tropical fruits, offering a refreshing multi-fruit punch scoop.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=400&q=80",
    color: "from-[#E65C40] to-[#C8341A]",
    accent: "#E65C40",
    badge: "Mixed Fruits",
  },
];

interface FlavoursProps {
  categoryTitle?: string;
}

export default function Flavours({ categoryTitle }: FlavoursProps = {}) {
  return (
    <section id="flavours" className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      {/* Decorative floating graphics */}
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#005BFF]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            {categoryTitle ? "Category Selection" : "Gourmet Selection"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            {categoryTitle ? `${categoryTitle} Flavours` : "Our Signature Flavours"}
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Explore our curated menu of rich, creamy scoops sourced from pure milk and fresh premium ingredients.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Flavour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {FLAVOURS.map((flavor, index) => (
            <motion.div
              key={flavor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="relative rounded-2xl overflow-hidden glass shadow-md border border-[#0B2E59]/10 bg-white/70 group flex flex-col h-full"
            >
              {/* Card Image Header */}
              <div className="relative w-full h-[180px] overflow-hidden bg-[#0B2E59]/5">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 20vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0B2E59] border border-brand-yellow shadow-sm flex items-center space-x-1">
                  <Snowflake size={10} className="text-[#005BFF] animate-spin-slow" />
                  <span>{flavor.badge}</span>
                </div>

                {/* Heart Button overlay (visual representation of popularity) */}
                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#FF7A00] hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer">
                  <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow text-left">
                <h3 className="text-lg font-bold text-[#0B2E59] mb-2 font-display group-hover:text-[#005BFF] transition-colors leading-tight">
                  {flavor.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2E59]/80 leading-relaxed font-medium flex-grow">
                  {flavor.description}
                </p>
              </div>

              {/* Styled Accent Border Bottom */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${flavor.color}`} />
            </motion.div>
          ))}
        </div>

        {/* Note Footer */}
        <div className="text-center mt-12 bg-white/50 backdrop-blur-md inline-block mx-auto px-6 py-3 rounded-full border border-white/80 text-sm font-semibold text-[#0B2E59] shadow-sm">
          💡 Sourced directly from trusted <span className="text-[#005BFF] font-bold">Masqati Ice Cream</span> dairy suppliers. Available for scoops, sundaes, and family packs.
        </div>

      </div>
    </section>
  );
}
