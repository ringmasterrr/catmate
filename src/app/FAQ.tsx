import React from "react";
import Accordion from "./accordian";

const FAQ = () => {
  return (
    <div className=" ml-8 rounded-lg mt-52 md:mt-0">
      <h3 className="pb-6">FAQ</h3>
      <Accordion
        title="WHO IS CATMATE?"
        answer="$CATMATE is a cat who likes chess!"
      />
      <Accordion
        title="WHAT CHAIN IS $CATMATE ON?"
        answer="$CATMATE IS ON SOLANA"
      />
      
      <Accordion
      title="HOW CAN I BUY $CATMATE?" 
      answer="Make sure you download the Phantom Wallet app or browser extension for you phone. Simply purchase $CATMATE using SOL through a DEX like Raydium. MEOW! " />
    </div>
  );
};

export default FAQ;
