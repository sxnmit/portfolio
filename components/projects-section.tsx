'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Meeting Intelligence SaaS',
      period: 'Nov 2025 – Present',
      description:
        'Engineering a multi-tenant SaaS platform with a C# .NET backend and Next.js frontend, enabling seamless integration with Zoom, Microsoft Teams, and Google Meet to ingest and normalize meeting recordings and transcripts.',
      features: [
        'Multi-tenant architecture with secure data isolation',
        'AI-powered NLP pipeline for extracting action items and decisions',
        'Automatic syncing with Jira and email for task tracking',
        'Real-time transcript processing and analysis',
      ],
      technologies: ['C#', '.NET', 'Next.js', 'NLP', 'Jira API', 'TypeScript'],
      image: null,
      githubUrl: null,
    },
    {
      title: 'Full-Stack Library Management App',
      period: 'Jan 2024 – Apr 2024',
      description:
        'Organized and managed up to 100 books from a personal library using a comprehensive full-stack application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and MySQL.',
      features: [
        'RESTful API architecture for scalable operations',
        'JWT authentication and email verification',
        'Password encryption for secure user management',
        'Responsive UI with real-time updates',
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MySQL', 'JWT'],
      image: '/projImage.png',
      githubUrl: null, // Add your GitHub URL here if you have one
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-primary/20 overflow-hidden hover:glow-purple transition-all">
                <div className="grid md:grid-cols-2 gap-8">
                  {project.image ? (
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                  ) : (
                    <div className="relative aspect-video md:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-4xl mb-4">💻</div>
                        <p className="text-muted-foreground text-sm">Project in progress</p>
                      </div>
                    </div>
                  )}

                  <div className="p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.period}</p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="space-y-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-primary">▹</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="glass border-primary/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.githubUrl && (
                      <div className="flex gap-4 pt-6">
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
