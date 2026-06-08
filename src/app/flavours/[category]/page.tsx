import React from "react";
import Cups from "@/components/flavours/Cups";
import Cones from "@/components/flavours/Cones";
import Sundaes from "@/components/flavours/Sundaes";
import Kulfi from "@/components/flavours/Kulfi";
import ChocolateCollection from "@/components/flavours/ChocolateCollection";
import FruitSalads from "@/components/flavours/FruitSalads";
import Smoothies from "@/components/flavours/Smoothies";
import Milkshakes from "@/components/flavours/Milkshakes";
import Cassata from "@/components/flavours/Cassata";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryTitle = resolvedParams.category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${categoryTitle} Flavours | Srikara Ice Cream Parlour`,
    description: `Explore our premium ${categoryTitle} ice cream flavours at Srikara Ice Cream Parlour.`,
  };
}

export default async function CategoryFlavoursPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  const renderCategory = () => {
    switch (category) {
      case "cups": return <Cups />;
      case "cones": return <Cones />;
      case "sundaes": return <Sundaes />;
      case "kulfi": return <Kulfi />;
      case "chocolate-collection": return <ChocolateCollection />;
      case "fruit-salads": return <FruitSalads />;
      case "smoothies": return <Smoothies />;
      case "milkshakes": return <Milkshakes />;
      case "cassata": return <Cassata />;
      default: return <div className="text-center py-20 text-2xl font-bold text-[#0B2E59]">Category not found</div>;
    }
  };

  return (
    <main className="flex-grow pt-[68px] xl:pt-[80px]">
      <div className="min-h-screen bg-[#FFF8EC]">
        {renderCategory()}
      </div>
    </main>
  );
}
