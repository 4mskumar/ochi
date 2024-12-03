import { motion } from "framer-motion";
import React from "react";

export const LandingPage = () => {
  // motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed = '-.3' className="w-full h-screen  bg-zinc-900 pt-1">
      <div className="mt-52  textstructure">
        {["We Create", "Eye-Opening", "Presentations"].map((val, ind) => (
          <div className="masker">
            <div className="overflow-hidden flex items-end w-fit">
              {ind === 1 ? <motion.div initial={{width:0}} animate={{width:'8vw'}} transition={{ease: [0.76,0,0.24,1], duration: 1}}  className="w-[8vw] bg-[url('./assets/image1.jpg')] bg-cover bg-center  rounded-md h-[4.7vw] relative -mr-20 ml-20"></motion.div> : ''}
              <h1 className={`${ind === 1 ? 'px-0 py-0' : ''} uppercase  px-20 text-8xl tracking-tighter leading-[4.5vw] font-founder font-semibold text-white`}>
                {val}
              </h1>
            </div>
          </div>
        ))}
        <div className="border-t-[1px] flex justify-between items-center px-10 border-zinc-700 mt-56">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
            "START THE PROJECT",
          ].map((val, ind) => (
            <p
              className={`mt-
                10 text-md ${
                ind === 2
                  ? "border-[1px] rounded-full px-7 py-4 border-zinc-700"
                  : ""
              } mt-3 px-10 font-neu font-light `}
            >
              {val}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};