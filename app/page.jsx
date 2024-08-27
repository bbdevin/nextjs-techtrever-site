import About from "@/components/About";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero" className="h-screen">
        <Hero />
      </section>
      <section id="about" className="min-h-screen bg-gray-900 text-white">
        <About />
      </section>
    </main>
  );
}
