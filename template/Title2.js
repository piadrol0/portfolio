import React from "react";
import MagicBento from "@/components/MagicBento";
function Title2() {
  return (
    <>
      <div className="w-full flex justify-center items-center text-white ">
        <div className="relative w-full py-10 flex justify-center items-center  bg-cover bg-center bg-black">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </>
  );
}

export default Title2;
