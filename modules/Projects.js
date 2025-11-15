import CardSwap, { Card } from "@/components/CardSwap";

import React from "react";

function Projects() {
  return (
    <>
      <div className="h-[200px] sm:h-[300px] md:h-[600px] xl:h-[500px] relative mb-10">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={false}
        >
          <Card className="flex flex-col items-start justify-start ">
            <img src="/img2.png" alt="" className="rounded-2xl" />
          </Card>
          <Card className="flex flex-col items-start justify-start ">
            <img src="/img1.png" alt="" className="rounded-2xl" />
          </Card>
          <Card className="flex flex-col items-start justify-start  ">
            <img src="/img3.png" alt="" className="rounded-2xl" />
          </Card>
        </CardSwap>
      </div>
    </>
  );
}

export default Projects;
