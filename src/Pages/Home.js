import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  FaBuilding,
  FaHardHat,
  FaHome,
  FaCheckCircle,
  FaQuoteRight,
  FaStar,
  FaRoad,
  FaArchway,
  FaIndustry,
  FaUsersCog,
  FaCogs,
  FaDraftingCompass,
  FaHandsHelping,
  FaTools,
} from "react-icons/fa";
import { FaFaucetDrip, FaArrowsRotate } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";

// ---- Hero Slider settings ----
const heroSettings = {
  dots: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  fade: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

// ---- Projects Carousel settings ----
const projectSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

// ---- Sponsor Carousel settings ----
const sponsorSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
  ],
};

const servicesData = [
  {
    icon: FaBuilding,
    title: "General Building",
    desc: "Residential, commercial, and institutional buildings with superior quality.",
  },
  {
    icon: FaIndustry,
    title: "Building Construction",
    desc: "End-to-end construction from foundation to finishing using modern techniques.",
  },
  {
    icon: FaFaucetDrip,
    title: "Water Supply Schemes",
    desc: "Design, construction, and testing of water supply networks with treatment plants.",
  },
  {
    icon: FaCogs,
    title: "Infrastructure Development",
    desc: "Multi-party civil works, school infrastructure, and urban development projects.",
  },
  {
    icon: FaArrowsRotate,
    title: "Refurbishment & Renovation",
    desc: "Complete renovation of existing structures to enhance functionality and appeal.",
  },
  {
    icon: FaDraftingCompass,
    title: "Architectural Planning",
    desc: "Detailed architectural drawings and project planning tailored to your needs.",
  },
  {
    icon: FaHandsHelping,
    title: "Public Health Engineering",
    desc: "Sanitation, water treatment, and public health infrastructure services.",
  },
  {
    icon: FaTools,
    title: "Project Management",
    desc: "Comprehensive project management ensuring cost, time, and quality control.",
  },
  {
    icon: FaRoad,
    title: "Road & Highway Construction",
    desc: "Design and construction of roads, highways, and rural connectivity projects.",
  },
  {
    icon: FaArchway,
    title: "Bridge & Overpass Construction",
    desc: "Structural design and erection of bridges, flyovers, and grade separators.",
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* ===== HERO SLIDER ===== */}
      <section className="relative">
        <Slider {...heroSettings} className="dl-slider">
          {/* Slide 1 */}
          <div>
            <div
              className="h-screen bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: "url('/img/slider-1.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                    <FaBuilding /> PCPL
                  </span>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    Parishisht
                  </h1>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
                    Construction (P) LTD.
                  </h2>
                  <p className="text-base sm:text-lg text-white/90 mt-4 max-w-lg">
                    Trusted for quality, safety, and on-time delivery — from
                    water supply schemes to urban infrastructure.
                  </p>
                  <a
                    href="/projects"
                    className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-transform hover:-translate-y-0.5"
                  >
                    View Projects <FiArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div>
            <div
              className="h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: "url('/img/slider-2.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="container mx-auto px-4 relative z-10 text-center">
                <span className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <FaHardHat /> PCPL
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
                  Quality Construction
                </h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
                  Delivering Excellence
                </h2>
                <p className="text-base sm:text-lg text-white/90 mt-4 max-w-2xl mx-auto">
                  Specialised in PHED water supply, LAEO school infrastructure,
                  and urban development projects.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-transform hover:-translate-y-0.5"
                >
                  Get a Quote <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div>
            <div
              className="h-screen bg-cover bg-center relative flex items-center justify-end"
              style={{ backgroundImage: "url('/img/slider-3.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div className="container mx-auto px-4 relative z-10 text-right">
                <span className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <FaHome /> PCPL
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
                  Your Dream Home
                </h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-2">
                  We Make It Happen
                </h2>
                <p className="text-base sm:text-lg text-white/90 mt-4 max-w-lg ml-auto">
                  Complete building, renovation, and interior solutions tailored
                  to your needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-transform hover:-translate-y-0.5"
                >
                  Contact Us <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-16 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4" data-aos="fade-right">
              <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                We are experts in construction & infrastructure solutions since
                1991
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                <strong>Parishisht Construction (PCPL)</strong> is a premier
                civil construction company based in Bihar, India. We specialise
                in water supply schemes, public health engineering, school
                infrastructure, and urban development.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We have successfully completed projects for PHED (Public Health
                Engineering Department), LAEO (Local Area Engineering
                Organization), and the Urban Development & Housing Department.
              </p>
              <a
                href="/about-us"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded transition shadow-sm"
              >
                More About Us
              </a>
            </div>

            <div className="w-full lg:w-1/2 px-4 mt-8 lg:mt-0">
              <div className="space-y-6">
                <div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="text-3xl text-orange-500 mt-1">
                    <FaIndustry />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Professional Liability
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Adherence to rigorous safety protocols and quality
                      standards across every site.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="text-3xl text-orange-500 mt-1">
                    <FaUsersCog />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Dedicated To Our Clients
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Collaborative project tracking ensuring transparency from
                      bidding to handover.
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-50"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="text-3xl text-orange-500 mt-1">
                    <FaCogs />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Outstanding Services
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Integrated equipment, structural engineering, and MEP
                      solutions under one roof.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-16 bg-gray-50 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              We offer a complete range of <br />
              construction services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {servicesData.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg text-center shadow-sm hover:bg-orange-500 hover:shadow-md transition group duration-200"
                  data-aos="fade-up"
                  data-aos-delay={idx * 40}
                >
                  <div className="text-4xl text-orange-500 group-hover:text-white transition mb-4 flex justify-center">
                    <IconComponent />
                  </div>
                  <h3 className="text-base font-semibold text-gray-800 group-hover:text-white transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 group-hover:text-white/90 transition leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href="#services"
                    className="text-orange-500 text-sm font-semibold group-hover:text-white transition mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WORK PROCESS ===== */}
      <section className="py-16 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
            {[
              {
                number: "01",
                title: "Planning & Research",
                desc: "Thorough site assessments and feasibility studies to confirm project viability.",
              },
              {
                number: "02",
                title: "Design & Engineering",
                desc: "Compliant, structurally tested blueprints and architectural models.",
              },
              {
                number: "03",
                title: "Execution & Monitoring",
                desc: "On-site management using heavy machinery and strict adherence to material tests.",
              },
              {
                number: "04",
                title: "Delivery & Handover",
                desc: "Timely delivery with post-handover operational support and warranties.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <span className="text-5xl font-black text-orange-500/20 select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold mt-2 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 max-w-xs">
                  {step.desc}
                </p>

                {idx < 3 && (
                  <div className="hidden lg:block absolute top-7 -right-4 w-8 h-0.5 bg-orange-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS CAROUSEL ===== */}
      <section className="py-16 bg-gray-50 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Projects
              </span>
              <h2 className="text-3xl font-bold text-gray-800">
                Our major completed projects
              </h2>
            </div>
            <a
              href="/projects"
              className="hidden md:inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded transition font-medium"
            >
              View All Projects
            </a>
          </div>

          <Slider {...projectSettings}>
            {[
              {
                img: "/img/1.jpeg",
                category: "PHED",
                title: "Water Supply Scheme – Banka District",
                desc: "Design, construction, and testing of networks with treatment plant. ₹1.75 Cr.",
              },
              {
                img: "/img/3.jpg",
                category: "LAEO",
                title: "School Infrastructure – Banka District",
                desc: "Multi-party civil works under the Development Department. ₹27.09 Lakh.",
              },
              {
                img: "/img/5.jpg",
                category: "Urban Dev.",
                title: "Urban Housing & Infrastructure",
                desc: "Urban development projects under the Housing Department for sustainable growth.",
              },
              {
                img: "/img/6.jpg",
                category: "Roads",
                title: "Rural Road Connectivity",
                desc: "Construction of all-weather roads connecting remote rural areas in Bihar.",
              },
              {
                img: "/img/7.jpg",
                category: "Bridges",
                title: "Bridge & Overpass Projects",
                desc: "Structural erection of high-load bridges for safe transit corridors.",
              },
            ].map((project, idx) => (
              <div key={idx} className="px-2">
                <div className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2.5 py-0.5 rounded w-max mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-xs mt-1 line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="text-center mt-8 md:hidden">
            <a
              href="/projects"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="py-16 bg-orange-500 text-white text-center px-4"
        data-aos="zoom-in"
      >
        <div className="container mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange-100">
            Get your project started
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            We are ready to build <br /> your dream project
          </h2>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded transition shadow"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4 items-center">
            <div
              className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
              data-aos="fade-right"
            >
              <img
                src="/img/4.jpg"
                alt="PCPL Team"
                className="rounded-lg shadow-md w-full object-cover max-h-[420px]"
              />
            </div>
            <div className="w-full lg:w-1/2 px-4" data-aos="fade-left">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Offering the most complete integrated package!
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Building isn't just a job — it's our dedication to community
                progress. With every project we undertake, we ensure structural
                durability and adherence to strict regulatory benchmarks.
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Experience in PHED, LAEO, and Urban Development",
                  "Quality assurance and safety compliance",
                  "On-time delivery within allocated budget",
                  "Complete project management and post-handover support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-gray-700"
                  >
                    <FaCheckCircle className="text-orange-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded transition shadow-sm"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16 bg-gray-50 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              What our clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                quote:
                  "Parishisht Construction delivered our water supply project on time with outstanding quality. Their professionalism is unmatched.",
                name: "Er. R. Kumar",
                role: "PHED Engineer",
                stars: 5,
              },
              {
                quote:
                  "The school infrastructure project was executed flawlessly. The team was cooperative and maintained high safety standards.",
                name: "Ms. S. Sharma",
                role: "LAEO Coordinator",
                stars: 5,
              },
              {
                quote:
                  "PCPL’s commitment to urban development projects is commendable. They bring innovation and reliability to every site.",
                name: "Mr. A. Singh",
                role: "Urban Development Dept.",
                stars: 5,
              },
              {
                quote:
                  "We have partnered with Parishisht Construction for multiple road projects. Their execution speed and quality are top-notch.",
                name: "Mr. D. Jha",
                role: "Project Manager, NHAI",
                stars: 5,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={idx * 60}
              >
                <div>
                  <FaQuoteRight className="text-orange-500/20 text-3xl mb-3" />
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1 text-yellow-400 my-1 text-xs">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-gray-500 text-xs">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="py-16 px-4" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              From Blog
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">
              Latest construction insights for Bihar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/img/post-1.jpg",
                category: "Government Schemes",
                title:
                  "Har Ghar Nal – PHED’s rural water supply mission in Bihar",
                desc: "Learn how PHED is implementing tap-water connections across villages and key execution milestones.",
              },
              {
                img: "/img/post-2.jpg",
                category: "Urban Development",
                title:
                  "PMAY – Building affordable homes for all in Bihar’s cities",
                desc: "Exploring the impact and infrastructure scale of Pradhan Mantri Awas Yojana in Bihar.",
              },
              {
                img: "/img/post-3.jpg",
                category: "Eco-Friendly",
                title:
                  "Sustainable construction using local materials in Bihar",
                desc: "From fly-ash bricks to eco-cements: low-cost, resilient green construction practices.",
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-base text-gray-800 hover:text-orange-500 transition line-clamp-2">
                    <a href="#blog-post">{post.title}</a>
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 leading-relaxed line-clamp-2">
                    {post.desc}
                  </p>
                  <a
                    href="#read-more"
                    className="text-orange-500 text-xs font-semibold hover:underline mt-4 inline-block"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPONSOR CAROUSEL ===== */}
    </div>
  );
};

export default Home;
