"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { ArrowDown, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  // Configurar animaciones con GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación parallax del gradiente de fondo
      gsap.to(gradientRef.current, {
        y: () => window.scrollY * 0.08,
        opacity: () => Math.max(0, 0.4 - window.scrollY * 0.001),
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Animación de entrada del contenido
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Elementos en secuencia
      tl.from(".hero-eyebrow", {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-title",
          {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .from(
          ".hero-tagline",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-scroll-indicator",
          {
            y: 10,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Animación continua del ícono Sparkles
      gsap.to(".hero-sparkle", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Animación del scroll indicator
      gsap.to(".hero-arrow", {
        y: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]"></div>

      {/* Animated gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={gradientRef}
          className="absolute top-0 left-[20%] right-[20%] h-[30%] rounded-full bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-[80px]"
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500/80 mb-2">
            <div className="h-px w-5 bg-orange-500/40"></div>
            <span>Portfolio</span>
            <div className="h-px w-5 bg-orange-500/40"></div>
          </div>

          {/* Main heading */}
          <div className="relative">
            <div className="hero-title flex flex-col items-center">
              <div className="inline-flex items-center gap-1.5 mb-3">
                <Code className="h-4 w-4 text-neutral-500" />
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  Frontend Developer
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-tight text-white">
                <span className="text-neutral-400">Hola,soy </span>
                <span className="relative inline-block hero-title-name">
                  <span className="text-white relative z-10">
                    Leonel González
                  </span>
                  <span className="absolute left-0 right-0 bottom-2 h-[0.6rem] bg-orange-500/20 -z-10"></span>
                  <span className="hero-sparkle absolute -top-6 -right-4 hidden md:block">
                    <Sparkles className="h-4 w-4 text-orange-500/70" />
                  </span>
                </span>
              </h1>
            </div>
          </div>

          {/* Tagline */}
          <p className="hero-tagline text-sm sm:text-base text-neutral-400 max-w-[550px] mx-auto leading-relaxed">
            Especializado en crear experiencias web modernas, interactivas y de
            alto rendimiento con React y Next.js
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="hero-button group relative bg-neutral-900 h-10 w-full sm:w-40 border border-neutral-800 text-center p-2 text-white text-sm font-mono rounded-lg overflow-hidden hover:border-orange-500 hover:text-orange-300 transition-all"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="hero-button group relative bg-transparent h-10 w-full sm:w-40 border border-neutral-800 text-center p-2 text-white text-sm font-mono rounded-lg overflow-hidden hover:border-orange-500 hover:bg-neutral-900/80 hover:text-orange-300 transition-all"
              >
                <span className="relative z-10">Contacto</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

     
    </section>
  );
}
