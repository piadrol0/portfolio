import GooeyNav from "../components/GooeyNav";

import React from "react";

function Menu() {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Lab", href: "#" },
  ];
  return (
    <div>
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
}

export default Menu;
