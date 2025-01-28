import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  superQualityImage,

  babyCare,
  elderlyCare,
  hairCare,
  menGrooming,
  oralCare,
  petCare,
  skinCare,
  womenCare,

  offerLogo,

  profile1,
  profile2,

  reviewStar,
} from '../assets/images'

export const navLinks = [
  { href: "#home", label: "Offers" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];


export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: skinCare,
    name: "Skin, Health, Harmony",
    price: "From ₹50*",
    review: "Best Seller",
  },
  {
    imgURL: hairCare,
    name: "Strength and Shine",
    price: "Save 15% – ₹850",
    review: "Highly Effective",
  },
  {
    imgURL: babyCare,
    name: "Delicate Care for Delicate Skin",
    price: "Save 10%",
    review: "Top Rated",
  },
  {
    imgURL: womenCare,
    name: "Empowering Her Wellness",
    price: "Affordable from ₹50*",
    review: "Best Seller",
  },
  {
    imgURL: oralCare,
    name: "Your Smile’s Best Friend",
    price: "Save 15% – ₹850",
    review: "Highly Effective",
  },
  {
    imgURL: petCare,
    name: "Compassionate Care for Pets",
    price: "Buy 1 Get 1 Free",
    review: "Best Seller",
  },
  {
    imgURL: elderlyCare,
    name: "Golden Years, Gentle Care",
    price: "Flat 20% Off – ₹999*",
    review: "Trusted Choice",
  },
  {
    imgURL: menGrooming,
    name: "Confidence in Every Look",
    price: "Now at ₹100*",
    review: "Highly Effective",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free Home Delivery",
    subtext:
      "Get your healthcare essentials delivered to your doorstep at no extra cost.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Delivery",
    subtext:
      "Your health products are delivered with care and complete security.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: profile1,
    customerName: "Anonymous",
    rating: 4.5,
    feedback:
      "I’ve been a regular customer of this pharmacy, and I’m always impressed by their fast delivery and top-notch customer service. They offer great deals on essential health products, and I love the convenience of having everything delivered right to my door. Highly recommend!",
  },
  {
    imgURL: profile2,
    customerName: "Anonymous",
    rating: 4.5,
    feedback:
      "I’ve always trusted this pharmacy for my wellness needs, and they never disappoint. The ongoing offers make it so affordable, and their delivery is always prompt. The team is incredibly helpful and ensures everything arrives in perfect condition. I couldn’t ask for a better experience!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Baby care", link: "/" },
      { name: "Women care", link: "/" },
      { name: "Skin care", link: "/" },
      { name: "Men grooming", link: "/" },
      { name: "Pet care", link: "/" },
      { name: "Elderly care", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customersupport@vkc.com", link: "mailto:customersupport@vkc.com" },
      { name: "+1234567890", link: "tel:+1234567890" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
