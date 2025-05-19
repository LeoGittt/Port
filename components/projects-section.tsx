"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-black relative">
   
      

      <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-block mb-4">
            <Badge
              variant="outline"
              className="px-4 py-1 text-orange-400 border-orange-500/30 bg-orange-500/5 rounded-full"
            >
              Portfolio
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Mis Proyectos
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Una selección de mis trabajos más recientes. Cada proyecto
            representa un desafío único resuelto con soluciones creativas y
            técnicas.
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group h-full"
            >
              <Card className="h-full overflow-hidden bg-zinc-900/50 border-zinc-800 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full flex justify-between items-center">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none">
                        {project.category}
                      </Badge>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all h-8"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-3.5 w-3.5 mr-1" />
                            Demo
                          </a>
                        </Button>
                        {project.repoUrl !== "#" && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all h-8"
                            asChild
                          >
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-3.5 w-3.5 mr-1" />
                              Código
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-800">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="link"
                      className="mt-4 p-0 text-orange-400 hover:text-orange-300 justify-start w-fit h-auto"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver proyecto <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </a>
                    </Button>
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
