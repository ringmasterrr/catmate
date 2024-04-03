import Image from "next/image";
import React from "react";
import Marqueee from "./marquee";

const MeowComponent = () => {
  return (
    <>
      <div
        className="meow flex py-6 flex-col justify-between items-center text-2xl text-center font-omnes"

        
      >
        <h2 className=" pt-8 text-2xl font-extrabold ">MEEOOWWW ME</h2>
        <div className="relative translate-y-1/4 flex justify-around w-full md:w-9/12 z-50 ">
          <div className="flex items-center">
            <Image
              src={"/m1.png"}
              alt="mew"
              width={500}
              height={500}
              className="z-20 md:w-36 w-24 md:h-40 h-24 rounded-xl"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={"/m2.png"}
              alt="mew"
              width={500}
              height={500}
              className="z-20 md:w-36 w-24 md:h-40 h-24 rounded-xl"
            />
          </div>
          <div className="flex items-center">
            <Image
              src={"/m3.png"}
              alt="mew"
              width={500}
              height={500}
              className="z-20 md:w-36 w-24 md:h-40 h-24 rounded-xl"
            />
          </div>
        </div>

        <div className="relative md:-translate-y-full max-w-[100vw]">
        <Marqueee/>
        </div>

        <button className="text-sm z-20  px-12 py-3 font-omnesreg bg-[#121212] text-white rounded-full inline-block">
          BUY$CATMATE
        </button>
        
      </div>
    </>
  );
};

export default MeowComponent;
