"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Snowflake, Heart, Frown, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { allFlavours } from "@/data/allFlavours";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  
  const lowerQuery = query.toLowerCase().trim();
  
  const results = allFlavours.filter(flavor => {
    if (!lowerQuery) return false;
    return (
      flavor.name.toLowerCase().includes(lowerQuery) ||
      flavor.description.toLowerCase().includes(lowerQuery) ||
      flavor.categoryName.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <section className="py-20 bg-white relative min-h-screen overflow-hidden mt-16">
      <div className="absolute top-40 left-10 w-24 h-24 bg-#FF7A00/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-#005BFF/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <span className="text-#005BFF font-bold text-sm uppercase tracking-widest block mb-2">
            Search Results
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-#0B2E59">
            {query ? `Results for "${query}"` : "Search Flavours"}
          </h2>
          <div className="w-16 h-1 bg-#FF7A00 mx-auto mt-4 rounded-full" />
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative z-10">
            {results.map((flavor, index) => (
              <motion.div
                key={flavor.name + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative rounded-2xl overflow-hidden glass shadow-md border border-#0B2E59/10 bg-white/70 group flex flex-col h-full"
              >
                <div className="relative w-full h-180px overflow-hidden bg-#0B2E59/5">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-#0B2E59 border border-brand-yellow shadow-sm flex items-center space-x-1">
                    <Snowflake size={10} className="text-#005BFF animate-spin-slow" />
                    <span>{flavor.badge}</span>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-#FF7A00 hover:bg-white dark:bg-[#0A2540] transition-colors duration-200 shadow-sm cursor-pointer">
                    <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                  </div>
                </div>

                <div className="p-5 flex flex-col grow text-left">
                  <span className="text-[10px] uppercase font-bold text-#FF7A00 mb-1">{flavor.categoryName}</span>
                  <h3 className="text-lg font-bold text-#0B2E59 mb-2 font-display group-hover:text-#005BFF transition-colors leading-tight">
                    {flavor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-#0B2E59/80 leading-relaxed font-medium grow">
                    {flavor.description}
                  </p>
                </div>

                <div className={"h-1.5 w-full bg-linear-to-r " + flavor.color} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center relative z-10"
          >
            <div className="w-24 h-24 bg-white dark:bg-[#0A2540] rounded-full flex items-center justify-center shadow-md mb-6 text-#0B2E59/30">
              <Frown size={48} />
            </div>
            <h3 className="text-2xl font-bold text-#0B2E59 mb-3 font-display">
              No results found
            </h3>
            <p className="text-#0B2E59/70 max-w-md mb-8">
              We couldn't find any ice cream flavours matching "{query}". 
              Please try searching for something else like "mango", "chocolate", or "royal".
            </p>
            <Link 
              href="/"
              className="flex items-center space-x-2 bg-#005BFF text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-#0B2E59 transition-colors duration-300"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-#0B2E59 font-bold">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
