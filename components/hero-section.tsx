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

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-tight text-white">
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
            Frontend apasionado por crear experiencias atractivas con{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              React
            </span>{" "}
            y{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
              Next.js
            </span>.
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
    </section>
  );
}
