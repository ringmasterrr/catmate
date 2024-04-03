import React from "react";
import FAQ from "./FAQ";
import Marqueee from "./marquee";
const Section5 = () => {
  return (
    <div
      className="flex md:flex-row flex-col items-center max-w-[100vw]"
      style={{
        backgroundImage: 'url("/sec5.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "80vh",
      }}
    >
      <div className=" md:w-1/2 w-full"></div>
      <div className="md:w-3/5 w-full">
        <FAQ />      
      </div>
    </div>
  );
};

export default Section5;
