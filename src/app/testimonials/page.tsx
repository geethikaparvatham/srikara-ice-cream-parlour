import React from "react";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Testimonials | Srikara Ice Cream Parlour",
  description: "Read what our customers have to say about their experience at Srikara Ice Cream Parlour.",
};

export default function TestimonialsPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px] min-h-screen bg-[#FFF8EC] dark:bg-[#041224]">
      <Testimonials />
    </main>
  );
}
