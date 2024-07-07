"use client";
import React, { useState } from "react";
import Hamburger from "@/components/navigation/Hamburger";
import Link from "next/link";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(true);

  return (
    <nav className="fixed z-[999] top-0 left-0 w-full flex justify-end items-center">
      {/* <div>PL</div>
      <div>Light</div> */}

      <Hamburger isClicked={navIsOpen} />

      <div className="flex justify-start items-center pl-44 bg-black text-white absolute -z-[1] w-full h-screen left-0 top-0">
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
