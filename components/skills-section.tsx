"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Database, Globe, Server, GitBranch } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8 text-primary" />,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js","Tailwind CSS"],
  },
  {
    category: "Diseño UI/UX",
    icon: <Palette className="h-8 w-8 text-primary" />,
    items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Diseño Responsivo", "Prototipado"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-primary" />,
    items: ["Node.js", "Express", "Python","API REST"],
  },
  {
    category: "Bases de Datos",
    icon: <Database className="h-8 w-8 text-primary" />,
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Herramientas",
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    items: ["Git", "GitHub", "GitLab", "Docker", "Jira", "Jest", "Figma"],
  },
  {
    category: "Otros",
    icon: <Globe className="h-8 w-8 text-primary" />,
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
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-[#0a0a0a]">
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
            Mis <span className=" text-orange-500">Habilidades</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-gray-200 max-w-[700px]">
            He adquirido una amplia gama de habilidades a lo largo de mi carrera. Aquí hay un vistazo a mis competencias
            técnicas y creativas.
          </p>
        </motion.div>

        {/* Tarjetas de habilidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group bg-[#1a1a1a] border-[#2a2a2a]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-[#2a2a2a] rounded-full text-sm font-medium text-gray-300"
                      >
                        {item}
                      </span>
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