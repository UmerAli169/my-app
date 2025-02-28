"use client";
import { useState, useEffect } from "react";
import ProductCard from "../../../views/ui/shared/ProductCard";
import Sidebar from "../../../views/ui/shared/Sidebar";
import productsData from "../../../Data/mainPage/cardSection/products.json";
import categoriesData from "@/Data/categories/categorie.json";
import Wrapper from "@/app/wrapper";

const CatalogPage = () => {
  const [products, setProducts] = useState(productsData.newArrivals || []);
  const [totalProducts, setTotalProducts] = useState(productsData.newArrivals.length);
  const [sortBy, setSortBy] = useState("relevance");

  const collapsibleSections = categoriesData.map((category) => ({
    key: category.slug,
    title: category.name,
    href: `/catalog/${category.slug}`,
    items: category.subcategories.map((sub) => ({
      label: sub.name,
      href: `/catalog/${category.slug}/${sub.slug}`,
    })),
  }));

  useEffect(() => {
    let sortedProducts = [...productsData.newArrivals];
    if (sortBy === "lowest") {
      sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "highest") {
      sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }
    setProducts(sortedProducts);
    setTotalProducts(sortedProducts.length);
  }, [sortBy]);

  return (
    <Wrapper>
      <div className="flex  md:flex-row flex-col gap-[20px] pt-[40px] ">
        <div className="md:max-w-[250px] w-full max-h-[80vh] overflow-y-auto ">
          <Sidebar title="Shop All" collapsibleSections={collapsibleSections} />
        </div>
        <main className="flex-1 ">
          <div className="flex justify-between items-center ">
            <p className="text-gray-600">{totalProducts} Products</p>
            <div>
              <label className="mr-[12px] text-gray-600">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-[10px] rounded"
              >
                <option value="relevance">Relevance</option>
                <option value="lowest">Lowest Price</option>
                <option value="highest">Highest Price</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative pt-[30px]">
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-col items-center my-[20px] gap-[10px]">
            <button className="text-[#383838] text-[14px] font-semibold  ">Show More ↓</button>
            <div className="flex  items-center gap-[20px] mt-2">
              <div className="w-[20px]">

                <img src="/svgs/Shared/ProductSection/leftArrow.svg" alt="" />
              </div>
              <button className="text-[#383838] text-[16px] font-regular  leading-[24px]">1</button>
              <button className="text-[#383838] text-[16px] font-regular  leading-[24px]">2</button>
              <span className="text-[#383838] text-[16px] font-regular  leading-[24px]">...</span>
              <button className="text-[#383838] text-[16px] font-regular  leading-[24px]">7</button>
              <div className="w-[20px]">

                <img src="/svgs/Shared/ProductSection/rightArrow.svg" alt="" />
              </div>  </div>
          </div>
        </main>
      </div>  

   
      
       </Wrapper>

  );
};

export default CatalogPage;
