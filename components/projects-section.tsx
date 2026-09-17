'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: 'The Vault',
      subtitle: 'Walkable 3D Interactive Resume',
      period: 'September 2026 – Present',
      bullets: [
        'Built a walkable 3D world in the browser with React Three Fiber and Rapier physics, where five sealed chambers each hold a puzzle and each solved puzzle unseals one chapter of my resume',
        'Modelled every chamber on a real role — Scotiabank, Chalk, Tetra Tech, InsightAI, McMaster — with the door order enforcing the story, plus a keyboard/mouse control scheme and touch controls for mobile',
        'Generated the character, rooms, signage, and sound effects entirely in code with no downloaded assets, and persisted progress to localStorage',
      ],
      technologies: ['React Three Fiber', 'Three.js', 'Rapier', 'Zustand', 'TypeScript', 'WebGL'],
      image: null,
      githubUrl: 'https://github.com/sxnmit/escape-room-portfolio',
      liveUrl: 'https://escape-room-portfolio.vercel.app',
    },
    {
      title: 'Nexus',
      subtitle: 'Self-Improving Agentic Assistant',
      period: 'September 2026 – Present',
      bullets: [
        'Building an autonomous, self-improving personal assistant agent orchestrated with LangGraph, using the Todoist API for task management and Telegram as the interface',
        'Architected a FastAPI backend and agent loop that evaluates and iteratively refines its own behaviour from user feedback, deepening hands-on agentic AI system design experience',
      ],
      technologies: ['Python', 'LangGraph', 'FastAPI', 'Todoist API', 'Telegram', 'Agentic AI'],
      image: null,
      githubUrl: 'https://github.com/sxnmit/nexus',
      liveUrl: null,
    },
    {
      title: 'Chalk',
      subtitle: 'Pool Hall Management SaaS',
      period: 'April 2026 – Present',
      bullets: [
        'Building a multi-tenant B2B SaaS from scratch using Next.js, TypeScript, Tailwind CSS, and Supabase Postgres, shipping a working product to a real pilot customer in under a week',
        'Designed real-time table session tracking (start/stop, live timers, automatic revenue calculation) optimized for tablet-first in-venue use',
        'Built an owner-facing analytics dashboard with peak-hour analysis and rate-tier breakdowns',
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Multi-Tenant SaaS'],
      image: '/projImage3.png',
      imageFit: 'contain',
      githubUrl: 'https://github.com/sxnmit/chalk',
      liveUrl: 'https://chalk-psi.vercel.app',
    },
    {
      title: 'Signal',
      subtitle: 'Daily News Automation',
      period: 'March 2026',
      bullets: [
        'Built a background Python agent that scrapes news from NewsAPI, RSS feeds, and the Claude API\'s web search tool',
        'Delivers a categorized HTML email digest on a configurable schedule',
      ],
      technologies: ['Python', 'Claude API', 'NewsAPI', 'RSS', 'Automation'],
      image: '/projImage.png',
      imageFit: 'cover',
      githubUrl: 'https://github.com/sxnmit/signal',
      liveUrl: null,
    },
    {
      title: 'Macify',
      subtitle: 'McMaster Navigation Extension',
      period: 'January 2026',
      bullets: [
        'Building a context-aware Chrome extension that delivers fast, guided navigation across McMaster\'s core systems (Mosaic & OSCARplus)',
        'Designed cross-site shortcuts and in-page guidance to cut down navigation friction on legacy, state-driven university platforms',
      ],
      technologies: ['Chrome Extension', 'JavaScript', 'CSS', 'HTML'],
      image: '/projImage2.png',
      imageFit: 'cover',
      imagePosition: 'object-[center_25%]',
      githubUrl: 'https://github.com/sxnmit/macify',
      liveUrl: null,
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
                        className={
                          project.imageFit === 'cover'
                            ? `object-cover ${project.imagePosition ?? 'object-top'}`
                            : 'object-contain p-4'
                        }
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent pointer-events-none" />
                    </div>
                  ) : (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-4xl mb-4">{project.liveUrl ? '🎮' : '💻'}</div>
                        <p className="text-muted-foreground text-sm">
                          {project.liveUrl ? 'Playable in your browser' : 'Project in progress'}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                        {project.subtitle && (
                          <p className="text-base text-primary mb-2">{project.subtitle}</p>
                        )}
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

                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex flex-wrap gap-3 pt-6">
                        {project.liveUrl && (
                          <Button size="sm" className="glow-purple" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
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
                        )}
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
