import React from "react";
import BlogSection from "../../../views/ui/Blog/BlogSection";
import CategoryFilter from "@/views/ui/Blog/CategoryFilter";
import Wrapper from "@/app/wrapper";

const Blog = () => {
  return (
    <>
      <CategoryFilter />
      <Wrapper>
        <div className="grid md:grid-cols-2 gap-6 py-[80px]">
          <BlogSection blogIndex={0} isImageFirst={true} />
          <BlogSection blogIndex={1} isImageFirst={false} />
          <BlogSection blogIndex={2} isImageFirst={true} />
          <BlogSection blogIndex={3} isImageFirst={false} />
        </div>
      </Wrapper>
    </>
  );
};

export default Blog;
