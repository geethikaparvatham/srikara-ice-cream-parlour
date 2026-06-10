"use client";

import React, { useEffect, useState, useRef } from "react";
import { Smile, IceCream, ShieldCheck, Star, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  live?: boolean;
}

function Counter({ value, suffix = "", duration = 1.5, live = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-50px" });
  const [hasFinishedInitial, setHasFinishedInitial] = useState(false);

  // Initial count-up animation
  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(value);
        setHasFinishedInitial(true);
      }
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  // Real-time live simulation
  useEffect(() => {
    if (live && hasFinishedInitial) {
      const interval = setInterval(() => {
        // Randomly increment by 1 or 2 every few seconds to simulate live activity
        if (Math.random() > 0.4) {
          setCount(prev => prev + Math.floor(Math.random() * 2) + 1);
        }
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [live, hasFinishedInitial]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    icon: Smile,
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
    desc: "Delighted families served",
    live: true,
  },
  {
    icon: IceCream,
    value: 50,
    suffix: "+",
    label: "Ice Cream Varieties",
    desc: "Scoops, cones, and kulfis",
    live: false,
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Quality Assurance",
    desc: "Pure ingredients sourced",
    live: false,
  },
  {
    icon: Star,
    value: 5,
    suffix: " Star",
    label: "Customer Rating",
    desc: "Top-rated local parlour",
    live: false,
  },
  {
    icon: Heart,
    value: 10000,
    suffix: "+",
    label: "Moments Shared",
    desc: "Memories made at store",
    live: true,
  },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-[#0B2E59] to-[#005BFF] text-white overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 text-center">
          {STATS.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center select-none ${
                  idx === STATS.length - 1 ? "col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4 text-[#FFD447]">
                  <IconComponent size={22} className="animate-pulse" />
                </div>

                {/* Animated counter */}
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-[#FFD447] tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} live={stat.live} />
                </h3>

                {/* Label & Description */}
                <p className="text-sm sm:text-base font-bold mt-2 text-white">
                  {stat.label}
                </p>
                <p className="text-[10px] sm:text-xs text-white/70 mt-1 font-medium leading-none">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
