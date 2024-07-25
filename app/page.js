import Image from "next/image";
import HeroSection from "./components/homepage/hero-section";
import About from "./components/homepage/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
