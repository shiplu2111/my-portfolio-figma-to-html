import React from "react";

const Form = () => {
  return (
    <div>
      <div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-6">
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-[8px] border-[1.333px] p-4  text-[21.667px] text-[#06040e] shadow-sm ring-1 ring-inset ring-[#5E3BEE] placeholder:text-[#5E3BEE] focus:ring-[2px] focus:ring-inset  sm:leading-6"
              />
            </div>
          </div>
          <div className=" col-span-6 md:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lst-name"
                id="last-name"
                autoComplete="given-name"
                className="block w-full rounded-[8px] border-[1.333px] p-4 text-[21.667px] text-[#06040e] shadow-sm ring-1 ring-inset ring-[#5E3BEE] placeholder:text-[#5E3BEE] focus:ring-[2px] focus:ring-inset  sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="email"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-name"
                className="block w-full rounded-[8px] border-[1.333px] p-4 text-[21.667px] text-[#06040e] shadow-sm ring-1 ring-inset ring-[#5E3BEE] placeholder:text-[#5E3BEE] focus:ring-[2px] focus:ring-inset  sm:leading-6"
              />
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <label
              htmlFor="phone"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              Phone number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="block w-full rounded-[8px] border-[1.333px] p-4 text-[21.667px] text-[#06040e] shadow-sm ring-1 ring-inset ring-[#5E3BEE] placeholder:text-[#5E3BEE] focus:ring-[2px] focus:ring-inset "
              />
            </div>
          </div>
          <div className="col-span-6 w-full block">
            <label
              htmlFor="phone"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              Choose a topic
            </label>
            <div className="mt-2">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-[8px] border-[1.333px] py-4 px-4 text-[#282938] 
                text-[21.333px] shadow-sm ring-1 ring-inset ring-[#5E3BEE] "
              >
                <option className="text-[21.333px]">Select one...</option>
                <option>Topic 1</option>
                <option>Topic 2</option>
                <option>Topic 3</option>
                <option>Topic 4</option>
              </select>
            </div>
          </div>

          <div className="col-span-6">
            <label
              htmlFor="phone"
              className="block text-[21.333px] font-[400] leading-8 text-[#282938]"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                className="block w-full rounded-[8px] border-[1.333px] py-4 px-4 min-h-[240px] text-[#282938] 
                text-[21.333px] shadow-sm ring-1 ring-inset ring-[#5E3BEE] "
              ></textarea>
            </div>
          </div>

          <div className="col-span-6">
            <div className="flex items-center gap-[10.67px]">
              <div>
                <input
                  type="checkbox"
                  className="h-[21.333px] w-[21.333px] rounded-[5.333px] border-[1.333px] border-[#282938]"
                />
              </div>
              <div className="text-[18.667px] font-[400] leading-7 font-[#282938]">
                I accept the terms
              </div>
            </div>
          </div>
          <div className="col-span-6 flex justify-center items-center">
            <button className="px-[42.67px] py-[18.667px] text-[21.333px] font-[400] leading-8 text-[#FFFFFF] bg-[#5E3BEE] rounded-[8px] hover:bg-white hover:text-[#5E3BEE] transection-all duration-500 hover:shadow-2xl hover:border-[.533px] hover:border-[#5E3BEE]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
