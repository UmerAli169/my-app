export default function ProductCard({ product }:any) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="text-lg font-semibold mt-2">${product.price}</p>
    </div>
  );
}
