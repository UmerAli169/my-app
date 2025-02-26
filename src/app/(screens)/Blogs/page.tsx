import React from "react";
import BlogSection from "../../../views/ui/shared/FrameSetcion";
import CategoryFilter from "@/views/ui/Blog/CategoryFilter";
import Wrapper from "@/app/wrapper";
import data from "../../../Data/blog/blog.json"

const Blog = () => {
  return (
    <>
      <CategoryFilter />
      <Wrapper>
        <div>
          
        <BlogSection product={data.blogs[0]} buttonClassName="lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white" isImageFirst={false} />
        <BlogSection product={data.blogs[1]} buttonClassName="lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white" isImageFirst={true} />
        <BlogSection product={data.blogs[2]} buttonClassName="lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white" isImageFirst={false} />
        <BlogSection product={data.blogs[3]} buttonClassName="lg:p-[10px] px-[10px] py-[8px] bg-white text-black border border-black hover:bg-black hover:text-white" isImageFirst={true} />
        </div>

        <div className="flex flex-col text-center py-[80px] ">
          Show More
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
