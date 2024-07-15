import Link from "next/link";

export default function CustomLink({ path, children }) {
  return (
    <Link
      className="text-lg font-bold font-sans transition-colors duration-300 text-white hover:text-primary-2"
      href={path}
    >
      {children}
    </Link>
  );
}
