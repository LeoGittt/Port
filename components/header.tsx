"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Sobre Mí", href: "#about" },
  
  { name: "Proyectos", href: "#projects" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-sm py-2 border-b border-gray-800"
          : "bg-black py-4"
      }`}
    >
      <nav
        className="container mx-auto px-4 flex items-center justify-between max-w-7xl"
        aria-label="Global"
      >
        {/* Logo estilo Vercel mejorado */}
        <Link href="#" className="flex items-center gap-2 group">
          <motion.span
            className="text-xl font-semibold text-white tracking-tighter"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-orange-400 font-bold">L</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              eonel
            </span>
          </motion.span>
        </Link>

        {/* Desktop navigation - Estilo Vercel */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="sm"
              className="ml-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/20"
            >
              <Link href="#contact">Contactar</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile menu button - Estilo mejorado */}
        <motion.button
          type="button"
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">Abrir menú</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </motion.button>

        {/* Mobile menu - Estilo oscuro como Vercel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Menu content - Estilo oscuro */}
              <motion.div
                className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-black px-6 py-8 shadow-2xl border-l border-gray-800"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
              >
                <div className="flex items-center justify-between h-10 mb-8">
                  <Link href="#" className="text-xl font-semibold text-white">
                    <span className="text-orange-400">L</span>eonel
                  </Link>
                  <motion.button
                    type="button"
                    className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring" }}
                  >
                    <span className="sr-only">Cerrar menú</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.button>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-300 hover:text-white py-3 px-4 hover:bg-gray-800 rounded-md transition-colors border-l-2 border-transparent hover:border-orange-400"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}

                  <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
                    >
                      <Link
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contactar
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
