"use client";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "@/components/navigation/Hamburger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const container = useRef(null);
  const tl = useRef<any>(null);

  useGSAP(
    () => {
      // Initial states
      gsap.set(container.current, { autoAlpha: 0 });
      gsap.set(".nav-link", { translateY: "100%" });

      tl.current = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
        paused: true,
      });
      // Toggling menu animation
      tl.current.to(container.current, { autoAlpha: 1, duration: 0.35 }).to(
        ".nav-link",
        {
          translateY: "0%",
          stagger: 0.07,
          duration: 0.7,
        },
        "<"
      );
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current.isActive())
      if (navIsOpen) {
        // Opening nav
        tl.current.play();
      } else {
        tl.current.reverse();
      }
  }, [navIsOpen]);

  return (
    <nav className="fixed z-[999] top-0 left-0 w-full flex justify-end items-center px-2 py-1 sm:px-5 sm:py-3">
      {/* <div>PL</div>
      <div>Light</div> */}

      <Hamburger
        clickHandler={() => {
          if (tl.current.isActive()) return;
          setNavIsOpen((prev) => !prev);
        }}
        isClicked={navIsOpen}
      />

      <div
        ref={container}
        className="flex justify-start items-center pl-7 bg-black text-white absolute -z-[1] w-full h-screen left-0 top-0"
      >
        <ul className="flex flex-col gap-3 text-2xl sm:text-5xl sm:gap-5 md:text-7xl lg:text-8xl lg:gap-7">
          <li className=" overflow-hidden">
            <Link className="nav-link block" href="/">
              About me
            </Link>
          </li>
          <li className=" overflow-hidden">
            <Link className="nav-link block" href="/">
              Projects
            </Link>
          </li>
          <li className=" overflow-hidden">
            <Link className="nav-link block" href="/">
              Education
            </Link>
          </li>
          <li className=" overflow-hidden">
            <Link className="nav-link block" href="/">
              Contact
            </Link>
          </li>
        </ul>

        {/* socials */}
        {/* <div>Socials</div> */}
      </div>
    </nav>
  );
}
