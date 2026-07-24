import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import ScrollToTop from "@/components/scroll-to-top";
import Skills from "@/components/skill";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
