import logo from "../assets/logo.webp";

export default function Navbar() {
  return (
    <header
      className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10"
      role="banner"
    >
      {/* Skip to content link (for accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-4 top-4 bg-yellow-500 text-black px-4 py-2 rounded-lg z-[100]"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <img
            src={logo}
            alt="ABM DesignTech logo"
            width={45}
            height={40}
            className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(245,197,24,0.6)]"
            loading="lazy"
            decoding="async"
          />
          <span className="text-white font-semibold tracking-wide">
            ABM DesignTech
          </span>
        </a>

        {/* Navigation */}
        <nav
          className="hidden md:flex gap-8 text-white/80"
          role="navigation"
          aria-label="Main navigation"
        >
          {["Home", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              aria-label={`Go to ${item} section`}
              className="relative px-2 py-2 hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#f5c518] hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
