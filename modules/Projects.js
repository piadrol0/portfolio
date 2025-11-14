import CardSwap, { Card } from "@/components/CardSwap";

import React from "react";

function Projects() {
  return (
    <>
      <div className="h-[300px] sm:h-[300px] md:h-[600px] xl:h-[500px] relative">
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={4000}
          pauseOnHover={false}
        >
          <Card className="flex flex-col items-start justify-start pt-3 pl-3">
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card className="flex flex-col items-start justify-start pt-3 pl-3">
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card className="flex flex-col items-start justify-start pt-3 pl-3">
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div>
    </>
  );
}

export default Projects;
