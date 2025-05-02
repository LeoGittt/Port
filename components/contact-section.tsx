"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  Clock,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  // URLs para los enlaces de contacto
  const whatsappUrl = "https://wa.me/542645841194";
  const emailUrl = "mailto:leonel.gonzalez.dev@gmail.com";
  const instagramUrl = "https://www.instagram.com/leonel_gnzz/";
  const githubUrl = "https://github.com/LeoGittt";
  const linkedinUrl = "https://www.linkedin.com/in/leonel-gonz%C3%A1lez";

  // Estado para el horario local
  const [localTime, setLocalTime] = useState("");
  const [isOnline, setIsOnline] = useState(false);

  // Actualizar la hora local cada minuto
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setLocalTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`
      );

      // Simular estado online (9AM - 6PM en días laborables)
      const isWorkingHour = hours >= 9 && hours < 18;
      const isWeekday = now.getDay() > 0 && now.getDay() < 6;
      setIsOnline(isWorkingHour && isWeekday);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Función para crear efectos 3D en las tarjetas
  const Card3D: React.FC<{ children: React.ReactNode; bgClass: string; delay?: number }> = ({ children, bgClass, delay = 0 }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => any; }; clientX: number; clientY: number; }) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const posX = e.clientX - centerX;
      const posY = e.clientY - centerY;
      x.set(posX);
      y.set(posY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay }}
        className="h-full"
        style={{ perspective: 1000 }}
      >
        <motion.div
          className={`h-full rounded-2xl overflow-hidden ${bgClass} border-none shadow-xl relative`}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section
      id="contact"
      className="py-32 bg-black relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />

        {/* Grid pattern de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDEydjZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bS0yNCAwdjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bS0xMi0xMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="bg-orange-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4"
          >
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
              Conectemos
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ponte en{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">Contacto</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-3 bg-orange-500/20 rounded-full"
              />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 max-w-[700px] mt-4 text-sm"
          >
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
            siempre abierto a discutir nuevos proyectos, ideas creativas u
            oportunidades para ser parte de tus visiones.
          </motion.p>

          
        </motion.div>

        {/* Tarjetas de contacto */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta de WhatsApp */}
          <Card3D
            bgClass="bg-gradient-to-br from-[#128C7E] to-[#075E54]"
            delay={0.1}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl -ml-16 -mb-16" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white/10 p-5 rounded-2xl mb-6 shadow-lg relative z-10"
                >
                  <MessageSquare className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-white/80 mb-6">
                  Respuesta rápida a mensajes y consultas
                </p>
                <p className="text-white font-medium mb-8 text-md">
                  +54 264 584 1194
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="bg-white text-[#128C7E] hover:bg-white/90 px-6 py-6 rounded-xl font-medium text-lg shadow-lg">
                    <Send className="h-5 w-5 mr-2" /> Enviar mensaje
                  </Button>
                </motion.div>

                <div className="absolute bottom-4 right-4">
                  <ExternalLink className="h-5 w-5 text-white/40" />
                </div>
              </div>
            </a>
          </Card3D>

          {/* Tarjeta de Email */}
          <Card3D
            bgClass="bg-gradient-to-br from-orange-500 to-orange-600"
            delay={0.2}
          >
            <a href={emailUrl} className="block h-full">
              <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl -ml-16 -mb-16" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white/10 p-5 rounded-2xl mb-6 shadow-lg relative z-10"
                >
                  <Mail className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">Email</h3>
                <p className="text-white/80 mb-6">
                  Para propuestas y consultas formales
                </p>
                <p className="text-white font-medium mb-8 text-md break-all">
                  leonel.gonzalez.dev@gmail.com
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="bg-white text-orange-500 hover:bg-white/90 px-6 py-6 rounded-xl font-medium text-lg shadow-lg">
                    <Send className="h-5 w-5 mr-2" /> Enviar email
                  </Button>
                </motion.div>

                <div className="absolute bottom-4 right-4">
                  <ExternalLink className="h-5 w-5 text-white/40" />
                </div>
              </div>
            </a>
          </Card3D>

          {/* Tarjeta de Instagram */}
          <Card3D
            bgClass="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
            delay={0.3}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
                {/* Elementos decorativos */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl -mr-12 -mt-12" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl -ml-16 -mb-16" />

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white/10 p-5 rounded-2xl mb-6 shadow-lg relative z-10"
                >
                  <Instagram className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  Instagram
                </h3>
                <p className="text-white/80 mb-6">
                  Sígueme para ver mi trabajo y actualizaciones
                </p>
                <p className="text-white font-medium mb-8 text-md">
                  @leonel_gnzz
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button className="bg-white text-[#FD1D1D] hover:bg-white/90 px-6 py-6 rounded-xl font-medium text-lg shadow-lg">
                    <Send className="h-5 w-5 mr-2" /> Seguir
                  </Button>
                </motion.div>

                <div className="absolute bottom-4 right-4">
                  <ExternalLink className="h-5 w-5 text-white/40" />
                </div>
              </div>
            </a>
          </Card3D>
        </div>

        {/* Información adicional y redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="flex items-center mb-8 bg-[#1a1a1a]/60 backdrop-blur-sm px-6 py-3 rounded-full border border-[#2a2a2a]">
            <MapPin className="h-5 w-5 text-orange-500 mr-3" />
            <p className="text-gray-300 font-medium">San Juan, Argentina</p>
          </div>

          <p className="text-gray-400 mb-8 max-w-md text-center">
            Siempre estoy interesado en nuevos proyectos y colaboraciones. No
            dudes en contactarme por cualquiera de los medios anteriores.
          </p>

          <div className="flex space-x-4">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 bg-[#111] hover:bg-[#222] hover:border-orange-500/50 transition-all duration-300 w-12 h-12"
              >
                <Github className="h-5 w-5 text-gray-300" />
              </Button>
            </motion.a>
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 bg-[#111] hover:bg-[#222] hover:border-orange-500/50 transition-all duration-300 w-12 h-12"
              >
                <Linkedin className="h-5 w-5 text-gray-300" />
              </Button>
            </motion.a>
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-gray-700 bg-[#111] hover:bg-[#222] hover:border-orange-500/50 transition-all duration-300 w-12 h-12"
              >
                <Instagram className="h-5 w-5 text-gray-300" />
              </Button>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
