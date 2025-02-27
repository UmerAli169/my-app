import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div className="w-3/4 p-4 grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
