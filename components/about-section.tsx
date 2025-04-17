"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Instagram } from "lucide-react";

export function AboutSection() {
  const handleDownloadCV = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
            Sobre <span className=" text-orange-500">Mí</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
        </motion.div>

        {/* Contenido principal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen con animación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border-8 border-[#1a1a1a] shadow-xl max-w-md mx-auto">
              <Image
                src="/fotoo.png" // Asegúrate de que la ruta de la imagen sea correcta
                alt="Tu Nombre"
                width={500}
                height={500}
                className="object-cover w-full h-full" // Ajusta la imagen para cubrir el contenedor
                priority // Prioriza la carga de la imagen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Iconos de redes sociales */}
              <div className="absolute bottom-4 left-4 flex space-x-3">
                <a href="https://github.com/LeoGittt" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a]">
                  <Github className="h-5 w-5 text-white" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/leonel-gonz%C3%A1lez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByzRpW4qgQdKzj1vnuQncqQ%3D%3D" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="secondary" className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a]">
                  <Linkedin className="h-5 w-5 text-white" />
                </Button>
                </a>
                <a href="https://www.instagram.com/leonel_gnzz/" target="_blank">
                <Button size="icon" variant="secondary" className="rounded-full bg-[#1a1a1a] hover:bg-[#2a2a2a]">
                <Instagram className="h-5 w-5 text-white" />
                </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Texto y detalles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Desarrollador Web & Diseñador UI/UX</h3>
            <p className="text-gray-300">
              Soy un apasionado desarrollador web y diseñador UI/UX con más de 2 años de experiencia creando
              experiencias digitales excepcionales. Me especializo en construir aplicaciones web modernas y responsivas
              que no solo se ven increíbles, sino que también ofrecen una experiencia de usuario excepcional.
            </p>
            <p className="text-gray-300">
              Mi enfoque combina creatividad con soluciones técnicas sólidas para resolver problemas complejos y
              entregar productos que superan las expectativas de los clientes.
            </p>

            {/* Tarjetas de estadísticas */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
                <CardContent className="p-4">
                  <p className="text-4xl font-bold text-orange-500">2+</p>
                  <p className="text-sm text-gray-300">Años de Experiencia</p>
                </CardContent>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
                <CardContent className="p-4">
                  <p className="text-4xl font-bold  text-orange-500">5+</p>
                  <p className="text-sm text-gray-300">Proyectos Completados</p>
                </CardContent>
              </Card>
            </div>

            {/* Botón de descarga de CV */}
            <Button 
              className="rounded-full px-8 mt-6 bg-primary hover:bg-primary/90"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-4 w-4" /> Descargar CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}