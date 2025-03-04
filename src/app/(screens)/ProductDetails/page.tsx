import ProductSection from "@/views/ui/main/ProductSection";
import ProductDetails from "@/views/ui/ProductDetails/ProductDetails";
import ReviewSection from "@/views/ui/ProductDetails/ReviewSection";
import productsData from "../../../Data/mainPage/cardSection/products.json";

import React from "react";

function page() {
  return (
    <div className="py-[40px] ">
      <ProductDetails />
      <ReviewSection />
      {productsData.sections.map((section) => {
  const products = productsData[section.products as keyof typeof productsData];
  return (
    <ProductSection
      key={section.title}
      title={section.title}
      products={products}
      cardWidth={289}
    />
  );
})}


    </div>
  );
}

export default page;
