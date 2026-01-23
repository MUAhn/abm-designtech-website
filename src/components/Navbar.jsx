import { useEffect, useState, memo } from "react"
import { Menu, X } from "lucide-react"
import logo from "../assets/logo.png"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [active, setActive] = useState("home")
  const [open, setOpen] = useState(false)

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sections = ["home", "services", "projects", "contact"]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -40% 0px" }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    `block py-3 transition ${
      active === id ? "text-yellow-400" : "hover:text-yellow-400"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
            <img src={logo} alt="ABM" className="w-8 h-8 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-white font-bold text-lg">ABM DesignTech</div>
            <div className="text-xs text-gray-400">Build Smart. Build Digital.</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black border-t border-white/10 px-6 py-4 overflow-hidden"
          >
            <a onClick={() => setOpen(false)} href="#home" className={linkClass("home")}>Home</a>
            <a onClick={() => setOpen(false)} href="#services" className={linkClass("services")}>Services</a>
            <a onClick={() => setOpen(false)} href="#projects" className={linkClass("projects")}>Projects</a>
            <a onClick={() => setOpen(false)} href="#contact" className={linkClass("contact")}>Contact</a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="block mt-4 text-center px-5 py-3 rounded-lg bg-yellow-500 text-black font-semibold"
            >
              Get Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Memoize for performance
export default memo(Navbar)
