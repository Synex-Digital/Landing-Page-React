import React from "react";
import Hero from "../components/ChingriBalachao/Hero";
import ProductSection from "../components/ChingriBalachao/ProductSection";
import HowToEatSection from "../components/ChingriBalachao/HowToEatSection";
import ReviewSection from "../components/ChingriBalachao/ReviewSection";
import PricingSection from "../components/ChingriBalachao/PricingSection";
import CheckoutForm from "../components/ChingriBalachao/CheckoutForm";
const cartData = [
  {
    id: 1,
    name: "বালাচাও (1kg)",
    price: 1550,
    imageUrl: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/100-X-100-1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "চিংড়ি (500g)",
    price: 850,
    imageUrl: "https://yummyfoodsbd.com/wp-content/uploads/2023/04/100-X-100-1.jpg",
    quantity: 2,
  },
];

const ChingriBalachao = () => {
  return (
    <>
      <Hero />
      <ProductSection />
      <HowToEatSection />
      <ReviewSection />
      <PricingSection />
      <CheckoutForm cartItems={cartData} />
    </>
  );
};

export default ChingriBalachao;
