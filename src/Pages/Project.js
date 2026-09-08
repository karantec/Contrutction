import React from "react";

// Project data – replace images and text with your own
const projectsData = [
  {
    id: 1,
    category: "PHED",
    title: "Water Supply Schemes",
    description:
      "Design, construction & testing of rural water supply networks with treatment plants.",
    image: "/img/1.jpeg",
  },
  {
    id: 2,
    category: "LAEO",
    title: "School Infrastructure",
    description:
      "Construction & renovation of government schools under Planning & Development Department.",
    image: "/img/2.jpg",
  },
  {
    id: 3,
    category: "Minor Water Resources",
    title: "Irrigation & Drainage Works",
    description:
      "Construction of canals, check dams, and drainage systems for agricultural benefit.",
    image: "/img/3.jpg",
  },
  {
    id: 4,
    category: "Building Construction",
    title: "Government Buildings",
    description:
      "Construction of offices, community halls, and public utility buildings.",
    image: "/img/4.jpg",
  },
  {
    id: 5,
    category: "Road Construction",
    title: "Rural & Urban Roads",
    description:
      "Construction of all-weather roads, highways, and connectivity projects.",
    image: "/img/5.jpg",
  },
  {
    id: 6,
    category: "Water Resources",
    title: "River & Flood Control",
    description:
      "Flood protection embankments, river training, and water conservation structures.",
    image: "/img/6.jpg",
  },
  {
    id: 7,
    category: "Urban Development",
    title: "Affordable Housing & Amenities",
    description:
      "PMAY housing, parks, drainage, and urban infrastructure projects.",
    image: "/img/7.jpg",
  },
  {
    id: 8,
    category: "Panchayati Raj",
    title: "Rural Infrastructure",
    description:
      "Panchayat buildings, community centres, and rural development works.",
    image: "/img/8.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Our Projects</h2>
          <p className="text-lg opacity-80 mt-2">
            Executed for various government departments in India
          </p>
        </div>
      </section>

      {/* ===== PROJECTS GRID ===== */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* Orange overlay – hidden by default, shown on hover */}
                <div className="absolute inset-0 bg-orange-500/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Expand icon (top-right) */}
                <a
                  href={project.image}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-orange-500 hover:scale-110 z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-expand" />
                </a>

                {/* Content – slides up from bottom on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="inline-block bg-white text-orange-500 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-white/85 text-sm mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
