import { NavLink } from "react-router-dom";
import logo from "/assets/logo.webp";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="ABM DesignTech"
            className="h-10 w-auto drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
          />
          <span className="text-white font-semibold tracking-wide">
            ABM DesignTech
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-white/80">
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#f5c518] hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
