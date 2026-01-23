import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="min-h-screen pt-24 pb-24 bg-neutral-950 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Let’s discuss your project. Reach us via call, WhatsApp, or email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-6"
          >
            {[
              { label: "Phone", value: "+94 77 105 3402" },
              { label: "WhatsApp", value: "+94 77 233 6318" },
              { label: "Email", value: "contact@abmbuildtech.com" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }} // Reduced scale/translation
                className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
              >
                <div className="relative">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
          >
            <form className="relative space-y-4">
              <input
                type="text"
                name="name"
                aria-label="Your Name"
                required
                className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                aria-label="Your Email"
                required
                className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                aria-label="Your Message"
                required
                rows={5}
                className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
