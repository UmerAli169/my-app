import React from "react";
import BlogSection from "../../../views/ui/shared/FrameSetcion";
import CategoryFilter from "@/views/ui/Blog/CategoryFilter";
import Wrapper from "@/app/wrapper";

const Blog = () => {
  return (
    <>
      <CategoryFilter />
      <Wrapper>
        <div className="grid md:grid-cols-2 gap-6 py-[80px]">
          <BlogSection  productIndex={0} isImageFirst={true} />
          <BlogSection  productIndex={0} isImageFirst={false} />
          <BlogSection  productIndex={0} isImageFirst={true} />
          <BlogSection  productIndex={0} isImageFirst={false} />
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
