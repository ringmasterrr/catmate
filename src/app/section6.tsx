import React from "react";
import Image from "next/image";

const Section6 = () => {
  return (
    <div>
      <div
        className="flex items-center justify-center"
        style={{
          backgroundImage: 'url("/sec6.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="flex flex-col items-center justify-center mt-12 mx-4 md:mx-0">
          <h1 className="text-3xl text-black mb-4 font-omnes ">
            JOIN OUR SOCIALS
          </h1>
          <div className="flex items-center mb-4 flex-wrap justify-center">
            <a href="link1" className="m-2">
              <Image src={"/tel.png"} alt='mew' width={80} height={80} className='z-20 rounded-xl'/>
            </a>
            <a href="link2" className="m-2">
              <Image src={"/twi.png"} alt='mew' width={80} height={80} className='z-20 rounded-xl'/>
            </a>
          </div>
          <button className="text-sm z-20 mt-4 py-2 px-8 md:px-20 font-omnesreg bg-[#121212] text-white rounded-full inline-block ">BUY$CATMATE</button>
          <Image src={"/logo.png"} alt='mew' width={150} height={150} className='z-20 w-32 rounded-xl mt-4'/>
        </div>
      </div>
    </div>
  );
};

export default Section6;
