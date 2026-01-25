import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      title: "BIM Modeling",
      desc: "High quality 3D BIM models for design coordination and construction."
    },
    {
      title: "4D Planning",
      desc: "Construction sequencing and time-based simulation using BIM."
    },
    {
      title: "5D Cost Estimation",
      desc: "Accurate quantity takeoffs and cost control using BIM models."
    },
    {
      title: "Clash Detection",
      desc: "Identify and resolve conflicts before construction begins."
    },
    {
      title: "Shop Drawings",
      desc: "Detailed construction drawings extracted directly from BIM models."
    },
    {
      title: "As-Built Models",
      desc: "Accurate digital twin of your completed project."
    },
  ]

  return (
    <section id="services" className="pt-24 pb-24 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Our <span className="text-yellow-400">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glow-card border border-white/10 rounded-xl p-6 bg-white/5"
            >
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
