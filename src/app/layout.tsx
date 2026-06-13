import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srikaraicecreamparlour.com"),
  title: "Srikara Ice Cream Parlour | Premium Masqati Ice Cream, Yadagirigutta",
  description: "Experience premium, creamy, and delicious Masqati Ice Cream products at Srikara Ice Cream Parlour, Yadagirigutta, Telangana. Clean, family-friendly atmosphere with 50+ gourmet flavours.",
  keywords: ["Srikara Ice Cream Parlour", "Masqati Ice Cream Yadagirigutta", "Ice cream parlor Nalgonda", "Best ice cream in Yadagirigutta", "Family ice cream shop Telangana", "Masqati dairy products"],
  openGraph: {
    title: "Srikara Ice Cream Parlour | Premium Masqati Ice Cream Shop",
    description: "Enjoy fresh, rich, and delicious Masqati Ice Cream scoops at Srikara Ice Cream Parlour, Yadagirigutta. Over 50+ flavours, cozy seating, and premium customer service.",
    type: "website",
    locale: "en_IN",
    url: "https://srikaraicecreamparlour.com",
    siteName: "Srikara Ice Cream Parlour",
    images: [
      {
        url: "/images/storefront.png",
        width: 1200,
        height: 630,
        alt: "Srikara Ice Cream Parlour Storefront",
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    "name": "Srikara Ice Cream Parlour",
    "image": "https://srikaraicecreamparlour.com/images/storefront.png",
    "@id": "https://srikaraicecreamparlour.com/#store",
    "url": "https://srikaraicecreamparlour.com",
    "telephone": "+919030303222",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Sivalayam Veedhi",
      "addressLocality": "Yadagirigutta, Nalgonda",
      "addressRegion": "Telangana",
      "postalCode": "508115",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.5255,
      "longitude": 78.9483
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "sameAs": [
      "https://www.instagram.com/srikara_icecream",
      "https://www.facebook.com/srikara_icecream"
    ]
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0A2540] text-[#0B2E59] dark:text-[#FFF8EC] dark:bg-[#0A2540] dark:text-[#FFF8EC] pb-[64px] md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <MobileBottomNav />
      </body>
    </html>
  );
}
