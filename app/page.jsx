import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="hero" className="h-screen">
        <Hero />
      </section>
      <section id="skills" className="min-h-screen text-white">
        <About />
      </section>
      <section id="experience" className="min-h-screen text-white">
        <Experience />
      </section>
      <section id="projects" className="min-h-screen text-white">
        <Projects />
      </section>
    </main>
  );
}
