import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" w-full">
        <div className="py-[100px] md:py-[133.33px] px-[40px] md:px-[85.33px] grid grid-cols-1 md:grid-cols-2  items-center justify-center text-center md:text-left md:leading-normal leading-center">
          <div className=" flex flex-col">
            <div className="text-[21.333px] font-[600] mb-[21.33px]">
              Hey, I am John
            </div>
            <div className="text-[30px] md:text-[50px] font-[700] mb-[21.33px] ">
              I create
              <span className="text-[#5E3BEE]"> product design</span>
              <br /> and brand experience
            </div>
            <div className="text-[24px] font-[400] mb-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </div>
            <div>
              <button className="bg-[#5E3BEE] text-white text-[21.333px] font-[400] py-[18.67px] px-[42.67px] rounded-[5.333px] hover:bg-white hover:text-[#5E3BEE] hover:cursor-pointer transform duration-300 shadow-2xl">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="mt-5 md:mt-0">
            <img className="h-auto w-[100%]" src="/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
