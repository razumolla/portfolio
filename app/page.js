import Image from "next/image";
import HeroSection from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Contact from "./components/homepage/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Contact />
    </>
  );
}
