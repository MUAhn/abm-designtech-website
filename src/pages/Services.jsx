import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "2D Drafting", desc: "High-precision construction drawings and technical documentation." },
    { title: "3D BIM Modeling", desc: "Detailed 3D models for visualization, clash detection, and coordination." },
    { title: "4D Construction Planning", desc: "Time-based simulation to optimize construction sequences." },
    { title: "5D Cost Estimation", desc: "Integrated cost planning and quantity takeoffs using BIM." },
  ];

  return (
    <section id="services" aria-label="Services Section" className="min-h-screen pt-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-12">
          <h2 className="text-4xl font-bold">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            We provide end-to-end digital construction solutions powered by BIM and modern project workflows.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative overflow-hidden p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 text-yellow-400 flex items-center justify-center font-bold mb-4" aria-hidden="true">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
