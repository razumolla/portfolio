import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            I&apos;m <span className="text-primary">{personalData.name}</span>
            {` , passionate about crafting `}
            <span className=" text-[#ff8c00e3]">{personalData.department}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-icon hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-icon hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="transition-all text-icon hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            {/* <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-icon hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link> */}
            <Link
              href={personalData.hackerRank}
              target="_blank"
              className="transition-all text-icon hover:scale-125 duration-300"
            >
              <FaHackerrank size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-[#813BEA] from-[#638efb] p-[1px] rounded-full transition-all duration-300 hover:from-[#813BEA] hover:to-[#638efb] "
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#638efb] to-[#813BEA] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload
                size={16}
                className="hover:-backdrop-hue-rotate-90 "
              />
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg ">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Md. Razu Molla</span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">skills:</span>
                <span className="text-gray-400">{`{ `}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-8 lg:mr-9 text-green-400">core:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-2 text-green-400">frontend:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-2 text-green-400">backend:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">NodeJs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-1 text-green-400">database:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-9 lg:mr-12 text-green-400">vcs:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Git</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Github</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Bitbucket</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-6 lg:mr-7 text-green-400">Cloud:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">VPS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Netlify</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Varcel</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Firebase</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div className="ml-8 lg:ml-16 mr-2">
                <span className="mr-7 lg:mr-9 text-green-400">tools:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Linux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Postman</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Open AI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">VS Code</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  hardWorker:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  problemSolver:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>

              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
