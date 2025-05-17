"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect as useIsomorphicLayoutEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  Github,
  Linkedin,
  Instagram,
  Code,
  Layers,
  Star,
} from "lucide-react";

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    href: "https://github.com/LeoGittt",
    icon: <Github className="h-4 w-4" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/leonel-gonz%C3%A1lez",
    icon: <Linkedin className="h-4 w-4" />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/leonel_gnzz/",
    icon: <Instagram className="h-4 w-4" />,
    label: "Instagram",
  },
];

const skills = [
  { name: "React", color: "from-cyan-400 to-cyan-500", icon: "⚛️" },
  { name: "Next.js", color: "from-white to-gray-300", icon: "⏭️" },
  { name: "TypeScript", color: "from-blue-400 to-blue-500", icon: "📘" },
  { name: "Python", color: "from-yellow-400 to-yellow-500", icon: "🐍" },
  { name: "Framer Motion", color: "from-purple-400 to-purple-500", icon: "🎬" },
  { name: "JavaScript", color: "from-yellow-300 to-yellow-400", icon: "📜" },
];

const stats = [
  { value: "2+", label: "Años de Experiencia", icon: "🕒" },
  { value: "5+", label: "Proyectos Completados", icon: "🚀" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const handleDownloadCV = () => {
    window.open("/cvv.pdf", "_blank");
  };

  // Configurar animaciones con GSAP
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de fondo dinámico
      gsap.to(".about-bg-gradient", {
        opacity: 0.3,
        y: 50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Animación de entrada de la sección
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-section-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".about-image-container",
          {
            x: -40,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.6"
        )
        .from(
          ".about-content-item",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
          },
          "-=0.5"
        );

      // Animación de skills
      gsap.from(".about-skill", {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.5,
        scrollTrigger: {
          trigger: ".about-skills-section",
          start: "top 85%",
        },
      });

      // Animación de stats
      gsap.from(".about-stat", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".about-stats-section",
          start: "top 85%",
        },
      });

      // Animación del divider
      gsap.from(".about-divider-star", {
        scale: 0,
        rotation: 180,
        duration: 1,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
        },
      });

      gsap.from([".about-divider-line-left", ".about-divider-line-right"], {
        scaleX: 0,
        duration: 1.2,
        transformOrigin: "center",
        stagger: 0.2,
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 85%",
        },
      });

      // Efecto hover en imagen
      gsap.set(".about-image-overlay", { opacity: 0 });
      gsap.set(".about-image-border", { opacity: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Efectos hover
  const handleImageHover = () => {
    gsap.to(".about-image", { scale: 1.03, duration: 0.8 });
    gsap.to(".about-image-overlay", { opacity: 0.7, duration: 0.3 });
    gsap.to(".about-image-border", { opacity: 1, duration: 0.3 });
    gsap.to(".about-image-corner-top", { opacity: 1, duration: 0.3 });
    gsap.to(".about-image-corner-bottom", { opacity: 1, duration: 0.3 });
  };

  const handleImageLeave = () => {
    gsap.to(".about-image", { scale: 1, duration: 0.8 });
    gsap.to(".about-image-overlay", { opacity: 0, duration: 0.3 });
    gsap.to(".about-image-border", { opacity: 0, duration: 0.3 });
    gsap.to(".about-image-corner-top", { opacity: 0, duration: 0.3 });
    gsap.to(".about-image-corner-bottom", { opacity: 0, duration: 0.3 });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-black overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="about-bg-gradient absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 blur-[120px]"></div>
      </div>

      <div className="container max-w-[1100px] px-4 md:px-6 mx-auto relative z-10">
        {/* Encabezado */}
        <div className="flex flex-col items-center space-y-2 mb-12 sm:mb-16 md:mb-20 text-center">
          <span className="about-section-title text-xs uppercase tracking-widest text-orange-500/90">
            Perfil
          </span>
          <h2 className="about-section-title text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white">
            Sobre Mí
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Columna izquierda - Imagen */}
          <div
            ref={imageRef}
            className="about-image-container md:col-span-2 flex flex-col items-center"
          >
            {/* Contenedor de imagen */}
            <div
              className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-none overflow-hidden rounded-2xl group"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
            >
              {/* Overlay y bordes */}
              <div className="about-image-overlay absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent z-10 transition-opacity duration-300 rounded-2xl"></div>
              <div className="about-image-border absolute inset-0 border-2 border-orange-500/30 z-20 transition-opacity duration-300 rounded-2xl"></div>
              <div className="about-image-corner-top absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-orange-500/30 z-20 transition-opacity duration-300 rounded-tr-2xl"></div>
              <div className="about-image-corner-bottom absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-orange-500/30 z-20 transition-opacity duration-300 rounded-bl-2xl"></div>

              {/* Imagen */}
              <div className="absolute inset-0 bg-[#111] rounded-2xl overflow-hidden">
                <Image
                  src="/fotoo.png"
                  alt="Leonel González"
                  width={500}
                  height={667}
                  className="about-image object-cover w-full h-full transition-transform duration-700 ease-out rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex-shrink-0 about-content-item"
                  onMouseEnter={() =>
                    gsap.to(`.social-icon-${index}`, {
                      y: -3,
                      boxShadow: "0 5px 15px rgba(249, 115, 22, 0.2)",
                      duration: 0.3,
                    })
                  }
                  onMouseLeave={() =>
                    gsap.to(`.social-icon-${index}`, {
                      y: 0,
                      boxShadow: "none",
                      duration: 0.3,
                    })
                  }
                >
                  <Button
                    size="icon"
                    variant="outline"
                    className={`social-icon-${index} rounded-lg border-neutral-800 bg-black text-orange-500 h-10 w-10 transition-all duration-300 hover:bg-[#151515]`}
                  >
                    {link.icon}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div
            ref={contentRef}
            className="space-y-6 sm:space-y-8 md:space-y-10 md:col-span-3"
          >
            {/* Título y descripción */}
            <div className="text-center md:text-left about-content-item">
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-neutral-900/50 rounded-full border border-neutral-800 w-max mx-auto md:mx-0">
                <Code className="h-4 w-4 text-orange-500" />
                <span className="text-xs uppercase tracking-widest text-neutral-400">
                  Frontend Developer
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
                Leonel González
              </h3>
              <p className="text-sm text-neutral-400">
                Especializado en crear experiencias digitales modernas e
                interactivas
              </p>
            </div>

            {/* Descripción */}
            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed about-content-item">
              <p>
                Desarrollador frontend con experiencia en la creación de
                interfaces de usuario atractivas, responsivas y de alto
                rendimiento. Especializado en React, Next.js y TypeScript, con
                un enfoque en crear experiencias de usuario excepcionales.
              </p>
              <p>
                Mi objetivo es construir aplicaciones web que no solo se vean
                bien, sino que también ofrezcan una experiencia de usuario
                fluida y accesible. Comprometido con escribir código limpio,
                mantenible y optimizado para el rendimiento.
              </p>
            </div>

            {/* Formación */}
            <div className="about-content-item">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-4 w-4 text-orange-500" />
                <span className="text-xs uppercase tracking-widest text-orange-500">
                  Formación
                </span>
              </div>
              <div className="space-y-3">
                <div className="border border-neutral-800 bg-[#111] rounded-xl p-4 hover:border-orange-500/30 transition-colors duration-300">
                  <p className="font-medium text-white">Frontend Developer</p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Soy Henry - Bootcamp
                  </p>
                </div>
                <div className="border border-neutral-800 bg-[#111] rounded-xl p-4 hover:border-orange-500/30 transition-colors duration-300">
                  <p className="font-medium text-white">
                    Tecnicatura Universitaria en Programación
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Universidad Tecnológica Nacional (UTN) - En curso
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="about-skills-section about-content-item">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="h-4 w-4 text-orange-500" />
                <span className="text-xs uppercase tracking-widest text-orange-500">
                  Tecnologías principales
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`about-skill px-3 py-1.5 bg-[#111] border border-neutral-800 rounded-lg text-xs font-medium bg-gradient-to-r ${skill.color} text-transparent bg-clip-text hover:bg-[#151515] hover:border-orange-500/30 transition-all duration-300`}
                    onMouseEnter={() =>
                      gsap.to(`.about-skill:nth-child(${index + 1})`, {
                        y: -3,
                        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                        duration: 0.3,
                      })
                    }
                    onMouseLeave={() =>
                      gsap.to(`.about-skill:nth-child(${index + 1})`, {
                        y: 0,
                        boxShadow: "none",
                        duration: 0.3,
                      })
                    }
                  >
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="about-stats-section grid grid-cols-2 gap-4 about-content-item">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="about-stat bg-[#111] border border-neutral-800 hover:border-orange-500/30 overflow-hidden relative group rounded-xl transition-colors"
                  onMouseEnter={() =>
                    gsap.to(`.about-stat:nth-child(${index + 1})`, {
                      y: -3,
                      boxShadow: "0 10px 25px rgba(249, 115, 22, 0.1)",
                      duration: 0.3,
                    })
                  }
                  onMouseLeave={() =>
                    gsap.to(`.about-stat:nth-child(${index + 1})`, {
                      y: 0,
                      boxShadow: "none",
                      duration: 0.3,
                    })
                  }
                >
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-xl sm:text-2xl font-medium text-white group-hover:text-orange-400 transition-colors">
                      {stat.icon} {stat.value}
                    </p>
                    <p className="text-xs text-neutral-400 mt-1">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Botón Descargar CV */}
            <div className="about-content-item">
              <Button
                onClick={handleDownloadCV}
                className="rounded-lg h-11 px-6  bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-medium shadow-lg hover:from-orange-500 hover:to-orange-400 hover:shadow-orange-500/30 transition-all duration-300 group"
                onMouseEnter={() =>
                  gsap.to(".download-cv-button", {
                    y: -2,
                    boxShadow: "0 5px 20px rgba(249, 115, 22, 0.4)",
                    duration: 0.3,
                  })
                }
                onMouseLeave={() =>
                  gsap.to(".download-cv-button", {
                    y: 0,
                    boxShadow: "0 5px 15px rgba(249, 115, 22, 0.3)",
                    duration: 0.3,
                  })
                }
              >
                <Download className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          ref={dividerRef}
          className="flex justify-center mt-16 sm:mt-20 md:mt-24"
        >
          <div className="flex items-center gap-3">
            <div className="about-divider-line-left h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"></div>
            <Star className="about-divider-star h-4 w-4 text-orange-500/60" />
            <div className="about-divider-line-right h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-orange-500/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
