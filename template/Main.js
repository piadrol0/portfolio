"use client";
import React, { useEffect, useState } from "react";
import Title2 from "./Title2";
import Title1 from "./Title1";
import Title3 from "./Title3";
import Title4 from "./Title4";

function Main() {
  return (
    <>
      <Title1 />
      <div className="block md:hidden">
        <Title3 />
      </div>


      <Title4 />
      <div className="hidden md:block">
        <Title2 />
      </div>
    </>
  );
}

export default Main;
