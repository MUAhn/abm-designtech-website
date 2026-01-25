const projects = [
  "/assets/project1.webp",
  "/assets/project2.webp",
  "/assets/project3.webp",
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-12 text-center text-gold">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((img, i) => (
            <div key={i} className="glow-card overflow-hidden">
              <img
                src={img}
                alt="Project"
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
