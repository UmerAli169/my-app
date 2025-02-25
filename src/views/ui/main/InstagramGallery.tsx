import Wrapper from "@/app/wrapper";
import Button from "../shared/Button";

const images = [
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
  "/imageGallary.png",
];

const InstagramGallery = () => {
  return (
    <Wrapper >
      <div className="text-center py-[80px]">
        <div className="text-center">
          <p className="lg:text-[24px] text-[20px] text-[#383838] font-bold">Share  how you blossomed with <span className="text-[#F5A3B7] underline">#bloombeauty</span></p>
          <p className="text-[18px] text-[#697586] font-normal">See All</p>
        </div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[20px] py-[30px]">
          {images.map((src, index) => (
            <div key={index} className="relative">
              <img src={src} alt={`Product ${index + 1}`} className="w-full h-40 object-cover rounded-lg" />
            </div>
          ))}
        </div>

        <Button className="lg:max-w-[226px] w-full">
          Explore More
        </Button>
      </div></Wrapper>
  );
};

export default InstagramGallery;
