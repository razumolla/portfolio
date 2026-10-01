import type { NavItem, SocialLink, SpecRow } from "@/types";

export const siteConfig = {
  name: "Md. Razu Molla",
  shortName: "Razu Molla",
  initials: "RM",
  designation: "Software Developer",
  focus: "Software Solutions",
  title: "Portfolio of Md. Razu Molla - Software Developer",
  metaDescription:
    "Welcome to the portfolio of Md. Razu Molla. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
  about:
    "My name is Razu Molla, and I am a dedicated and enthusiastic programmer. I am a quick learner with a strong self-motivation for continuous learning. I thrive on exploring new technologies and tackling challenging problems. My expertise lies in web application development, with a particular focus on JavaScript. I am passionate about making the web more accessible and open to everyone. I am open to job opportunities that align with my skills and interests.",
  contactNote:
    "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.",
  profileImage: "/images/profile.jpg",
  email: "razumolla75@gmail.com",
  phone: "+8801770309969",
  address: "Dhaka, Bangladesh",
  resume:
    "https://drive.google.com/file/d/1RSa8dNcQ-GjM8_KQdKfbaEluYtu48VlW/view?usp=sharing",
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/razumolla" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/razu-molla/",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/18387432/md-razu-molla",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/razumolla75",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/razu.molla75bd/",
  },
];

/** Rendered as the "stack" spec sheet in the About section. */
export const stack: SpecRow[] = [
  { label: "Core", items: ["JavaScript", "TypeScript"] },
  { label: "Frontend", items: ["React", "NextJS", "Redux"] },
  { label: "Backend", items: ["NodeJs", "Express", "NestJS"] },
  { label: "Database", items: ["PostgreSQL", "MongoDB", "MySql"] },
  { label: "VCS", items: ["Git", "Github", "Bitbucket"] },
  { label: "Cloud", items: ["VPS", "Netlify", "Vercel", "Firebase"] },
  { label: "Tools", items: ["Linux", "Postman", "Open AI", "VS Code"] },
  { label: "Traits", items: ["Hard worker", "Quick learner", "Problem solver"] },
];
