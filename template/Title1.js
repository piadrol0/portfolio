"use client";
import React from "react";
import LiquidEther from "@/components/LiquidEther";
import Image from "next/image";
import Menu from "../modules/Menu";
function Title1() {
  return (
    <>
      <div className="w-full sm:h-[850px] h-[350px] md:h-[500px] lg:h-[750px] xl:h-[850px] relative">
        <div className="flex-col justify-around md:h-[500px] lg:h-[850px] sm:h-[350px] h-[350px] items-end bg-black">
          <LiquidEther
            className="absolute inset-0 z-5"
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            mouseForce={40}
            cursorSize={40}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
          <div className="w-full mt-5  md:h-[500px] lg:h-[700px] xl:h-[800px] sm:h-[350px] h-[350px] sm:bg-[url(/header.png)] bg-[url(/title.jpg)] bg-cover flex justify-around items-center absolute top-0 z-0 ">
            <div className="flex justify-center items-center gap-7 sm:w-[50%] w-[80%] ">
              <div className="flex flex-col sm:items-start items-center md:w-[75%] lg:w-[60%] sm:w-[80%] lg:gap-7 md:gap-3 sm:gap-2 w-[90%] gap-3 ">
                <h2 className="text-white font-bold xl:text-8xl md:text-5xl lg:text-6xl sm:text-4xl mt-10 text-5xl ">
                  NEXT GEN
                </h2>
                <h3 className="xl:text-6xl md:text-4xl sm:text-2xl text-3xl bg-linear-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent font-semibold">
                  VIRTUAL REALITY
                </h3>
                <p className="text-neutral-500 text-justify xl:text-xl md:text-sm sm:text-xs lg:text-xl w-[90%] text-[8px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  iure, eaque ducimus quidem aliquid minus iste, in architecto
                  harum, amet neque nobis numquam officia? Vero facere deleniti
                  minus quis voluptas.
                </p>
                <button
                  className="z-999! bg-linear-to-r from-blue-700 via-purple-700 to-pink-700
                     md:w-[120px] w-[60px] p-1 sm:w-[90px] sm:text-sm md:text-xl text-[8px] sm:p-1 text-white md:p-2.5 sm:mt-2 mt-2 rounded-xl cursor-pointer mr-auto xl:mt-10 md:mt-5 lg:mt-7 hover:scale-105 duration-300 mx-auto sm:mx-0"
                >
                  See More
                </button>
              </div>
            </div>

            <div className="w-[50%] sm:flex justify-center items-center! hidden ">
              <Image
                width={1000}
                height={1000}
                src="/pic3.jpg"
                alt="vr exprience"
                className="xl:w-[400px]! lg:w-[250px] md:w-[180px] sm:w-[100px] w-20 shadow-2xl mx-auto sm:rounded-full  "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title1;
