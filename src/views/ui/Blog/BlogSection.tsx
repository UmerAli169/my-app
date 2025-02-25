import React from "react";
import Button from "../shared/Button";
import Wrapper from "@/app/wrapper";
import blogData from "../../../Data/blog/blog.json";

interface FrameSectionProps {
  blogIndex: number;
  isImageFirst?: boolean;
}

const FrameSection: React.FC<FrameSectionProps> = ({ blogIndex, isImageFirst }) => {
  const blog = blogData.blogs[blogIndex];

  if (!blog) return null;

  return (
    <div className="flex flex-col justify-between items-center ">
      {isImageFirst && (
        <div className="bg-white rounded-[6px] flex justify-center items-center">
          <img src={blog.image} alt={blog.title} className="w-full h-auto object-contain max-w-[500px]" />
        </div>
      )}

      <div className="bg-white rounded-[6px] flex flex-col justify-center gap-[30px] max-w-[500px]">
        <p className="text-[16px]  font-normal text-[#B0A6BD]">{blog.date}</p>
        <p className="lg:text-[36px] text-[18px] font-medium text-[#383838]">{blog.title}</p>
        <p className="lg:text-[16px] font-[Montserrat] text-[12px] font-normal text-[#B0A6BD]">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap gap-[6px]">
          {blog.categories.map((label, index) => (
            <Button key={index} className="max-w-[90px] rounded-[70px] leading-[30px] text-[12px] font-normal bg-[#B4B0BE]/90 p-[2px] text-black">
              {label}
            </Button>
          ))}
        </div>

        <div className="py-[10px]">
          <Button className=" lg:px-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white max-w-[246px]">
            Add To Bag</Button>
        </div>
      </div>

      {!isImageFirst && (
        <div className="bg-white rounded-[6px] flex justify-center items-center ">
          <img src={blog.image} alt={blog.title} className="w-full h-auto object-contain max-w-[500px]" />
        </div>
      )}
    </div>
  );
};

export default FrameSection;
