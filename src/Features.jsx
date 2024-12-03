import { motion } from "framer-motion";
import React, { useState } from "react";

export const Features = () => {
  const [isHovering, setHovering] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);
  // const [Zindex, setZindex] = useState(fasle)

  return (
    <div className="w-full min-h-screen bg-zinc-700">
      <div className="p-10 border-b-[1px] border-zinc-600 mb-10">
        <div className="">
          <h1 className="text-6xl font-neu text-md font-medium ">
            Featured projects
          </h1>
        </div>
      </div>
      <div className="flex cards items-center px-10 gap-10">
        <div className="headings absolute bg-red-500">
          <h1></h1>
        </div>
        <div
          onMouseLeave={() => setHovering((prev) => !prev)}
          onMouseEnter={() => setHovering((prev) => !prev)}
          className={`w-1/2  hover:scale-95 duration-300 ease-in transition-all cardcontainer relative h-[45rem] bg-gray-300   rounded-xl mt-10 ${
            isHovering ? "z-[999]" : "z-0"
          } `}
        >
          <h1 className="absolute flex overflow-hidden text-6xl font-neu text-[#cdea68] z-[9] -translate-y-1/2 top-1/2 left-full -translate-x-1/2">
            {"Cardboard Spaceship".split("").map((val, ind) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: ind * 0.1 }}
                key={ind}
                className="text-[8rem] tracking-wide uppercase font-bold z-[999]"
              >
                {val}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full bg-slate-500 rounded-xl overflow-hidden">
            <img
              className="object-cover  hover:scale-110 duration-500  transition-all ease-in w-full h-full"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
            />
          </div>
        </div>
        <div
          onMouseLeave={() => setHovering2((prev) => !prev)}
          onMouseEnter={() => setHovering2((prev) => !prev)}
          className={`w-1/2 hover:scale-95 duration-300 ease-in transition-all cardcontainer relative h-[45rem] bg-gray-300   rounded-xl mt-10 ${
            isHovering2 ? "z-[999]" : "z-0"
          } `}
        >
          <h1 className="absolute flex overflow-hidden text-6xl font-neu text-[#cdea68] z-[9] -translate-y-1/2 top-1/2 right-full translate-x-1/2">
            {"AH2 & Matt Horn".split("").map((val, ind) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering2 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: ind * 0.1 }}
                key={ind}
                className="text-[8rem] font-bold uppercase"
              >
                {val}
              </motion.span>
            ))}
          </h1>

          <div className="w-full h-full bg-slate-500 rounded-xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
            />
          </div>
        </div>
      </div>
      <div className="flex cards items-center px-10 gap-10">
        <div className="headings absolute bg-red-500">
          <h1></h1>
        </div>
        <div
          onMouseLeave={() => setHovering3((prev) => !prev)}
          onMouseEnter={() => setHovering3((prev) => !prev)}
          className={`w-1/2  hover:scale-95 duration-300 ease-in transition-all cardcontainer relative h-[45rem] bg-gray-300   rounded-xl mt-10 ${
            isHovering3 ? "z-[999]" : "z-0"
          } `}
        >
          <h1 className="absolute flex overflow-hidden text-6xl font-neu text-[#cdea68] z-[9] -translate-y-1/2 top-1/2 left-full -translate-x-1/2">
            {"FYDE".split("").map((val, ind) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering3 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: ind * 0.1 }}
                key={ind}
                className="text-[8rem] tracking-wide uppercase font-bold z-[999]"
              >
                {val}
              </motion.span>
            ))}
          </h1>
          <div className="w-full h-full bg-slate-500 rounded-xl overflow-hidden">
            <img
              className="object-cover  hover:scale-110 duration-500  transition-all ease-in w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            />
          </div>
        </div>
        <div
          onMouseLeave={() => setHovering4((prev) => !prev)}
          onMouseEnter={() => setHovering4((prev) => !prev)}
          className={`w-1/2 hover:scale-95 duration-300 ease-in transition-all cardcontainer relative h-[45rem] bg-gray-300   rounded-xl mt-10 ${
            isHovering4 ? "z-[999]" : "z-0"
          } `}
        >
          <h1 className="absolute flex overflow-hidden text-6xl font-neu text-[#cdea68] z-[9] -translate-y-1/2 top-1/2 right-full translate-x-1/2">
            {"VISE".split("").map((val, ind) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={isHovering4 ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: ind * 0.1 }}
                key={ind}
                className="text-[8rem] font-bold uppercase"
              >
                {val}
              </motion.span>
            ))}
          </h1>

          <div className="w-full h-full bg-slate-500 rounded-xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-24 py-10">
        <button className="text-center px-16 py-7 rounded-full text-white bg-black font-neu text-2xl hover:bg-zinc-900 duration-200 transition-all ease-in">
          View all projects
        </button>
      </div>
    </div>
  );
};
