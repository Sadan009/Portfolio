import { BaseInfo } from "@/Data/data";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import SplitText from "../../SplitText";

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <>
      <div
        className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative text-white"
        id="hero"
      >
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div>
              <h1
                data-aos="zoom-in"
                className="text-2xl md:text-3xl lg:text-4xl mb-1 text-gray-300 font-semibold"
              >
                <SplitText
                  text={`I am ${BaseInfo.name}`}
                  className="text-6xl font-semibold text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>

              {/* Title */}
              <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]">
                {BaseInfo.position}
              </h1>

              {/* Description */}
              <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
                {BaseInfo.description}
              </p>

              {/* Download Resume */}
              <a
                href="/images/SadanImam_Resume.pdf"
                download="Sadan_Resume.pdf"
              >
                <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-l mt-8 bg-blue-700 hover:bg-blue-900 flex items-center gap-2">
                  <span>Download Resume</span>
                  <FaDownload />
                </button>
              </a>
            </div>

            {/* Image Content */}
            <div className="mx-auto hidden md:block lg:block rounded-[3rem] border-[3.5px] border-blue-950">
              <Image
                src="/images/Sady.jpeg"
                alt={BaseInfo.name}
                width={300}
                height={400}
                className="rounded-[3rem]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="" /> */}
    </>
  );
};

export default Hero;
