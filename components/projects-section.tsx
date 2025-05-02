"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    id: 6,
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
    demoUrl: "https://boostly-t749.vercel.app/",
  },
  {
    id: 7,
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
    id: 8,
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
];

export function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Título de la sección */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block text-sm font-medium text-orange-500 tracking-wide uppercase mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-5">
            Mis <span className="text-orange-500">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500/30 mx-auto mb-5"></div>
          <p className="text-gray-400 text-lg max-w-xl font-mono mx-auto">
            Explora algunos de mis trabajos más recientes. Cada proyecto
            representa un desafío único que he abordado con creatividad y
            habilidades técnicas.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-lg border border-gray-800 bg-gradient-to-b from-[#111] to-[#0c0c0c] transition-all duration-200 hover:border-orange-500/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12),0_0_1px_rgba(249,115,22,0.2)]">
                {/* Imagen del proyecto */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Contenido del proyecto */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium bg-[#1a1a1a] text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Botón de demo */}
                  <div className="mt-auto">
                    <Button
                      asChild
                      className="w-full bg-transparent hover:bg-orange-500 text-white border border-gray-700 hover:border-orange-500 transition-colors duration-200"
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Ver proyecto</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
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
