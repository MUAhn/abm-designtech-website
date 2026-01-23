export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="min-h-screen pt-24 pb-24 bg-neutral-950 text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-3">
          Contact <span className="text-yellow-400">Us</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Let’s discuss your project. Reach us via call, WhatsApp, or email.
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            {[
              { label: "Phone", value: "+94 77 105 3402", href: "tel:+94771053402" },
              { label: "WhatsApp", value: "+94 77 233 6318", href: "https://wa.me/94772336318" },
              { label: "Email", value: "contact@abmbuildtech.com", href: "mailto:contact@abmbuildtech.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                aria-label={`Contact via ${item.label}`}
                className="block relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="relative">
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form className="relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 overflow-hidden">
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              aria-label="Your Message"
              className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition"
            />
            <button
              type="submit"
              aria-label="Send Message"
              className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/20"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}
