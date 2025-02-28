import ProductSection from "@/views/ui/main/ProductSection";
import ProductCard from "@/views/ui/shared/ProductCard";
import productsData from "../../../../Data/mainPage/cardSection/products.json";

export default function SubCategoryProduct({ products }: any) {
  return (
    <>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.length > 0 ? (
        products.map((product: any) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p>No products found for this category.</p>
      )}

<div className="mb-[80px]">

</div>

    </div> 
    <ProductSection title="Recently Viewed Products" products={productsData.bestSellers} cardWidth={289} />
</>
  );
}
