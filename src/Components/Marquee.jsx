import React from "react";
import { motion } from "framer-motion";


const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed=".2" className="w-full  bg-[#004D43] py-20 rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-400 flex  whitespace-nowrap items-center">
        <div className="flex ">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration:10 }}
            className="font-grotesk text-[24vw] uppercase leading-none -mb-[4vw] -mt-[7vw] py-6 pr-20"
          >
            We are Ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration:10 }}
            className="font-grotesk text-[24vw] uppercase leading-none -mb-[4vw] -mt-[7vw] py-6 pr-20"
          >
            We are Ochi
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
