import React from "react";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Gallery | Srikara Ice Cream Parlour",
  description: "View photos of Srikara Ice Cream Parlour and our delicious ice cream.",
};

export default function GalleryPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px]">
      <div className="min-h-screen bg-[#FFF8EC]">
        <Gallery />
      </div>
    </main>
  );
}
