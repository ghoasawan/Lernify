import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "rgba(32, 32, 32, 1)" }}>
      <div className=" grid grid-cols-12  font-poppins mx-[100px] py-[60px] border-b-[1px] border-gray-600">
        <div className=" col-span-5 lg:col-span-6 flex flex-col gap-4 pr-[20px] lg:pr-[50px]">
          <p className="text-[27px] md:text-[33px] lg:text-[40px] text-orange-400">Lernify</p>
          <p className=" text-[14px] lg:text-[16px] text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ullam
            ipsum voluptate quo totam at deserunt nihil ab architecto. Ducimus?
          </p>
          <div className="text-gray-300 mt-[20px] ">
            <ul  className="flex gap-4 items-center cursor-pointer  ">
              <li >
                <FaInstagram />
              </li>
              <li>
                <FaSquareFacebook />
              </li>
              <li>
                <FaYoutube />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>
          </div>
        </div>

        <div className=" col-span-4 lg:col-span-3 pt-[20px] flex flex-col gap-4 px-[40px]  justify-center items-center">
          <div>
            <p className="text-[20px] text-white font-bold">Useful Links</p>
            <div className="b">
              <ul className="flex flex-col gap-2 mt-[20px] text-white text-[14px] ">
                <Link
                  to="/home"
                  className="hover:underline flex items-center gap-2 "
                >
                  <FaCaretRight className="text-orange-400" />
                  Home
                </Link>
                <Link
                  to="/tutors"
                  className="hover:underline flex items-center gap-2 "
                >
                  <FaCaretRight className="text-orange-400" />
                  Tutors
                </Link>
                <Link
                  to="/jobs"
                  className="hover:underline flex items-center gap-2"
                >
                  <FaCaretRight className="text-orange-400" />
                  Jobs
                </Link>
                <Link
                  to="/about"
                  className="hover:underline flex items-center gap-2"
                >
                  <FaCaretRight className="text-orange-400" />
                  About
                </Link>
                <Link
                  to="/contact"
                  className="hover:underline flex items-center gap-2"
                >
                  <FaCaretRight className="text-orange-400" />
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className=" col-span-3  lg:col-span-3 pt-[20px] flex flex-col gap-4 px-[40px]    items-center">
          <div>
            <p className="text-[20px] text-white font-bold">Contact Info</p>
            <ul className="flex flex-col gap-2 mt-[20px] text-white text-[14px] ">
              <p className="hover:underline flex items-center gap-2 ">
                <FaLocationDot className="text-orange-400" />
                129-D Canal Garden, Lahore
              </p>
              <p className="hover:underline flex items-center gap-2 ">
                <MdEmail className="text-orange-400" />
                Tutors
              </p>
              <p className="hover:underline flex items-center gap-2">
                <FaPhoneVolume className="text-orange-400" />
                Jobs
              </p>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-white py-[20px]">© 2023 All Rights Reserved by Parking Shades</div>
    </div>
  );
}
