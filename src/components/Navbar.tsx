"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, MapPin, Search, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Story", href: "/our-story" },
  { label: "Flavours", href: "/flavours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);

    // If already on the home page and clicked Home, smooth scroll to top
    if (href === "/" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Only intercept if it's a hash link and we are on the home page
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const isHomePage = pathname === "/";
  // The header should be solid (and use dark text) if we are scrolled, if the menu is open,
  // OR if we are on any page other than the home page (since those pages have light backgrounds).
  const shouldBeSolid = !isHomePage || isScrolled || isOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          shouldBeSolid
            ? "glass py-2 shadow-md border-b border-white/20 bg-white/95 backdrop-blur-xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group z-50">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-[#0A2540] rounded-full p-1 shadow-sm border border-brand-yellow/30 overflow-hidden flex-shrink-0">
              <Image
                src="/images/masqati_cow_logo.png"
                alt="Masqati Logo"
                fill
                className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-base sm:text-xl font-display tracking-tight leading-tight transition-colors ${shouldBeSolid ? 'text-[#0B2E59] dark:text-[#FFF8EC]' : 'text-white'}`}>
                SRIKARA
              </span>
              <span className="text-[10px] sm:text-xs text-[#FF7A00] font-semibold leading-none tracking-wider -mt-0.5 drop-shadow-sm">
                ICE CREAM PARLOUR
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex space-x-1 items-center z-50">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.href)}
                className={`whitespace-nowrap px-3 py-2 text-sm font-semibold rounded-full hover:bg-[#005BFF] hover:text-white transition-all duration-200 ${
                  shouldBeSolid ? 'text-[#0B2E59] dark:text-[#FFF8EC]' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Items (Desktop) */}
          <div className="hidden lg:flex items-center space-x-3 z-50">
            {/* Search Bar */}
            <form action="/search" className="relative group">
              <input
                type="text"
                name="q"
                placeholder="Search..."
                className={`pl-10 pr-4 py-2 w-44 rounded-full border-2 focus:outline-none focus:border-[#005BFF] text-sm transition-all duration-300 ${
                  shouldBeSolid 
                    ? 'border-[#0B2E59]/20 bg-white/50 focus:bg-white dark:bg-[#0A2540] text-[#0B2E59] dark:text-[#FFF8EC] placeholder-[#0B2E59]/50'
                    : 'border-white/30 bg-white/10 focus:bg-white/95 text-[#0B2E59] dark:text-[#FFF8EC] placeholder-white/70 focus:placeholder-[#0B2E59]/50'
                }`}
              />
              <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 focus:outline-none">
                <Search size={16} className={`transition-colors ${shouldBeSolid ? 'text-[#0B2E59] dark:text-[#FFF8EC]/50 group-focus-within:text-[#005BFF]' : 'text-white/70 group-focus-within:text-[#005BFF]'}`} />
              </button>
            </form>

            {/* Toggle Option */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full border-2 transition-all duration-300 focus:outline-none shadow-sm ${
                shouldBeSolid
                  ? 'border-[#0B2E59]/20 bg-white/50 text-[#0B2E59] dark:text-[#FFF8EC] hover:bg-[#005BFF] hover:text-white hover:border-[#005BFF]'
                  : 'border-white/30 bg-white/10 text-white hover:bg-white dark:bg-[#0A2540] hover:text-[#005BFF] hover:border-white'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            <Link
              href="/flavours"
              onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/flavours")}
              className="flex items-center space-x-2 bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MapPin size={16} />
              <span>Visit Store</span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center xl:hidden space-x-2 z-50">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                shouldBeSolid ? 'bg-[#0B2E59]/5 text-[#0B2E59] dark:text-[#FFF8EC] hover:bg-[#0B2E59]/10' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                shouldBeSolid ? 'text-[#0B2E59] dark:text-[#FFF8EC] hover:bg-[#0B2E59]/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Hamburger Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full z-40 bg-white/95 backdrop-blur-xl border-b border-[#0B2E59]/10 shadow-2xl xl:hidden overflow-hidden"
            >
              <div className="max-h-[calc(100vh-80px)] overflow-y-auto px-4 py-6">
                <div className="flex flex-col space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, item.href)}
                      className="px-4 py-3 text-base font-bold rounded-xl text-[#0B2E59] dark:text-[#FFF8EC] hover:bg-[#005BFF]/10 hover:text-[#005BFF] transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="border-t border-[#0B2E59]/10 mt-4 pt-6 flex flex-col space-y-4">
                    <form action="/search" className="relative w-full" onSubmit={() => setIsOpen(false)}>
                      <input
                        type="text"
                        name="q"
                        placeholder="Search flavours..."
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-[#0B2E59]/20 bg-[#0B2E59]/5 focus:bg-white dark:bg-[#0A2540] focus:outline-none focus:border-[#005BFF] text-base text-[#0B2E59] dark:text-[#FFF8EC] placeholder-[#0B2E59]/50 transition-all"
                      />
                      <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 focus:outline-none">
                        <Search size={20} className="text-[#0B2E59] dark:text-[#FFF8EC]/50" />
                      </button>
                    </form>
                    
                    <Link
                      href="/flavours"
                      onClick={(e) => handleScrollTo(e as unknown as React.MouseEvent<HTMLAnchorElement>, "/flavours")}
                      className="flex items-center justify-center space-x-2 bg-[#FF7A00] text-white py-3.5 rounded-xl font-bold shadow-md hover:bg-[#FF7A00]/95 hover:-translate-y-0.5 transition-all text-lg"
                    >
                      <MapPin size={20} />
                      <span>Visit Store</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
