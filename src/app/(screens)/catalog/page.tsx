"use client";
import Sidebar from "../../../views/ui/shared/Sidebar";
import categoriesData from "../../../Data/categories/categorie.json";
import Wrapper from "@/app/wrapper";
import ProductCard from "@/views/ui/shared/ProductCard";
import products from "../../../Data/mainPage/cardSection/products.json";

export default function CatalogPage() {
  const collapsibleSections = categoriesData.map((category) => ({
    key: category.slug,
    title: category.name,
    href: `/catalog/${category.slug}`,
    items: category.subcategories.map((sub) => ({
      label: sub.name,
      href: `/catalog/${category.slug}/${sub.slug}`,
    })),
  }));

  return (
    <Wrapper>
      <div className="flex py-[40px] gap-[20px] lg:flex-row flex-col">
        <div className="w-[250px] max-h-[80vh] overflow-y-auto">
          <Sidebar title="Shop All" collapsibleSections={collapsibleSections} />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.newArrivals.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
