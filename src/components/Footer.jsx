import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <img
          src="/assets/logo.webp"
          alt="ABM DesignTech Logo"
          width={120} height={40}
        />
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="text-white md:hidden"
        >
          Menu
        </button>
        <ul className={`md:flex md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all ${open ? "max-h-64" : "max-h-0 overflow-hidden"}`}>
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="block px-4 py-2 text-white hover:text-yellow-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
