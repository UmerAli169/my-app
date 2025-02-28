import AccountLayout from "@/components/account/AccountLayout";
import React from "react";
import productsData from "../../../../Data//mainPage/cardSection/products.json";
import ProductCard from "@/views/ui/shared/ProductCard";

function page() {
  return (
    <div>
      <AccountLayout>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          {productsData.newArrivals.map((product: any) => (
            <div key={product.id} className="w-full ">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </AccountLayout>
    </div>
  );
}

export default page;
