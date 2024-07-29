import { Inter } from "next/font/google";
import "./css/globals.scss";
import "./css/card.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/helper/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  "title": "Portfolio of Md. Razu Molla - Software Developer",
  "description": "Welcome to the portfolio of Md. Razu Molla. I am a full stack developer and a self-taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative px-4 lg:px-2 max-w-screen-2xl mx-auto text-white">
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
