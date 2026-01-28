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
            width={45}
            height={40}
            className="h-10 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <span className="font-semibold text-white">
            ABM DesignTech Pvt Ltd
          </span>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} ABM DesignTech Pvt Ltd. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
