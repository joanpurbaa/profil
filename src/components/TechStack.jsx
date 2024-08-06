const techStackLogos = [
  "/mysql.png",
  "/express.png",
  "/react.png",
  "/nodejs.png",
  "tailwind.png",
];

const TechStack = () => {
  return (
    <>
      <div id="techStack" className="pt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-500">Tech Stack 🛠️</h1>
        <p className="text-zinc-700 text-base sm:text-lg lg:text-xl mt-3">
          some of the tech stacks that I often use
        </p>
        <div className="flex flex-wrap gap-12 justify-normal lg:gap-12 mt-10">
          {techStackLogos.map((logo, index) => (
            <img
              loading="lazy"
              key={index}
              className="techStackLogo bg-sky-100 rounded-lg w-24 h-2w-24 sm:w-28 sm:h-28 object-contain p-6 shadow-md"
              src={logo}
              alt="MySql"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
