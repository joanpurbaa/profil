const datas = [
  {
    warnaCard: "bg-gradient-to-r from-blue-950 to-blue-800",
    warnaTextCard: "text-white",
    namaAktifitas:
      "Learn Javascript, project management, and basic programming",
    logoPerusahaan: "/logoDicoding.png",
    namaPerusahaan: "Dicoding Indonesia",
    waktu: "Mei - Nov 2023",
    tugas: [
      "Learn basic of Javascript include, Document Object Model, Data structure, Object Oriented Programming, Modules, Node Package Maneger, Concurrency",
      "Introduce of management project, learn how to execute a project, study organizational culture, and career development as project management",
      "Introduce of website, server and client, HTML, CSS, responsive layout with Flexbox",
      "Final test for all of that",
    ],
    warnaCardTechStack: "bg-blue-800",
    techStack: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    warnaCard: "bg-gradient-to-r from-green-950 to-green-800",
    warnaTextCard: "text-white",
    namaAktifitas: "3rd place in the web development on I/O Fest competition",
    logoPerusahaan: "/logoUntar.png",
    namaPerusahaan: "BEM FTI Untar",
    waktu: "Mei 2023",
    tugas: [
      "Looking for theme ideas for a website to build with team",
      "Create a web UI with Figma, and find sources for supporting images, logos, font style and colors",
      "Executing the UI using Bootstrap and CSS in PHP as a body to connect it to the database, namely MySql",
      "Submit the results and present them in front of the judges",
    ],
    warnaCardTechStack: "bg-green-800",
    techStack: ["PHP", "CSS", "Bootstrap", "MySql"],
  },
  {
    warnaCard: "bg-gradient-to-r from-red-900 to-red-800",
    warnaTextCard: "text-white",
    namaAktifitas: "Certificate Of Competency Assesment",
    logoPerusahaan: "/logoTelkom.png",
    namaPerusahaan: "SMK Telkom 1 Medan",
    waktu: "Agu - Okt 2023",
    tugas: [
      "Create a calculator in web form with HTML, Bootstrap, Javascript",
      "Create a school registration website, with a login, register, log out system, add student data, delete student data, and create a website with an attractive design, with PHP, MySql, Bootstrap",
    ],
    warnaCardTechStack: "bg-red-800",
    techStack: ["HTML", "Bootstrap", "Javascript", "PHP", "MySql"],
  },
];

const Activities = () => {
  return (
    <>
      <div id="activities" className="pt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-500">
          Activities 🧑‍🏭
        </h1>
        <p className="text-zinc-700 text-base md:text-lg sm:text-xl mt-3">
          There are several activities that I often and enjoy doing
        </p>
        {datas.map((data, index) => (
          <div
            className={`mt-10 grid grid-cols-12 ${data.warnaCard} ${data.warnaTextCard} rounded-xl p-5 md:p-10`}
            key={index}
          >
            <div className="col-span-12 lg:col-span-10 flex items-center gap-x-5">
              <img
                loading="lazy"
                className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                src={data.logoPerusahaan}
                alt=""
              />
              <div>
                <h1 className="font-semibold text-base md:text-lg lg:text-xl">
                  {data.namaAktifitas}
                </h1>
                <p className="text-sm sm:text-md">{data.namaPerusahaan}</p>
              </div>
            </div>
            <div className="hidden col-span-3 lg:col-span-2 sm:flex justify-end">
              <p>{data.waktu}</p>
            </div>
            <div className="col-span-12 my-10">
              <h1 className="font-medium text-base sm:text-lg pb-4">
                Series of activities :
              </h1>
              <ul className="list-disc ml-4 space-y-5 sm:space-y-1">
                {data.tugas.map((detailTugas, index) => (
                  <li className="text-sm md:text-base" key={index}>
                    {detailTugas}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 flex flex-wrap gap-3">
              {data.techStack.map((detailTechStack, index) => (
                <p
                  key={index}
                  className={`p-2 rounded-md text-sm sm:text-base ${data.warnaCardTechStack}`}
                >
                  {detailTechStack}
                </p>
              ))}
            </div>
            <div className="sm:hidden col-span-12 lg:col-span-2 flex justify-end text-sm mt-10">
              <p>{data.waktu}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Activities;
