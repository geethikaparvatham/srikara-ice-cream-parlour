"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Grid, Image as ImageIcon, Phone } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", href: "/", icon: Home },
  { name: "About Us", href: "/about-us", icon: Info },
  { name: "Flavours", href: "/flavours", icon: Grid },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/ dark:bg-[#0A2540]/0 dark:bg-[#081F3D]/95 backdrop-blur-md border-t border-[#0B2E59]/10 dark:border-white/10 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)] pb-safe transition-colors duration-300">
      <nav className="flex justify-around items-center h-16">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                isActive ? "text-[#FF7A00]" : "text-[#0B2E59] dark:text-[#FFF8EC]/60 dark:text-white/60 hover:text-[#0B2E59] dark:text-[#FFF8EC] dark:hover:text-white"
              }`}
            >
              <Icon size={20} className={isActive ? "fill-current" : ""} />
              <span className="text-[10px] font-bold tracking-wide">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
