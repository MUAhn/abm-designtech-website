import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import p1 from "../assets/projects/project1.jpg"
import p2 from "../assets/projects/project2.jpg"
import p3 from "../assets/projects/project3.jpg"

export default function Projects() {
  const [active, setActive] = useState(null)

  const projects = [
    { title: "Luxury Residence", image: p1 },
    { title: "Commercial Complex", image: p2 },
    { title: "Office Renovation", image: p3 },
  ]

  return (
    <section id="projects" className="pt-24 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold">
            Our <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3">
            A showcase of our BIM-powered design and construction works.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.01 }}
              onClick={() => setActive(p)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer"
            >
              {/* ✨ Light sweep */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent z-10" />

              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-400">Click to view</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full rounded-2xl shadow-2xl"
                />

                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-semibold">{active.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">Click outside to close</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
