import Image from "next/image";
import HeroSection from "./components/homepage/Hero";
import About from "./components/homepage/About";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}
