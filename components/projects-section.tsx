'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Gamepad2,
  Bot,
  LayoutDashboard,
  Newspaper,
  Chrome,
} from 'lucide-react'

const accents = {
  purple: {
    text: 'text-primary',
    border: 'border-primary/30',
    glow: 'hover:glow-purple',
    tile: 'from-primary/30 to-primary/5 text-primary',
    rule: 'from-primary via-primary/40 to-transparent',
  },
  cyan: {
    text: 'text-accent',
    border: 'border-accent/30',
    glow: 'hover:glow-cyan',
    tile: 'from-accent/30 to-accent/5 text-accent',
    rule: 'from-accent via-accent/40 to-transparent',
  },
  blue: {
    text: 'text-secondary',
    border: 'border-secondary/30',
    glow: 'hover:glow-blue',
    tile: 'from-secondary/30 to-secondary/5 text-secondary',
    rule: 'from-secondary via-secondary/40 to-transparent',
  },
} as const

export function ProjectsSection() {
  const featured = [
    {
      title: 'The Vault',
      subtitle: 'Walkable 3D Interactive Resume',
      period: 'Sept 2026 – Present',
      summary:
        'A walkable 3D world where five sealed chambers each hold a puzzle, and each solved puzzle unseals one chapter of my resume. The character, rooms, signage and sound effects are all generated in code — no downloaded assets.',
      technologies: ['React Three Fiber', 'Rapier', 'Zustand', 'TypeScript', 'WebGL'],
      icon: Gamepad2,
      accent: 'purple' as const,
      githubUrl: 'https://github.com/sxnmit/escape-room-portfolio',
      liveUrl: 'https://escape-room-portfolio.vercel.app',
    },
    {
      title: 'Nexus',
      subtitle: 'Self-Improving Agentic Assistant',
      period: 'Sept 2026 – Present',
      summary:
        'An autonomous Telegram assistant that manages Todoist tasks, then grades its own replies every night and rewrites its own logic when it gets something wrong. Built on a LangGraph agent loop behind a FastAPI backend.',
      technologies: ['Python', 'LangGraph', 'FastAPI', 'Todoist API', 'Agentic AI'],
      icon: Bot,
      accent: 'cyan' as const,
      githubUrl: 'https://github.com/sxnmit/nexus',
      liveUrl: null,
    },
    {
      title: 'Chalk',
      subtitle: 'Pool Hall Management SaaS',
      period: 'Apr 2026 – Present',
      summary:
        'A multi-tenant B2B SaaS built from scratch — live table-session timers, automatic revenue calculation, and an owner dashboard with peak-hour and rate-tier breakdowns. Shipped to a real pilot customer in under a week.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Multi-Tenant'],
      icon: LayoutDashboard,
      accent: 'blue' as const,
      githubUrl: 'https://github.com/sxnmit/chalk',
      liveUrl: 'https://chalk-psi.vercel.app',
    },
  ]

  const more = [
    {
      title: 'Signal',
      subtitle: 'Daily News Automation',
      period: 'Mar 2026',
      summary:
        'A background Python agent that pulls from NewsAPI, RSS feeds and the Claude API’s web search, then emails a categorized digest on a configurable schedule.',
      technologies: ['Python', 'Claude API', 'NewsAPI', 'RSS'],
      icon: Newspaper,
      githubUrl: 'https://github.com/sxnmit/signal',
    },
    {
      title: 'Macify',
      subtitle: 'McMaster Navigation Extension',
      period: 'Jan 2026',
      summary:
        'A context-aware Chrome extension delivering cross-site shortcuts and in-page guidance across McMaster’s legacy Mosaic and OSCARplus systems.',
      technologies: ['Chrome Extension', 'JavaScript', 'CSS'],
      icon: Chrome,
      githubUrl: 'https://github.com/sxnmit/macify',
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

        {/* Featured work */}
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => {
            const a = accents[project.accent]
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={`glass h-full flex flex-col p-7 border ${a.border} ${a.glow} transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`h-px w-full bg-gradient-to-r ${a.rule} mb-6`} />

                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${a.tile} flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                  <p className={`${a.text} text-sm font-medium mt-1`}>{project.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-2">{project.period}</p>

                  <p className="text-muted-foreground leading-relaxed mt-5 text-pretty">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="glass border-primary/20 text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-7">
                    {project.liveUrl && (
                      <Button size="sm" className="glow-purple" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="outline" size="sm" className="glass" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Secondary work */}
        <div className="max-w-6xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              Also built
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {more.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.a
                  key={project.title}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group block"
                >
                  <Card className="glass h-full p-6 border-primary/15 hover:border-primary/40 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted/40 flex items-center justify-center shrink-0 text-muted-foreground group-hover:text-primary transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold">{project.title}</h3>
                          <span className="text-xs text-muted-foreground">{project.period}</span>
                          <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                        </div>
                        <p className="text-primary/80 text-sm mt-0.5">{project.subtitle}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3 text-pretty">
                          {project.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="glass border-primary/20 text-xs font-normal"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
