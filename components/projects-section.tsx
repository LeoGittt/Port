"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "EvenTop - Venta de Tickets",
    description:
      "Plataforma para la compra y gestión de tickets para eventos, disponible en web y móvil.",
    image: "/eventop.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://eventop-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Clínica de Masajes",
    description:
      "Sitio web y aplicación móvil para la reserva de turnos y gestión de servicios en una clínica de masajes.",
    image: "/clinica.jpg",
    tags: ["Next.js", "Typescript", "Tailwind"],
    demoUrl: "https://kzmgzmwe3mc3vfn7llk6.lite.vusercontent.net/",
  },
  {
    id: 3,
    title: "La Marina - Ecommerce",
    description:
      "Tienda en línea para la venta de productos de bazar y limpieza, con carrito de compras y gestión de stock.",
    image: "/marina.jpg",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    demoUrl: "https://frontend-la-marina.vercel.app/",
  },
  {
    id: 4,
    title: "Gestión de Remitos",
    description:
      "Aplicación web para la administración y control de remitos en una empresa.",
    image: "/4.png",
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    demoUrl: "https://v0-colorshop-remitos-jdu4ku.vercel.app/",
  },
  {
    id: 5,
    title: "Diseño y Desarrollo Web para Souls Digitals",
    description:
      "Desarrollé una página web institucional para Souls Digitals, una agencia de marketing digital, con el objetivo de transmitir profesionalismo, confianza y una identidad visual moderna.",
    image: "/soulss.jpg",
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    demoUrl: "https://www.soulsdigitals.blog/",
  },
  {
    id: 6,
    title: "Desarrollo Web para Aura Asesorías – Estudio Contable",
    description:
      "Diseñé y desarrollé el sitio web institucional de Aura Asesorías, un estudio contable orientado a brindar servicios financieros y tributarios personalizados.",
    image: "/aura.jpg",
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Framer Motion"],
    demoUrl: "https://auracontables.vercel.app/",
  },
  {
    id: 7,
    title: "Boostly – Agencia de Marketing y Desarrollo Web",
    description:
      "Diseñé y desarrollé la presencia digital de Boostly, una agencia especializada en soluciones de marketing y desarrollo web, utilizando tecnologías modernas como Next.js y TypeScript.",
    image: "/booostly.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://www.boostlyagency.online/",
  },
  {
    id: 8,
    title: "BYAS – Soluciones de Ingeniería",
    description:
      "Diseñé y desarrollé el sitio web institucional de BYAS, una empresa de ingeniería enfocada en brindar soluciones técnicas integrales, utilizando un stack moderno basado en Next.js y TypeScript.",
    image: "/byass.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://byas.vercel.app/",
  },
  {
    id: 9,
    title: "Mueblito – Tienda de Muebles",
    description:
      "Diseñé y desarrollé la plataforma web de Mueblito, una tienda de muebles enfocada en ofrecer productos funcionales y estéticos, con una interfaz moderna y responsiva construida con Next.js y TypeScript.",
    image: "/mueblito.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://art-ydeisgn.vercel.app/",
  },
  {
    id: 10,
    title: "S I M U Sistema Integral ",
    description: "Sistema Integral Municipal Unificado",
    image: "/6.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://reclamos-frontend.vercel.app/",
  },
  {
    id: 11,
    title: "Cuatro A Estudio Contable",
    description: "Sitio web sobre un estudio contable.",
    image: "/7.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://cuatro-aestudio.vercel.app/",
  },
  {
    id: 12,
    title: "Auto Web San Juan",
    description: "Tienda de autos Nuevos y Usados",
    image: "/77.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://auto-web-sanjuan-sypk.vercel.app/",
  },
  {
    id: 13,
    title: "ISR Performance Mendoza",
    description: "servicios especializados para maximizar el rendimiento y personalización de tu vehículo",
    image: "/777.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Lucide-react",
      "Framer Motion",
      "Shadcn",
      "Hooks",
    ],
    demoUrl: "https://isr-ebon.vercel.app/",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Vercel-inspired section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Proyectos
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-px w-12 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-xl mx-auto"
          >
            Una selección de mis trabajos más recientes en desarrollo web y
            diseño de interfaces.
          </motion.p>
        </div>

        {/* Vercel-inspired projects grid */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  {/* Project image with gradient overlay */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-zinc-900/0 opacity-70" />

                    {/* Vercel-inspired tag pill */}
                    <div className="absolute top-4 right-4">
                      {/* <div className="px-2 py-1 text-xs font-medium bg-zinc-800/90 text-zinc-300 rounded-full border border-zinc-700/50 backdrop-blur-sm">
                        {project.tags[0]}
                      </div> */}
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Vercel-inspired tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs text-zinc-500">
                          {tag}
                          {tagIndex < Math.min(2, project.tags.length - 1)
                            ? " • "
                            : ""}
                        </span>
                      ))}
                    </div>

                    {/* Vercel-inspired link */}
                    <div className="flex items-center text-sm text-orange-500 font-medium">
                      <span>Ver proyecto</span>
                      <ArrowUpRight
                        className={cn(
                          "ml-1 h-3.5 w-3.5 transition-transform duration-300",
                          hoveredProject === project.id
                            ? "translate-x-0.5 -translate-y-0.5"
                            : ""
                        )}
                      />
                    </div>
                  </div>

                  {/* Vercel-inspired hover gradient border */}
                  <div
                    className={cn(
                      "absolute inset-0 border border-orange-500/0 rounded-lg transition-opacity duration-300",
                      hoveredProject === project.id
                        ? "opacity-100 border-orange-500/50"
                        : "opacity-0"
                    )}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
