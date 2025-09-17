import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import herosectionImage from "../images/thomas-park-6MePtA9EVDA-unsplash.jpg";
import SplitText from "../Components/SplitText/splitText";

export default function Home() {
  return (
    <div className="grid grid-cols-12 py-[40px] md:py-[60px] xl:py-[100px] mx-[50px] md:mx-[100px] font-poppins ">
      <div className="col-span-12 lg:col-span-7 flex flex-col gap-6 xl:gap-10 justify-center items-center lg:items-start ">
        <p className= "text-[20px] sm:text-[30px] md:text-[35px] xl:text-[50px] font-semibold text-center lg:text-start">
          LOOKING FOR <span className="text-orange-400">TUTORS</span>? WE GOT
          YOU COVERED
        </p>
        <SplitText
          text="Lernify — Where Learning Meets Success."
          className="text-[16px] sm:text-2xl font-semibold text-gray-600 z-[-1] "
          delay={20}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <p className="text-justify text-gray-400 text-[12px] sm:text-[14px] md:text-[16px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          itaque ipsa ipsam ullam earum cumque nesciunt praesentium ea iste
          ratione dicta libero similique repudiandae, est esse. Voluptatem eius
          eveniet minima mollitia animi, porro aliquam, a excepturi fuga
          perferendis, neque ducimus!
        </p>
        <Button
          variant="contained"
          size="medium"
          className="!bg-orange-400 sm:w-[30%] w-[45%] !text-[10px] sm:!text-[12px] md:!text-[16px] z-[-1]"
        >
          Get Started
        </Button>
      </div>
      <div className="hidden lg: col-span-5 lg:flex justify-center items-center">
        <img src={herosectionImage} alt="image hrer" className="w-[70%]" />
      </div>
    </div>
  );
}
