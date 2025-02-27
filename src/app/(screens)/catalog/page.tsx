import Sidebar from "../../../components/catalog/Sidebar";
import ProductList from "../../../components/catalog/ProductList";
import categoriesData from "../../../Data/categories/categorie.json";
import Wrapper from "@/app/wrapper";
export default function CatalogPage() {
  const allProducts = categoriesData.flatMap((cat) =>
    cat.subcategories.flatMap((sub:any) => sub?.products)
  );

  return (
    <div className="flex">
      <Wrapper>
        <div className="py-[40px]">
          <Sidebar />
          {/* <ProductList products={allProducts} /> */}
        </div>
      </Wrapper>
    </div>
  );
}
