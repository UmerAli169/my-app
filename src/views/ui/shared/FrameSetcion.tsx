import React from "react";
import Button from "../shared/Button";

interface FrameSectionProps {
  product?: {
    id?: string;
    date?: any;
    title?: string;
    description?: string;
    image?: string;
    buttonLabels?: string[];
    shopNowText?: string;
    exploreMoreText?: string;
    exploreIcon?: string;
  };
  isImageFirst?: boolean;
  buttonClassName?: string;
}

const FrameSection: React.FC<FrameSectionProps> = ({ product, isImageFirst, buttonClassName }) => {
  if (!product) return null;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center lg:pt-[60px] pt-[71px]">
      {isImageFirst && (
        <div className="rounded-[6px] flex justify-center items-center">
          <img src={product?.image} alt={product?.title} className="w-full h-auto max-h-[500px] object-cover" />
        </div>
      )}
      <div className="rounded-[6px] flex flex-col gap-[30px]">
        <p className="lg:text-[16px] text-[12px] font-normal text-[#697586]">{product?.date}</p>
        <p className="lg:text-[36px] text-[18px] font-bold text-[#383838]">{product.title}</p>
        <p className="lg:text-[16px] text-[12px] font-normal text-[#697586]">{product.description}</p>
        <div className="flex flex-wrap gap-[6px]">
          {product?.buttonLabels?.map((label, index) => (
            <Button key={index} className="max-w-[90px] rounded-[70px] text-[12px] px-[8px]  px-[10px] bg-[#B4B0BE]/20 text-black">
              {label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-[10px] pb-[20px]">
          <Button className={`max-w-[246px] lg:p-[10px] px-[10px] py-[8px] ${buttonClassName}`} href={`/BlogDetail `} >
            {product.shopNowText}</Button>
          <div className="flex items-center gap-[4px]">
            <Button className="max-w-[137px] bg-[#F9FAFC] text-black">{product.exploreMoreText}</Button>
            <img src={product.exploreIcon} alt="" className="w-[12px]" />
          </div>
        </div>
      </div>
      {!isImageFirst && (
        <div className="rounded-[6px] flex justify-center items-center">
          <img src={product.image} alt={product.title} className="w-full h-auto max-h-[500px] object-cover" />
        </div>
      )}
    </div>
  );
};

export default FrameSection;


