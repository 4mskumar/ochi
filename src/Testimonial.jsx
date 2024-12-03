import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Data from "./Data";

export const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Create an array of refs, one for each testimonial
  const refs = useRef([]);

  // Handle toggling the active state and animation
  const handleToggle = (key) => {
    if (activeIndex === key) {
      // If the same section is clicked, collapse it
      gsap.to(refs.current[key], { height: 0, opacity: 0, duration: 0.5 });
      setActiveIndex(null);
    } else {
      // Expand the clicked section
      if (activeIndex !== null && refs.current[activeIndex]) {
        gsap.to(refs.current[activeIndex], { height: 0, opacity: 0, duration: 0.5 });
      }
      setActiveIndex(key);
      gsap.fromTo(
        refs.current[key],
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  };

  return (
    <div className="w-full bg-zinc-900 text-white py-[20rem]">
      <h1 className="text-6xl font-neu pl-10 mb-10">Client's review</h1>
      <div className="flex flex-col">
        {Data.map((val, key) => (
          <div key={key} className="flex px-20 py-8 border-t-[1px] border-b-[1px] border-zinc-700">
            {/* Company Name */}
            <h2 className="w-1/3 underline font-neu text-4xl text-white">{val.company}</h2>

            {/* Services */}
            <div className="w-1/3 text-white">
            <p className="mb-5 font-neu text-4xl">Services</p>
              {/* {val.services.map((v, k) => (
                <div ref={(el)  => refs.current[key]} key={k} className="w-1/3 flex justify-center border-[1px] border-white rounded-full px-3 py-1 text-sm  text-white">
                  {v}
                </div>
              ))} */}
            </div>

            {/* Client Feedback */}
            <div className="flex flex-col relative">
              <p
                onClick={() => handleToggle(key)}
                className={`cursor-pointer underline text-4xl ${
                  activeIndex === key ? "text-gray-500" : "text-white"
                }`}
              >
                Read
              </p>
              {/* Feedback section with animation */}
              <div
                ref={(el) => (refs.current[key] = el)}
                className="w-[35rem] overflow-hidden opacity-0 top-10 text-white mt-10 rounded shadow-lg"
                style={{ height: 0 }}
              >
                <p className="text-2xl ">Name: {val.client.name}</p>
                <p className="italic mt-8">Feedback: {val.client.feedback}</p>
                <p className="text-xl mt-10 font-medium">Rating: {val.client.rating} / 5</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
