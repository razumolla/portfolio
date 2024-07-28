import Image from "next/image";
import HeroSection from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Contact from "./components/homepage/contact";
import Experience from "./components/homepage/Experience";
import Skills from "./components/homepage/Skills";
import Education from "./components/homepage/Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
