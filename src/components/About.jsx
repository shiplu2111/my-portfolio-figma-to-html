import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-[114.667px] md:grid-cols-2  px-[40px] md:px-[85.33px] py-[100px]  md:py-[133.33px] ">
          <div>
            <img src="/about.png" alt="" />
          </div>
          <div className="flex flex-col justify-center items-start gap-[32px]">
            <div>
              <span className="text-[21.333px] font-[600] leading-[32px] text-[#282938]">
                About
              </span>
            </div>
            <div className="mt-[10.67px]">
              <span className="text-[64px] font-[700] leading-[76.8px]">
                About Me
              </span>
            </div>
            <div className="">
              <p className="text-[24px] font-[400] leading-[36px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque. Sit turpis pretium eget maecenas. Vestibulum dolor
                mattis consectetur eget commodo vitae. Amet pellentesque sit
                pulvinar lorem mi a, euismod risus r.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
