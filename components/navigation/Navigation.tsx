"use client";
import React, { useEffect, useRef, useState } from "react";
import Hamburger from "@/components/navigation/Hamburger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(true);

  const container = useRef(null);
  const tl = useRef<any>(null);

  useGSAP(
    () => {
      // Initial states
      gsap.set(container.current, { autoAlpha: 0 });

      tl.current = gsap.timeline({ paused: true });
      // Toggling menu animation
      tl.current.to(container.current, { autoAlpha: 1 });
    },
    { scope: container }
  );

  useEffect(() => {
    if (!tl.current.isActive())
      if (!navIsOpen) {
        // Opening nav
        tl.current.play();
      } else {
        tl.current.reverse();
      }
  }, [navIsOpen]);

  return (
    <nav className="fixed z-[999] top-0 left-0 w-full flex justify-end items-center">
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
        className="flex justify-start items-center pl-44 bg-black text-white absolute -z-[1] w-full h-screen left-0 top-0"
      >
        <ul className="flex flex-col gap-7 text-6xl ">
          <li>
            <Link className="nav-link" href="/">
              About me
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/">
              Education
            </Link>
          </li>
          <li>
            <Link className="nav-link" href="/">
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
