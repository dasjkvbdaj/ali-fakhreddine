import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { SEO } from "@/components/portfolio/SEO";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <SEO />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </div>
);

export default Index;
