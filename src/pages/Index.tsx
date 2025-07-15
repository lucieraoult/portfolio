
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <CaseStudies />
        {/* <About /> */}
        <Experience />
        {/* <Skills /> */}
        <Contact />
      </main>
    </div>
  );
};

export default Index;