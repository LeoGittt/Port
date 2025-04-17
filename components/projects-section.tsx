"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      "Desarrollé una página web institucional para Souls Digitals, una agencia de marketing digital, con el objetivo de transmitir profesionalismo, confianza y una identidad visual moderna. ",
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
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
            Mis <span className="text-orange-500">Proyectos</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-gray-300 max-w-[700px]">
            Explora algunos de mis trabajos más recientes. Cada proyecto representa un desafío único que he abordado con
            creatividad y habilidades técnicas.
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full group bg-[#1a1a1a] border-[#2a2a2a]">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="icon" variant="secondary" className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full bg-[#2a2a2a] hover:bg-[#3a3a3a]">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-[#2a2a2a] rounded-full text-xs font-medium text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}