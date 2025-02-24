"use client";
import { useRef, useState, useEffect } from "react";
import Wrapper from "@/app/wrapper";
import ProductCard from "../shared/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";



interface ProductSectionProps {
  title: string;
  products: any[];
  cardWidth: number;
}
const ProductSection = ({ title, products,cardWidth }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320 * 4; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = 320; 
        const visibleIndex = Math.round(scrollLeft / (cardWidth * 4));
        setCurrentIndex(visibleIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const totalDots = Math.ceil(products.length / 4);

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-center w-full lg:pt-[83.5px] pt-[71px] relative">
        <div className="text-center">
          <p className="lg:text-[24px] text-[20px] text-[#383838] font-bold">{title}</p>
          <p className="text-[16px] text-[#697586] font-normal">See All</p>
        </div>

        <div className="w-full overflow-hidden relative lg:py-[30px] py-[20px]">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hidden lg:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft size={24} />
          </button>

          <div ref={scrollRef} className="flex gap-[20px] overflow-x-scroll scrollbar-hide flex-nowrap">
            {products.map((product: any) => (
              <div key={product.id} style={{ maxWidth: `${cardWidth}px`, width: "100%" }} className="shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-2 rounded-full hidden lg:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex mt-4 gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: index * 320 * 4,
                    behavior: "smooth",
                  });
                }
              }}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSection;
