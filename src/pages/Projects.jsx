import { motion } from "framer-motion"

const projects = [
  { id: 1, title: "Luxury Residence", img: "/assets/project1.webp", alt: "Luxury Residence" },
  { id: 2, title: "Commercial Complex", img: "/assets/project2.webp", alt: "Commercial Complex" },
  { id: 3, title: "Office Renovation", img: "/assets/project3.webp", alt: "Office Renovation" },
]

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects Section" className="w-full bg-black py-16 px-4 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(({ id, title, img, alt }) => (
          <div key={id} className="relative rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[16/9] w-full">
              <img
                src={img}
                alt={alt}
                width={640} height={360}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
