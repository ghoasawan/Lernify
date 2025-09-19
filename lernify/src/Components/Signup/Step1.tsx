import React from "react";
import { BackgroundBeams } from "../Background/background";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Badge from "@mui/material/Badge";

export default function Step1() {
  return (
    <div>
      <div className="flex min-h-[100vh] justify-center items-center relative font-poppins ">
        <BackgroundBeams className="absolute inset-0" />
        <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]  px-[20px] py-[50px] z-10">
          <div className="">
            <FaLock className="text-4xl lg:text-5xl text-gray-700" />
          </div>
          <div className="text-gray-700 mt-[20px] text-[20px] font-bold">
            Signup
          </div>
          <p className="text-sm text-gray-400 mt-[10px]">Upload Profile Photo</p>
          <form className="w-full max-w-sm mx-auto rounded-2xl  space-y-6 flex justify-center items-center flex-col mt-[20px]">
            <div className="w-[150px] h-[150px] rounded-full border-1 border-dashed border-gray-500 relative">
              <div className="absolute top-[20px] right-[15px]">
                <Badge badgeContent="+" color="primary" className="cursor-pointer "></Badge>
              </div>
            </div>
            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 cursor-pointer"
            >
              Next
            </button>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 cursor-pointer mt-[-10px]"
            >
              Skip
            </button>

            {/* Footer */}
            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link to="#" className="text-orange-700 hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
