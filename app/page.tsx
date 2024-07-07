import BtnLink from "@/components/CTA/BtnLink";
import BtnSolid from "@/components/CTA/BtnSolid";
import Image from "next/image";

export default function Home() {
  const name = "Kamil";
  const surname = "Marchewka";

  return (
    <main className="px-2 max-w-7xl mx-auto sm:px-10 md:px-16">
      <header className="min-h-screen flex flex-col items-center sm:items-start gap-16 pt-20">
        <h1 className="text-3xl uppercase -tracking-wide sm:text-5xl sm:text-7xl lg:text-9xl">
          <div className="flex justify-center sm:justify-start">
            {name.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
          <div className="flex justify-center sm:justify-start">
            {surname.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
        </h1>
        {/* CTA */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
          <BtnLink>See my work</BtnLink>
          <BtnSolid>Get in touch!</BtnSolid>
        </div>
      </header>
    </main>
  );
}
