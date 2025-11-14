
import React from "react";

function Title3() {
  return (
    <>
      <div className="w-full bg-black py-5 flex flex-col justify-center items-center">
        <div className="flex w-full flex-col gap-3 p-5 rounded-lg max-w-4xl md:flex-row justify-center items-center">
          <div
            className="flex items-start justify-center w-[60%]"
            style={{ fontFamily: "sans-serif" }}
          >
            <img src="/arrow.png" className="w-8" alt="" />
            <p className="text-gray-300 text-[8px] mt-3">
              Hello! I Am {""}
              <span className="bg-linear-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent text-[8px]">
                Arya Babaei
              </span>
            </p>
          </div>
          <div className="flex flex-row gap-5 justify-center w-[80%] items-center">
            <img src="/Me.png" className="w-[100px] h-[100px]" alt="" />
            <div className="flex flex-col  gap-3 ">
              <div className="text-white flex-wrap flex  gap-1 text-[13px]">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[8px] text-white ">A Designer Who</span>
                  <span className="text-[16px] text-white ">
                    Judges a book{" "}
                  </span>
                  <div className="flex gap-2">
                    <span className="text-[16px] text-white ">by its </span>

                    <span className=" text-[18px] h-[25px] flex px-3 pb-1 items-center bg-no-repeat bg-contain bg-[url(/Ellipse5.png)] text-purple-900 ">
                      cover
                    </span>
                  </div>
                  <span className="text-[4px]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium facilis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Title3;
