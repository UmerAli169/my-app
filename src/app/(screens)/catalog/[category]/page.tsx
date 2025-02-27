import { useRouter } from "next/router";
import Sidebar from "@/components/catalog/Sidebar";
import ProductList from "../../../../components/catalog/ProductList";
import categoriesData from "../../../../Data/categories/categorie.json";



export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  const selectedCategory = categoriesData.find((cat) => cat.slug === category);

  const products = selectedCategory
    ? selectedCategory.subcategories.flatMap((sub) => sub.products)
    : [];

  return (
    <div className="flex">
      <Sidebar />
      <ProductList products={products} />
    </div>
  );
}
