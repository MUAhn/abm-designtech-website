export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-24">
      <div className="text-center max-w-4xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="text-gold">BIM & Digital</span> Construction
          <br /> Solutions in Sri Lanka
        </h1>

        <p className="text-white/70 text-lg mb-10">
          We deliver high-end BIM, 3D modeling, 4D planning, and 5D cost
          estimation for modern construction projects.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-8 py-4 bg-gold text-black font-semibold rounded-xl glow-gold hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-gold text-gold rounded-xl hover:bg-gold hover:text-black transition"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  );
}
