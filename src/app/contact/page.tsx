import React from "react";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact Us | Srikara Ice Cream Parlour",
  description: "Get in touch with Srikara Ice Cream Parlour. Find our location, hours, and contact details.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px] min-h-screen bg-white dark:bg-[#041224]">
      <Contact />
    </main>
  );
}
