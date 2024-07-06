import BtnSolid from "@/components/CTA/BtnSolid";
import Image from "next/image";

export default function Home() {
  const name = "Kamil";
  const surname = "Marchewka";

  return (
    <main className="px-2 max-w-7xl mx-auto sm:px-10 md:px-16">
      <header className="min-h-screen">
        <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-9xl">
          <div>
            {name.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
          <div>
            {surname.split("").map((letter) => (
              <span>{letter}</span>
            ))}
          </div>
        </h1>
        {/* CTA */}
        <div>
          <BtnSolid>Get in touch!</BtnSolid>
        </div>
      </header>
    </main>
  );
}
