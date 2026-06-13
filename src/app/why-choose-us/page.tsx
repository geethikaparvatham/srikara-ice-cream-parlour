import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata = {
  title: "Why Choose Us | Srikara Ice Cream Parlour",
  description: "Discover what makes Srikara Ice Cream Parlour the best place for premium, authentic ice cream.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px] min-h-screen bg-white dark:bg-[#041224]">
      <WhyChooseUs />
    </main>
  );
}
