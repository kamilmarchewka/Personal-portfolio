import React from "react";
import Hamburger from "@/components/navigation/Hamburger";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-end items-center">
      {/* <div>PL</div>
      <div>Light</div> */}

      <Hamburger />

      <ul className="hidden">
        <li>
          <Link href="/">About me</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Education</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
