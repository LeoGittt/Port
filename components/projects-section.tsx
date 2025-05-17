"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect as useIsomorphicLayoutEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

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
    demoUrl: "https://boostly-t749.vercel.app/",
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
    description: "AutoWeb San Juan · Concesionario",
    image: "/12.jpg",
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
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Configurar animaciones con GSAP
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título y descripción
      gsap.from(".project-section-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".project-section-divider", {
        scaleX: 0,
        duration: 1,
        ease: "expo.out",
      });

      gsap.from(".project-section-description", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });

      // Animación de los proyectos
      gsap.from(".project-item", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Efecto parallax para las imágenes
      gsap.utils
        .toArray(".project-image-container")
        .forEach((container: any) => {
          gsap.to(container.querySelector("img"), {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Efecto hover con GSAP para mejor performance
  const handleProjectHover = (id: number) => {
    setHoveredProject(id);
    gsap.to(`.project-item-${id} .project-image`, {
      scale: 1.05,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(`.project-item-${id} .project-border`, {
      opacity: 1,
      borderColor: "rgba(249, 115, 22, 0.5)",
      duration: 0.3,
    });
  };

  const handleProjectLeave = (id: number) => {
    setHoveredProject(null);
    gsap.to(`.project-item-${id} .project-image`, {
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(`.project-item-${id} .project-border`, {
      opacity: 0,
      borderColor: "rgba(249, 115, 22, 0)",
      duration: 0.3,
    });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-black overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        {/* Encabezado con animaciones */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={titleRef}
            className="project-section-title text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Proyectos
          </h2>

          <div className="project-section-divider h-px w-12 bg-gradient-to-r from-orange-500 to-orange-300 mx-auto mb-6" />

          <p className="project-section-description text-zinc-400 text-lg max-w-xl mx-auto">
            Una selección de mis trabajos más recientes en desarrollo web y
            diseño de interfaces.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-item project-item-${project.id} group relative`}
              onMouseEnter={() => handleProjectHover(project.id)}
              onMouseLeave={() => handleProjectLeave(project.id)}
            >
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
                  {/* Contenedor de imagen con efecto parallax */}
                  <div className="project-image-container relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="project-image object-cover transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/70 to-zinc-900/0 opacity-70" />
                  </div>

                  {/* Contenido del proyecto */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tags de tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs text-zinc-500 hover:text-orange-400 transition-colors"
                        >
                          {tag}
                          {index < Math.min(2, project.tags.length - 1)
                            ? " • "
                            : ""}
                        </span>
                      ))}
                    </div>

                    {/* Enlace con animación */}
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

                  {/* Borde animado al hacer hover */}
                  <div className="project-border absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
