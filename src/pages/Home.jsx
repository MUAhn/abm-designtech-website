import { motion } from "framer-motion"
import logo from "../assets/logo.webp"

export default function Home() {
  return (
    <section
      id="home"
      aria-label="Home Section"
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white pt-24"
    >
      <div className="relative z-10 text-center px-4">
        <motion.img
          src={logo}
          alt="ABM DesignTech Logo"
          className="w-32 mx-auto mb-6"
          width={256}
          height={256}
          loading="lazy"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Smart. Build Digital.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          BIM, 3D Modeling, 4D Planning & 5D Estimation in Sri Lanka
        </p>

        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          aria-label="Get a Quote"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
