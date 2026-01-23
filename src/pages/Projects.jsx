import { motion } from "framer-motion";
import project1 from "../assets/projects/project1.webp";
import project2 from "../assets/projects/project2.webp";
import project3 from "../assets/projects/project3.webp";

const projects = [
  { id: 1, title: "Luxury Residence", img: project1, alt: "Luxury Residence - ABM DesignTech" },
  { id: 2, title: "Commercial Complex", img: project2, alt: "Commercial Complex - ABM DesignTech" },
  { id: 3, title: "Office Renovation", img: project3, alt: "Office Renovation - ABM DesignTech" },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects Section"
      className="w-full bg-black py-16 px-4 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(({ id, title, img, alt }) => (
          <div key={id} className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[16/9] w-full">
              <img
                src={img}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover"
                width={640}
                height={360}
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
