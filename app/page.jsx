import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
