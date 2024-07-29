import Link from "next/link";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5  px-6 lg:px-2">
      <Link href="/" passHref>
        <div className="flex items-center text-info text-3xl font-bold">
          <div className="w-8 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
            <img
              className="rounded-full"
              src="https://i.ibb.co/qJv1r88/Razu-Molla-1.jpg"
              alt="Razu"
            />
          </div>
          <span className="ps-4">RAZU MOLLA</span>
        </div>
      </Link>

      <div className="hidden md:flex items-center justify-center gap-8 text-white">
        <CustomLink path="/">Home</CustomLink>
        <CustomLink path="#about">About</CustomLink>
        <CustomLink path="#skills">Skills</CustomLink>
        <CustomLink path="#experience">Experience</CustomLink>
        <CustomLink path="#projects">Projects</CustomLink>
        <CustomLink path="#education">Education</CustomLink>
        <CustomLink path="#contact">Contact</CustomLink>
      </div>
    </nav>
  );
};

export default Navbar;
