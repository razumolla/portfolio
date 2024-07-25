import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        {/* <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span> */}
        <span className="bg-[#1a1443] w-fit text-white rotate-0 p-2 px-5 text-xl rounded-t-md">
          R
        </span>
        <span className="bg-[#1a1443] w-fit text-white rotate-0 p-2 px-5 text-xl ">
          A
        </span>
        <span className="bg-[#1a1443] w-fit text-white rotate-0 p-2 px-5 text-xl ">
          Z
        </span>
        <span className="bg-[#1a1443] w-fit text-white rotate-0 p-2 px-5 text-xl rounded-b-md">
          U
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            ABOUT ME
          </p>
         

          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>

        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={300}
            alt="Razu Molla"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-125 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
