"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageSquare, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-linear-to-b from-white dark:from-[#0A2540] to-[#FFF8EC] dark:to-[#041224] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-#005BFF font-bold text-sm uppercase tracking-widest block mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] tracking-tight">
            Contact & Location
          </h2>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Split Screen Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden border-4 border-white shadow-xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Main+Road,+Sivalayam+Veedhi,+Yadagirigutta,+Nalgonda,+Telangana+508115&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Srikara Ice Cream Parlour Exact Location"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Right Side: Store Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-between glass p-8 sm:p-10 rounded-3xl border border-[#0B2E59]/10 bg-white/70 shadow-lg text-left"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] mb-1">
                  Srikara Ice Cream Parlour
                </h3>
                <p className="text-sm text-[#005BFF] font-bold uppercase tracking-wider">
                  Authorized Masqati Ice Cream Retailer
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#005BFF]/10 text-[#005BFF] rounded-2xl flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2E59] dark:text-[#FFF8EC] text-sm">Store Address</h4>
                    <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-1 font-medium leading-relaxed">
                      Main Road, Sivalayam Veedhi, Yadagirigutta, Nalgonda, Telangana - 508115
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2E59] dark:text-[#FFF8EC] text-sm">Phone Number</h4>
                    <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-1 font-medium">
                      +91 9030303222
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-[#184F2D]/10 text-[#184F2D] rounded-2xl flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B2E59] dark:text-[#FFF8EC] text-sm">Operating Hours</h4>
                    <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-1 font-medium leading-relaxed">
                      Monday to Sunday: 10:00 AM - 10:00 PM <br />
                      <span className="text-[#184F2D] font-bold text-[10px] sm:text-xs">Open 365 Days a Year</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 pt-6 border-t border-[#0B2E59]/10">
              <a
                href="tel:9030303222"
                className="flex items-center justify-center space-x-2 border-2 border-[#005BFF] text-[#005BFF] hover:bg-[#005BFF] hover:text-white py-3 px-4 rounded-xl font-extrabold text-sm transition-all shadow-sm"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Srikara+Ice+Cream+Parlour+Yadagirigutta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white py-3 px-4 rounded-xl font-extrabold text-sm transition-all shadow-sm"
              >
                <Navigation size={16} />
                <span>Directions</span>
              </a>
              <a
                href="https://wa.me/919030303222?text=Hi%20Srikara%20Ice%20Cream%20Parlour,%20I%20have%20a%20question%20about%20your%20menu%20and%20flavours."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-[#184F2D] text-[#184F2D] hover:bg-[#184F2D] hover:text-white py-3 px-4 rounded-xl font-extrabold text-sm transition-all shadow-sm"
              >
                <MessageSquare size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
