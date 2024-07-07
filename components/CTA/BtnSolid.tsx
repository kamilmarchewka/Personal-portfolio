import React, { ReactNode } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function BtnSolid({
  children,
  href = "/",
}: {
  children: ReactNode;
  href?: Url;
}) {
  return (
    <Link
      href={href}
      className="inline-block text-white bg-red-400 text-base sm:text-xl font-semibold px-4 py-1 sm:px-5 sm:py-2 rounded-full transform transition-transform duration-75 hover:scale-105 hover:opacity-90"
    >
      {children}
    </Link>
  );
}
