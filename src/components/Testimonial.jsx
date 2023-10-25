"use client";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Testimonial = () => {
  return (
    <>
      <div className="py-[100px] md:py-[149.33px] px-[20px] md:px-[85.33px]">
        <div className="">
          <div className="text-[21.333px] font-[600] leading-[32px]">
            Clients Feedback
          </div>
          <div className="text-[30px] md:text-[64px] font-[700] leading-[76.8px]">
            Customer testimonials
          </div>
        </div>
        <div className="mt-[106.67px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[42.67px]">
            <div className="flex flex-col shadow-2xl gap-[42.67px] pl-[42.67px] border-[1.333px] border-[#006B6A]">
              <AnimationOnScroll animateIn="animate__zoomInLeft">
                <div className="flex gap-[5.33px] pt-[42.67px] ">
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                </div>
              </AnimationOnScroll>
              <div className="  text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </div>
              <div className="flex gap-[21.33px] pb-[42.67px]">
                <AnimationOnScroll animateIn="animate__zoomIn">
                  <div>
                    <img
                      className="w-[74.667px] h-[74.667px] rounded-[74.667px] "
                      src="/avatar1.png"
                      alt=""
                    />
                  </div>
                </AnimationOnScroll>
                <div>
                  <div className="text-[21.333px] font-[600] leading-[32px] font-[#282938]">
                    Dianne Russell
                  </div>
                  <div className="text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                    Starbucks
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl gap-[42.67px] pl-[42.67px] border-[1.333px] border-[#006B6A]">
              <AnimationOnScroll animateIn="animate__zoomInLeft">
                <div className="flex gap-[5.33px] pt-[42.67px] ">
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                </div>
              </AnimationOnScroll>
              <div className="  text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </div>
              <div className="flex gap-[21.33px] pb-[42.67px]">
                <AnimationOnScroll animateIn="animate__zoomIn">
                  <div>
                    <img
                      className="w-[74.667px] h-[74.667px] rounded-[74.667px] "
                      src="/avatar2.png"
                      alt=""
                    />
                  </div>
                </AnimationOnScroll>
                <div>
                  <div className="text-[21.333px] font-[600] leading-[32px] font-[#282938]">
                    Kristin Watson
                  </div>
                  <div className="text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                    Louis Vuitton
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col shadow-2xl gap-[42.67px] pl-[42.67px] border-[1.333px] border-[#006B6A]">
              <AnimationOnScroll animateIn="animate__zoomInLeft">
                <div className="flex gap-[5.33px] pt-[42.67px] ">
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                  <img src="/Vector.svg" alt="" />
                </div>
              </AnimationOnScroll>
              <div className="  text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra.
              </div>
              <div className="flex gap-[21.33px] pb-[42.67px]">
                <AnimationOnScroll animateIn="animate__zoomIn ">
                  <div>
                    <img
                      className="w-[74.667px] h-[74.667px] rounded-[74.667px] "
                      src="/avatar3.png"
                      alt=""
                    />
                  </div>
                </AnimationOnScroll>
                <div>
                  <div className="text-[21.333px] font-[600] leading-[32px] font-[#282938]">
                    Kathryn Murphy
                  </div>
                  <div className="text-[21.333px] font-[400] leading-[32px] font-[#1C1E53]">
                    McDonald's
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
