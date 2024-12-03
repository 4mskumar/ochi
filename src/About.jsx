import React from "react";

export const About = () => {
  return (
    <div className="bg-[#cdea68] w-full min-h-screen px-5 md:px-20">
      <div>
        <p className="text-2xl md:text-[4rem] border-b-[1px] border-[#849641] py-10 md:py-16 text-gray-900 font-neu leading-tight md:leading-none tracking-tighter">
          Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </p>
      </div>
      <div className="mt-5 md:mt-10 border-b-[1px] pb-10 md:pb-[8rem] border-[#849641] flex flex-col md:flex-row items-start md:items-center justify-around text-gray-900">
        <p className="text-lg md:text-xl font-neu text-gray-800">
          What you can expect:
        </p>
        <p className="mt-5 md:mt-0 w-full md:w-1/3 text-lg md:text-xl font-neu text-gray-800">
          We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
          <br />
          <br />
          We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
        </p>
      </div>
      <div className="flex flex-col md:flex-row py-10 items-center md:items-start">
        <div className="mt-5 w-full md:w-1/2">
          <p className="text-3xl md:text-6xl text-gray-900">Our approach:</p>
          <button
            className="bg-black hover:scale-105 transition-all ease-in duration-200 mt-6 px-6 md:px-10 py-3 md:py-5 rounded-full text-sm md:text-lg"
          >
            Read more
          </button>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full md:w-[47%] mt-10 md:mt-0 rounded-xl h-60 md:h-[35rem]"
        ></div>
      </div>
    </div>
  );
};
