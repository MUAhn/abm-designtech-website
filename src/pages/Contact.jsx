import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="pt-24 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Contact <span className="text-yellow-400">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Let’s discuss your project</h3>
            <p className="text-gray-400 mb-6">
              We provide BIM and digital construction solutions for residential and commercial projects.
            </p>

            <div className="space-y-4 text-gray-300">
              <div>📞 +94 XX XXX XXXX</div>
              <div>📧 abmdesigntech@gmail.com</div>
              <div>📍 Sri Lanka</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Your Name"
            />
            <input
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Your Email"
            />
            <textarea
              rows="5"
              className="w-full p-3 bg-white/5 border border-white/10 rounded-lg"
              placeholder="Your Message"
            />

            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
