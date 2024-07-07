import React, { useState } from "react";

export default function Hamburger({ isClicked }: { isClicked: boolean }) {
  return (
    <button
      className={`flex flex-col justify-center items-center gap-1 w-14 aspect-square rounded-full transition-colors ${
        isClicked ? "bg-black" : "bg-black"
      }`}
    >
      <span
        className={`block h-1 w-8 rounded-full bg-white transform ${
          isClicked
            ? "animate-[open-menu-upper-line-forward_.25s_ease-in-out_forwards]"
            : "animate-[open-menu-upper-line-backward_.25s_ease-in-out]"
        }`}
      ></span>
      <span
        className={`block h-1 w-8 rounded-full bg-white transition-opacity ${
          isClicked ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`block h-1 w-8 rounded-full bg-white duration-[175ms] ${
          isClicked
            ? "animate-[open-menu-lower-line-forward_.25s_ease-in-out_forwards]"
            : "animate-[open-menu-lower-line-backward_.25s_ease-in-out]"
        }`}
      ></span>
    </button>
  );
}
