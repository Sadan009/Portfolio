"use client";
import { clientReviews } from "@/Data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 10,
  },
};

const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      itemClass="px-3"
      containerClass="py-8 mx-3"
    >
      {clientReviews.map((review, i) => {
        return (
          <div
            key={review.image}
            className="flex-shrink-0"
            data-aos="fade-up"
            data-aos-delay={`${i * 50}`}
          >
            {/* Review Card */}
            <ReviewCard review={review} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
