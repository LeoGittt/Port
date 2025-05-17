"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Sparkles } from "lucide-react";
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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black overflow-hidden">
      {/* Vercel-style gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#333_0%,#000_70%)] opacity-20"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 to-transparent opacity-30"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Animated dots */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange-500"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Eyebrow - Vercel style */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 mb-2 font-mono"
          >
            <div className="h-px w-5 bg-gradient-to-r from-transparent to-orange-400/50"></div>
            <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
              Portfolio
            </span>
            <div className="h-px w-5 bg-gradient-to-r from-orange-400/50 to-transparent"></div>
          </motion.div>

          {/* Main heading with animated text */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-1.5 mb-3">
                <Code className="h-4 w-4 text-neutral-400" />
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                  Frontend Developer
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight text-white">
                <span className="text-neutral-400">Hola, soy </span>
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white relative z-10">
                    <span className="bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent">
                      Leonel González
                    </span>
                  </span>
                  <span className="absolute left-0 right-0 bottom-2 h-[0.4rem] bg-gradient-to-r from-orange-500/40 to-orange-300/40 -z-10 rounded-full"></span>
                  <motion.span
                    className="absolute -top-6 -right-4 hidden md:block"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-orange-400" />
                  </motion.span>
                </motion.span>
              </h1>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-md text-neutral-300 max-w-[650px] mx-auto leading-relaxed font-mono"
          >
            Soy un frontend que disfruta dar vida a las ideas, cuidando cada
            detalle para que la experiencia del usuario sea fluida, atractiva y
            moderna. Me encanta trabajar con{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              React
            </span>{" "}
            y{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              Next.js
            </span>{" "}
            para lograrlo.
          </motion.p>

          {/* Buttons - Vercel style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6"
          >
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group relative bg-black h-12 w-full sm:w-44 border border-gray-900 hover:border-orange-400/50 text-center px-6 text-white text-sm font-mono rounded-lg overflow-hidden transition-all duration-300 hover:bg-neutral-900/90"
              >
                <span className="relative z-10">Ver Proyectos</span>
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                  <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>

          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Vercel style */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" scroll={true}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/50 hover:border-orange-400/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-4 w-4 text-neutral-300" />
            </motion.div>
          </Button>
          <span className="sr-only">Scroll down</span>
        </Link>
      </motion.div>
    </section>
  );
}
