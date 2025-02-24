import React from "react";
import Button from "../shared/Button";
import Wrapper from "@/app/wrapper";
import data from "../../../Data/mainPage/frameSection/frame.json";

interface FrameSectionProps {
  productIndex: number; 
  isImageFirst?: boolean;
}

const FrameSection: React.FC<FrameSectionProps> = ({ productIndex, isImageFirst }) => {
  const product = data.products[productIndex]; 

  if (!product) return null; 

  return (
      <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-[60px] pt-[71px]">
        {isImageFirst && (
          <div className="bg-white rounded-[6px] flex justify-center items-center">
            <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-w-[500px]" />
          </div>
        )}

        <div className="bg-white rounded-[6px] flex flex-col justify-center gap-[30px] p-[20px] max-w-[600px]">
          <p className="lg:text-[36px] text-[18px] font-bold text-[#383838]">{product.title}</p>
          <p className="lg:text-[16px] font-[Montserrat] text-[12px] font-normal text-[#697586]">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-[6px]">
            {product.buttonLabels.map((label, index) => (
              <Button key={index} className="max-w-[90px] rounded-[70px] leading-[30px] text-[12px] font-normal bg-[#B4B0BE]/20 text-black">
                {label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-[10px]">
            <Button className="max-w-[246px]">{product.shopNowText}</Button>
            <div className="flex items-center gap-[4px]">
              <Button className="max-w-[137px] bg-white text-black">{product.exploreMoreText}</Button>
              <img src={product.exploreIcon} alt="Explore More" className="w-[12px]" />
            </div>
          </div>
        </div>

        {!isImageFirst && (
          <div className="bg-white rounded-[6px] flex justify-center items-center">
            <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-w-[500px]" />
          </div>
        )}
      </div>
  );
};

export default FrameSection;
