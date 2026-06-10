import React from "react";
import OurStory from "@/components/OurStory";

export const metadata = {
  title: "Our Story | Srikara Ice Cream Parlour",
  description: "The story behind our legendary ice cream and commitment to quality.",
};

export default function OurStoryPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px] min-h-screen bg-[#FFF8EC] dark:bg-[#041224]">
      <OurStory />
    </main>
  );
}
