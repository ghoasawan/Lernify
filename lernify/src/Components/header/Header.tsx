import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {


  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleClose() {
    if (isSidebarOpen) setIsSidebarOpen(false);
    else setIsSidebarOpen(true);
  }


  return (
    <div className="relative font-poppins">
      <div className="fixed w-full ">
        <div className="grid w-full grid-cols-12 h-[80px]  font-poppins ">
          <div className="col-span-6 md:col-span-3 flex justify-center items-center text-[33px] lg:text-[40px] font-semibold text-gray-600 ">
            Lernify
          </div>
          <div className="hidden md:col-span-6 md:flex items-center justify-center md:gap-[30px] lg:gap-[50px] text-[16px]">
            <Link to="/home">Home</Link>
            <Link to="/tutors">Tutors</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="hidden md:col-span-3 md:flex justify-center items-center gap-[20px]">
            <Button
              variant="contained"
              size={isSmall ? "small" : "medium"}
              className={`!hidden md:!block !bg-orange-400`}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              size={isSmall ? "small" : "medium"}
              className="!hidden md:!block !border-1 !border-orange-400 !text-orange-400 hover:!bg-orange-50"
            >
              Signup
            </Button>
          </div>
          <div className="col-span-6  md:hidden  flex justify-center items-center  ">
            <MenuIcon
              fontSize="large"
              className="text-gray-600 "
              onClick={handleClose}
            />
          </div>
        </div>
      </div>

      {/* Side Bar */}

      <div
        className={`absolute w-full h-[100vh] bg-gray-50 px-[20px] sm:px-[40px] pt-[20px] ${
          isSidebarOpen ? "translate-x-0" : " -translate-x-full"
        } transform transition-transform duration-700 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          <span className="text-[28px] sm:text-[40px] text-gray-700">
            Lernify
          </span>
          <span className="flex gap-4 items-center">
            <button className=" border-1 border-orange-400 px-2 sm:px-4  sm:py-2 py-1 text-orange-400 text-[12px] sm:text-[16px]  hover:bg-orange-400 hover:text-white cursor-pointer ">
              Login
            </button>
            <button className=" border-1 border-orange-400 px-2 sm:px-4 py-1 sm:py-2 text-orange-400 text-[12px] sm:text-[16px]  hover:bg-orange-400 hover:text-white cursor-pointer ">
              Signup
            </button>
            <CloseIcon className="cursor-pointer" onClick={handleClose} />
          </span>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <Link to="/home" className="hover:bg-gray-200">
            Home
          </Link>
          <Link to="/tutors" className="hover:bg-gray-200">
            Tutors
          </Link>
          <Link to="/jobs" className="hover:bg-gray-200">
            Jobs
          </Link>
          <Link to="/about" className="hover:bg-gray-200">
            About
          </Link>
          <Link to="/contact" className="hover:bg-gray-200">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
