"use client";

import React from "react";
import Button from "../shared/Button";
import data from "../../../Data/blogDetails/details.json";
import Wrapper from "@/app/wrapper";
import AboutSection from "../About/AboutSection";

const ProductDetails = () => {
  const product = data.products[0];

  return (
    <Wrapper>
      <div className=" flex flex-col md:flex-row gap-[123px] ">
        <div className="flex flex-col items-center w-full md:w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full  object-cover"
          />
          <div className="flex mt-[20px] gap-[20px] overflow-x-auto">
            {product.thumbnailImages.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt="thumbnail"
                className="w-26 h-[124px]  cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="w-full  flex flex-col gap-[10px] md:w-1/2">
          <p className="text-2xl font-bold text-gray-800">{product.name}</p>
          <div className="flex items-center  ">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.round(product.rating)
                    ? "/svgs/Shared/ProductSection/cardStar.svg"
                    : "/svgs/Shared/ProductSection/cardStar-empty.svg"
                }
                alt="star"
                className="w-4 h-4"
              />
            ))}
            <span className="text-sm text-gray-600">
              ({product.reviews} reviews)
            </span>
          </div>
          <p className="text-lg text-pink-600 font-semibold ">
            ${product.price.toFixed(2)}
          </p>
          <div>
            <p className="">{product.description}</p>
            <p className="">size:{product.size}</p>
            <div className="flex flex-col  fap-[6px]">
              <div>Recommended For</div>
              <span className=" flex  flex-col  gap-[10px]">
                {product.recommendedFor}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <Button className="max-w-[196px] w-full py-[10px]">
              Add To Cart
            </Button>
            <img src="/svgs/Shared/ProductSection/heart.svg" alt="wishlist" />
          </div>

          <AboutSection
            title={data.shipping.title}
            items={data.shipping.items}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetails;
