import React, { useEffect, useState } from "react";

export const Eyes_Comp = () => {
  const [leftEyeRotate, setLeftEyeRotate] = useState(0);
  const [rightEyeRotate, setRightEyeRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Get the center position of each eye
      const leftEye = document.getElementById("left-eye");
      const rightEye = document.getElementById("right-eye");

      if (leftEye && rightEye) {
        const leftEyeRect = leftEye.getBoundingClientRect();
        const rightEyeRect = rightEye.getBoundingClientRect();

        const leftEyeCenter = {
          x: leftEyeRect.left + leftEyeRect.width / 2,
          y: leftEyeRect.top + leftEyeRect.height / 2,
        };

        const rightEyeCenter = {
          x: rightEyeRect.left + rightEyeRect.width / 2,
          y: rightEyeRect.top + rightEyeRect.height / 2,
        };

        // Calculate angles for each eye
        const leftAngle =
          Math.atan2(mouseY - leftEyeCenter.y, mouseX - leftEyeCenter.x) *
          (180 / Math.PI);
        const rightAngle =
          Math.atan2(mouseY - rightEyeCenter.y, mouseX - rightEyeCenter.x) *
          (180 / Math.PI);

        setLeftEyeRotate(leftAngle );
        setRightEyeRotate(rightAngle );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);  
    return () => {      
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
    data-scroll
    data-scroll-speed='0.4'

    >
      <div className="w-full z-[999] eyes h-screen ">
        <div
          data-scroll
          data-scroll-speed="-0.1"
          className='bg-cover bg-red-400 h-full w-full bg-center relative'
        >
          <div className="absolute flex items-center justify-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            {/* Left Eye */}
            <div
              id="left-eye"
              className="w-[20rem] h-[20rem] bg-zinc-100 justify-center items-center flex rounded-full"
            >
              <div className="w-[13rem] relative h-[13rem] bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${leftEyeRotate}deg)`,
                  }}
                  className="line w-full h-10 absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]"
                >
                  <div className="w-[2rem] h-[2rem] bg-zinc-100 justify-center items-center flex rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div
              id="right-eye"
              className="w-[20rem] h-[20rem] bg-zinc-100 justify-center items-center flex rounded-full"
            >
              <div className="w-[13rem] relative h-[13rem] bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rightEyeRotate}deg)`,
                  }}
                  className="line w-full h-10 absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%]"
                >
                  <div className="w-[2rem] h-[2rem] bg-zinc-100 justify-center items-center flex rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
