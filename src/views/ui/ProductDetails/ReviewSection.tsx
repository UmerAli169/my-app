"use client"
import React, { useState } from "react";
import reviewsData from "../../../Data/reviews/review.json";
import Button from "../shared/Button";
import Wrapper from "@/app/wrapper";
import { ReviewModal } from "./WriteReview";

const ReviewSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Wrapper>
      <div className="rounded-lg py-[40px] w-full mx-auto">
        <div className="text-center">
          <div className="flex gap-[10px] justify-center items-center">
            <img
              src="/svgs/Shared/ProductSection/leftflower.svg"
              alt="left decoration"
            />
            <p className="lg:text-[24px] text-[20px] text-[#383838] font-bold">
              Reviews All
            </p>
            <img
              src="/svgs/Shared/ProductSection/rightflower.svg"
              alt="right decoration"
            />
          </div>

          <p className="text-[18px] text-[#697586] font-normal hover:text-[#F5A3B7] cursor-pointer">
            See All
          </p>

          <div className="text-center mt-2">
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src="/svgs/Shared/reviews/starts.svg"
                    alt="star"
                    className="w-4"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {reviewsData.reviews.length} reviews
              </p>
            </div>

            <Button
              className="max-w-[146px] w-full px-4 py-2 mt-2 rounded text-sm hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              Write a Review
            </Button>
          </div>
        </div>

        <div className="mt-[40px] space-y-[30px] ">
          {reviewsData.reviews.map((review, index) => (
            <div key={index} className="rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  <img src="/reviews/reviewpic.png" alt="" />
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  {review.verified && (
                    <p className="text-xs text-gray-500">Verified Reviewer</p>
                  )}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <img
                        key={i}
                        src={
                          i < review.rating
                            ? "/svgs/Shared/reviews/starts.svg"
                            : "/svgs/Shared/reviews/starts.svg"
                        }
                        alt="star"
                        className="w-4"
                      />
                    ))}
                  </div>
                </div>
                <span className="ml-auto text-xs text-gray-500">
                  {review.date}
                </span>
              </div>

              <h3 className="font-semibold ml-[50px]">{review.title}</h3>
              <p className="text-sm text-gray-600 ml-[50px]">{review.text}</p>
              {review.images.length > 0 && (
                <div className="flex gap-2 mt-2 ml-[50px]">
                  {review.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="review"
                      className="w-16 h-16 rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

    </Wrapper>
  );
};

export default ReviewSection;
