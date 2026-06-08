"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const CONE_CATEGORIES = [
  {
    title: "Classic Cone Collection",
    icon: "🍦",
    flavours: [
      {
        name: "Vanilla Cone",
        description: "A timeless classic featuring rich, creamy vanilla bean perfection in a crunchy waffle.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKdhVnkuZMDp1mgVHVapcZMFXCSykI7UbEw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Chocolate Cone",
        description: "Mouth-watering chocolate ice cream, perfectly balanced for a rich taste.",
        image: "https://tiimg.tistatic.com/fp/1/007/810/sweet-tasty-cold-mouth-watering-and-melting-brown-chocolate-ice-cream-cone--467.jpg",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Strawberry Cone",
        description: "Bursting with the sweet and tangy goodness of real, farm-fresh strawberries.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ib8dF1TmWXsTeT26Hfz6qa1Z2j__XRK2rg&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Butterscotch Cone",
        description: "Sweet buttery goodness layered with signature crunchy caramel praline bits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5xnVuoOBADMCiGcecI_LSTcoTaYvcb3yhA&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Mango Cone",
        description: "A tropical delight made with real, sun-ripened Alphonso mango pulp.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pr-xr-6DL2_ZJAe-MkQ_odBF-ZJIrFQ3_g&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Black Currant Cone",
        description: "A vibrant and tangy sensation packed with real black currant berries.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJheP5o_nuMOBLYM2JHKDO3ZVQHLTDkKYfHQ&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Coffee Cone",
        description: "An aromatic and smooth espresso experience for the true coffee aficionado.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomJIKUjIclRZv4UuxMQCMlFZtVTG8Si1WpA&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Kesar Pista Cone",
        description: "A royal treat infused with aromatic saffron and roasted green pistachios.",
        image: "https://www.jcookingodyssey.com/wp-content/uploads/2025/06/kesar-pista-ice-cream-480x270.jpg",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Pineapple Cone",
        description: "Refreshing and zesty tropical pineapple chunks layered in creamy perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZQk09yxANf5Jq0UEcnJRgN2btcuGm0ioIw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Tender Coconut Cone",
        description: "Cool and refreshing, made with delicate pieces of real tender coconut malai.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXWRGwTvhvxoXDaNHXFTr1MUvYs-Rd5MUdg&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      }
    ]
  },
  {
    title: "Chocolate Lovers Cones",
    icon: "🍫",
    flavours: [
      {
        name: "Belgian Chocolate Cone",
        description: "Luxurious Belgian chocolate swirls folded into a freshly baked crispy cone.",
        image: "https://thumbs.dreamstime.com/b/chocolate-soft-serve-ice-cream-cone-sprinkles-crispy-waffle-served-casual-eatery-setting-delicious-topped-colorful-357968197.jpg",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Dark Chocolate Cone",
        description: "Dive into deep, indulgent dark chocolate crafted from premium bitter cocoa.",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2026/5/8/35d672bf-eaef-4be7-b6d3-da219a42d963_456298_5.png",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Fudge Cone",
        description: "Thick ribbons of gooey chocolate fudge swirled into our signature creamy base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSs1X4kxqM-p8zKUYdZfEsNL9Fh54bJ3ISQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Brownie Cone",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVMhX5w_QxPypVF5g8xPXH6U1ZsyLhs2kMw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Triple Chocolate Cone",
        description: "Signature triple chocolate ice cream, topped with a touch of magic.",
        image: "https://media.gettyimages.com/id/200122134-001/photo/triple-scoop-ice-cream-cone-chocolate-vanilla-and-strawberry.jpg?s=1024x1024&w=gi&k=20&c=7ubf2Ho50YvMEINIiXMlkxeV_YrzmCmXkDla7HpUnNY=",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Choco Chip Cone",
        description: "Decadent choco chip ice cream, served in our signature waffle cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLFvKUDa0I-nzNGJEzFRX2fxM8Ol-A4w5RQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Truffle Cone",
        description: "Mouth-watering chocolate truffle ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKF59GU83ca3kSVwivmWR_jnuie1s7XXGRxg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Oreo Chocolate Cone",
        description: "Crushed Oreo cookies folded into sweet cream for the ultimate cookies and cream treat.",
        image: "https://thumbs.dreamstime.com/b/cookies-cream-ice-cone-oreo-cookie-crumbles-chocolate-sauce-topping-sweet-dessert-white-background-copy-space-362151234.jpg",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "KitKat Crunch Cone",
        description: "Exquisite kitkat crunch ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa4vwWN_JbQEPMdlBa1xhk6T7WPDl6iHh7JA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Choco Lava Cone",
        description: "Decadent choco lava ice cream, served in our signature waffle cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwrGWenPnqq49UpMJabnbuQpn0v2_Bz-zRg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      }
    ]
  },
  {
    title: "Nutty Cones",
    icon: "🥜",
    flavours: [
      {
        name: "Almond Crunch Cone",
        description: "Toasted almond slivers folded into a rich, creamy, and mildly sweet base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hyXmY-pr4pqUMfaNdMCgkTgWxlYuXT4tPw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Roasted Hazelnut Cone",
        description: "Premium roasted hazelnuts blended with a touch of creamy chocolate cocoa.",
        image: "https://static.wixstatic.com/media/f54878_cc07d6ffc6d549d9826da35a8df3be62~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_80/f54878_cc07d6ffc6d549d9826da35a8df3be62~mv2.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Pista Delight Cone",
        description: "A royal treat infused with aromatic saffron and roasted green pistachios.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgwsSgz3-P6OAD84CLWfANZcX-bY79mAeRg&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Cashew Crunch Cone",
        description: "Rich, buttery cashew nuts roasted to perfection and swirled in sweet cream.",
        image: "https://www.cadburydessertscorner.com/hubfs/dc-website-2022/articles/butterscotch-ice-cream-with-cashew-crunch-and-silk-chocolate-swirl/feature-butterscotch-ice-cream.webp",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Honey Almond Cone",
        description: "Toasted almond slivers folded into a rich, creamy, and mildly sweet base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs42k710P72NoppBHoudbhUUX8Sk4gWD_QVw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Dry Fruit Cone",
        description: "Mouth-watering dry fruit ice cream, perfectly balanced for a rich taste.",
        image: "https://www.nutraj.com/cdn/shop/articles/Header_3_49b009fb-dfaf-4fc8-83ee-5b4be2c742b5_800x800.jpg?v=1776070799",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Walnut Caramel Cone",
        description: "Handcrafted walnut caramel ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGUnCgwrjBiPENJtuKdTOEh7BUeRIGiVYIw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Nutty Treasure Cone",
        description: "Handcrafted nutty treasure ice cream, perfectly balanced for a rich taste.",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/nutty-buty-icecream-2219547115-lk410xbz.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Royal Badam Cone",
        description: "Delightful royal badam ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlhzpt1f6PO3FFyguspfvTn-X5oAXv-V9VQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Maharaja Nut Cone",
        description: "Premium maharaja nut ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrvKp-vVPqKISz1It5OXGAdtEH7-EESG1Kg&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      }
    ]
  },
  {
    title: "Fruit Fantasy Cones",
    icon: "🍓",
    flavours: [
      {
        name: "Blueberry Cone",
        description: "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZctPzX39cl6YYBQypk3_eTNfQn_SwB64ew&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Mixed Berry Cone",
        description: "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.",
        image: "https://www.shugarysweets.com/wp-content/uploads/2023/06/berry-ice-cream-cone.jpg",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Kiwi Cone",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIQdJhU8UxCRqkElRMie19bGoGhNOsDtwq4w&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Lychee Cone",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfBZaN49IBjGMrg35CFUN_Nf1EMbsvuCCog&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Peach Cone",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsIFPJIb7wAxsybjDPQTnI34X5RbFXhcNQQ&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Dragon Fruit Cone",
        description: "A refreshing, exotic fruit sensation that brings the taste of summer to your cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqP4rshUQobUu6mPwZCkc4ELdoDyxA1ATpQ&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Watermelon Cone",
        description: "Decadent watermelon ice cream, served in our signature waffle cone.",
        image: "https://www.watermelon.org/wp-content/uploads/2020/03/Ice-Cream-Cone-Sundaes_2020.jpg",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Tropical Fruit Cone",
        description: "Handcrafted tropical fruit ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VQkGVTF2o3BuXgCtMXpee1Mfwk2TFDpAdg&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Fruit Fiesta Cone",
        description: "Premium fruit fiesta ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrTvXYrMV3L8XlQItrYGGD79cpvEh79aK8A&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Raspberry Cone",
        description: "A delightful burst of tart and sweet berries blended into a smooth, creamy texture.",
        image: "https://thumbs.dreamstime.com/b/delightful-raspberry-ice-cream-cone-fresh-raspberries-tantalizing-filled-creamy-topped-drizzled-sauce-428509966.jpg",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      }
    ]
  },
  {
    title: "Kids Special Cones",
    icon: "🍪",
    flavours: [
      {
        name: "Rainbow Sprinkle Cone",
        description: "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRat-GPMz6luQXdqq4N4TNfe4OaOLnP9cy52Q&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Cotton Candy Cone",
        description: "A nostalgic carnival treat bringing back your favorite sweet childhood memories.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25QoAPkIGOz57pnT-Bno7QhZwjh9V9fimYg&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Bubblegum Cone",
        description: "A nostalgic carnival treat bringing back your favorite sweet childhood memories.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTya3pHka8aXW1VxKb4B2Kr5UnibLbh50FdfA&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Unicorn Cone",
        description: "Irresistible unicorn ice cream, crafted for ultimate indulgence.",
        image: "https://im.whatshot.in/img/2019/May/unicone-1-cropped-1-1557912487.jpg?wp=1",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Candy Blast Cone",
        description: "Delightful candy blast ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UGaixhjlBtpYhBIlSPwugWhUoIoAW03iGQ&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Cookie Monster Cone",
        description: "Handcrafted cookie monster ice cream, perfectly balanced for a rich taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXeocf3ekStmGdcSw2ascu13pDJ-C04IXQpA&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Marshmallow Cone",
        description: "Delightful marshmallow ice cream, topped with a touch of magic.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9eBmmYIxpJeIicz3zLuVEiJMbzY5UIeg5TQ&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Choco Candy Cone",
        description: "Delightful choco candy ice cream, topped with a touch of magic.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/072/417/898/small_2x/ice-cream-cone-with-chocolate-coating-and-colorful-sprinkles-held-in-hand-delicious-treat-for-summer-enjoyment-photo.jpeg",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Funfetti Cone",
        description: "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.",
        image: "https://thumbs.dreamstime.com/b/delightful-rainbow-ice-cream-playful-colors-vivid-swirls-atop-crunchy-cone-surrounded-colorful-sprinkles-soft-pastel-394701984.jpg",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      },
      {
        name: "Jelly Bean Cone",
        description: "Decadent jelly bean ice cream, served in our signature waffle cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0-1G56jLZHQy0nEe8j3M08fmoZGLCuJDIw&s",
        color: "from-[#005BFF] to-[#0B2E59]",
        badge: "Kids Fav"
      }
    ]
  },
  {
    title: "Dessert Cones",
    icon: "🍰",
    flavours: [
      {
        name: "Red Velvet Cone",
        description: "Rich red velvet cake crumbles blended seamlessly with sweet cream cheese frosting.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3B6LK8HmU_ojc3mLaYOUJWkCWrRvDkfvtmQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Cheesecake Cone",
        description: "Decadent cheesecake ice cream, served in our signature waffle cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UEsxYAPfMPvilVqI2Hqs4QkKi36Qzb6aYg&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Tiramisu Cone",
        description: "A sophisticated Italian dessert experience with espresso-soaked ladyfingers and cocoa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMgBuUrapn1-4eLW7ebWk9xaQy2eak-zmxGQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Black Forest Cone",
        description: "Premium black forest ice cream, crafted for ultimate indulgence.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAOc-BNVxpBZ5aldL9lRNPc-IDKq_vZlQnw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Brownie Blast Cone",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScn8lfit0E67HeK0kax9vmCKv35cRgMXLBrg&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Cookie Dough Cone",
        description: "Generous chunks of sweet, buttery chocolate chip cookie dough in every bite.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhRfvQeh1lxM5M_5hcYxS4BRfQ0sHrdE1xw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Caramel Pudding Cone",
        description: "Irresistible caramel pudding ice cream, served in our signature waffle cone.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZWQ8w1CQryvfiMKYylCbxEfKmaZSvrKeeA&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Choco Lava Cone",
        description: "Decadent choco lava ice cream, served in our signature waffle cone.",
        image: "https://images.presentationgo.com/2025/06/chocolate-ice-cream-cone-splash.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Walnut Brownie Cone",
        description: "Decadent chunks of gooey chocolate brownie mixed into a rich fudge base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46zlref_LH5lmgMaUtdhvxlkdRLxNGUSITw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      },
      {
        name: "Death by Chocolate Cone",
        description: "Decadent death by chocolate ice cream, guaranteed to satisfy your sweet tooth.",
        image: "https://lakesicecream.com/wp-content/uploads/2020/06/lakes-icecream-death-by-chocolate.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Dessert"
      }
    ]
  }
];

export default function Cones() {
  return (
    <section className="py-20 bg-[#FFF8EC] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#005BFF]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Category Selection
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59]">
            Cones Flavours
          </h2>
          <p className="text-base text-[#0B2E59]/80 mt-4 font-medium">
            Crispy waffle cones baked to perfection, loaded with your favorite double scoops.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {CONE_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B2E59]">{categoryGroup.title}</h3>
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
                  className="relative rounded-2xl overflow-hidden glass shadow-md border border-[#0B2E59]/10 bg-white/70 group flex flex-col h-full"
                >
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#0B2E59]/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0B2E59] border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={10} className="text-[#005BFF] animate-spin-slow" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#FF7A00] hover:bg-white transition-colors duration-200 shadow-sm cursor-pointer">
                      <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow text-left">
                    <h3 className="text-lg font-bold text-[#0B2E59] mb-2 font-display group-hover:text-[#005BFF] transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B2E59]/80 leading-relaxed font-medium grow">
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
