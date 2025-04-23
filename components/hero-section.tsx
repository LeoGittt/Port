"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.15]"></div>

      {/* Animated gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top gradient */}
        <div
          className="absolute top-0 left-[20%] right-[20%] h-[30%] rounded-full  transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
            opacity: Math.max(0, 0.4 - scrollY * 0.001),
          }}
        />

        
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500/80 mb-2"
          >
            <div className="h-px w-5 bg-orange-500/40"></div>
            <span>Portfolio</span>
            <div className="h-px w-5 bg-orange-500/40"></div>
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
                <Code className="h-4 w-4 text-neutral-500" />
                <span className="text-xs uppercase tracking-widest text-neutral-500">Frontend Developer</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-mono tracking-tight text-white">
                <span className="text-neutral-400">Hola,soy </span>
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white relative z-10">Leonel González</span>
                  <span className="absolute left-0 right-0 bottom-2 h-[0.6rem] bg-orange-500/20 -z-10"></span>
                  <motion.span
                    className="absolute -top-6 -right-4 hidden md:block"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-orange-500/70" />
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
            className="text-sm sm:text-sm text-neutral-400 max-w-[550px] mx-auto leading-relaxed"
          >
            Especializado en crear experiencias web modernas, interactivas y de alto rendimiento con React y Next.js
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6"
          >
            <Link href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group relative bg-neutral-900 h-10 w-full sm:w-40 border border-neutral-800 text-center p-2 text-white text-sm font-mono rounded-lg overflow-hidden before:absolute before:w-6 before:h-6 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-10 after:h-10 after:content[''] after:bg-orange-400 after:right-3 after:top-1 after:rounded-full after:blur-lg group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-orange-500 hover:before:[box-shadow:_15px_15px_15px_20px_#ea580c] duration-500 before:duration-500 hover:duration-500 hover:after:-right-4 hover:before:right-8 hover:before:-bottom-4 hover:before:blur hover:text-orange-300"
              >
                Ver Proyectos
              </Button>
            </Link>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="group relative bg-transparent h-10 w-full sm:w-40 border border-neutral-800 text-center p-2 text-white text-sm font-mono rounded-lg overflow-hidden before:absolute before:w-6 before:h-6 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-10 after:h-10 after:content[''] after:bg-orange-400 after:right-3 after:top-1 after:rounded-full after:blur-lg group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-orange-500 hover:bg-neutral-900/80 hover:before:[box-shadow:_15px_15px_15px_20px_#ea580c] duration-500 before:duration-500 hover:duration-500 hover:after:-right-4 hover:before:right-8 hover:before:-bottom-4 hover:before:blur hover:text-orange-300 transition-all"
              >
                Contacto
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
            className="rounded-full h-9 w-9 border-neutral-800 bg-transparent hover:bg-[#111] hover:border-orange-500/30"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4 text-neutral-400" />
            </motion.div>
          </Button>
          <span className="sr-only">Scroll down</span>
        </Link>
      </motion.div>
    </section>
  )
}
