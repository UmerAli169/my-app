"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import categoriesData from "../../../../Data/categories/categorie.json";
import Wrapper from "@/app/wrapper";
import ProductCard from "@/views/ui/shared/ProductCard";
import productData from "../../../../Data/mainPage/cardSection/products.json";
import Sidebar from "../../../../views/ui/shared/Sidebar";
import Filters from "@/views/ui/shared/Filters";

type Category = {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
};

export default function CatalogCategoryPage() {
  const router = useRouter();
  const params = useParams();
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    if (!params?.category) return;
    const foundCategory = categoriesData.find((cat) => cat.slug === params.category);
    if (!foundCategory) {
      router.push("/catalog");
      return;
    }
    setCategory(foundCategory);
  }, [params?.category, router]);

  if (!category) return <p className="text-center py-10">Loading...</p>;

  return (
    <Wrapper>
      <div className="flex py-10 gap-6 lg:flex-row flex-col">
        <div className="w-[250px] flex flex-col gap-6">
          <Sidebar
            title="Shop by Category"
            collapsibleSections={category.subcategories.map((sub) => ({
              key: sub.slug,
              title: sub.name,
              href: `/catalog/${category.slug}/${sub.slug}`,
              items: [],
            }))}
          />

          <Filters />
        </div>

        <div className="flex-1">

          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.newArrivals.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
