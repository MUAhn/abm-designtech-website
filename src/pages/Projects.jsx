import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";

const projects = [project1, project2, project3];

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
                alt={`Project ${i + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
