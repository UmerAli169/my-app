import Sidebar from "@/components/catalog/Sidebar";
import ProductList from "@/components/catalog/ProductList";

export default function CatalogPage() {
  return (
    <div className="flex">
      <Sidebar />
      <ProductList />
    </div>
  );
}
