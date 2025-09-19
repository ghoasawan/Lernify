import React from "react";
import { BackgroundBeams } from "../Components/Background/background";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Login() {
  return (
    <div className="flex min-h-[100vh] justify-center items-center relative font-poppins ">
      <BackgroundBeams className="absolute inset-0" />
      <div className="flex flex-col justify-center items-center w-[300px] md:w-[400px] lg:w-[500px]  px-[20px] py-[50px] z-10">
        <div className="">
          <FaLock className="text-4xl lg:text-5xl text-gray-700" />
        </div>
        <div className="text-gray-700 mt-[20px] text-[20px] font-bold">
          LOGIN
        </div>
        <form className="w-full max-w-sm mx-auto rounded-2xl  space-y-6">
          {/* Username */}
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-600 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400 relative"
            />
            <div className="relative">
              <VisibilityIcon className="absolute bottom-3 right-[15px] !text-[20px] cursor-pointer" />
            </div>
          </div>
          <p className="text-end mt-[-20px]">
            <Link to="#" className="text-orange-700 hover:underline text-sm">
              Forgot Password
            </Link>
          </p>
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 cursor-pointer"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <Link to="#" className="text-orange-700 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
