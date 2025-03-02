"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-3xl transform -translate-y-1/2"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute -bottom-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-secondary/10 blur-3xl transform translate-y-1/2"
          style={{ transform: `translateY(-${scrollY * 0.1}px)` }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white">
              <span className="font-mono text-gray-50">Hola</span>, soy{" "}
              <span className="bg-gradient-to-r font-mono text-orange-500 from-primary to-secondary  bg-clip-text">
                Leonel Gonzalez
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl font-mono text-gray-300 max-w-[700px] mx-auto">
              Desarrollador Web & Diseñador UI/UX
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href={"#projects"}>
            <Button size="lg" className="rounded-full px-8 font-mono">
              Ver Proyectos
            </Button>
            </Link>
            <Link href={"#contact"}>
            
            <Button size="lg" variant="outline" className="rounded-full px-8 font-mono">
              Contacto
            </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Botón de flecha animado */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
          <ArrowDown className="h-6 w-6 text-white" />
        </Button>
      </div>
    </section>
  );
}