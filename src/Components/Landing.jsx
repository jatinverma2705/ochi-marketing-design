import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="landing w-full h-screen  bg-zinc-900 ">
      <div className="textstructure pt-36 px-12">
        <div className="masker">
          {["We Create", "Eye-Opening", "Presentations"].map((item, index) => (
            <div
              key={index}
              className="flex items-end gap w-fit leading-none overflow-hidden"
            >
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration:1.4 }}
                  className="w-[120px] h-[87px] bg-red-600 leading-none rounded-sm relative bottom-[3px] overflow-hidden bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover mr-2"
                ></motion.div>
              )}
              <h1 className="uppercase font-grotesk text-[8rem] leading-[.80em]  tracking-normal">
                {item}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t-[0.1px]  border-zinc-700 mt-20 py-5 px-12 flex justify-between items-center">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="font-montreal capitalize text-md leading-none">
              {item}
            </p>
          );
        })}

        <div className="flex items-center space-around gap-2">
          <button className="hover:bg-white hover:text-zinc-900 transition font-montreal  border py-1 px-4 border-zinc-700  rounded-2xl text-sm">
            START THE PROJECT
          </button>
          <span className="border border-zinc-700  p-[8px] rounded-full rotate-[45deg] hover:bg-white hover:text-zinc-900 hover:transition">
            {" "}
            <FaArrowUpLong size={"1em"} className="" />{" "}
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="w-8 h-8  flex justify-center items-center rounded-full animate-bounce absolute left-1/2">
          <span className=" ">
            <FaAnglesDown size={"1.5em"} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
