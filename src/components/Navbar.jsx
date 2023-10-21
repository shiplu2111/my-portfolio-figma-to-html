"use client";
import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-[#FFF]   drop-shadow-[0_5.33333px_80px_0px_rgba(0,0,0,0.10)]">
        <div className="flex justify-between items-center md:mx-[85.33px] gap-3 mx-[43px] md:h-[120px] h-[100px] relative">
          <div className="flex items-center  h-[69.333px] hover:cursor-pointer ">
            <img
              src="/Logo.png"
              className="mx-auto bottom-0 h-[30px] w-auto md:h-[40px]  md:w-[186.667px]"
              alt="Hero"
            />
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-[42.67px]">
              <li className="text-[21.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                Home
              </li>
              <li className="text-[21.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                Portfolio
              </li>
              <li className="text-[21.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                About me
              </li>
              <li className="text-[21.333px] font-[400]  hover:text-[#5E3BEE] hover:cursor-pointer">
                Testimonials
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <button className="border-[1.333px] border-blue-600 text-blue-600 py-[18.667px] px-[42.67px] text-[21.333px] font-[400] hover:bg-[#5E3BEE] hover:text-white transection-all duration-500 rounded-[5.333px] shadow">
              Contact Me
            </button>
          </div>
          <div
            className="block md:hidden hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.50238 5H26.7833V7.5H4.50238V5ZM11.9293 13.75H26.7833V16.25H11.9293V13.75ZM4.50238 22.5H26.7833V25H4.50238V22.5Z"
                fill="#1C1E53"
              />
            </svg>
          </div>

          <div
            className={`${
              open ? "block" : "hidden"
            } md:hidden bg-gray-300 w-full z-10 h-auto absolute top-[100px] right-0 shadow-2xl`}
          >
            <ul className="flex flex-col items-center">
              <li className="text-[21.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Home</span>
              </li>
              <li className="text-[21.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Portfolio</span>
              </li>
              <li className="text-[21.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">About me</span>
              </li>
              <li className="text-[21.333px] font-[400] py-3 bg-slate-100 w-full   hover:text-[#5E3BEE] hover:cursor-pointer gap-1 border-b-4 shadow-2xl">
                <span className="mx-4">Testimonials</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
