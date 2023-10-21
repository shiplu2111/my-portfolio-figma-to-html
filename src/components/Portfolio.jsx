import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className=" py-[100px] md:py-[149.33px] px-[20px] md:px-[85.33px]">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[16.333px] font-[500] leading-[27px] md:text-[21.333px] md:font-[600] md:leading-[32px]">
              Recent Projects
            </div>
            <div className="mt-[21.333px] text-[38px] font-[600] leading-[32.8px] md:text-[64px] md:font-[700] md:leading-[76.8px] ">
              My Portfolio
            </div>
          </div>
          <div className="flex items-center gap-[16px] bg-[#E62872] text-[#FFFFFF] py-[8px] px-[10.33px] md:py-[13px] md:px-[21.33px] rounded-[10.66px] hover:shadow-2xl   hover:border-gray-950 hover:cursor-pointer hover:transection-all duration-300 shadow-lg">
            <div>
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <span className="text-[18.333px] font-[400] leading-[20px] md:text-[21.333px] md:font-[400] md:leading-[32px]  ">
                Visit My Dribbble
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[106.67px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[42.67px]">
              <div className="shadow-2xl rounded-[8px]">
                <div>
                  <img
                    className="h-[400px] rounded-[10.667px] bg-cover bg-no-repeat bg-center"
                    src="/portfolio1.jpg"
                    alt=""
                  />
                </div>
                <div className="py-[32px] px-[32px]">
                  <div>
                    <div className="text-[32px] font-[700] text-[#282938] leading-[44.8px] ">
                      Ahuse
                    </div>
                    <div className="mt-[10.333px] text-[21.333px] text-[#1C1E53] font-[400] leading-[32px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </div>
                  </div>
                  <div className="mt-[32px]">
                    <div className="flex items-center justify-start gap-[16px] ">
                      <div className="flex items-center gap-[16px]  pb-[10.67px] border-b-[1.333px] border-b-[#5E3BEE] hover:cursor-pointer">
                        <div className="text-[18.667px] font-[600] leading-[28px] ">
                          View In Dribbble
                        </div>
                        <div>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                              stroke="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl rounded-[8px]">
                <div>
                  <img
                    className="h-[400px] rounded-[10.667px] bg-cover bg-no-repeat bg-center"
                    src="/portfolio2.png"
                    alt=""
                  />
                </div>
                <div className="py-[32px] px-[32px]">
                  <div>
                    <div className="text-[32px] font-[700] text-[#282938] leading-[44.8px] ">
                      App Dashboard
                    </div>
                    <div className="mt-[10.333px] text-[21.333px] text-[#1C1E53] font-[400] leading-[32px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </div>
                  </div>
                  <div className="mt-[32px]">
                    <div className="flex items-center justify-start gap-[16px] ">
                      <div className="flex items-center gap-[16px]  pb-[10.67px] border-b-[1.333px] border-b-[#5E3BEE] hover:cursor-pointer">
                        <div className="text-[18.667px] font-[600] leading-[28px] ">
                          View In Dribbble
                        </div>
                        <div>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                              stroke="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shadow-2xl rounded-[8px]">
                <div>
                  <img
                    className="h-[400px] rounded-[10.667px] bg-cover bg-no-repeat bg-center"
                    src="/portfolio3.png"
                    alt=""
                  />
                </div>
                <div className="py-[32px] px-[32px]">
                  <div>
                    <div className="text-[32px] font-[700] text-[#282938] leading-[44.8px] ">
                      Easy Rent
                    </div>
                    <div className="mt-[10.333px] text-[21.333px] text-[#1C1E53] font-[400] leading-[32px] ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </div>
                  </div>
                  <div className="mt-[32px]">
                    <div className="flex items-center justify-start gap-[16px] ">
                      <div className="flex items-center gap-[16px]  pb-[10.67px] border-b-[1.333px] border-b-[#5E3BEE] hover:cursor-pointer">
                        <div className="text-[18.667px] font-[600] leading-[28px] ">
                          View In Dribbble
                        </div>
                        <div>
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.00004 1.66675H17.3334V15.0001M17.3334 1.66675L1.33337 17.6667L17.3334 1.66675Z"
                              stroke="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
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

export default Portfolio;
