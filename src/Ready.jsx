import React from "react";
import { Eyes } from "./Eyes";
import { Eyes_Comp } from "./Eyes_Comp";

export const Ready = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.001"
      className="flex h-screen flex-col z-0 items-center justify-center bg-[#CDEA68]"
    >
      <h1 className="text-[12rem] tracking-tighter  font-neu leading-none font-bold w-[] text-[#212121] text-center uppercase">
        Ready
      </h1>
      <h1 className="text-[12rem] tracking-tighter  font-neu leading-none font-bold w-[] text-[#212121] text-center uppercase">
        to start
      </h1>
      <h1 className="text-[12rem] tracking-tighter  font-neu leading-none font-bold w-[] text-[#212121] text-center uppercase">
        the project?
      </h1>
      <div className="flex relative flex-col justify-center items-center gap-10 mt-10">
        <button className="px-14 py-7 bg-zinc-900 rounded-full text-2xl font-extralight">
          Start the project
        </button>
        <p className="text-black text-2xl">OR</p>

        <button className="px-14 py-7 bg-zinc-900 rounded-full text-2xl font-extralight">
          HELLO@OCHIDESIGN
        </button>
        <div className="absolute  -translate-y-[50%] top-1/3 left-1/2 -translate-x-[50%]">
          <Eyes_Comp />
        </div>
      </div>
    </div>
  );
};
