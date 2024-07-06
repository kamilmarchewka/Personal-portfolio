import React, { ReactNode } from "react";

export default function BtnSolid({ children }: { children: ReactNode }) {
  return (
    <button className="block text-white bg-red-400 text-xl font-semibold px-5 py-2 rounded-full transform transition-transform duration-75 hover:scale-105 hover:opacity-90">
      {children}
    </button>
  );
}
