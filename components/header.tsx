"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 bg-[#0a0a0a] right-0 z-50  backdrop-blur-md  ">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Global">
        {/* Logo */}
        <Link href="#" className="text-xl text-white font-medium tracking-tight">
          <span className="sr-only">Leonel</span>
          Portfolio
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white text-muted-foreground hover:text-gray-300 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          <Button asChild variant="default" size="sm" className="ml-2">
            <Link href="#contact">Contactar</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center text-muted-foreground"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
        >
          <span className="sr-only">Abrir menú</span>
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="fixed inset-y-0 right-0 w-full bg-background/95 backdrop-blur-md px-6 py-4"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between h-12">
                  <Link href="#" className="text-xl font-medium tracking-tight">
                    <span className="sr-only">Leonel</span>
                    Portfolio
                  </Link>
                  <button type="button" className="text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
                    <span className="sr-only">Cerrar menú</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  <Button asChild className="mt-2 w-full" size="sm">
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                      Contactar
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

