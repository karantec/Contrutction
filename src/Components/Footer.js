import React, { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const companyLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CAREER", href: "/career" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <footer className="relative bg-[#181a1d] text-slate-300 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden pt-16 pb-12">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Column 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            {/* Logo Container */}
            <div className="inline-block bg-white p-3 rounded-lg shadow-md max-w-[240px]">
              <img
                src="img/Logo.jpeg" // Replace with your Parishisht logo path
                alt="Parishisht Construction Pvt Ltd"
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-sm leading-relaxed text-slate-400 font-normal pr-4">
              Building your own home is about desire, fantasy. But it’s
              achievable — and with PCPL, it’s done right.
            </p>

            {/* Quick Status / Trust Badge */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-orange-400 bg-orange-500/10 px-3.5 py-1.5 rounded-full w-fit border border-orange-500/20">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Committed to Quality Construction</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-base font-bold tracking-tight mb-5 flex items-center">
              Company
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-1.5"></span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-orange-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span className="h-[1.5px] w-0 bg-orange-500 mr-0 transition-all duration-200 group-hover:w-2 group-hover:mr-1.5"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Headquarters & Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white text-base font-bold tracking-tight mb-1 flex items-center">
              Headquarters
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-1.5"></span>
            </h3>

            <address className="not-italic text-sm text-slate-400 leading-relaxed space-y-1">
              <p>Village – Kharwajor, Panchayat – Mothawari</p>
              <p>Post Office – Katoria, Thana – Katoria</p>
              <p>Orani Dam OP</p>
              <p>Dist – Banka, State – Bihar</p>
              <p className="font-medium text-slate-300">PIN – 813106</p>
            </address>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.facebook.com/share/19DNiKvVpR/"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/parishishtconstruction?stkn=MzB3bWN4cXR4bnBs"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-orange-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Email & Phone */}
            <div className="pt-2 space-y-1">
              <a
                href="mailto:info@parishishtconstruction.com"
                className="text-xs sm:text-sm font-medium text-orange-400 hover:underline block break-all"
              >
                info@parishishtconstruction.com
              </a>
              <a
                href="tel:+918789970312"
                className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors block"
              >
                +91 9470490312
              </a>
            </div>
          </div>

          {/* Column 4: Get a Quote Form (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white text-base font-bold tracking-tight mb-1 flex items-center">
              Get a Quote
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 ml-1.5"></span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Fill in your details and we’ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Your Message"
                required
                className="w-full px-3.5 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-bold tracking-wider uppercase rounded-lg shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-200 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Parishisht Construction Pvt Ltd. All
            rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Crafted with precision & passion.@CodingDitto
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to Top"
        className="fixed bottom-6 right-6 z-40 p-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-lg shadow-orange-500/30 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <svg
          className="w-5 h-5 transition-transform group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
