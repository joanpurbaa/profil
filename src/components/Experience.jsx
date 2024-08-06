const datas = [
  {
    warnaCard: "bg-gradient-to-r from-zinc-800 to-zinc-700",
    warnaTextCard: "text-white",
    namaPerusahaan: "PT. Metromatika Teknologi Rekayasa",
    logoPerusahaan: "/metromatika.png",
    posisi: "Front-end Developer",
    waktu: "Jun - Sep 2023",
    tugas: [
      "Built, maintained, and improved admin's dashboard Front-end with Laravel, Bootstrap, and JQuery",
      "Help to built mobile app Front-end with React Native",
    ],
    warnaCardTechStack: "bg-zinc-700",
    techStack: [
      "CodeIgniter",
      "Laravel",
      "Bootstrap",
      "JQuery",
      "React Native",
    ],
  },
  {
    warnaCard: "bg-gradient-to-r from-amber-900 to-amber-800",
    warnaTextCard: "text-white",
    namaPerusahaan: "OSIS SMK Telkom 1 Medan",
    logoPerusahaan: "/logoOsis.PNG",
    posisi: "Front-end Developer",
    waktu: "Nov 2021 - Sep 2022",
    tugas: [
      "Built, maintained, and improved OSIS profile website with HTML, Bootstrap, and Javascript",
      "Help to built registration website for competition ESA with Laravel, Bootstrap, and MySql",
    ],
    warnaCardTechStack: "bg-amber-800",
    techStack: ["Laravel", "Bootstrap", "MySql"],
  },
];

const Experience = () => {
  return (
    <>
      <div id="experience" className="pt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-500">
          Experience 👷
        </h1>
        <p className="text-zinc-700 text-base sm:text-lg lg:text-xl mt-3">
          Here are my work experience and career highlights
        </p>
        {datas.map((data, index) => (
          <div
            className={`mt-10 grid grid-cols-12 ${data.warnaCard} ${data.warnaTextCard} rounded-xl p-5 md:p-10`}
            key={index}
          >
            <div className="col-span-12 sm:col-span-8 lg:col-span-10 flex items-center gap-x-5">
              <img
                className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
                src={data.logoPerusahaan}
                alt=""
              />
              <div>
                <h1 className="font-semibold text-base md:text-lg lg:text-xl">
                  {data.namaPerusahaan}
                </h1>
                <p className="text-sm sm:text-md">{data.posisi}</p>
              </div>
            </div>
            <div className="hidden col-span-4 lg:col-span-2 sm:flex justify-end">
              <p>{data.waktu}</p>
            </div>
            <div className="col-span-12 my-10">
              <h1 className="font-medium text-base sm:text-lg pb-4">Responsible in :</h1>
              <ul className="list-disc ml-4 space-y-5 sm:space-y-1">
                {data.tugas.map((detailTugas, index) => (
                  <li className="text-sm md:text-base" key={index}>{detailTugas}</li>
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

export default Experience;
