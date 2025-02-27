import ProductCard from "@/components/catalog/ProductCard";


export default function SubCategoryProduct({ products }:any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product:any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
