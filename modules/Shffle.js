import Shuffle from "@/components/Shuffle";
import React from "react";

function Shffle() {
  return (
    <>
      <Shuffle
        text="Example Project"
        className="pt-10"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
      />
    </>
  );
}

export default Shffle;
