"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Palette,
  Database,
  Globe,
  Server,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    color: "text-blue-400",
  },
  {
    category: "Diseño UI/UX",
    icon: <Palette className="h-6 w-6" />,
    items: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "Diseño Responsivo",
      "Prototipado",
    ],
    color: "text-purple-400",
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Node.js", "Express", "Python", "API REST"],
    color: "text-emerald-400",
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
    color: "text-amber-400",
  },
  {
    category: "Herramientas",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Git", "GitHub", "GitLab", "Docker", "Jira", "Jest", "Figma"],
    color: "text-red-400",
  },
  {
    category: "Otros",
    icon: <Globe className="h-6 w-6" />,
    items: ["SEO", "Accesibilidad Web", "Rendimiento Web"],
    color: "text-indigo-400",
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
  };

  const skillTagVariants = {
    hover: {
      y: -2,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b bg-black"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="text-sm font-medium tracking-wider text-orange-400 mb-3">
            HABILIDADES TÉCNICAS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Stack</span> de Tecnologías
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Conjunto de herramientas y tecnologías que domino y utilizo para crear soluciones digitales impactantes.
          </p>
        </motion.div>

        {/* Tarjetas de habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover="hover"
            >
              <Card className="h-full transition-all duration-300 overflow-hidden group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-transparent relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.color.replace('text', 'to')}/10`} />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className={`mr-4 p-3 rounded-lg ${skill.color} bg-gradient-to-br from-black/30 to-black/50 backdrop-blur-sm border border-[#333]`}
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className={`text-xl font-bold tracking-tight ${skill.color}`}>
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        className="px-3 py-1.5 bg-[#252525] border border-[#333] rounded-lg text-sm font-medium text-gray-300 hover:text-white backdrop-blur-sm"
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