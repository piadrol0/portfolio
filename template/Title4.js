import React from "react";
import TrueFocus from "@/components/TrueFocus";
import { Facebook, Home } from "@mui/icons-material";
import Projects from "@/modules/Projects";
import Shffle from "@/modules/Shffle";
function Title4() {
  return (
    <div className="bg-black flex flex-col w-full justify-center">
      <div className="py-5 pt-15 gap-1 ps-5 w-[90%] flex flex-col mx-auto text-white bg-black items-start lg:items-center justify-center">
        <TrueFocus
          sentence="I'm a Software Engineer"
          manualMode={false}
          blurAmount={3}
          borderColor="blue"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
        <h4 className="text-[10px] sm:text-[16px] lg:text-[24px] mx-auto mt-5">
          Currently, I'm a Software Engineer at <Home fontSize=""/>{" "}
          Home (LOL)
        </h4>
        <p className="text-[10px]  sm:text-[10px] sm:w-[70%] lg:text-[16px] lg:w-[50%] w-[90%] mt-8 mx-auto">
          A self-taught FrontEnd Developer, functioning in the industry for 2+ years
          now. I make meaningful and delightful digital products that create an
          equilibrium between user needs and business goals.
        </p>
        <div className="mt-10">
          <img src="/skills.png" alt="" />
        </div>
      </div>
      <h2 className="text-white bg-black mx-auto w-[80%] flex justify-center mt-5 text-xl sm:text-2xl md:text-3xl ">
        <Shffle/>
      </h2>
      <div className=" overflow-hidden w-[80%] mx-auto text-white flex justify-center md:justify-end md:w-[60%]  mb-5 ">
        <Projects />
      </div>
    </div>
  );
}

export default Title4;
