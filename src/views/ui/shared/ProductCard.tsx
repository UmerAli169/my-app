"use client"
import React, { useState } from "react";
import { CustomCard } from "./CustomCard";
import Button from "./Button";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageUrl: string;
  discount?: number;

}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(true);
  const [liked, setLiked] = useState(false);

  return (
    <CustomCard
      className="w-full rounded-[6px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {product.discount && (
        <div className="absolute top-[60px] left-[1px] bg-[#F5A3B7] rounded-r-full text-white text-[12px] font-bold px-3 py-1  flex items-center justify-center min-w-[60px]">
          -{product.discount}%
        </div>
      )}


      <div className="relative">
        <div
          className={`absolute top-[20px] right-[23px] transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setLiked(!liked)}
        >
          <img
            src={
              liked
                ? "/svgs/Shared/ProductSection/heart-filled.svg"
                : "/svgs/Shared/ProductSection/heart.svg"
            }
            alt="wishlist"
            className="w-[18px] h-[19px] cursor-pointer"
          />
        </div>

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover rounded-[6px]"
        />
      </div>

      <div className="px-[20px] py-[10px]">

        <div className="flex flex-col gap-[10px]">
          <p className="font-[poppins] text-[20px] text-[#383838] font-semibold hover:text-[#F5A3B7]">
            {product.name}
          </p>

          {product.rating !== undefined && (
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < product.rating
                      ? "/svgs/Shared/ProductSection/cardStar.svg"
                      : "/svgs/Shared/ProductSection/cardStar.svg"
                  }
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
              <span className="text-[14px] text-[#383838] font-medium">
                ({product.rating})
              </span>
            </div>
          )}

          <p className="font-[Montserrat] text-[14px] text-[#383838] font-normal leading-[22px]">
            {product.description}
          </p>

          <div className="font-[Montserrat] text-[16px] text-[#383838] font-normal">
            {product.price}
          </div>
        </div>

        <div className=" mt-[20px]">
          <Button className="lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white">
            Add To Bag
          </Button>
        </div></div>

    </CustomCard>
  );
};

export default ProductCard;
