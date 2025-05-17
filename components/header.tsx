"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    // Cerrar el menú al cambiar de ruta
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    // Bloquear el scroll cuando el menú está abierto
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black",
        
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Inicio"
          className="text-lg font-medium text-white hover:text-orange-500 transition-colors duration-200"
          onClick={closeMenu}
        >
          <span className="text-orange-500 font-mono">&lt;</span>
          Leonel.dev
          <span className="text-orange-500 font-mono"> /&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium text-neutral-300 hover:text-orange-500 transition-colors duration-200",
                "relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-orange-500 after:transition-all after:duration-300",
                "hover:after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md text-neutral-300 hover:text-orange-500 hover:bg-white/10 transition-colors duration-200"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm px-6 py-8 flex flex-col"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between mb-12">
              <Link
                href="#home"
                className="text-xl font-medium text-white hover:text-orange-500 transition-colors"
                onClick={closeMenu}
              >
                <span className="text-orange-500 font-mono">&lt;</span>
                Leonel.dev
                <span className="text-orange-500 font-mono"> /&gt;</span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md text-neutral-300 hover:text-orange-500 hover:bg-white/10 transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-2xl font-medium text-neutral-300 hover:text-orange-500 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-sm text-neutral-400">
                © {new Date().getFullYear()} Leonel.dev
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
