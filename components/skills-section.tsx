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
    icon: <Code className="h-8 w-8 text-orange-500" />,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Diseño UI/UX",
    icon: <Palette className="h-8 w-8 text-orange-500" />,
    items: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
      "Illustrator",
      "Diseño Responsivo",
      "Prototipado",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-orange-500" />,
    items: ["Node.js", "Express", "Python", "API REST"],
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-8 w-8 text-orange-500" />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Herramientas",
    icon: <GitBranch className="h-8 w-8 text-orange-500" />,
    items: ["Git", "GitHub", "GitLab", "Docker", "Jira", "Jest", "Figma"],
  },
  {
    category: "Otros",
    icon: <Globe className="h-8 w-8 text-orange-500" />,
    items: ["SEO", "Accesibilidad Web", "Rendimiento Web"],
  },
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const skillTagVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(249, 115, 22, 0.2)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]"
    >
      <div className="container px-4 md:px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Mis <span className="text-orange-500">Habilidades</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full mb-6" />
          <p className="text-gray-300 max-w-[700px] text-lg leading-relaxed">
            He adquirido una amplia gama de habilidades a lo largo de mi
            carrera. Aquí hay un vistazo a mis competencias técnicas y
            creativas.
          </p>
        </motion.div>

        {/* Tarjetas de habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} whileHover="hover">
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-orange-500/30 hover:shadow-orange-500/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-5">
                    <motion.div
                      className="mr-4 p-3 rounded-full bg-[#2a2a2a] group-hover:bg-orange-500/10 transition-colors duration-300"
                      whileHover={{ rotate: 10 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors duration-300">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={itemIndex}
                        className="px-3 py-1.5 bg-[#2a2a2a] rounded-full text-sm font-medium text-gray-300 hover:text-white"
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
