import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Contact from "./components/homepage/contact";
import Experience from "./components/homepage/Experience";
import Skills from "./components/homepage/Skills";
import Education from "./components/homepage/Education";
import Projects from "./components/homepage/projects";
import Blog from "./components/homepage/blog";
import { personalData } from "@/utils/data/personal-data";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <Contact />
    </>
  );
}
