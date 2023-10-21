import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" py-[100px] md:py-[106.67px] px-[20px] md:px-[85.33px]">
        <div className="flex items-center justify-between">
          <div>
            <img className="w-[186.67px] bg-cover" src="/logo.png" alt="" />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-[42.67px]">
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                Home
              </li>
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                Portfolio
              </li>
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                About me
              </li>
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                Contact
              </li>
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                Testimonials
              </li>
              <li className="text-[21.333px] font-[400] leading-[32px] text-black">
                Portfolio
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-shrink-0 gap-[42.67px] items-center">
              <li>
                <a href="">
                  {" "}
                  <img
                    className="h-[32px] w-[32px]"
                    src="/Facebook.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img
                    className="h-[32px] w-[32px]"
                    src="/Instagram.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img
                    className="h-[32px] w-[32px]"
                    src="/Twitter.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <img
                    className="h-[32px] w-[32px]"
                    src="/LinkedIn.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-[1.333px] border-[#2829388C] my-[106.67px]">
          <div className="flex items-center justify-between pt-[42.67px]">
            <div>Made with 💖 by Shiplu</div>
            <div>
              <ul className="flex gap-8">
                <li className="text-[18.667px] font-[400] leading-[28px] text-[#000000]">
                  <a href="">Privacy Policy</a>
                </li>
                <li className="text-[18.667px] font-[400] leading-[28px] text-[#000000]">
                  <a href="">Terms of Service</a>
                </li>
                <li className="text-[18.667px] font-[400] leading-[28px] text-[#000000]">
                  <a href="">Cookies Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
