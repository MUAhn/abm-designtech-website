import { useState } from "react";

// ================= COMMERCIAL =================
import c1_1 from "../assets/projects/commercial/c1/c1-1 (1).webp";
import c1_2 from "../assets/projects/commercial/c1/c1-1 (2).webp";
import c1_3 from "../assets/projects/commercial/c1/c1-1 (3).webp";

import c2_1 from "../assets/projects/commercial/c2/c2-1 (1).webp";
import c2_2 from "../assets/projects/commercial/c2/c2-1 (2).webp";
import c2_3 from "../assets/projects/commercial/c2/c2-1 (3).webp";

import c3_1 from "../assets/projects/commercial/c3/c3-1 (1).webp";
import c3_2 from "../assets/projects/commercial/c3/c3-1 (2).webp";
import c3_3 from "../assets/projects/commercial/c3/c3-1 (3).webp";

// ================= INTERIOR =================
import i1_1 from "../assets/projects/interior/i1/i1-1 (1).webp";
import i1_2 from "../assets/projects/interior/i1/i1-1 (2).webp";
import i1_3 from "../assets/projects/interior/i1/i1-1 (3).webp";
import i1_4 from "../assets/projects/interior/i1/i1-1 (4).webp";
import i1_5 from "../assets/projects/interior/i1/i1-1 (5).webp";
import i1_6 from "../assets/projects/interior/i1/i1-1 (6).webp";

import i2_1 from "../assets/projects/interior/i2/i2-1 (1).webp";
import i2_2 from "../assets/projects/interior/i2/i2-1 (2).webp";
import i2_3 from "../assets/projects/interior/i2/i2-1 (3).webp";
import i2_4 from "../assets/projects/interior/i2/i2-1 (4).webp";
import i2_5 from "../assets/projects/interior/i2/i2-1 (5).webp";

import i3_1 from "../assets/projects/interior/i3/i3-1 (1).webp";
import i3_2 from "../assets/projects/interior/i3/i3-1 (2).webp";
import i3_3 from "../assets/projects/interior/i3/i3-1 (3).webp";
import i3_4 from "../assets/projects/interior/i3/i3-1 (4).webp";
import i3_5 from "../assets/projects/interior/i3/i3-1 (5).webp";
import i3_6 from "../assets/projects/interior/i3/i3-1 (6).webp";

// ================= RESIDENTIAL =================
import r1_1 from "../assets/projects/residential/r1/r1-1 (1).webp";
import r1_2 from "../assets/projects/residential/r1/r1-1 (2).webp";
import r1_3 from "../assets/projects/residential/r1/r1-1 (3).webp";

import r2_1 from "../assets/projects/residential/r2/r2-1 (1).webp";
import r2_2 from "../assets/projects/residential/r2/r2-1 (2).webp";
import r2_3 from "../assets/projects/residential/r2/r2-1 (3).webp";

import r3_1 from "../assets/projects/residential/r3/r3-1 (1).webp";
import r3_2 from "../assets/projects/residential/r3/r3-1 (2).webp";
import r3_3 from "../assets/projects/residential/r3/r3-1 (3).webp";

import r4_1 from "../assets/projects/residential/r4/r4-1 (1).webp";
import r4_2 from "../assets/projects/residential/r4/r4-1 (2).webp";
import r4_3 from "../assets/projects/residential/r4/r4-1 (3).webp";

// ================= DATA =================
const categories = {
  commercial: {
    title: "Commercial",
    cover: c1_1,
    projects: [
      { images: [c1_1, c1_2, c1_3] },
      { images: [c2_1, c2_2, c2_3] },
      { images: [c3_1, c3_2, c3_3] },
    ],
  },
  interior: {
    title: "Interior",
    cover: i1_1,
    projects: [
      { name: "Kitchen", images: [i1_1, i1_2, i1_3, i1_4, i1_5, i1_6] },
      { name: "Bathroom", images: [i2_1, i2_2, i2_3, i2_4, i2_5] },
      { name: "Others", images: [i3_1, i3_2, i3_3, i3_4, i3_5, i3_6] },
    ],
  },
  residential: {
    title: "Residential",
    cover: r1_1,
    projects: [
      { images: [r1_1, r1_2, r1_3] },
      { images: [r2_1, r2_2, r2_3] },
      { images: [r3_1, r3_2, r3_3] },
      { images: [r4_1, r4_2, r4_3] },
    ],
  },
};

export default function Projects() {
  const [openCategory, setOpenCategory] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((i) => (i + 1) % openProject.images.length);

  const prev = () =>
    setCurrentIndex(
      (i) => (i - 1 + openProject.images.length) % openProject.images.length
    );

  return (
    <section id="projects" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16 text-center text-gold">
          Our Projects
        </h2>

        {/* CATEGORY CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(categories).map(([key, cat]) => (
            <div
              key={key}
              onClick={() => setOpenCategory(key)}
              className="glow-card group relative cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={cat.cover}
                alt={cat.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">{cat.title}</h3>
                <p className="text-white/70">View Projects</p>
              </div>
            </div>
          ))}
        </div>

        {/* CATEGORY POPUP */}
        {openCategory && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
            <div className="bg-[#0b0b0b] max-w-6xl w-full rounded-xl p-8 border border-white/10">

              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold">
                  {categories[openCategory].title} Projects
                </h3>
                <button
                  onClick={() => setOpenCategory(null)}
                  className="text-white/70 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {categories[openCategory].projects.map((p, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setOpenProject(p);
                      setCurrentIndex(0);
                    }}
                    className="glow-card relative cursor-pointer overflow-hidden rounded-xl group"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-lg font-semibold">{p.name}</h4>
                      <p className="text-sm text-white/70">View Gallery</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

        {/* IMAGE VIEWER */}
        {openProject && (
          <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center overflow-hidden">

            <button className="absolute top-6 right-6 text-white text-3xl z-50" onClick={() => setOpenProject(null)}>✕</button>
            <button className="absolute left-6 text-white text-5xl z-50" onClick={prev}>‹</button>

            <div className="relative w-full h-full flex items-center justify-center">

              {/* IMAGE + WATERMARK AS ONE UNIT */}
              <div
                key={currentIndex}
                className="relative animate-[fadeSlideIn_0.7s_ease-in-out_forwards]"
              >
                <img
                  src={openProject.images[currentIndex]}
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                />

                {/* WATERMARK ATTACHED */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                  <span
                    className="text-white text-6xl md:text-7xl font-bold tracking-widest opacity-30"
                    style={{
                      textShadow: "0 0 20px rgba(0,0,0,0.6), 0 0 40px rgba(0,0,0,0.6)",
                      WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                    }}
                  >
                    ABM DESIGNTECH
                  </span>
                </div>
              </div>

            </div>

            <button className="absolute right-6 text-white text-5xl z-50" onClick={next}>›</button>

          </div>
        )}

      </div>
    </section>
  );
}