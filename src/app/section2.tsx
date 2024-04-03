import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <>
      <div>

        <div className="flex flex-col md:flex-row">
            
        <div className="md:w-1/2 w-full bg-[#121212] text-white items-center  p-12 md:py-16 md:justify-end justify-center flex flex-row ">
          <div className=" md:w-10/12  w-full flex flex-col items-end justify-end ">
            

            <div className="w-full md:w-3/4 text-lg font-medium md:text-sm">
            <h1 className="text-5xl text-white mb-10 md:mb-8 font-omnes md:text-left">
              BUY ME PSTST
            </h1>
              <p className="mb-4 font-omnesreg">
                <span className="font-bold">Install a Solana Wallet:</span>{" "}
                Choose a wallet like Phantom, download, and follow the setup
                instructions. Ensure your wallet is secure and back up your seed
                phrase for recovery purposes.
              </p>
              <p className="mb-4 font-omnesreg">
                <span className="font-bold">Fund Your Wallet with SOL:</span>{" "}
                Acquire SOL from a cryptocurrency exchange and deposit it into
                your Solana wallet. This will be used for purchasing Cat Mate
                Coin and covering transaction fees.
              </p>
              <p className="mb-4 font-omnesreg">
                <span className="font-bold">Buy $CATMATE:</span> Go to a
                Solana-compatible DEX such as Raydium, and paste $CATMATE
                contract address tp swap SOL for $CATMATE.
              </p>
              <p className="font-omnesreg">
                <span className="font-bold">
                  Add Cat Mate Coin to Your Wallet:
                </span>{" "}
                To track your Cat Mate Coin, add its token address to your
                wallet. Your new balance of Cat Mate Coin should now be visible.
              </p>
            </div>
          </div>
        </div>

      <div className=" relative md:w-1/2 w-full hidden md:block"  >
          <Image
            src={"/sec2.png"} // Replace 'your-image.png' with the actual path to your image
            alt="Your Image"            
            fill={true}
            objectFit="cover"
          />
          </div>

          <div className="md:w-1/2 w-full block md:hidden"  >
          <Image
            src={"/sec2.png"} // Replace 'your-image.png' with the actual path to your image
            alt="Your Image"
            width={1000}
            height={1000}   
          />
          </div>



        </div>
      </div>
    </>
  );
};

export default Section2;
