"use client"
import React, { useState } from "react";
interface AccordionProps {
  title: string; // Specify the type explicitly as string
  answer: string; // Assuming answer is also a string, change it accordingly if it's a different type
}

const Accordion = ( { title, answer } :AccordionProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 border-t border-black md:w-2/3 w-full  ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full text-black"
        style={{ fontSize: "20px" }} // Fixed font size for the button text
      >
        <span className="text-left font-omnes text-3xl font-extrabold ">{title}</span>
        <svg
          className="fill-current shrink-0 ml-4"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out font-omnesreg font-medium py-3 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        style={{ fontSize: "18px" }} // Fixed font size for the answer text
      >
        <div className="overflow-hidden ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
