import React, { ReactNode } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function BtnLink({
  children,
  href = "/",
}: {
  children: ReactNode;
  href?: Url;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-block text-black text-xl font-semibold px-1 py-1"
    >
      {children}
      <span className="absolute right-0 bottom-0 block w-full h-1 bg-black transform origin-right scale-x-[0.3] transition-transform duration-150 ease-in group-hover:scale-x-100"></span>
    </Link>
  );
}
