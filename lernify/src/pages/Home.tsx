import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import herosectionImage from "../images/thomas-park-6MePtA9EVDA-unsplash.jpg";
import SplitText from "../Components/SplitText/splitText";

export default function Home() {
  return (
    <div className="font-poppins">
      {/* hero section */}
      <div className="grid grid-cols-12 mx-[70px] xl:mx-[120px] py-[70px] xl:py-[100px] items-center gap-10">
        <motion.div
          className="col-span-7 flex flex-col gap-10 items-start px-[25px]"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }} // smooth transition
        >
          <p className="lg:text-[40px] xl:text-[60px] font-semibold">
            Looking for <span className="text-orange-400 ">Tutors?</span>Lernify
            got you covered
          </p>
          <SplitText
            text="Lernify — Where Learning Meets Success.!"
            className="lg:text-[20px] xl:text-2xl font-semibold text-center text-gray-600"
            delay={40}
            duration={0.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <div className="flex flex-col gap-6">
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem et
              aut cumque maxime suscipit eaque dolor consectetur amet eligendi
              facere
            </p>

            <Button
              size="medium"
              variant="contained"
              className="!bg-orange-400 w-[30%]"
            >
              Find Tutors
            </Button>
          </div>
        </motion.div>


        <div className="col-span-5 flex justify-center items-center">
            <img src={herosectionImage} alt="image here" className=" object-cover  w-[80%]" />
        </div>
      </div>
    </div>
  );
}
