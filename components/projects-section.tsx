"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EvenTop - Venta de Tickets",
    description:
      "Plataforma para la compra y gestión de tickets para eventos, disponible en web y móvil.",
    image: "/5.png",
    category: "Web y Móvil",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://lnkd.in/dYEQT4z8",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Clínica de Masajes",
    description:
      "Sitio web y aplicación móvil para la reserva de turnos y gestión de servicios en una clínica de masajes.",
    image: "/2.png",
    category: "Web y Móvil",
    tags: ["Next.js", "Typescript", "Tailwind"],
    demoUrl: "https://kzmgzmwe3mc3vfn7llk6.lite.vusercontent.net/",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "La Marina - Ecommerce",
    description:
      "Tienda en línea para la venta de productos de bazar y limpieza, con carrito de compras y gestión de stock.",
    image: "/3.png",
    category: "Web y Móvil",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    demoUrl: "https://frontend-la-marina.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Gestión de Remitos",
    description:
      "Aplicación web para la administración y control de remitos en una empresa.",
    image: "/4.png",
    category: "Web",
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    demoUrl: "https://v0-colorshop-remitos-jdu4ku.vercel.app/",
    repoUrl: "#",
  },
  {
    id: 5,
    title: "Diseño y Desarrollo Web para Souls Digitals",
    description:
      "Desarrollé una página web institucional para Souls Digitals, una agencia de marketing digital, con el objetivo de transmitir profesionalismo, confianza y una identidad visual moderna.",
    image: "/souls.jpg",
    category: "Web",
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    demoUrl: "https://www.soulsdigitals.blog/",
    repoUrl: "#",
  },
  {
    id: 6,
    title: "Desarrollo Web para Aura Asesorías – Estudio Contable",
    description:
      "Diseñé y desarrollé el sitio web institucional de Aura Asesorías, un estudio contable orientado a brindar servicios financieros y tributarios personalizados.",
    image: "/aura.jpg",
    category: "Web",
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Framer Motion"],
    demoUrl: "https://auracontables.vercel.app/",
    repoUrl: "#",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
            <span className="text-orange-500">Proyectos</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explora algunos de mis trabajos más recientes. Cada proyecto
            representa un desafío único que he abordado con creatividad y
            habilidades técnicas.
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden bg-[#111] rounded-lg">
                {/* Imagen del proyecto */}
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay con botones */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-100 text-black p-3 rounded-full transform transition-transform duration-300 hover:scale-110"
                      aria-label="Ver código"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Etiqueta de categoría */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium bg-black/60 text-orange-400 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 bg-[#1a1a1a] text-xs font-medium text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
