const datas = [
	{
		link: "https://joanpoerba.github.io/bums/index.html",
		warnaCard: "bg-blue-600",
		warnaTextCard: "text-white",
		namaProject: "BUMS (Badan Usaha Milik Siswa)",
		coverProject: "/profil/coverBums.png",
		deskripsiProject:
			"This is a static web design project, with pure HTML and Javascript for the web design competition from UdayanaUniversity",
		warnaCardTechStack: "bg-blue-500",
		techStack: ["HTML", "Bootstrap", "Javascript"],
	},
	{
		link: "http://frogtel-discover.rf.gd/",
		warnaCard: "bg-purple-600",
		warnaTextCard: "text-white",
		namaProject: "Discover",
		coverProject: "/profil/coverDiscover.png",
		deskripsiProject:
			"We created a website to search for, add data to, delete data on tribes in Indonesia",
		warnaCardTechStack: "bg-purple-500",
		techStack: ["PHP", "Bootstrap", "MySql"],
	},
	{
		link: "https://cakrawala.vercel.app/",
		warnaCard: "bg-zinc-700",
		warnaTextCard: "text-white",
		namaProject: "Cakrawala",
		coverProject: "/profil/coverCakrawala.png",
		deskripsiProject: "You can find all the tribes in Indonesia",
		warnaCardTechStack: "bg-zinc-600",
		techStack: ["React", "Tailwind", "Docusaurus", "MDX"],
	},
	{
		link: "https://pijar-pelajar.vercel.app/",
		warnaCard: "bg-blue-700",
		warnaTextCard: "text-white",
		namaProject: "Pijar pelajar",
		coverProject: "/profil/coverPijarPelajar.png",
		deskripsiProject:
			"A web design that I created for the FESTIKA web design competition using React and Tailwind",
		warnaCardTechStack: "bg-blue-600",
		techStack: ["React", "Tailwind"],
	},
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="pt-20">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-sky-500">
          Projects 🧑‍💻
        </h1>
        <p className="text-zinc-700 text-xs sm:text-lg text-base lg:text-xl mt-3">
          Some of my featured projects
        </p>
        <div className="mt-10 flex flex-col gap-y-10 sm:grid sm:grid-cols-12 gap-14 items-start">
          {datas.map((data, index) => (
            <div
              key={index}
              className={`h-full col-span-12 sm:col-start-2 sm:col-end-12 lg:col-span-6 grid grid-cols-12 ${data.warnaCard} rounded-xl`}
            >
              <a target="_blank" className="col-span-12" href={data.link}>
                <img
                  loading="lazy"
                  className="rounded-t-xl h-full"
                  src={data.coverProject}
                  alt=""
                />
              </a>
              <div className={`flex flex-col justify-start col-span-12 p-5 space-y-3 ${data.warnaTextCard}`}>
                <h1 className="font-semibold text-xs sm:text-lg">
                  {data.namaProject}
                </h1>
                <p className="text-xs sm:text-base">
                  {data.deskripsiProject}
                </p>
                <div className="col-span-12 flex flex-wrap gap-3">
                  {data.techStack.map((detailTechStack, index) => (
                    <p
                      key={index}
                      className={`p-2 rounded-md text-xs sm:text-base ${data.warnaCardTechStack}`}
                    >
                      {detailTechStack}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
