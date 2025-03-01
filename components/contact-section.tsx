"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="container px-4 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white font-bold tracking-tighter mb-4">
            Ponte en <span className=" text-orange-500">Contacto</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-muted-foreground max-w-[700px] text-gray-200">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy siempre abierto a discutir nuevos
            proyectos, ideas creativas u oportunidades para ser parte de tus visiones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Información de Contacto</h3>
                  
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">+54 2645841194</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">leonel.gonzalez.dev@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-2 rounded-full bg-primary/10 mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Ubicación</p>
                      <p className="text-muted-foreground">San Juan, Argentina</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-4">Sígueme</h4>
                  <div className="flex space-x-4">
                    <a href="https://github.com/LeoGittt" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/leonel-gonz%C3%A1lez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByzRpW4qgQdKzj1vnuQncqQ%3D%3D" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                    
                    <a href="https://www.instagram.com/leonel_gnzz/" target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="rounded-full">
                        <Instagram className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          
        </div>
      </div>
    </section>
  )
}

