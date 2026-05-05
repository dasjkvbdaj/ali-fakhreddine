import { Navbar } from "@/components/portfolio/navigation/Navbar";
import { Hero } from "@/components/portfolio/hero/Hero";
import { About } from "@/components/portfolio/about/About";
import { Skills } from "@/components/portfolio/info/Skills";
import { Experience } from "@/components/portfolio/info/Experience";
import { Projects } from "@/components/portfolio/projects/Projects";
import { Education } from "@/components/portfolio/info/Education";
import { Contact } from "@/components/portfolio/contact/Contact";
import { SEO } from "@/components/portfolio/layout/SEO";

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
