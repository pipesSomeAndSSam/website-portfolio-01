"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      id: 1,
      title: "Canvasly",
      shortDescription:
        "Canvasly is an Artwork Marketplace for Local Artists to share and sell artworks.",
      image: "/fig12.webp",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "Tanstack",
        "Prisma",
        "Cloudinary",
        "Git",
      ],
      features: [
        "Infinite Scrolling",
        "Media upload and management",
        "Optimistic UI updates",
        "Real-time notifications",
        "Comprehensive search and filtering",
      ],
    },
    {
      id: 2,
      title: "CNN FruitClassifier",
      shortDescription:
        "Fruit classifier app created by using CNN and C# that classifies whether its a Banana, Corn, Cucumber, Mango or Tomato.",
      image: "/fig10.webp",
      tags: ["C#", "Tensorflow", "Python", "Keras", "Git", ".NET"],
      features: ["AI Development", "Desktop application", "CNN architecture"],
    },
    {
      id: 3,
      title: "CabMan",
      shortDescription:
        "CabMan is a Multicab Management Systemized log book that allows queueing, storing information for fare and ticketing information in the VSU multicab terminal.",
      image: "/fig5.webp",
      tags: ["C#", "Git", "MySQL", ".NET"],
      features: ["Log book management", "Queue management", "Ticketing system"],
    },
    {
      id: 4,
      title: "Rekindle",
      shortDescription: "Story based exploration game For VSU students.",
      image: "/fig8.webp",
      tags: ["C#", "Git", "Unity", "Supabase"],
      features: [
        "Story driven gameplay",
        "Loading and saving system",
        "Account management",
        "Inventory system",
      ],
    },
    {
      id: 5,
      title: "Restaurant User Kiosk",
      shortDescription:
        "Pagatpat Restaurant user kiosk UI/UX design for a school project.",
      image: "/fig2.webp",
      tags: ["Figma"],
      features: ["UI/UX design with usable buttons"],
    },
    {
      id: 6,
      title: "CS3 Biometrics Attendance System",
      shortDescription:
        "Biometrics Attendance System for Computer Science Student Society.",
      image: "/fig7.webp",
      tags: ["C#", "Git"],
      features: ["UI/UX design with C#"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setExpandedProject(
                    expandedProject === project.id ? null : project.id,
                  )
                }
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
