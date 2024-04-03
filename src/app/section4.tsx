import React from "react";

const Section4 = () => {
  return (
    <div className=" points flex items-center justify-center">
      <div className=" text-lg md:text-sm flex text-start items-start flex-col md:py-28 p-10  md:ml-40 mt-10">
        <h1 className="text-4xl text-start  text-[#6E88DA] mb-5 font-omnes ">
          $CATMATE TOKENOMICS
        </h1>
        <p className="mb-3 text-start font-omnesreg font-bold">
          Total Supply 1 billion
        </p>
        <p className="mb-3 text-start font-omnesreg font-semibold">
          50% Tokens to Liquidity Pool
        </p>
        <p className="mb-3 text-start font-omnesreg font-semibold">
          35% Tokens to Presale Contributors
        </p>
        <p className=" mb-3 text-start font-omnesreg font-semibold">
          5% Tokens for CEX
        </p>
        <p className="mb-3 font-omnesreg font-semibold">
          5% Tokens for Marketing
        </p>
        <p className="mb-3 text-start font-omnesreg font-semibold">
          5% Tokens for Team and Advisors
        </p>
      </div>
    </div>
  );
};

export default Section4;
