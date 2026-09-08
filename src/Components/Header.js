import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/", active: true },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CAREER", href: "/career" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`font-['Plus_Jakarta_Sans',sans-serif] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
          : "bg-white border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <a
            href="#"
            className="group flex items-center space-x-3 transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="relative flex items-center justify-center">
              <img
                src="img/Logo.jpeg"
                alt="INDICO Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:rotate-1"
              />
            </div>

            {/* Industrial Bold Heading */}
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-[13px] font-bold tracking-[0.08em] transition-colors duration-200 group ${
                  link.active
                    ? "text-orange-600"
                    : "text-slate-800 hover:text-orange-500"
                }`}
              >
                {link.name}
                {/* Micro underline highlight */}
                <span
                  className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] rounded-full transition-all duration-300 ${
                    link.active
                      ? "w-6 bg-orange-500"
                      : "w-0 group-hover:w-5 bg-orange-400 opacity-70"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#quote"
              className="relative inline-flex items-center justify-center px-6 py-3 text-xs font-bold tracking-wide uppercase text-white rounded-lg bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/35 transition-all duration-200 active:scale-95 group"
            >
              <span>Request a Quote</span>
              <svg
                className="w-3.5 h-3.5 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-800 hover:text-orange-500 hover:bg-orange-50/60 transition-colors focus:outline-none"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-slate-100 ${
          isOpen
            ? "max-h-96 opacity-100 py-4 px-6 shadow-xl"
            : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <div className="flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-xs font-bold tracking-wider text-slate-800 hover:text-orange-500 py-2.5 border-b border-slate-50 last:border-0 transition-colors"
            >
              <span>{link.name}</span>
              <span className="text-orange-400">→</span>
            </a>
          ))}

          <div className="pt-3">
            <a
              href="#quote"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-white rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/25 active:scale-95 transition-all"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
