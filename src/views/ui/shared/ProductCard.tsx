import React from "react";
import { CustomCard } from "./CustomCard";
import { Star } from "lucide-react";
import Button from "./Button";
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
}
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CustomCard className="w-full rounded-[6px] ">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-full object-cover rounded-[6px]"
      />
      <div className="px-[20px] py-[10px]">
        <p className="font-[poppins] text-[16px] text-[#383838]  font-medium hover:text-[#F5A3B7]" >{product.name}</p>
        {product.rating !== undefined && (
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={i < product.rating ? "/svgs/Shared/ProductSection/cardStar.svg" : "/svgs/Shared/ProductSection/cardStar.svg"}
                alt="star"
                className="w-4 h-4"
              />
            ))}
            <span className="text-[14px] text-[#383838] font-medium">({product.rating})</span>
          </div>
        )}


        <p className="font-[Montserrat] text-[14px] text-[#383838]  font-normal leading-[22px]">{product.description}</p>
        <div className="font-[Montserrat] text-[16px] text-[#383838]  font-normal ">{product.price}</div>
      </div>
      <div className="px-[20px] py-[10px]">
        <Button className=" lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white">
          Add To Bag</Button>
      </div>
    </CustomCard>
  );
};

export default ProductCard;
