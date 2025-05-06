import { Button } from "flowbite-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropup } from "react-icons/io";
import { useState } from "react";

const LandingPage = () => {
  const [toTopActive, toTopStatus] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY >= 100 ? toTopStatus(true) : toTopStatus(false);
  });

  return (
    <>
      <div id="landingpage" className="grid content-between">
        <header className="header w-full grid grid-cols-12">
          <nav className="bg-white col-span-12 md:col-start-2 md:col-end-12 lg:col-start-4 lg:col-end-10 flex justify-between border rounded-full hover:shadow-md py-3 px-9 sm:py-5 sm:px-16">
            <li className="list-none">
              <a className="text-gray-500 hover:text-sky-500" href="#about">
                About
              </a>
            </li>
            <li className="list-none">
              <a className="text-gray-500 hover:text-sky-500" href="#techStack">
                Tech stack
              </a>
            </li>
            <li className="list-none">
              <a
                className="text-gray-500 hover:text-sky-500"
                href="#experience"
              >
                Experience
              </a>
            </li>
          </nav>
        </header>
        <div className="flex flex-col items-center py-20">
          <h3 className="introduce text-2xl lg:text-4xl font-semibold text-zinc-600">
            Hi, i&apos;m joan purba
          </h3>
          <h1 className="as relative text-6xl md:text-7xl lg:text-8xl font-bold text-sky-500 text-center py-8 z-10">
            Web Developer
          </h1>
          <p className="information text-base lg:text-2xl text-zinc-400">
            You can find me on...
          </p>
          <div className="relative flex gap-x-10 mt-24">
            <a target="_blank" href="https://github.com/joanpurbaa">
              <Button className="github px-3" color="github">
                <FaGithub className="w-8 h-8" />
                <span>Github</span>
              </Button>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/joanpurba/">
              <Button className="linkedin px-3" color="linkedin">
                <FaLinkedin className="w-8 h-8" />
                <span>Linkedin</span>
              </Button>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12"></div>
        {toTopActive ? (
          <a href="#home">
            <IoIosArrowDropup className="fixed z-10 right-5 bottom-5 sm:right-10 sm:bottom-10 w-12 h-12 bg-white rounded-md p-2 shadow-xl text-zinc-700" />
          </a>
        ) : (
          <a href="#home">
            <IoIosArrowDropup className="invisible fixed right-5 bottom-5 sm:right-10 sm:bottom-10 w-10 h-10 text-zinc-700" />
          </a>
        )}
      </div>
    </>
  );
};

export default LandingPage;
