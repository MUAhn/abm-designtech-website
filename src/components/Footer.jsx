import logo from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer
      className="bg-[#0b0b0b] border-t border-white/10 text-gray-400"
      aria-label="Website footer"
    >
      <div className="max-w-7xl mx-auto px-8 py-10 text-center">

        <div className="flex justify-center items-center gap-3 mb-4">
          <img
            src={logo}
            alt="ABM DesignTech logo"
            width={40}
            height={40}
            className="w-10 h-10"
            loading="lazy"
            decoding="async"
          />
          <span className="font-semibold text-white">
            ABM DesignTech
          </span>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} ABM DesignTech. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
