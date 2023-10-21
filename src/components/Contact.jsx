import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className=" py-[100px] md:py-[149.33px] px-[20px] md:px-[85.33px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[21.333px] font-[600] leading-[32px] text-[#282938]">
            Get In Touch
          </div>
          <div className="text-[30px] md:text-[64px] font-[700] leading-[76.8px] pt-[21.333px] text-[#282938]">
            Contact me
          </div>
          <div className="text-[24px] font-[400] leading-[36px] pt-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
        </div>
        <div className="mt-[64px] w-[80%] md:w-[60%] mx-auto flex flex-col gap-[32px]">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Contact;
