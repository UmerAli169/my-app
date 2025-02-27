import { useRouter } from "next/router";
import Sidebar from "@/components/catalog/Sidebar";
import ProductList from "@/components/catalog/ProductList";
import categoriesData from "@/data/categories.json";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const selectedCategory = categoriesData.find((cat) => cat.slug === category);

  return (
    <div className="flex">
      <Sidebar />
      <ProductList products={selectedCategory?.products || []} />
    </div>
  );
}
