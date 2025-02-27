import { useRouter } from "next/router";
import FilterSidebar from "./FilterSidebar";
import SubCategoryProduct from "./SubCategoryProduct";
import categoriesData from "../../../../../Data/categories/categorie.json";
import Sidebar from "@/views/ui/About/Sidebar";

;

export default function SubCategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;

  // Find category & subcategory
  const selectedCategory = categoriesData.find((cat) => cat.slug === category);
  const selectedSubcategory = selectedCategory?.subcategories.find(
    (sub) => sub.slug === subcategory
  );

  return (
    <div className="flex">
      <Sidebar />
      <SubCategoryProduct products={selectedSubcategory?.products || []} />
    </div>
  );
}
