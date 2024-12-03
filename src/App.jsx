import React, { useEffect } from "react";
import { Nav } from "./Nav";
import { LandingPage } from "./LandingPage";
import { Marquee } from "./Marquee";
import { About } from "./About";
import { Eyes } from "./Eyes";
import { Features } from "./Features";
import { Cards } from "./Cards";
import { Footer } from "./Footer";
import LocomotiveScroll from "locomotive-scroll";
import { Ready } from "./Ready";
import { Testimonial } from "./Testimonial";
import { Curson } from "./Curson";
import './index.css'

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <div id="example" className="example font-neu h-screen w-full text-white locomotive-scroll-container">
      <Curson />
      <Nav />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Testimonial />
      {/* data-scroll-speed='-.1' data-scroll */}
      <div className="px-10 pt-20 pb-[30rem] bg-zinc-200 flex gap-5">
        <div className="w-1/2 rounded-xl">
          <Cards bg={"#004D43"} text={"2019 - 2024"} />
        </div>
        <div className="w-1/4 rounded-xl">
          <Cards bg={"#212121"} text={"RATING 5.0 ON CLUTCH"} />
        </div>
        <div className="w-1/4 rounded-xl">
          <Cards bg={"#212121"} text={"BUSINESS BOOTCAMP ALUMNI"} />
        </div>
      </div>
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
