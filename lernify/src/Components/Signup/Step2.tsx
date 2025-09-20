import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { BackgroundBeams } from "../Background/background";
import Tags from "../inputTags/Tags";

export default function Step2() {
  const [subjects, setSubjects] = useState([]);
  const [role, setRole] = useState("");

  return (
    <div className="flex min-h-[100vh] justify-center items-center relative font-poppins">
      <BackgroundBeams className="absolute inset-0" />

      <div className="flex flex-col justify-center items-center w-[300px] md:w-[450px] lg:w-[800px] px-[20px] py-[40px] z-10">
        <FaUserPlus className="text-4xl lg:text-5xl text-gray-700 mb-4" />
        <div className="text-gray-700 text-[22px] font-bold mb-6">SIGN UP</div>

        <form className="w-full space-y-5">
          {/* First & Last Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>
          </div>

          {/* Username */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <label
                htmlFor="username"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="03XX-XXXXXXX"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>
          </div>

          {/* {email} */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col w-full">
              <label
                htmlFor="Email"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="border-1  border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter City"
                className="border-1  border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col w-full ">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col w-full">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-gray-600 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                className="border-1 border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 hover:border-orange-400"
              />
            </div>
          </div>

          {/* Role Radio Buttons */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Select Role
            </p>
            <div className="flex gap-6">
              <label
                htmlFor="teacher"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  id="teacher"
                  type="radio"
                  name="role"
                  value="teacher"
                  checked={role == "teacher"}
                  className="accent-orange-400 cursor-pointer"
                  onChange={(e) => {
                    setRole(e.target.value);
                    const currentScrollY = window.scrollY;
                    requestAnimationFrame(() => {
                      window.scrollTo(0, currentScrollY);
                    });
                  }}
                />
                Teacher
              </label>
              <label
                htmlFor="student"
                className="flex items-center gap-2 text-gray-700"
              >
                <input
                  id="student"
                  type="radio"
                  name="role"
                  value="student"
                  checked={role == "student"}
                  className="accent-orange-400 cursor-pointer"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                Student
              </label>
            </div>
          </div>

          {role === "teacher" ? (
            <div className="w-full">
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-600"
                >
                  Subjects
                </label>
                <Tags tags={subjects} setTags={setSubjects} />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-600"
                >
                  Institutes
                </label>
                <Tags tags={subjects} setTags={setSubjects} />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="text-sm font-medium text-gray-600"
                >
                  Qualification
                </label>
                <Tags tags={subjects} setTags={setSubjects} />
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Submit Button */}
          <button
            type="submit"
            className=" mt-[20px] w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 cursor-pointer"
          >
            Sign Up
          </button>
          <button
            type="submit"
            className=" mt-[-10px]  w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition duration-200 cursor-pointer"
          >
            Back
          </button>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-700 hover:underline ">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
