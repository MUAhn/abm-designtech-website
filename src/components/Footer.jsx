import { useState } from "react";

// ✅ Import images
import c1a from "../assets/projects/commercial/office1-1.webp";
import c1b from "../assets/projects/commercial/office1-2.webp";
import c2a from "../assets/projects/commercial/office2-1.webp";

import r1a from "../assets/projects/residential/house1-1.webp";
import r1b from "../assets/projects/residential/house1-2.webp";

import i1a from "../assets/projects/interior/interior1-1.webp";
import i1b from "../assets/projects/interior/interior1-2.webp";

// ✅ Project Data
const PROJECTS = {
  commercial: [
    {
      title: "Office Complex",
      images: [c1a, c1b],
    },
    {
      title: "Commercial Building",
      images: [c2a],
    },
  ],

  residential: [
    {
      title: "Luxury House",
      images: [r1a, r1b],
    },
  ],

  interior: [
    {
      title: "Modern Interior",
      images: [i1a, i1b],
    },
  ],
};

export default function Projects() {
  const [active, setActive] = useState("commercial");

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-10 text-center text-gold">
          Our Projects
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          {["commercial", "residential", "interior"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                active === cat
                  ? "bg-gold text-black border-gold"
                  : "border-white/20 text-white hover:border-gold"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-16">

          {PROJECTS[active].map((project, i) => (
            <div key={i}>
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {project.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {project.images.map((img, idx) => (
                  <div key={idx} className="glow-card overflow-hidden">
                    <img
                      src={img}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
