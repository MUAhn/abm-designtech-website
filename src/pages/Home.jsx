import { motion } from "framer-motion"

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white pt-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="relative text-center px-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-6xl font-bold mb-6"
        >
          ABM <span className="text-yellow-400">DesignTech</span>
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
        >
          Smart. Digital. BIM-powered construction & design solutions.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
          >
            Get Quote
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-white/20 hover:border-yellow-400 transition"
          >
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
