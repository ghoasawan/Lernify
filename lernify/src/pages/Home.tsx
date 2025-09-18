import React from "react";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import herosectionImage from "../images/thomas-park-6MePtA9EVDA-unsplash.jpg";
import SplitText from "../Components/SplitText/splitText";
import Card from "../Components/Card/Card";
import { IoBookSharp } from "react-icons/io5";
import Background from "../Components/Background/background";
import GroupIcon from "@mui/icons-material/Group";
import { FaChalkboardTeacher } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProfileCard from "../Components/ProfileCard/ProfileCard";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
        <Background
          // className=" bg-gradient-to-t from-black via-gray-900 to-black "
          className="bg-gradient-to-t from-black via-gray-900 to-black "
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <p className="absolute top-10 text-white font-semibold text-[35px] lg:text-[40px] xl:text-[50px] w-full text-center">
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
              <Card
                className="custom-spotlight-card text-white flex justify-center items-center flex-col p-6 m-4 gap-2 lg:w-full w-[60%] "
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <GroupIcon
                  fontSize="lg"
                  className="text-[50px] text-white mb-4"
                />
                <p className="text-[26px] xl:text-[30px] font-semibold">
                  Tutors
                </p>
                <p className=" hidden md:block text-[14px] text-gray-50 mb-[40px] ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus illo quisquam dolor suscipit sequi, quo dolorem
                  <span className="lg:hidden xl:block">
                    perspiciatis quod accusamus id distinctio, atque, ducimus
                    architecto voluptas consectetur! In eligendi dolores libero?
                  </span>
                  {"  "}
                  <span className="inline xl:hidden">.....</span>
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="!bg-orange-400 sm:w-[50%]  md:w-[50%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight mt-[20px]"
                >
                  Explore Tutors
                </Button>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <Card
                className="custom-spotlight-card text-white flex justify-center items-center flex-col p-6 m-4 gap-2 w-[60%] lg:w-full"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <FaChalkboardTeacher className="text-[50px] text-white mb-4" />
                <p className="text-[26px] xl:text-[30px] font-semibold">Jobs</p>
                <p className="hidden md:block  text-[14px] text-gray-50 mb-[40px] text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus illo quisquam dolor suscipit sequi, quo dolorem
                  <span className="lg:hidden xl:block">
                    perspiciatis quod accusamus id distinctio, atque, ducimus
                    architecto voluptas consectetur! In eligendi dolores libero?
                  </span>
                  {"  "}
                  <span className="inline xl:hidden">.....</span>
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="!bg-orange-400 sm:w-[50%]  md:w-[70%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight  mt-[20px]"
                >
                  Explore Jobs
                </Button>
              </Card>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
              <Card
                className="custom-spotlight-card text-white flex justify-center items-center flex-col p-6 m-4 gap-2 w-[60%] lg:w-full"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <IoBookSharp className="text-[50px] text-white mb-4" />
                <p className="text-[26px] xl:text-[30px] font-semibold">
                  Tutors
                </p>
                <p className="hidden sm:block  text-[14px] text-gray-50 mb-[40px] text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus illo quisquam dolor suscipit sequi, quo dolorem
                  <span className="lg:hidden xl:block">
                    perspiciatis quod accusamus id distinctio, atque, ducimus
                    architecto voluptas consectetur! In eligendi dolores libero?
                  </span>
                  {"  "}
                  <span className="inline xl:hidden">.....</span>
                </p>
                <Button
                  variant="contained"
                  size="medium"
                  className="!bg-orange-400 sm:w-[50%] md:w-[70%] lg:w-[80%] !text-[10px] sm:!text-[12px] !font-extralight mt-[20px]"
                >
                  Explore Courses
                </Button>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SLIDER */}

      <div className="mx-[50px] md:mx-[100px] py-[50px] font-poppins ">
        <p className=" text-[25px] md:text-[35px] lg:text-[40px] xl:text-[50px] font-semibold text-center">
          OUR POPULAR TEACHERS
        </p>
        <Slider {...settings} className="mx-[-8px] lg:pt-[100px] md:pt-[60px] pt-[40px]">
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage}  />
          </div>
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage} />
          </div>
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage} />
          </div>
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage} />
          </div>
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage} />
          </div>
          <div className="px-[10px]">
            <ProfileCard image={herosectionImage} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
