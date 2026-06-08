"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CUP_CATEGORIES = [
  {
    title: "Classic Cups",
    icon: "🍨",
    flavours: [
      {
        name: "Vanilla Delight Cup",
        description: "A timeless classic featuring rich, creamy vanilla bean perfection in a premium cup.",
        image: "https://thumbs.dreamstime.com/b/vanilla-ice-cream-delight-three-scoops-cup-dripping-melted-creamy-piled-high-white-delicious-down-side-onto-398963378.jpg",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Chocolate Heaven Cup",
        description: "Irresistible chocolate heaven ice cream, served in our signature eco-friendly cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAr2K52rrJp5Koe1c0nOf-fAJvZ_TqJKasQ&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Strawberry Bliss Cup",
        description: "Bursting with the sweet and tangy goodness of real, farm-fresh strawberries.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW41xKS4yDWSOuXPCxUWdTEdY0WeaInmeBA&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Butterscotch Crunch Cup",
        description: "Sweet buttery goodness layered with signature crunchy caramel praline bits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEmFlXrKBN7TuBJ1p1TmxfmYY4nGm9AggsQ&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Mango Magic Cup",
        description: "A tropical delight made with real, sun-ripened Alphonso mango pulp.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4s-fKvYXwNacSMcAgc41Riba8AaW2IThnwA&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Kesar Pista Cup",
        description: "A royal treat infused with aromatic saffron and roasted green pistachios.",
        image: "https://someindiangirl.com/wp-content/uploads/2020/10/kesar-pista-cupcakes-indian-fusion-4-1-of-1.jpg",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Black Currant Cup",
        description: "A vibrant and tangy sensation packed with real black currant berries.",
        image: "https://icebergicecreams.in/cdn/shop/files/IMG_0006_640b33a8-b4e3-41c1-9a06-c0943cf60d5c.jpg?v=1767795860&width=1024",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Coffee Mocha Cup",
        description: "An aromatic and smooth espresso experience for the true coffee aficionado.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTP_WSSBYbW1RkFO-LenrEam-2pDVefouZA&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Tender Coconut Cup",
        description: "Cool and refreshing, made with delicate pieces of real tender coconut malai.",
        image: "https://icebergicecreams.in/cdn/shop/files/IMG_0077-1_1.jpg?v=1770992620&width=1200",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Pineapple Paradise Cup",
        description: "Refreshing and zesty tropical pineapple chunks layered in creamy perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4lN-qY_zj8JN-8OqkErgkB8Y1I-4osKeC_A&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      }
    ]
  },
  {
    title: "Premium Cups",
    icon: "🍫",
    flavours: [
      {
        name: "Belgian Chocolate Cup",
        description: "Luxurious Belgian chocolate swirls folded into a refreshing cool cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mMZEOekAksK7bYNzTK6KdipriEmKLHun6Q&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Ferrero Fantasy Cup",
        description: "Handcrafted ferrero fantasy ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFP7hYMmnNtAzTyuQJktELxMvzZC205tfJA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Dark Chocolate Truffle Cup",
        description: "Dive into deep, indulgent dark chocolate crafted from premium bitter cocoa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw309gjd-o0ezfK8IgY41f6rFlWaNN1OobwA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Nutty Caramel Cup",
        description: "Premium nutty caramel ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gnN1Vmf8L6N8dlx1XCbWnxOb01Daa-WBvA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Almond Crunch Cup",
        description: "Toasted almond slivers folded into a rich, creamy, and mildly sweet base.",
        image: "https://www.spiritedandthensome.com/wp-content/uploads/2022/04/Almond-Butter-Crunch-Cups-Adj-PMCP-6398.jpg",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Roasted Hazelnut Cup",
        description: "Premium roasted hazelnuts blended with a touch of creamy chocolate cocoa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNy2dYWcJ5JiI7oc5Ag9TzU3Av2U2JMS0YWQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Brownie Cup",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebB--pqwA8gcpa3rbO4BXAdffS4goU3N6sw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Fudge Cup",
        description: "Thick ribbons of gooey chocolate fudge swirled into our signature creamy base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_nJPyf62m-WqHmngD80wDhdW6u_fxLP4EFQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Oreo Blast Cup",
        description: "Crushed Oreo cookies folded into sweet cream for the ultimate cookies and cream treat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxILbWFh2ssAeAnVLDzwI-JOQ3Vncz-Zytw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "KitKat Crunch Cup",
        description: "Premium kitkat crunch ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYAvW7Na0p6dFWAmPLxA9P3E7uJzB31YQtQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      }
    ]
  },
  {
    title: "Fruit Cups",
    icon: "🍓",
    flavours: [
      {
        name: "Mixed Berry Cup",
        description: "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoB_DPugo6q2m8fpqC1klXZXEC1DoDNzmiew&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Blueberry Burst Cup",
        description: "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5iGAJu036llrICsbQIWoyoGt2EwgygHmWTg&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Lychee Love Cup",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1PPYuH6AYpVxAmyGel1v3GldgAhFL2g7kg&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Kiwi Fresh Cup",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6VlJxhq7MEcFcV_xXzXLRz5QukSA-AKc5hg&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Watermelon Splash Cup",
        description: "Signature watermelon splash ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhIzyKo_k201DeQh9-gVzKoCpT59qUWaCzsA&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Peach Paradise Cup",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cup.",
        image: "https://cdn.shopify.com/s/files/1/0732/6964/1387/files/peach-paradise-tea-cup.png?v=1780314108",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Dragon Fruit Cup",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9DnjZ1hMh2qg3GJeISrCv55TEYDBVr2UsQ&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Apple Cinnamon Cup",
        description: "Exquisite apple cinnamon ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzl4I9JKCpf81BzIsa8Bqp_TC_git-bxhYQ&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Fruit Fiesta Cup",
        description: "Delightful fruit fiesta ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9Wf4lEEU_tPXWoKXNU7O4c8IzGrRHwpcGA&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Tropical Delight Cup",
        description: "Irresistible tropical delight ice cream, served in our signature eco-friendly cup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSVM478kUkeUrfNxjBXUmlScMqRebVMUlglw&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      }
    ]
  },

  {
    title: "Dessert Cups",
    icon: "🍰",
    flavours: [
      {
        name: "Red Velvet Cup",
        description: "Rich red velvet cake crumbles blended seamlessly with sweet cream cheese frosting.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTQv5IUzqdRN9co4hDQ2gYpAs2FmnyZfl0Q&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Tiramisu Cup",
        description: "A sophisticated Italian dessert experience with espresso-soaked ladyfingers and cocoa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VzIj7A32qTT6IB4PrfDREmlrcJik2NAApg&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Cheesecake Cup",
        description: "Mouth-watering cheesecake ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVo6uflatWGPz2tzzrOgz7FKPCNZ90yO0QXQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Brownie Blast Cup",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/web-stories/decadent-chocolate-fudge-brownie-recipe-with-a-gooey-centre/feature-image-decadent-chocolate-fudge-brownie-recipe-with-a-gooey-centre.webp",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Black Forest Cup",
        description: "Delightful black forest ice cream, topped with a touch of magic.",
        image: "https://images.squarespace-cdn.com/content/v1/5e90e46fd1119766887d1dc3/1593769741798-7PACSPSVOD0OPX9GK0VO/sundae3.jpeg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Choco Lava Cup",
        description: "Mouth-watering choco lava ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6PmL3Nk8rC81Icgv2bBVGdYVJ27wGNLUHng&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Caramel Pudding Cup",
        description: "Handcrafted caramel pudding ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmrTs1rgEWg6AYkj2QOb2JIuM7KQdrXHXVQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Walnut Brownie Cup",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUgkAMFhp4o8tTeaQSng2d1OnBR8MJp6Kug&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Cookie Dough Cup",
        description: "Generous chunks of sweet, buttery chocolate chip cookie dough in every bite.",
        image: "https://bakingamoment.com/wp-content/uploads/2016/09/IMG_0316-chocolate-chip-cookies-1.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Death by Chocolate Cup",
        description: "Mouth-watering death by chocolate ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzwHWbPneQ5-lvr5h7trjWEyN2afs4JtbSg&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      }
    ]
  },
  {
    title: "Dry Fruit & Nut Cups",
    icon: "🥜",
    flavours: [
      {
        name: "Royal Kaju Cup",
        description: "Rich, buttery cashew nuts roasted to perfection and swirled in sweet cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEXf9lFJO64P5gDU1-uUbPtJyaGRhqcUtLQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Pista Royale Cup",
        description: "A royal treat infused with aromatic saffron and roasted green pistachios.",
        image: "https://tiimg.tistatic.com/fp/1/007/491/100ml-cup-kesar-pista-royal-saffron-flavoured-ice-cream-with-pistachio-energy-238kcal-123.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Badam Delight Cup",
        description: "Premium badam delight ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zsnrVhWclFdWc7fYMXx9teJf0DyVCZ-0EQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Dry Fruit Supreme Cup",
        description: "Signature dry fruit supreme ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp12dFS7vAc7kCEybrqnEX2-sdWQNIscA2xA&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Honey Almond Cup",
        description: "Toasted almond slivers folded into a rich, creamy, and mildly sweet base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAjk3UGn4Ab3DPK45BIcxVtsAOMJ5FkSgjQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Cashew Crunch Cup",
        description: "Rich, buttery cashew nuts roasted to perfection and swirled in sweet cream.",
        image: "https://www.eatloveeats.com/wp-content/uploads/2020/05/Cashew-Butter-Cups-6-360x360.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Nutty Treasure Cup",
        description: "Exquisite nutty treasure ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://m.media-amazon.com/images/I/61a5TXsYykL._AC_UF894,1000_QL80_.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Anjeer Delight Cup",
        description: "Exquisite anjeer delight ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitLO4oBgFQKRlAscatBfAuw2ALptTvPeJaQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Dates & Nuts Cup",
        description: "Delightful dates & nuts ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeY75sXyPRX7MQlBzDMv-27_SeGeMFLbzJw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Royal Maharaja Cup",
        description: "Exquisite royal maharaja ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/RX_THUMBNAIL/IMAGES/VENDOR/2026/3/14/031d6c51-1588-4e42-a459-6f4a81272c8b_1345146.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      }
    ]
  }
];

export default function Cups() {
  return (
    <section className="py-20 bg-#FFF8EC relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-#FF7A00/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-#005BFF/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-#005BFF font-bold text-sm uppercase tracking-widest block mb-2">
            Category Selection
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-#0B2E59">
            Cups Flavours
          </h2>
          <p className="text-base text-#0B2E59/80 mt-4 font-medium">
            Perfect portion sizes served in clean, convenient cups. Ideal for quick indulgence.
          </p>
          <div className="w-16 h-1 bg-#FF7A00 mx-auto mt-4 rounded-full" />
        </div>

        {CUP_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-#0B2E59">{categoryGroup.title}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {categoryGroup.flavours.map((flavor, index) => (
                <motion.div
                  key={flavor.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="relative rounded-2xl overflow-hidden glass shadow-md border border-#0B2E59/10 bg-white/70 group flex flex-col h-full"
                >
                  <div className="relative w-full h-180px overflow-hidden bg-#0B2E59/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-#0B2E59 border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={10} className="text-#005BFF animate-spin-slow" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-#FF7A00 hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer">
                      <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow text-left">
                    <h3 className="text-lg font-bold text-#0B2E59 mb-2 font-display group-hover:text-#005BFF transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-#0B2E59/80 leading-relaxed font-medium grow">
                      {flavor.description}
                    </p>
                  </div>

                  <div className={"h-1.5 w-full bg-linear-to-r " + flavor.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}