"use client"
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });

      // Remove aria-hidden from original items to avoid duplicate accessibility issues
      scrollerContent.forEach((item) => {
        item.removeAttribute("aria-hidden");
      });

      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", "true");
    });
  }

  return (
    <div className=" scroller" data-speed="fast" ref={scrollerRef} >
      <ul className="tag-list scroller__inner text-4xl">
        
        <li>MEOWWW</li>
        
        <li>MEOWWW</li>

        <li>MEOWWW</li>
        
      </ul>
    </div>
  );
};

export default MarqueeComponent;
