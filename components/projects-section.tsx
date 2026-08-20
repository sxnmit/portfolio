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
      title: 'Chalk',
      period: 'Apr 2026 – Present',
      bullets: [
        'Building a multi-tenant B2B SaaS from scratch using Next.js, TypeScript, Tailwind CSS, and Supabase Postgres, shipping a working product to a real pilot customer in under a week',
        'Designed real-time table session tracking (start/stop, live timers, auto revenue calculation) optimized for tablet-first in-venue use; built an owner-facing analytics dashboard with peak-hour analysis and rate-tier breakdowns',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      image: '/projImage3.png',
      githubUrl: null,
    },
    {
      title: 'Signal',
      period: 'March 2026',
      bullets: [
        'Built a background Python agent that scrapes news from NewsAPI, RSS feeds, and the Claude API\'s web search tool, delivering a categorized HTML email digest on a configurable schedule',
      ],
      technologies: ['NewsAPI', 'RSS', 'Claude API', 'Python'],
      image: '/projImage.png',
      githubUrl: null,
    },
    {
      title: 'Macify – Job Search Platform',
      period: 'Jan 2026 – Present',
      bullets: [
        'Building a context-aware Chrome extension providing fast access and guided navigation across McMaster systems (Mosaic & OSCARplus)',
        'Features cross-site shortcuts, assisted navigation, and in-page guidance',
      ],
      technologies: ['Chrome Extension', 'JavaScript', 'React'],
      image: '/projImage2.png',
      githubUrl: null,
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

        <div className="max-w-6xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-primary/20 overflow-hidden hover:glow-purple transition-all">
                <div className="grid md:grid-cols-2 gap-6 md:items-center">
                  {project.image ? (
                    <div className="relative aspect-video overflow-hidden bg-muted/20 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain p-4"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-4xl mb-4">💻</div>
                        <p className="text-muted-foreground text-sm">Project in progress</p>
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.period}</p>
                      </div>

                      <div className="space-y-3">
                        {project.bullets.map((bullet, i) => (
                          <div key={i} className="flex gap-2 text-base text-muted-foreground leading-relaxed">
                            <span className="text-primary">▹</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
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
