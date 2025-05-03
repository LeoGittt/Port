"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-sm ">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="#" className="text-md  text-white tracking-tight hover:text-orange-500 transition-colors">
          Leonel.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-neutral-400 hover:text-orange-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          {/* <Button variant="ghost" size="sm" className="text-sm text-white hover:text-orange-500 font-mono">
            <Link href="#contact">Contactar</Link>
          </Button> */}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-neutral-300">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0c0c0c] px-6 py-6 flex flex-col border-t-4 border-orange-500"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <div className="flex items-center justify-between mb-6">
              <Link href="#" className="text-xl font-mono text-white">
                Leonel.dev
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-neutral-300">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base  text-neutral-400 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
