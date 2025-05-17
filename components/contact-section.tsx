"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
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

// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [localTime, setLocalTime] = useState("");
  const [isOnline, setIsOnline] = useState(false);

  // URLs para los enlaces de contacto
  const contactData = {
    whatsapp: {
      url: "https://wa.me/542645841194",
      color: "from-[#128C7E] to-[#075E54]",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "WhatsApp",
      description: "Respuesta rápida a mensajes y consultas",
      detail: "+54 264 584 1194",
      buttonColor: "text-[#128C7E]",
    },
    email: {
      url: "mailto:leonel.gonzalez.dev@gmail.com",
      color: "from-orange-500 to-orange-600",
      icon: <Mail className="h-10 w-10 text-white" />,
      title: "Email",
      description: "Para propuestas y consultas formales",
      detail: "leonel.gonzalez.dev@gmail.com",
      buttonColor: "text-orange-500",
    },
    instagram: {
      url: "https://www.instagram.com/leonel_gnzz/",
      color: "from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      icon: <Instagram className="h-10 w-10 text-white" />,
      title: "Instagram",
      description: "Sígueme para ver mi trabajo y actualizaciones",
      detail: "@leonel_gnzz",
      buttonColor: "text-[#FD1D1D]",
    },
  };

  const socialLinks = [
    {
      url: "https://github.com/LeoGittt",
      icon: <Github className="h-5 w-5 text-gray-300" />,
      label: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/leonel-gonz%C3%A1lez",
      icon: <Linkedin className="h-5 w-5 text-gray-300" />,
      label: "LinkedIn",
    },
    {
      url: "https://www.instagram.com/leonel_gnzz/",
      icon: <Instagram className="h-5 w-5 text-gray-300" />,
      label: "Instagram",
    },
  ];

  // Actualizar la hora local
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

  // Configurar animaciones con GSAP
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del encabezado
      gsap.from(".contact-header", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animación de las tarjetas
      gsap.from(".contact-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Animación del footer
      gsap.from(".contact-footer", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".contact-footer",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Efecto parallax para elementos de fondo
      gsap.to(".contact-bg-element", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Componente de tarjeta 3D
  const ContactCard = ({ type }: { type: keyof typeof contactData }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { url, color, icon, title, description, detail, buttonColor } =
      contactData[type];

    useLayoutEffect(() => {
      const card = cardRef.current;
      if (!card) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformOrigin: "center",
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);

    return (
      <div className="contact-card h-full perspective-1000">
        <div
          ref={cardRef}
          className={`h-full rounded-2xl overflow-hidden bg-gradient-to-br ${color} border-none shadow-2xl relative transform-style-preserve-3d transition-transform duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <div className="p-8 flex flex-col items-center text-center h-full relative z-10">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl -mr-12 -mt-12" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-xl -ml-16 -mb-16" />

              <div className="bg-white/10 p-5 rounded-2xl mb-6 shadow-lg relative z-10 hover:scale-110 transition-transform duration-300">
                {icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
              <p className="text-white/80 mb-6">{description}</p>
              <p
                className={`text-white font-medium mb-8 text-md ${
                  type === "email" ? "break-all" : ""
                }`}
              >
                {detail}
              </p>

              <Button
                className={`bg-white ${buttonColor} hover:bg-white/90 px-6 py-6 rounded-xl font-medium text-lg shadow-lg hover:scale-105 transition-transform duration-300`}
              >
                <Send className="h-5 w-5 mr-2" />{" "}
                {type === "instagram" ? "Seguir" : "Enviar mensaje"}
              </Button>

              <div className="absolute bottom-4 right-4">
                <ExternalLink className="h-5 w-5 text-white/40" />
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="contact-bg-element absolute top-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="contact-bg-element absolute bottom-20 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="contact-bg-element absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/3 rounded-full blur-3xl" />

        {/* Grid pattern de fondo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bTEyIDEydjZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6bS0yNCAwdjZoNnYtNmgtNnptMCAxMnY2aDZ2LTZoLTZ6bS0xMi0xMnY2aDZ2LTZoLTZ6bTAgMTJ2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      </div>

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative z-10">
        {/* Encabezado de la sección */}
        <div className="flex flex-col items-center text-center mb-20 contact-header">
          <div className="bg-orange-500/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
              Conectemos
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Ponte en{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">Contacto</span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-orange-500/20 rounded-full origin-left scale-x-0 contact-header-underline" />
            </span>
          </h2>

          <p className="text-gray-300 max-w-[700px] mt-4 text-lg">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
            siempre abierto a discutir nuevas ideas, colaboraciones u
            oportunidades para ser parte de tus visiones.
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <ContactCard type="whatsapp" />
          <ContactCard type="email" />
          <ContactCard type="instagram" />
        </div>

        {/* Información adicional y redes sociales */}
        <div className="mt-20 flex flex-col items-center contact-footer">
          <div className="flex items-center mb-8 bg-[#1a1a1a]/60 backdrop-blur-sm px-6 py-3 rounded-full border border-[#2a2a2a]">
            <MapPin className="h-5 w-5 text-orange-500 mr-3" />
            <p className="text-gray-300 font-medium">San Juan, Argentina</p>

            <div className="ml-6 flex items-center">
              <Clock className="h-4 w-4 text-orange-500 mr-2" />
              <span className="text-gray-400 text-sm">{localTime}</span>
              <span
                className={`ml-2 w-2 h-2 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-gray-500"
                }`}
              ></span>
            </div>
          </div>

          <p className="text-gray-400 mb-8 max-w-md text-center text-lg">
            Siempre estoy interesado en nuevos proyectos y colaboraciones. No
            dudes en contactarme por cualquiera de los medios anteriores.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full border-gray-700 bg-[#111] hover:bg-[#222] hover:border-orange-500/50 transition-all duration-300 w-12 h-12 group-hover:-translate-y-1 group-hover:scale-110"
                >
                  {link.icon}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
