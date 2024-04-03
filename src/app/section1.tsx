import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/background.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col justify-between w-screen"
      >
        <div>
          <div className="flex justify-between items-center p-6">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-28"
            />
            <Link href="https://twitter.com">
              <Image
                src={"/x.svg"}
                alt="Twitter Icon"
                width={50}
                height={50}
                className="w-4"
              />
            </Link>
          </div>
        </div>
      <div className="flex flex-col md:flex-row w-full md:py-0 py-24">
          <div className="md:w-1/2"></div>

          <div className="p-4 md:p-14 mr-4 md:mr-40 mb-10">
            <h1 className="text-4xl text-center font-omnes mb-2 md:mb-10 md:pb-0 pb-32 ">
              HI, MY NAME IS <br /> CAT MATE
            </h1>
            <h3 className="text-xl font-bold text-center font-omnesreg">
              I like chess and beating everyone <br /> in the Solana Ecosystem
            </h3>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Section1;
