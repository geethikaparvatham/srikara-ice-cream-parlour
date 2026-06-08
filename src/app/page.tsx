import React from "react";
import Hero from "@/components/Hero";
import QualityPromise from "@/components/QualityPromise";
import Stats from "@/components/Stats";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Full-width Hero Carousel */}
        <Hero />

        {/* Quality Promise Section */}
        <QualityPromise />

        {/* Statistics Banner */}
        <Stats />

        {/* Experience Video Banner */}
        <VideoSection />

        {/* FAQ Accordion List */}
        <FAQ />

        {/* Visit Parlour Call to Action */}
        <VisitCTA />
      </main>

      {/* Footer exclusively on Home Page */}
      <Footer />
    </>
  );
}
