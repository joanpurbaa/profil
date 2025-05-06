const datas = [
	{
		warnaCard: "bg-gradient-to-r from-violet-700 to-violet-900",
		warnaTextCard: "text-white",
		namaPerusahaan: "Magna Partners ",
		logoPerusahaan: "/magna.png",
		posisi: "Front-end Developer",
		waktu: "Mar - Present",
		tugas: [
			"Building profile pages for various business units using React.js and Tailwind CSS to ensure a responsive and user-friendly design.",
			"Developing admin dashboard pages with React.js and Tailwind CSS to support smooth backend management.",
		],
		warnaCardTechStack: "bg-violet-900",
		techStack: ["Next.js", "Tailwind CSS"],
	},
	{
		warnaCard: "bg-gradient-to-r from-red-700 to-red-900",
		warnaTextCard: "text-white",
		namaPerusahaan: "Humic Engineering",
		logoPerusahaan: "/humic.png",
		posisi: "Front-end Developer",
		waktu: "Mar - Present",
		tugas: [
			"Create admin dashbord until resposive with all features using Next.js and Tailwind CSS",
			"Implementing authentication API using Axios",
			"Create the user flow project",
		],
		warnaCardTechStack: "bg-red-900",
		techStack: ["Next.js", "Tailwind CSS", "Axios"],
	},
	{
		warnaCard: "bg-gradient-to-r from-sky-600 to-sky-800",
		warnaTextCard: "text-white",
		namaPerusahaan: "PT. Kodinglab Integrasi Indonesia",
		logoPerusahaan: "/codinglab.png",
		posisi: "Back-end Developer",
		waktu: "Jun - Feb 2025",
		tugas: [
			"Creating APIs using Next.js for mentor features, such as adding, displaying, viewing details, updating data, and deleting.",
			"Connecting the APIs to the Front End using React Query and Formik.",
			"Adding pagination features to control the number displayed per page.",
			"Developing a searching feature.",
			"Fixing some Front End designs.",
		],
		warnaCardTechStack: "bg-sky-800",
		techStack: ["Next.js", "PostgreSql", "Tailwind CSS", "React Query"],
	},
	{
		warnaCard: "bg-gradient-to-r from-zinc-800 to-zinc-700",
		warnaTextCard: "text-white",
		namaPerusahaan: "PT. Metromatika Teknologi Rekayasa",
		logoPerusahaan: "/metromatika.png",
		posisi: "Front-end Developer",
		waktu: "Jun - Sep 2023",
		tugas: [
			"Designed the Login page UI for Siap Intel using Figma.",
			"Developed user profile pages for Medan Tourism using React Native.",
			"Built account settings and bus terminal pages for Medan Tourism using React Native and Android Studio.",
			"Created and maintained admin dashboards for Medan Tourism using Laravel, Bootstrap, and jQuery.",
			"Developed login and registration pages for the Medan Tourism admin dashboard",
			"Managed tourist registration data and app download statistics.",
			"Built pages for managing tours, events, and tourism news.",
			"Created a super admin panel for adding, deleting, and updating admin credentials.",
		],
		warnaCardTechStack: "bg-zinc-700",
		techStack: ["CodeIgniter", "Laravel", "Bootstrap", "JQuery", "React Native"],
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
						key={index}>
						<div className="col-span-12 sm:col-span-8 lg:col-span-10 flex items-center gap-x-3 sm:gap-x-5">
							<img
								className="w-12 h-12 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
								src={data.logoPerusahaan}
								alt=""
							/>
							<div>
								<h1 className="font-semibold text-xs md:text-lg lg:text-xl">
									{data.namaPerusahaan}
								</h1>
								<p className="text-xs sm:text-md">{data.posisi}</p>
							</div>
						</div>
						<div className="hidden col-span-4 lg:col-span-2 sm:flex justify-end">
							<p>{data.waktu}</p>
						</div>
						<div className="col-span-12 my-10">
							<h1 className="font-medium text-xs sm:text-lg pb-4">
								Responsible in :
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
									className={`p-2 rounded-md text-xs sm:text-base ${data.warnaCardTechStack}`}>
									{detailTechStack}
								</p>
							))}
						</div>
						<div className="sm:hidden col-span-12 lg:col-span-2 flex justify-end text-sm mt-10">
							<p className="text-xs sm:text-base">{data.waktu}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Experience;
