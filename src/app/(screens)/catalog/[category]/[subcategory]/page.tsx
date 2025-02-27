import { useRouter } from "next/router";
import FilterSidebar from "./FilterSidebar";
import SubCategoryProduct from "./SubCategoryProduct";
import categoriesData from "@/data/categories.json";

export default function SubcategoryPage() {
  const router = useRouter();
  const { category, subcategory } = router.query;
  const selectedCategory = categoriesData.find((cat) => cat.slug === category);
  const selectedSubcategory = selectedCategory?.subcategories.find((sub) => sub.slug === subcategory);

  return (
    <div className="flex">
      <FilterSidebar />
      <SubCategoryProduct products={selectedSubcategory?.products || []} />
    </div>
  );
}
