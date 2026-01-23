export default function Contact() {
  return (
    <section id="contact" aria-label="Contact Section" className="min-h-screen pt-24 pb-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold mb-3">
          Contact <span className="text-yellow-400">Us</span>
        </h2>
        <p className="text-gray-400 mb-8">Let’s discuss your project. Reach us via call, WhatsApp, or email.</p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <a href="tel:+94771053402" aria-label="Call +94 77 105 3402" className="block text-lg font-semibold hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              📞 +94 77 105 3402
            </a>
            <a href="https://wa.me/94772336318" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +94 77 233 6318" className="block text-lg font-semibold hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              💬 WhatsApp +94 77 233 6318
            </a>
            <a href="mailto:contact@abmdesigntech.com" aria-label="Email contact@abmdesigntech.com" className="block text-lg font-semibold hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded">
              ✉️ contact@abmdesigntech.com
            </a>
          </div>

          <form className="space-y-4">
            <input className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition" placeholder="Your Name" />
            <input className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition" placeholder="Your Email" />
            <textarea className="w-full p-3 rounded-lg bg-neutral-900/80 border border-white/10 focus:outline-none focus:border-yellow-400 transition" rows={5} placeholder="Your Message" />
            <button className="w-full py-3 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
