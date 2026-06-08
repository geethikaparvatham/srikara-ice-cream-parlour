"use client";

import React from "react";
import { MessageCircle, IceCream } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#0B2E59] text-white pt-16 pb-8 border-t-8 border-[#FFD447] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Column 1: Information */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-extrabold text-[#FFD447] text-lg tracking-wider">
              Information
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="hover:text-[#FFD447] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-[#FFD447] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#flavours" onClick={(e) => handleScrollTo(e, "#flavours")} className="hover:text-[#FFD447] transition-colors">
                  Flavours
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleScrollTo(e, "#gallery")} className="hover:text-[#FFD447] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, "#testimonials")} className="hover:text-[#FFD447] transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Know More */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-extrabold text-[#FFD447] text-lg tracking-wider">
              Know More
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#story" onClick={(e) => handleScrollTo(e, "#story")} className="hover:text-[#FFD447] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "#about")} className="hover:text-[#FFD447] transition-colors">
                  Quality Promise
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#FFD447] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleScrollTo(e, "#gallery")} className="hover:text-[#FFD447] transition-colors">
                  Store Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-extrabold text-[#FFD447] text-lg tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-[#FFD447] transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, "#contact")} className="hover:text-[#FFD447] transition-colors">
                  Visit Store
                </a>
              </li>
              <li>
                <a href="tel:9030303222" className="hover:text-[#FFD447] transition-colors">
                  Business Enquiries
                </a>
              </li>
              <li>
                <a href="tel:9030303222" className="hover:text-[#FFD447] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social media connect */}
          <div className="text-left flex flex-col space-y-4">
            <h4 className="font-display font-extrabold text-[#FFD447] text-lg tracking-wider">
              Follow Us
            </h4>
            <p className="text-xs text-white/70 font-medium leading-relaxed max-w-[200px]">
              Stay updated with our seasonal flavors and special offers on social media.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF7A00] text-white flex items-center justify-center border border-white/20 hover:border-transparent transition-all shadow-sm"
                aria-label="Instagram Link"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#005BFF] text-white flex items-center justify-center border border-white/20 hover:border-transparent transition-all shadow-sm"
                aria-label="Facebook Link"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-red-600 text-white flex items-center justify-center border border-white/20 hover:border-transparent transition-all shadow-sm"
                aria-label="YouTube Link"
              >
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://wa.me/919030303222"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center border border-white/20 hover:border-transparent transition-all shadow-sm"
                aria-label="WhatsApp Link"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Column 5: Circular Rotating badge */}
          <div className="flex justify-center lg:justify-end items-center col-span-1 md:col-span-2 lg:col-span-1">
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Rotating Circular Text SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                <path
                  id="textPath"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="text-[7.2px] font-extrabold fill-white tracking-widest font-display">
                  <textPath href="#textPath" startOffset="0%">
                    BETTER INGREDIENTS • BETTER ICE CREAM •
                  </textPath>
                </text>
              </svg>

              {/* Bouncing Central Ice Cream Scoop Icon */}
              <div className="absolute inset-0 flex items-center justify-center text-[#FFD447]">
                <div className="p-3 bg-white/15 rounded-full border border-white/20 shadow-md">
                  <IceCream size={26} className="animate-bounce" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright banner */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-white/60 font-medium">
          <p>© 2025 Srikara Ice Cream Parlour. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <span className="text-red-500 mx-1 text-base">❤️</span> for Ice Cream Lovers
          </p>
        </div>

      </div>
    </footer>
  );
}
