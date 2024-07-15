import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  "title": "Portfolio of Md. Razu Molla - Software Developer",
  "description": "Welcome to the portfolio of Md. Razu Molla. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen relative px-4 lg:px-2 max-w-[1280px] mx-auto text-white ">
          {children}
        </main>
      </body>
    </html>
  );
}
