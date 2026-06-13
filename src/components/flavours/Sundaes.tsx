"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const SUNDAE_CATEGORIES = [
  {
    title: "Chocolate Sundaes",
    icon: "🍫",
    flavours: [
      {
        name: "Hot Chocolate Fudge Sundae",
        description: "Layers of warm, gooey chocolate fudge poured over signature ice cream scoops.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlzRIOoLAgwg3wOVuqz0StfMr8x4reHSnpA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Triple Chocolate Sundae",
        description: "Luxurious triple chocolate creation, guaranteed to satisfy your dessert cravings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQIpY7y94bJDIpYFIEG2-3JtTBTI-sciKfQQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Brownie Blast Sundae",
        description: "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WxVBZOzZ5L-S_R95aqmHYuugd9wRNZkXSw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Belgian Chocolate Sundae",
        description: "Luxurious Belgian chocolate swirls topped with whipped cream and choco chips.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTAk7gzvQ-Lyel4Uy4EZO0gIApa5Fa5Hcxg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Choco Lava Sundae",
        description: "Ultimate choco lava creation, layered perfectly for the ultimate treat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOkKJl6fN1g42GeymdsOjfarimFgzJWnRrw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Oreo Crunch Sundae",
        description: "Crushed Oreo cookies folded into sweet cream with generous chocolate syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCxiimhcBmoRYNFSp7NBqzMzpsVPljyPvPYg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "KitKat Sundae",
        description: "Signature kitkat creation, guaranteed to satisfy your dessert cravings.",
        image: "https://images.slurrp.com/prod/recipe_images/tarla-dalal/kit-kat-ice-cream-sundae-40918-1619094174_YZRELEJEHULPEA1DLV4W.webp?impolicy=slurrp-20210601&width=1200&height=675",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Chocolate Truffle Sundae",
        description: "Decadent chocolate truffle creation, drizzled with our signature house-made sauces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB5Vvff-xh-rZItFAVAcShs1c5x25w_XJ5w&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Dark Chocolate Delight Sundae",
        description: "A dark and mysterious delight layered with premium bitter cocoa fudge.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlzRIOoLAgwg3wOVuqz0StfMr8x4reHSnpA&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      },
      {
        name: "Death By Chocolate Sundae",
        description: "Ultimate death by chocolate creation, served in a beautiful tall glass.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeacxSqofLsOaNOtmgXNBGvaUhLk9vwHApw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Premium"
      }
    ]
  },
  {
    title: "Fruit Sundaes",
    icon: "🍓",
    flavours: [
      {
        name: "Strawberry Dream Sundae",
        description: "Bursting with real farm-fresh strawberries layered over creamy vanilla bean.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx0QMvxx22X9wMDPKOb9usSoobbIZUAAr5w&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Mango Magic Sundae",
        description: "A tropical delight loaded with real, sun-ripened Alphonso mango chunks.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyt9L0lggXcGfjXm7tRjiJ-l5ye8fAs5urA&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Blueberry Bliss Sundae",
        description: "A vibrant and tangy sensation packed with real berry compote and fresh fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrA4brh6f6TSPjXyyvyOaWexSZKI1VRrX0A&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Mixed Berry Sundae",
        description: "A vibrant and tangy sensation packed with real berry compote and fresh fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbuOpyFRIoKxZ62HNjiY7ZK_My3rcpqWpNA&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Tropical Paradise Sundae",
        description: "Decadent tropical paradise creation, drizzled with our signature house-made sauces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraaiDS58-qlDvkKYhWi-oZ1wTlmQHwizFAQ&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Pineapple Delight Sundae",
        description: "Refreshing and zesty tropical pineapple chunks layered in creamy perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprc5mvdJaXH6eJyM8GPaAxqu1HkaLFWxJzg&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Raspberry Rush Sundae",
        description: "A vibrant and tangy sensation packed with real berry compote and fresh fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFBOht3NT8_Ou2C7twnDbetHRAUyffEi4Vw&s",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Kiwi Splash Sundae",
        description: "A refreshing, exotic fruit sundae loaded with freshly diced fruit chunks.",
        image: "https://static.toiimg.com/thumb/59774686.cms?imgsize=389327&width=800&height=800",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Fruit Fiesta Sundae",
        description: "Handcrafted fruit fiesta creation, drizzled with our signature house-made sauces.",
        image: "https://i.ytimg.com/vi/gxwuPsQzd38/maxresdefault.jpg",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      },
      {
        name: "Peach Passion Sundae",
        description: "A refreshing, exotic fruit sundae loaded with freshly diced fruit chunks.",
        image: "https://www.southernliving.com/thmb/5Sx-WBlrMCfwvEM52RTLx_ulYqo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27902_JJ25PeachDesserts_6455-73c532bc3ca747f4be4badd9c4b53961.jpg",
        color: "from-[#FF8DA1] to-[#FF4E72]",
        badge: "Fruity"
      }
    ]
  },
  {
    title: "Cookie & Brownie Sundaes",
    icon: "🍪",
    flavours: [
      {
        name: "Cookie Monster Sundae",
        description: "Signature cookie monster creation, topped with whipped cream and a cherry.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJazcCnEs2fEhMoQTiu5QXXON9_v-LlzBVA&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Oreo Overload Sundae",
        description: "Crushed Oreo cookies folded into sweet cream with generous chocolate syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPPkqSIIHhopSsJIk2CTiP5sf9eyz5kA-ow&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Chocolate Chip Cookie Sundae",
        description: "Irresistible chocolate chip cookie creation, guaranteed to satisfy your dessert cravings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsPFqx34cQpQzpUUwF8ZIg6jqXCp41LG2ag&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Brownie Supreme Sundae",
        description: "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-L4HeX7TUHWoyNxM5XAqRaUe-EwTjNXPI-A&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Cookie Dough Sundae",
        description: "Generous chunks of sweet, buttery chocolate chip cookie dough in every bite.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuDtoX3lw-amLTo-xiecXygCxWvSe0qAd6A&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Walnut Brownie Sundae",
        description: "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eqTmkJvGT1rWQcLV7xaiLdQ1ayRmFCNx8w&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Caramel Cookie Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAHRfFZDfI3Jy-6QsN_JBsirtN_H-K0tC_A&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Choco Cookie Crunch Sundae",
        description: "Indulgent choco cookie crunch creation, topped with whipped cream and a cherry.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiEdj9WUJ7D0ssiezEnIG_QH-7fjYygsu4A&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Double Brownie Sundae",
        description: "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8MFU0edg0MUBs6h7ONV1TqgG6ZDwmuADjeg&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      },
      {
        name: "Ultimate Cookie Sundae",
        description: "Mouth-watering ultimate cookie creation, layered perfectly for the ultimate treat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm6jh7D3-xby-FMVFqrddsQxNJcZQi85gLQ&s",
        color: "from-[#795C34] to-[#4A3515]",
        badge: "Crunchy"
      }
    ]
  },
  {
    title: "Candy Sundaes",
    icon: "🍬",
    flavours: [
      {
        name: "Rainbow Sprinkle Sundae",
        description: "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUnOO27gzMsPTEiOCipptecn1Ywcv9weMmA&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Cotton Candy Sundae",
        description: "A nostalgic carnival treat topped with marshmallow fluff and sweet syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd896KcOgFEf0Vny-ZYXqdd1uzYUnU3GKCVA&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Candy Crush Sundae",
        description: "Indulgent candy crush creation, guaranteed to satisfy your dessert cravings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoahvrqsbd0PRbfHTtNbErUN4UfgP0Lx71YA&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "M&M Sundae",
        description: "Indulgent m&m creation, served in a beautiful tall glass.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTi5ZbfYhNkmkUuwxX_zWSfBmxAy7JJGttGw&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Marshmallow Delight Sundae",
        description: "Indulgent marshmallow delight creation, topped with whipped cream and a cherry.",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/tk%2Fphoto%2F2026%2F04-2026%2F2026-04-cherry-fluff%2FCherry-Fluff_0052-vertical_1",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Bubblegum Sundae",
        description: "A nostalgic carnival treat topped with marshmallow fluff and sweet syrup.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ0_xPKfcEBxYZvjjTy-A-D9SsnqVze8HUA&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Choco Candy Sundae",
        description: "Indulgent choco candy creation, guaranteed to satisfy your dessert cravings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlzRIOoLAgwg3wOVuqz0StfMr8x4reHSnpA&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Sweet Celebration Sundae",
        description: "Decadent sweet celebration creation, drizzled with our signature house-made sauces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CffOS02U3F9cMjhoIwjaP-23EAFULYd0Cw&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Unicorn Sundae",
        description: "Mouth-watering unicorn creation, drizzled with our signature house-made sauces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOXv5lVbUAmz8uiJOnINjB0Zsce13Bc1ofQ&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      },
      {
        name: "Party Blast Sundae",
        description: "A magical swirl of vibrant colors loaded with sweet, crunchy rainbow sprinkles.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dk3jDbRmt82x-7xv5wlduwBg4zQfxi8Vgw&s",
        color: "from-[#FF7EE2] to-[#C90095]",
        badge: "Kids Fav"
      }
    ]
  },
  {
    title: "Nutty Sundaes",
    icon: "🥜",
    flavours: [
      {
        name: "Almond Crunch Sundae",
        description: "Toasted almond slivers sprinkled generously over a rich caramel sundae base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-75sCTXx5lyUgk2e4PHo6f-DDT9Kbe9_P1g&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Pista Royale Sundae",
        description: "A royal treat infused with aromatic saffron and loaded with roasted pistachios.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrIBnQTNFF1h-LaMYsIlxnXlP2FWpBKQpMvQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Hazelnut Heaven Sundae",
        description: "Premium roasted hazelnuts blended with rich nutella-like chocolate swirls.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGhC7zoGkSn9jZXsMzmh42IzOou2xFQYvaHA&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Cashew Delight Sundae",
        description: "Rich, buttery cashew nuts roasted to perfection and swirled in sweet honey.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJSzv-qp2OEsbgS0RHd5tB82RNJF9ktoyS-Q&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Honey Almond Sundae",
        description: "Toasted almond slivers sprinkled generously over a rich caramel sundae base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-k5_YfPqEKg-BKBH7t_sAKK-P8S0RFmv-Dw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Dry Fruit Supreme Sundae",
        description: "Decadent dry fruit supreme creation, drizzled with our signature house-made sauces.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXVIqH8jXZh11L7shbcNFWQgV8T5KiKelhw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Nutty Treasure Sundae",
        description: "Signature nutty treasure creation, topped with whipped cream and a cherry.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAGeFxfidvSp4NydBDIfn5C5AAmjQ6EGlEg&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Walnut Crunch Sundae",
        description: "Irresistible walnut crunch creation, served in a beautiful tall glass.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUn8gteiM8DqcZuH4SFlprR5ulPr50MAHqQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Royal Badam Sundae",
        description: "Indulgent royal badam creation, guaranteed to satisfy your dessert cravings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmM03WEKeX-fXg-VJb73bsDEQGliRbbcMyw&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Caramel Nut Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ohtpB4elkteim9hN7GDELox0_QmSij2j6Q&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      }
    ]
  },
  {
    title: "Caramel & Butterscotch Sundaes",
    icon: "🍮",
    flavours: [
      {
        name: "Caramel Crunch Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP9Vow1kqgUrHa-DtwxvcDXQ8AMgAF2X3LQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Salted Caramel Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqmnvKe8atEVFxFxwdTqqEcr6RaUQtAK5-w&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Butterscotch Bliss Sundae",
        description: "Sweet buttery goodness layered with signature crunchy caramel praline bits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMmXp7IhDupQPPmAqmapt0ZQ_h-3jceWxYQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Golden Caramel Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgiwrZiC3_51BdyWIscZP-zNjxH126u4jX0A&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Sticky Toffee Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:561,cw:1438,ch:1438,q:80,w:1438/pt3Au3sKv4WahXG6Acrvf6.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Caramel Brownie Sundae",
        description: "Decadent chunks of gooey chocolate brownie mixed with hot fudge and cream.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYon45Xa5vnmQvK2UYVnFMEEBHcD96Vl9rg&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Caramel Nut Delight Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYlPTz18M0FO4jPW5q0saPKvZln6u6icbuQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Butterscotch Almond Sundae",
        description: "Sweet buttery goodness layered with signature crunchy caramel praline bits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Oq4t9imrbQwZOC1uY1_ub9FR62MB_5HwhA&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Toffee Crunch Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNvTiL2AxY8r6YyJe1mgf9Ftat_hZA5dmRQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      },
      {
        name: "Caramel Dream Sundae",
        description: "Golden, buttery caramel sauce cascading over creamy scoops with a salty crunch.",
        image: "https://media-cdn2.greatbritishchefs.com/media/lktonbls/img65625.whqc_1426x713q80fpt449fpl431.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Sweet"
      }
    ]
  }
];

export default function Sundaes() {
  return (
    <section className="py-20 bg-white dark:bg-[#041224] relative overflow-hidden">
      <div className="absolute top-40 left-10 w-24 h-24 bg-[#FF7A00]/10 rounded-full blur-xl animate-float-slow" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-[#005BFF]/10 rounded-full blur-xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#005BFF] font-bold text-sm uppercase tracking-widest block mb-2">
            Category Selection
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#0B2E59] dark:text-[#FFF8EC]">
            Sundae Creations
          </h2>
          <p className="text-base text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-4 font-medium">
            Luxurious layers of ice cream, house-made sauces, and crunchy toppings served in a beautiful glass.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {SUNDAE_CATEGORIES.map((categoryGroup, groupIndex) => (
          <div key={categoryGroup.title} className="mb-20 last:mb-0">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-3xl">{categoryGroup.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0B2E59] dark:text-[#FFF8EC]">{categoryGroup.title}</h3>
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
                  className="relative rounded-2xl overflow-hidden glass shadow-md border border-[#0B2E59]/10 bg-white/70 dark:bg-[#041224] dark:border-white/10 group flex flex-col h-full"
                >
                  <div className="relative w-full h-[180px] overflow-hidden bg-[#0B2E59]/5">
                    <Image
                      src={flavor.image}
                      alt={flavor.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#041224] dark:border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={14} className="text-[#005BFF] animate-spin-slow" />
                      <span>{flavor.badge}</span>
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-md text-[#FF7A00] hover:bg-white dark:bg-[#0A2540] transition-colors duration-200 shadow-sm cursor-pointer">
                      <Heart size={14} fill="#FF7A00" className="scale-100 active:scale-90 transition-transform" />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col grow text-left">
                    <h3 className="text-lg font-bold text-[#0B2E59] dark:text-[#FFF8EC] mb-2 font-display group-hover:text-[#005BFF] transition-colors leading-tight">
                      {flavor.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B2E59] dark:text-[#FFF8EC]/80 leading-relaxed font-medium grow">
                      {flavor.description}
                    </p>
                  </div>

                  <div className={"h-1.5 w-full bg-gradient-to-r " + flavor.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}