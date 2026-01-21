export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-white/10 text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">

        {/* Company */}
        <div>
          <h3 className="text-white text-lg font-bold mb-3">ABM DesignTech</h3>
          <p className="text-sm">
            Smart. Digital. BIM-powered construction & design solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <a
            href="tel:+94771053402"
            className="block text-sm hover:text-yellow-400 transition"
          >
            📞 +94 77 105 3402
          </a>

          <a
            href="mailto:contact@abmdesigntech.com"
            className="block text-sm hover:text-yellow-400 transition"
          >
            ✉️ contact@abmdesigntech.com
          </a>
          <p className="text-sm">📍 Sri Lanka</p>
        </div>

      </div>

      <div className="border-t border-white/10 text-center py-4 text-sm">
        © {new Date().getFullYear()} ABM DesignTech. All rights reserved.
      </div>
    </footer>
  )
}
