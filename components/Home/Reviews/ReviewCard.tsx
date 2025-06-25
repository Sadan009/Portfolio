import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

// def type:
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};
const ReviewCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className="h-[380px] bg-[#140c1c] rounded-lg overflow-hidden">
      {/* Main content */}
      <div className="h-[230px] px-6 py-5">
        {/* Top quote */}
        <Image
          src="/images/q.png"
          alt="quote"
          width={32}
          height={32}
          className="opacity-80"
        />

        {/* Review text */}
        <p className="text-white/70 my-4 text-base leading-relaxed line-clamp-4">
          {clientReview}
        </p>

        {/* Bottom quote */}
        <Image
          src="/images/q.png"
          alt="quote"
          width={32}
          height={32}
          className="opacity-80 ml-auto"
        />
      </div>

      {/* Rating */}
      <div className="flex justify-center mb-4">
        <div className="px-4 py-2 rounded-full bg-indigo-900 flex items-center gap-2">
          <span className="text-white font-bold">{rating}/5</span>
          <FaStar className="text-yellow-400" size={22} />
        </div>
      </div>

      {/* Profile */}
      <div className="bg-white h-[90px]">
        <div className="h-full flex items-center px-6 gap-x-5">
          <div className="flex-shrink-0">
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="text-base text-gray-600">{profession}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
