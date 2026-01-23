import { useState } from "react"
import logo from "../assets/logo.webp"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-xl border-b border-white/10 text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" aria-label="ABM DesignTech Home">
          <img src={logo} alt="ABM DesignTech Logo" width={150} height={50} />
        </a>

        {/* Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white mb-1" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>
      )}
    </nav>
  )
}
