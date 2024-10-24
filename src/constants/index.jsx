import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";
import smokedribs from "../assets/meatsmoke2.png";
import maccheese from "../assets/maccheese.jpg";
import jackedbeans from "../assets/jackedbeans.jpg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  //{ text: "Dishes", targetId: "dishes" },//
  { text: "Menu", targetId: "menu" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Reviews", targetId: "reviews" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Smoked Ribs",
    description: "Low and Slow Fall off the Bone",
  },
  {
    image: dish2,
    title: "Smoked Mac and Cheese",
    description: "Incredibly creamy and tasty",
  },
  {
    image: dish3,
    title: "Jacked Up Beans",
    description: "Never Disappoints",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center",
  },
  {
    image: dish6,
    title: "Greek Salad",
    description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
  },
  {
    image: dish7,
    title: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
  },
  {
    image: dish8,
    title: "Peking Duck",
    description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
  },
  {
    image: dish9,
    title: "Beef Wellington",
    description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
  },
  {
    image: dish10,
    title: "Tiramisu",
    description:
      "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    `At Gordo Mikes we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. 
    Experience Gordo Mikes where every meal is a masterpiece.`,
};

export const MISSION =
  "At Gordo Mikes our mission is to create delicious and memorable dining experiences.";

export const CUISINES = [
  {
    number: "01.",
    image: smokedribs,
    title: "Smoked Ribs",
    description:
      "Low and Slow Fall off the Bone",
  },
  {
    number: "02.",
    image: maccheese,
    title: "Mac and Cheese",
    description:
      "Incredibly creamy and tasty",
  },
  {
    number: "03.",
    image: jackedbeans,
    title: "Jacked Up Beans",
    description:
      "Never Disappoints",
  },
];

export const REVIEW = {
  name: "Stephen Lee",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Gordo Mikes BBQ, with its unassuming exterior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 29735 NY-10 Walton NY 13856"},
  { key: "phone", value: "Phone: (607) 510-0100" },
  { key: "email", value: "Email: gordomike@gordomike.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/groups/414186977978889",
    icon: <FaFacebook fontSize={40} className="hover:opacity-80 text-blue-500"/>,
  },

  {
    href: "https://www.instagram.com/gordomikesbbq/",
    icon: <FaInstagram fontSize={40} className="fa fa-instagram hover:opacity-80 bg-color-my-gradiant" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={40} className="hover:opacity-80 text-white" />,
  },
];
