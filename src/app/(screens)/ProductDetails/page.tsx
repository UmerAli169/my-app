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
      <ProductSection
        title="Recently Viewed Products"
        products={productsData.newArrivals}
        cardWidth={289}
      />
      <ProductSection
        title="You May Also Like"
        products={productsData.bestSellers}
        cardWidth={289}
      />
    </div>
  );
}

export default page;
