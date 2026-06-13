"use client";

import React from "react";
import Image from "next/image";
import { Snowflake, Heart } from "lucide-react";
import { motion } from "framer-motion";

const KULFI_CATEGORIES = [
  {
    title: "Traditional Kulfi Collection",
    icon: "🥛",
    flavours: [
      {
        name: "Classic Malai Kulfi",
        description: "Rich, creamy, and traditional malai base slow-cooked to perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwVvzyipHav3mh988x3Zq_dCZ-qB7cgpURQw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Kesar Kulfi",
        description: "Infused with pure golden saffron for a rich, royal aromatic flavor.",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/kesar_pista_kulfi.webp",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Pista Kulfi",
        description: "Loaded with crunchy roasted pistachios in a dense, sweet mawa base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI98fzWPEMOuvBT09bttU0CM4qmrcsOYvQg&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Elaichi Kulfi",
        description: "Traditionally flavored with fragrant green cardamom for an authentic sweet aroma.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh9VVxx047JLT17V_kcUy7AeA3G_Fvkd4TbQ&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Rabdi Kulfi",
        description: "Extra rich and thick slow-reduced milk for a deeply caramelized authentic taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zl7sMqPkzcFDR01IBzhrc7Q-2GyU6ZZGWw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Shahi Kulfi",
        description: "A truly royal recipe dating back generations, loaded with rich nuts and mawa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3zLce-ahHi_R35lsCnvQ0SzKTR2UDGtB0w&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Mawa Kulfi",
        description: "Dense, grainy, and deeply satisfying milk solid texture that melts in the mouth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtNZKZXmgT24D1aGha3bnTMvw-o4s0EyqJRw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Saffron Malai Kulfi",
        description: "Rich, creamy, and traditional malai base slow-cooked to perfection.",
        image: "https://untoldrecipesbynosheen.com/wp-content/uploads/2025/09/malai-kulfi-featured.jpg",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Rich Cream Kulfi",
        description: "Authentic rich cream kulfi, frozen to dense perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4jFcF1xn7KfnSMbx8ZjmVI30lvRALUVjjw&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      },
      {
        name: "Traditional Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYpmQjUirSGkmDO5BpUhhV-NG_7JPW_hwhSg&s",
        color: "from-[#F5EAD4] to-[#DFD0B8]",
        badge: "Classic"
      }
    ]
  },
  {
    title: "Dry Fruit Kulfi Collection",
    icon: "🥜",
    flavours: [
      {
        name: "Kesar Pista Kulfi",
        description: "A regal blend of aromatic saffron threads and crushed premium green pistachios.",
        image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_960,w_960//InstamartAssets/Receipes/kesar_pista_kulfi.webp",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Badam Kulfi",
        description: "Packed with pureed and crushed almonds for a rich, nutty Indian dessert experience.",
        image: "https://static.toiimg.com/thumb/52819928.cms?imgsize=123857&width=800&height=800",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Cashew Delight Kulfi",
        description: "Rich cashew delight kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUPr988IJHZTW0CkPrQqmChPc1vj4Vndg9g&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Dry Fruit Special Kulfi",
        description: "Classic dry fruit special kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4k0pT8dcylaa_MAAtxjxIT-Fi1SGVpYRKQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Anjeer Kulfi",
        description: "Naturally sweetened with rich fig puree and chunks for a healthy traditional treat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwXf2Cy4g__Fby6i1GWnC1-xjpHe8E-qARQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Honey Almond Kulfi",
        description: "Premium honey almond kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxoXSzCyGVOdw18t-28cWtdWbyLkadmvCSFQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Walnut Kulfi",
        description: "Rich walnut kulfi, crafted using age-old recipes.",
        image: "https://californiawalnuts.in/wp-content/uploads/2022/10/Walnut-Kulfi-inner.jpg",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Mixed Nuts Kulfi",
        description: "Authentic mixed nuts kulfi, frozen to dense perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn430ZRSV4F9f2nPzZZiiIfJqOSdcu9pJg2Q&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Royal Dry Fruit Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAPTnQihXNyPgs7EsuE7V-GCrepYAbAVHrQ&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      },
      {
        name: "Maharaja Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ESH1KWWljLDPjErZemTRTJEWJtangvPNBA&s",
        color: "from-[#7FA13B] to-[#4F6C1D]",
        badge: "Nutty"
      }
    ]
  },
  {
    title: "Premium Fusion Kulfi",
    icon: "🍫",
    flavours: [
      {
        name: "Chocolate Kulfi",
        description: "A delicious modern twist blending rich cocoa with dense traditional kulfi texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlcXNJ7IYi2IwfL-z7n5910wbgIOiiGkXycw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Chocolate Almond Kulfi",
        description: "A delicious modern twist blending rich cocoa with dense traditional kulfi texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASDqymoCRh_UC1jOH2xfI5R0Cbm7SPZtQ1w&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Belgian Chocolate Kulfi",
        description: "A delicious modern twist blending rich cocoa with dense traditional kulfi texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvOr8q4oZ8o4Ckf27rwZFqPzMcYAD9UiIgQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Oreo Kulfi",
        description: "Crushed Oreo cookies folded into rich malai for the ultimate fusion dessert.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0kHW_IVF2gVXmMwEEfxJPWyMVh1tNIrdsw&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Brownie Kulfi",
        description: "Signature brownie kulfi, guaranteed to give you a taste of royalty.",
        image: "https://i.pinimg.com/564x/6a/c5/41/6ac541c69e87ec31e54854d219168870.jpg",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Caramel Kulfi",
        description: "Signature caramel kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ysvz7YQRZ3VxXutJZvrBmVvc906Ibefjxg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Butterscotch Kulfi",
        description: "Premium butterscotch kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmnWHyQlj2Rhpf-FDFD4rlesyMDn1V-4zCWg&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Coffee Kulfi",
        description: "Rich coffee kulfi, crafted using age-old recipes.",
        image: "https://i.ytimg.com/vi/6KtJWybk3vY/sddefault.jpg",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Chocolate Truffle Kulfi",
        description: "A delicious modern twist blending rich cocoa with dense traditional kulfi texture.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1qvS6ZY5a2UdtvD7hZZJmROnjaUeepBISlQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      },
      {
        name: "Choco Nut Kulfi",
        description: "Classic choco nut kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW-As0w81AvWw3etTVEXu9Ejzkhw32N5WIQ&s",
        color: "from-[#4E2F1D] to-[#2B1B10]",
        badge: "Fusion"
      }
    ]
  },
  {
    title: "Fruit Kulfi Collection",
    icon: "🥭",
    flavours: [
      {
        name: "Mango Kulfi",
        description: "Made with pure Alphonso mango pulp mixed into a traditional creamy base.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhaU_182X5M5BNhcBvznrzaTb1uD3RHNdGw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Strawberry Kulfi",
        description: "Sweet and tangy real strawberries folded into dense, rich malai.",
        image: "https://i.ytimg.com/vi/g0mzgkySMDA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCGaG9UApgio0VqLLQRaraD4T3kqw",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Lychee Kulfi",
        description: "Rich lychee kulfi, crafted using age-old recipes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe16z39FfCcIUynMrurX-oSBGIkrR2m3-YdA&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Pineapple Kulfi",
        description: "Classic pineapple kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR303yMyfAjXmwEUbSIOtiywggw_N-AvzYfIQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Blueberry Kulfi",
        description: "Classic blueberry kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZBQWFl1BephrNI_uFLUlqzftSgRNjhYGug&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Mixed Berry Kulfi",
        description: "Traditional mixed berry kulfi, crafted using age-old recipes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQqDhsM2uTprlzvTbamhDJxeIKxz9MMIoVw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Coconut Kulfi",
        description: "Signature coconut kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc4_ftTogcbKZYbe3v54Yr0dpUGtlqVL-cQ&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Kiwi Kulfi",
        description: "Premium kiwi kulfi, served on a traditional stick.",
        image: "https://i.ytimg.com/vi/CO5eZTs3GZA/mqdefault.jpg",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Fruit Fiesta Kulfi",
        description: "Premium fruit fiesta kulfi, guaranteed to give you a taste of royalty.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbGaFYicaKH3aB_mAI0BvRCpHpsVetdXlpw&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      },
      {
        name: "Tropical Delight Kulfi",
        description: "Mouth-watering tropical delight kulfi, crafted using age-old recipes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn430ZRSV4F9f2nPzZZiiIfJqOSdcu9pJg2Q&s",
        color: "from-[#FFB200] to-[#FF7A00]",
        badge: "Fruity"
      }
    ]
  },
  {
    title: "Matka Kulfi Specials",
    icon: "🏺",
    flavours: [
      {
        name: "Malai Matka Kulfi",
        description: "Rich, creamy, and traditional malai base slow-cooked to perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDOl0PiDO_KSugm1xuP3SAvkWE7byNiWpd6A&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Kesar Pista Matka Kulfi",
        description: "A regal blend of aromatic saffron threads and crushed premium green pistachios.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0OECTi6TosIAwIUOPKTusc4pTs9uxqDcdw&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Rabdi Matka Kulfi",
        description: "Extra rich and thick slow-reduced milk for a deeply caramelized authentic taste.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-5ukzdlpwoSRyi30Bvt80C9mZTyZwhDpXQ&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Badam Matka Kulfi",
        description: "Packed with pureed and crushed almonds for a rich, nutty Indian dessert experience.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5_kgbSYMiHlir-jVImGpF_2VgUwoINnvEA&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Mango Matka Kulfi",
        description: "Made with pure Alphonso mango pulp mixed into a traditional creamy base.",
        image: "https://www.ekirana.nl/media/wysiwyg/site-images/Blog/mango-kulfi.jpg",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Dry Fruit Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcPM0I5EMtCFNiguP-aygabIPs_TVi5rs0w&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Royal Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2026/03/Thandai-Matka-Kulfi-H1.jpg?resize=600%2C900&ssl=1",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Shahi Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQlJqumB_RJ91iYqskKd79iw0YMwrtUU53Q&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Maharaja Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/9e/7c/matka-kulfi-ice-cream.jpg",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      },
      {
        name: "Signature Matka Kulfi",
        description: "Served traditionally in a clay pot to enhance the earthy, rich aroma and cooling effect.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXcxl0X42fKVBIiwQGvNJuJ8QEFqg-smUhFw&s",
        color: "from-[#8B5A2B] to-[#5C3A21]",
        badge: "Earthy"
      }
    ]
  },
  {
    title: "Indian Sweet-Inspired Kulfi",
    icon: "🇮🇳",
    flavours: [
      {
        name: "Gulab Jamun Kulfi",
        description: "Soft, sweet gulab jamun pieces crushed into rich rabdi kulfi base.",
        image: "https://i.ytimg.com/vi/53qcFL86_V8/hqdefault.jpg",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Rasmalai Kulfi",
        description: "Rich, creamy, and traditional malai base slow-cooked to perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9EnWZFDgfAgrG8iJBwwRqK3eisJo9pZz0w&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Rabdi Malai Kulfi",
        description: "Rich, creamy, and traditional malai base slow-cooked to perfection.",
        image: "https://c.ndtvimg.com/2022-03/bt1hei5o_kulfi_625x300_14_March_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Gajar Halwa Kulfi",
        description: "Warm notes of slow-cooked carrot halwa wrapped in a chilled kulfi stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgudBTlZGNSeEu-8jHWLXHeDu8AAOcROeTA&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Paan Kulfi",
        description: "Refreshing sweet paan flavor with gulkand and fennel, a perfect after-meal treat.",
        image: "https://sinfullyspicy.com/wp-content/uploads/2023/03/3-3.jpg",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Falooda Kulfi",
        description: "Rich kulfi paired with the classic flavors of rose, sweet basil seeds, and vermicelli.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JDAp_3fEU6845w8HWt0dJtjY-BEvlrPeoQ&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Kesar Badam Kulfi",
        description: "Infused with pure golden saffron for a rich, royal aromatic flavor.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zqBQxGD4k8ztHLa50uwZ-ExnR4qpIj8eIg&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Jalebi Kulfi",
        description: "Rich jalebi kulfi, crafted using age-old recipes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV5lwJG5xKTvA3ax8h9EWs5KAKsLHsbMuKEw&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Shahi Tukda Kulfi",
        description: "A truly royal recipe dating back generations, loaded with rich nuts and mawa.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStyOgxMe6x1BI067sZIq8CaruVvjbS9ZKXEw&s",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      },
      {
        name: "Royal Dessert Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://maharajaroyaldining.com/wp-content/uploads/2024/05/Kulfi-2.webp",
        color: "from-[#FF4E72] to-[#C90095]",
        badge: "Desi"
      }
    ]
  },
  {
    title: "Signature Kulfi Collection",
    icon: "🌟",
    flavours: [
      {
        name: "Royal Crown Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDlTNl7DN2fsy50xhZkZbdjssB-DaRE4Gc8w&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Golden Saffron Kulfi",
        description: "Infused with pure golden saffron for a rich, royal aromatic flavor.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQzmxsYsKytIkPvDsAxHyAo4vh2G671-tUQ&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Creamy Heritage Kulfi",
        description: "Signature creamy heritage kulfi, frozen to dense perfection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8k7r2FOJXWsb64cb56mapRSFZXg4WxTpMg&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Indian Royal Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://www.kingskulfi.com/cdn/shop/files/DryfruitKulfiFaluda-Copy.jpg?crop=center&height=1200&v=1746502454&width=1200",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Palace Special Kulfi",
        description: "Rich palace special kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vElfz2jUwaee3IrTJKOEGvBcGY3FuKv9bQ&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "King's Delight Kulfi",
        description: "Rich king's delight kulfi, served on a traditional stick.",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/FOOD_CATALOG/IMAGES/CMS/2025/4/24/011ab1f2-b9d6-4215-be0e-0144b449725c_b995f336-8af7-43d5-9647-31958f90cd9e.jpg_compressed",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Queen's Choice Kulfi",
        description: "Rich queen's choice kulfi, served on a traditional stick.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7XIgu8zE3fpRnbRCUFyOf9sPXyao6HlfUQ&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Heritage Kulfi Supreme",
        description: "Mouth-watering heritage  supreme kulfi, crafted using age-old recipes.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSVmNcRdLkT7TJ5dvotVmDX0Inp1eJR_03w&s",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Maharaja Gold Kulfi",
        description: "Our most premium, crown-jewel offering crafted for kings with pure dry fruits.",
        image: "https://media-cdn.tripadvisor.com/media/photo-p/2c/50/05/c6/maharaja-kulfi-a-symphony.jpg",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      },
      {
        name: "Signature Paradise Kulfi",
        description: "Authentic signature paradise kulfi, slow-cooked for an authentic Indian taste.",
        image: "https://veenaazmanov.com/wp-content/uploads/2015/07/Lychee-Kufli-Recipe-Indian-Lychee-Ice-Cream2.jpg",
        color: "from-[#D4AF37] to-[#AA8A25]",
        badge: "Premium"
      }
    ]
  }
];

export default function Kulfi() {
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
            Traditional Kulfi
          </h2>
          <p className="text-base text-[#0B2E59] dark:text-[#FFF8EC]/80 mt-4 font-medium">
            Dense, slow-cooked traditional Indian ice cream crafted with authentic recipes and rich mawa.
          </p>
          <div className="w-16 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full" />
        </div>

        {KULFI_CATEGORIES.map((categoryGroup, groupIndex) => (
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
                    
                    <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#041224] dark:border-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0B2E59] dark:text-[#FFF8EC] border border-brand-yellow shadow-sm flex items-center space-x-1">
                      <Snowflake size={10} className="text-[#005BFF] animate-spin-slow" />
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

                  <div className={"h-1.5 w-full bg-lineart-to-r " + flavor.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}