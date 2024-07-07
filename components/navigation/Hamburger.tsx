import React, { useState } from "react";

export default function Hamburger({
  isClicked,
  clickHandler,
}: {
  isClicked: boolean;
  clickHandler: ([any]: any) => any;
}) {
  return (
    <button
      onClick={clickHandler}
      className={`flex flex-col justify-center items-center gap-[3px] w-9 aspect-square rounded-full transition-colors md:w-14 md:gap-1 ${
        isClicked ? "bg-black" : "bg-black"
      }`}
    >
      <span
        className={`block h-[3px] w-5 rounded-full bg-white transform md:w-7 md:h-1 ${
          isClicked
            ? "animate-[open-menu-upper-line-forward_.25s_ease-in-out_forwards]"
            : "animate-[open-menu-upper-line-backward_.25s_ease-in-out]"
        }`}
      ></span>
      <span
        className={`block h-[3px] w-5 rounded-full bg-white transition-opacity md:w-7 md:h-1 ${
          isClicked ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-[3px] w-5  rounded-full bg-white duration-[175ms] md:w-7 md:h-1 ${
          isClicked
            ? "animate-[open-menu-lower-line-forward_.25s_ease-in-out_forwards]"
            : "animate-[open-menu-lower-line-backward_.25s_ease-in-out]"
        }`}
      ></span>
    </button>
  );
}
