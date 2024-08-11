import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flowbite } from "flowbite-react";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Activities from "./components/Activities";
import Projects from "./components/Projects";
import PlausibleProvider from 'next-plausible'
import Plausible from "plausible-tracker";

const Home = () => {
  const customTheme = {
    button: {
      color: {
        github:
          "bg-gradient-to-r from-zinc-500 to-zinc-700 hover:from-zinc-700 hover:to-zinc-700 hover:shadow-lg text-white",
        linkedin:
          "bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-700 hover:shadow-lg text-white",
        instagram:
          "bg-gradient-to-r from-orange-300 via-red-500 to-violet-700 hover:from-orange-400 hover:via-red-600 hover:to-violet-800 hover:shadow-lg text-white",
      },
      inner: {
        base: "flex items-center gap-x-3",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-7 py-2 text-lg",
        xl: "px-6 py-3 text-base",
      },
    },
  };

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      ".header",
      { opacity: "0", y: "-10" },
      { opacity: "1", y: "0", duration: "0.5" }
    );
    gsap.fromTo(
      ".introduce",
      { opacity: "0", y: "-20" },
      { opacity: "1", y: "0", duration: "0.8" }
    );
    gsap.fromTo(
      ".as",
      { opacity: "0", y: "-50" },
      { opacity: "1", y: "0", duration: "1.5" }
    );
    gsap.fromTo(
      ".information",
      { opacity: "0", y: "50" },
      { opacity: "1", y: "0", duration: "1" }
    );
    gsap.fromTo(
      ".github",
      { opacity: "0", x: "-50" },
      { opacity: "1", x: "0", duration: "1" }
    );
    gsap.fromTo(
      ".linkedin",
      { opacity: "0", x: "50" },
      { opacity: "1", x: "0", duration: "1" }
    );
    gsap.fromTo(
      ".newGithub",
      { opacity: "0", x: "-100" },
      { opacity: "1", x: "0", duration: "1" }
    );
    gsap.fromTo(
      "#about",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#about",
          start: "center 60%",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      "#techStack",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#techStack",
          start: "center 95%",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      "#experience",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#experience",
          start: "center 130%",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      "#activities",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#activities",
          start: "center 350%",
          end: "center center",
        },
      }
    );
    gsap.fromTo(
      "#projects",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scrollTrigger: {
          scrub: true,
          trigger: "#projects",
          start: "center 350%",
          end: "center center",
        },
      }
    );
  });

  const { trackPageview, enableAutoPageviews, enableAutoOutboundTracking } =
    Plausible();

  trackPageview({
    url: "https://profil-joan.vercel.app/",
  });
  enableAutoPageviews();
  enableAutoOutboundTracking();

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <div id="home" className="background bg-no-repeat bg-cover flex flex-col justify-between gap-y-12 px-2 md:px-5 lg:px-20 xl:px-48 2xl:px-72 py-10">
          <LandingPage />
          <About />
          <TechStack />
          <Experience />
          <Activities />
          <Projects />
        </div>
      </Flowbite>
    </>
  );
};

export default Home;
