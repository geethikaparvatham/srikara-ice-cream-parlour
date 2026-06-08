import React from "react";
import Categories from "@/components/Categories";

export const metadata = {
  title: "Our Signature Flavours | Srikara Ice Cream Parlour",
  description: "Explore our wide range of premium Masqati Ice Cream flavours at Srikara Ice Cream Parlour.",
};

export default function FlavoursPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px]">
      {/* Show only Categories on this page as requested */}
      <div className="min-h-screen bg-[#FFF8EC]">
        <Categories />
      </div>
    </main>
  );
}
