import React from "react";
import Welcome from "@/components/Welcome";

export const metadata = {
  title: "About Us | Srikara Ice Cream Parlour",
  description: "Learn about the history and heritage of Srikara Ice Cream Parlour and Masqati Ice Cream.",
};

export default function AboutUsPage() {
  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px] min-h-screen bg-[#FFF8EC]">
      <Welcome />
    </main>
  );
}
