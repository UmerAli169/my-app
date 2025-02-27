import Sidebar from "../../../components/catalog/Sidebar";
import ProductList from "../../../components/catalog/ProductList";
import  productsData  from "../../../Data/categories/categorie.json"; 


import categoriesData from "../../../Data/categories/categorie.json";

export default function CatalogPage() {
  const allProducts = categoriesData.flatMap((cat) =>
    cat.subcategories.flatMap((sub) => sub.products)
  );

  return (
    <div className="flex">
      <Sidebar />
      <ProductList products={allProducts} />
    </div>
  );
}
