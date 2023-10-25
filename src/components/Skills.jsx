"use client";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
  return (
    <>
      <div className="w-full ">
        <div className="px-[40px] md:px-[85.33px] py-[100px]  md:py-[149.33px] ">
          <div className="mb-[21.333px]">
            <h1 className="text-[21.333px] font-[600] text-[#282938]">
              My Skills
            </h1>
          </div>
          <div>
            <h1 className="text-[64px] font-[700] leading-[76.8px]">
              My Expertise
            </h1>
          </div>
          <AnimationOnScroll animateIn="animate__bounceIn">
            <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-[42.67px] text-left">
              <div className="p-[32px] shadow-2xl hover:border-b-[4px] rounded-b-[10.667px] border-[#5E3BEE] hover:transition-all   duration-100 ">
                <div className="bg-[#FFF] h-[66.333px] w-[66.333px] rounded-[10.667px] hover:shadow-2xl  flex items-center justify-center">
                  <img
                    className=" w-[53.333px] h-[53.333px] px-[13px] py-[13px] mx-auto"
                    src="/skill1.png"
                    alt="skill1"
                  />
                </div>
                <div className="mt-[32px]">
                  <h1 className="text-[32px] font-[700] leading-[44.8px] text-[#282938] hover:cursor-pointer">
                    Strategy & Direction
                  </h1>
                </div>
                <div className="mt-[21.333px]">
                  <p className="text-[21.333px] font-[400] leading-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="p-[32px] shadow-2xl hover:border-b-[4px] rounded-b-[10.667px] border-[#5E3BEE] hover:transition-all duration-100 animate__animated animate__fadeInDown">
                <div className="bg-[#FFF] h-[66.333px] w-[66.333px] flex items-center justify-center rounded-[10.667px] hover:shadow-2xl">
                  <img
                    className=" w-[53.333px] h-[53.333px] px-[13px] py-[13px] mx-auto"
                    src="/skill2.png"
                    alt="skill2"
                  />
                </div>
                <div className="mt-[32px]">
                  <h1 className="text-[32px] font-[700] leading-[44.8px] text-[#282938] hover:cursor-pointer">
                    Branding & Logo
                  </h1>
                </div>
                <div className="mt-[21.333px]">
                  <p className="text-[21.333px] font-[400] leading-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="p-[32px] shadow-2xl hover:border-b-[4px] rounded-b-[10.667px] border-[#5E3BEE] hover:transition-all   duration-100 animate__animated animate__fadeInUp">
                <div className="bg-[#FFF] h-[66.333px] w-[66.333px] flex items-center justify-center rounded-[10.667px] hover:shadow-2xl">
                  <img
                    className=" w-[53.333px] h-[53.333px] px-[13px] py-[13px] mx-auto"
                    src="/skill3.png"
                    alt="skill3"
                  />
                </div>
                <div className="mt-[32px]">
                  <h1 className="text-[32px] font-[700] leading-[44.8px] text-[#282938] hover:cursor-pointer">
                    UI & UX Design
                  </h1>
                </div>
                <div className="mt-[21.333px]">
                  <p className="text-[21.333px] font-[400] leading-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>

              <div className="p-[32px] shadow-2xl hover:border-b-[4px] rounded-b-[10.667px] border-[#5E3BEE] hover:transition-all   duration-100 animate__animated animate__fadeInRight">
                <div className="bg-[#FFF] h-[66.333px] w-[66.333px] flex items-center justify-center rounded-[10.667px] hover:shadow-2xl">
                  <img
                    className=" w-[53.333px] h-[53.333px] px-[13px] py-[13px] mx-auto"
                    src="/skill4.png"
                    alt="skill4"
                  />
                </div>
                <div className="mt-[32px]">
                  <h1 className="text-[32px] font-[700] leading-[44.8px] text-[#282938] hover:cursor-pointer">
                    Webflow Development
                  </h1>
                </div>
                <div className="mt-[21.333px]">
                  <p className="text-[21.333px] font-[400] leading-[32px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </>
  );
};

export default Skills;
