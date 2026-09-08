import React from "react";
import { Link } from "react-router-dom";
import {
  FaHardHat,
  FaShieldAlt,
  FaUserCheck,
  FaCheckCircle,
  FaFileContract,
  FaVest,
  FaChalkboardTeacher,
  FaExclamationTriangle,
  FaHeartbeat,
  FaHandsHelping,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const safetyPillars = [
  {
    icon: FaChalkboardTeacher,
    title: "Mandatory Safety Inductions",
    desc: "Rigorous onboarding protocols and site-specific hazard trainings prior to entering any active operational area.",
  },
  {
    icon: FaHandsHelping,
    title: "Daily Tool Box Talks (TBT)",
    desc: "Morning safety briefings reviewing immediate risks, machinery checks, and specialized shift procedures.",
  },
  {
    icon: FaVest,
    title: "Full PPE Protocol & Demos",
    desc: "Strict compliance on mandatory Personal Protective Equipment (helmets, harnesses, safety boots, and visibility vests).",
  },
  {
    icon: FaHeartbeat,
    title: "Occupational Health Camps",
    desc: "Regular medical check-ups, hydration drives, and ergonomic reviews across campuses and remote work sites.",
  },
  {
    icon: FaFileContract,
    title: "Vendor & Contractor Audits",
    desc: "Safety systems extended directly to all sub-contractors, suppliers, and third-party logistics operators.",
  },
  {
    icon: FaExclamationTriangle,
    title: "Proactive Risk Assessment (HIRA)",
    desc: "Systematic hazard identification and risk analysis before starting complex civil or structural work fronts.",
  },
];

const safetyCommitments = [
  "Strict adherence to ISO 45001 occupational health and safety standards.",
  "Zero-tolerance policy for missing personal protective gear on site.",
  "Regular third-party safety audits and structural stability inspections.",
  "Rapid incident reporting, root-cause investigation, and preventive actions.",
  "Extended safety management guidelines enforced across our entire vendor network.",
];

const Safety = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            <FaShieldAlt className="text-orange-500" /> Health, Safety &
            Environment (HSE)
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our Target: <span className="text-orange-500">Zero</span> Reportable
            Injuries
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            At RKSCPL, paramount importance is given to safety at every
            juncture, every step of the way. We are committed to providing an
            uncompromisingly secure and healthy workplace across campuses and
            project sites.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#commitments"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg shadow-orange-500/25 transition-transform hover:-translate-y-0.5"
            >
              Explore Our Standards <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ===== CORE STATEMENT / STATS ===== */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <span className="text-5xl font-black text-orange-500">0</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Reportable Injuries Goal
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Pursued diligently at every work front, plant, and campus.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <span className="text-5xl font-black text-slate-900">100%</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Mandatory Induction
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Every worker, engineer, and guest is screened and trained.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <span className="text-5xl font-black text-orange-500">360°</span>
              <h3 className="text-lg font-bold text-slate-900 mt-2">
                Extended Safety Net
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                Extends to all on-site contractors and supplier premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAFETY PILLARS ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">
              Proactive Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Our Safety Initiatives in Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              We translate safety policy into measurable everyday habits across
              structural, civil, and mechanical work fronts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition group duration-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition duration-200 mb-4 text-xl">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DETAILED POLICY & CONTRACTOR CLAUSE ===== */}
      <section
        id="commitments"
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-400 font-bold text-xs uppercase tracking-widest">
                Comprehensive Oversight
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                Extending Safety to Partners, Vendors & Suppliers
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                It is our endeavor as an organisation to ensure that every task,
                job or assignment is performed in a safe manner. Our safety
                systems are extended to contractors working at our premises, and
                we actively encourage our suppliers to establish systematic
                safety management at their own facilities.
              </p>

              <ul className="mt-6 space-y-3.5">
                {safetyCommitments.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <FaCheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <FaHardHat className="text-orange-500 text-3xl" />
                <h3 className="text-xl font-bold text-white">
                  Daily Operational Mandate
                </h3>
              </div>
              <blockquote className="text-slate-300 italic text-sm leading-relaxed border-l-2 border-orange-500 pl-4 mb-6">
                "No deadline or schedule priority supersedes the physical safety
                and health of the workers on our sites."
              </blockquote>
              <div className="space-y-4 text-xs sm:text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <FaUserCheck className="text-emerald-400 text-base flex-shrink-0" />
                  <span>
                    Routine on-site alcohol & substance screening checks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserCheck className="text-emerald-400 text-base flex-shrink-0" />
                  <span>Certified heavy equipment operator verifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUserCheck className="text-emerald-400 text-base flex-shrink-0" />
                  <span>
                    Mandatory safety harness protocols for high-elevation works
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 bg-orange-500 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold">
            Build with Uncompromised Safety
          </h2>
          <p className="mt-3 text-orange-100 text-sm sm:text-base max-w-2xl mx-auto">
            Partner with a team that values human life and infrastructural
            longevity above all else.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-orange-600 hover:bg-slate-100 font-bold px-8 py-3 rounded-lg shadow-md transition-transform hover:-translate-y-0.5"
            >
              Contact Our Safety Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
