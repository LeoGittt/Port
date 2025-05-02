"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Server, GitBranch, Zap } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-4 w-4" />,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    color: "text-sky-400",
    borderColor: "group-hover:border-sky-400/20",
    gradient: "from-sky-400/5 to-sky-400/0",
    bg: "bg-sky-400/5"
  },
  {
    category: "Diseño UI/UX",
    icon: <Palette className="h-4 w-4" />,
    items: ["Figma", "Adobe XD", "Prototipado", "Design Systems", "UI/UX", "Photoshop"],
    color: "text-purple-400",
    borderColor: "group-hover:border-purple-400/20",
    gradient: "from-purple-400/5 to-purple-400/0",
    bg: "bg-purple-400/5"
  },
  {
    category: "Backend",
    icon: <Server className="h-4 w-4" />,
    items: ["Node.js", "Express", "API REST", "GraphQL", "Python", "Serverless"],
    color: "text-emerald-400",
    borderColor: "group-hover:border-emerald-400/20",
    gradient: "from-emerald-400/5 to-emerald-400/0",
    bg: "bg-emerald-400/5"
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-4 w-4" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma", "ORM"],
    color: "text-amber-400",
    borderColor: "group-hover:border-amber-400/20",
    gradient: "from-amber-400/5 to-amber-400/0",
    bg: "bg-amber-400/5"
  },
  {
    category: "DevOps",
    icon: <GitBranch className="h-4 w-4" />,
    items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Vercel", "GitHub Actions"],
    color: "text-rose-400",
    borderColor: "group-hover:border-rose-400/20",
    gradient: "from-rose-400/5 to-rose-400/0",
    bg: "bg-rose-400/5"
  },
  {
    category: "Performance",
    icon: <Zap className="h-4 w-4" />,
    items: ["SEO", "Optimización", "Accesibilidad", "Web Vitals", "PWA", "Rendimiento"],
    color: "text-indigo-400",
    borderColor: "group-hover:border-indigo-400/20",
    gradient: "from-indigo-400/5 to-indigo-400/0",
    bg: "bg-indigo-400/5"
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -4,
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  const skillTagVariants = {
    hover: {
      scale: 1.03,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      transition: { duration: 0.15 },
    },
  };

  return (
    <section id="skills" className="py-32 bg-black">
      <div className="container px-5 md:px-6 max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -60px 0px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-neutral-500 mb-4 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            HABILIDADES TÉCNICAS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Dominio <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">Tecnológico</span>
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm leading-relaxed">
            Tecnologías y herramientas que utilizo para construir experiencias digitales excepcionales.
          </p>
        </motion.div>

        {/* Grid de Tarjetas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className={`h-full transition-all duration-400 overflow-hidden group bg-neutral-900/30 border border-neutral-800/50 hover:border-neutral-700/50 ${skill.borderColor} relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-900/80 to-neutral-900 pointer-events-none" />
                <CardContent className="p-4 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${skill.bg} border border-neutral-800/50 group-hover:border-neutral-700/50 ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <h3 className={`text-base font-semibold tracking-tight ${skill.color}`}>
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        className="px-2.5 py-1 text-xs font-medium text-neutral-300 rounded-md bg-neutral-800/30 border border-neutral-800 backdrop-blur-sm"
                        variants={skillTagVariants}
                        whileHover="hover"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}