export default function Home() {
  return (
    <section
      id="home"
      aria-label="Home Section"
      className="relative w-full min-h-screen flex items-center justify-center bg-black text-white"
    >
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero.webp"
          alt="ABM DesignTech Hero Banner"
          className="w-full h-full object-cover"
          width={1920} height={1080}  // fixes CLS
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Build Smart. Build Digital.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          BIM, 3D Modeling, 4D Planning & 5D Estimation in Sri Lanka
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
