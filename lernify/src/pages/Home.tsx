import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import herosectionImage from "../images/thomas-park-6MePtA9EVDA-unsplash.jpg";
import SplitText from "../Components/SplitText/splitText";
import Card from "../Components/Card/Card";
import { IoBookSharp } from "react-icons/io5";
import GroupIcon from "@mui/icons-material/Group";
import { FaChalkboardTeacher } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

import { BackgroundBeams } from "../Components/Background/background";

export default function Home() {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute right-2 top-0 -translate-y-1/2 z-10 cursor-pointer bg-orange-400 text-white p-2 rounded-full hover:bg-black"
      >
        ➜
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        className="absolute left-2 top-0 -translate-y-1/2 z-10 cursor-pointer bg-orange-400 text-white p-2 rounded-full hover:bg-black"
      >
        ←
      </div>
    );
  };
  const teachers = [
    {
      image: herosectionImage,
      name: "Usama Awan",
      Subjects: ["English", "Urdu", "Physics"],
      rating: 4.3,
      experience: "10 Years",
    },
    {
      image: herosectionImage,
      name: "Usama Awan",
      Subjects: ["English", "Urdu", "Physics"],
      rating: 4.3,
      experience: "10 Years",
    },
    {
      image: herosectionImage,
      name: "Usama Awan",
      Subjects: ["English", "Urdu", "Physics"],
      rating: 4.3,
      experience: "10 Years",
    },
    {
      image: herosectionImage,
      name: "Usama Awan",
      Subjects: ["English", "Urdu", "Physics"],
      rating: 4.3,
      experience: "10 Years",
    },
    {
      image: herosectionImage,
      name: "Usama Awan",
      Subjects: ["English", "Urdu", "Physics"],
      rating: 4.3,
      experience: "10 Years",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1280, // Tailwind xl
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // Tailwind lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tailwind lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Tailwind sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {/* // hero section */}
      <div className="grid grid-cols-12 py-[40px] md:py-[60px] xl:py-[100px] mx-[50px] md:mx-[100px] font-poppins ">
        <motion.div
          className="col-span-12 lg:col-span-7 flex flex-col gap-6 xl:gap-10 justify-center items-center lg:items-start "
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-[20px] sm:text-[30px] md:text-[35px] xl:text-[50px] font-semibold text-center lg:text-start">
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
            ratione dicta libero similique repudiandae, est esse. Voluptatem
            eius eveniet minima mollitia animi, porro aliquam, a excepturi fuga
            perferendis, neque ducimus!
          </p>
          <Button
            variant="contained"
            size="medium"
            className="!bg-orange-400 sm:w-[30%] w-[45%] !text-[10px] sm:!text-[12px] md:!text-[16px] z-[-1]"
          >
            Get Started
          </Button>
        </motion.div>
        <div className="hidden lg: col-span-5 lg:flex justify-center items-center">
          <img src={herosectionImage} alt="image hrer" className="w-[70%]" />
        </div>
      </div>

      {/* // section2 */}
      <div
        style={{ width: "100%", position: "relative" }}
        className="md:h-[1400px] lg:h-[700px] "
      >
        <BackgroundBeams className="absolute inset-0" />
        <p className="absolute top-10 text-gray-600 font-semibold text-[35px] lg:text-[40px] xl:text-[50px] w-full text-center">
          WHAT WE OFFER
        </p>

        <div className="absolute top-[170px] w-full flex justify-center items-center">
          <motion.div
            className="grid grid-cols-12 lg:mx-[80px] xl:mx-[100px]"
            initial={{ y: 200, opacity: 0 }} // start below and invisible
            whileInView={{ y: 0, opacity: 1 }} // animate to normal position and visible
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.1, // makes it grow outward
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="cursor-pointer w-[80%] shadow-lg px-[50px] py-[50px] flex flex-col justify-center items-center  bg-gray-100 rounded-2xl border-1 border-gray-200"
              >
                <GroupIcon
                  fontSize="lg"
                  className="text-[50px]  mb-4 text-gray-600"
                />
                <p className="text-[26px] xl:text-[30px] font-semibold text-gray-600">
                  Tutors
                </p>
                <p className=" hidden md:block text-[14px] text-gray-400 mb-[40px] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam repellendus ducimus ad cum odio commodi obcaecati
                  nulla. Nostrum eaque odit
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="hover:!bg-orange-400 hover:!text-white  !bg-transparent hover:!border-1 !border-orange-400 !text-orange-400 sm:w-[50%] !shadow-none md:w-[50%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight mt-[20px]"
                >
                  Explore Tutors
                </Button>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.1, // makes it grow outward
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="cursor-pointer w-[80%] shadow-lg px-[50px] py-[50px] flex flex-col justify-center items-center  bg-gray-100 rounded-2xl border-1 border-gray-200"
              >
                <FaChalkboardTeacher className="text-[50px] text-gray-600 mb-4" />
                <p className="text-[26px] xl:text-[30px] font-semibold text-gray-600">
                  Jobs
                </p>
                <p className=" hidden md:block text-[14px] text-gray-400 mb-[40px] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam repellendus ducimus ad cum odio commodi obcaecati
                  nulla. Nostrum eaque odit
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="hover:!bg-orange-400 hover:!text-white  !bg-transparent hover:!border-1 !border-orange-400 !text-orange-400 sm:w-[50%] !shadow-none md:w-[50%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight mt-[20px]"
                >
                  Explore Jobs
                </Button>
              </motion.div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.1, // makes it grow outward
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                className="cursor-pointer w-[80%] shadow-lg px-[50px] py-[50px] flex flex-col justify-center items-center  bg-gray-100 rounded-2xl border-1 border-gray-200"
              >
                <IoBookSharp className="text-[50px] text-gray-600 mb-4" />
                <p className="text-[26px] xl:text-[30px] font-semibold text-gray-600">
                  Tutors
                </p>
                <p className=" hidden md:block text-[14px] text-gray-400 mb-[40px] text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam repellendus ducimus ad cum odio commodi obcaecati
                  nulla. Nostrum eaque odit
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="hover:!bg-orange-400 hover:!text-white  !bg-transparent hover:!border-1 !border-orange-400 !text-orange-400 sm:w-[50%] !shadow-none md:w-[50%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight mt-[20px]"
                >
                  Explore Courses
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SLIDER */}

      <div className="mx-[50px] md:mx-[100px] py-[50px] font-poppins ">
        <p className=" text-[25px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-semibold text-center">
          OUR POPULAR TEACHERS
        </p>
        <Slider
          {...settings}
          className="mx-[-8px] lg:pt-[100px] md:pt-[60px] pt-[40px]"
        >
          {teachers.map((data, key) => {
            return (
              <div key={key} className="px-[10px]">
                <ProfileCard
                  image={data.image}
                  name={data.name}
                  rating={data.rating}
                  subjects={data.Subjects}
                  experience={data.experience}
                />
              </div>
            );
          })}
        </Slider>

        <div className="flex justify-center items-center pt-[50px] ">
          <Button
            variant="contained"
            size="medium"
            className="!bg-orange-400 w-[10%]"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
