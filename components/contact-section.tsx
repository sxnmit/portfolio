'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Open to 4-8 month co-ops starting Summer 2026
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently seeking 4-8 month co-op opportunities starting Summer 2026 where I can apply my
                technical expertise in full-stack development, data integration, and automation
                to create meaningful impact. Let&apos;s discuss how I can contribute to your team.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="glass p-4 border-primary/20 flex items-center gap-4 hover:glow-purple transition-all">
                <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col items-center justify-start min-w-0 flex-1">
                  <div className="text-sm text-muted-foreground leading-tight mb-1">Email</div>
                  <a
                    href="mailto:sings246@mcmaster.ca"
                    className="text-foreground hover:text-primary transition-colors break-all leading-tight"
                  >
                    sings246@mcmaster.ca
                  </a>
                </div>
              </Card>

              <Card className="glass p-4 border-primary/20 flex items-center gap-4 hover:glow-cyan transition-all">
                <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="flex flex-col items-center justify-start min-w-0 flex-1">
                  <div className="text-sm text-muted-foreground leading-tight mb-1">Location</div>
                  <div className="text-foreground leading-tight">Toronto, ON</div>
                </div>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <a href="https://linkedin.com/in/sanmit-singh" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="glass p-4 border-primary/20 flex items-center gap-4 hover:glow-blue transition-all cursor-pointer h-full">
                    <div className="p-3 bg-secondary/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex flex-col justify-start items-center min-w-0 flex-1">
                      <div className="text-sm text-muted-foreground leading-tight mb-1">LinkedIn</div>
                      <div className="text-foreground hover:text-secondary transition-colors leading-tight">Connect</div>
                    </div>
                  </Card>
                </a>

                <a href="https://github.com/sxnmit" target="_blank" rel="noopener noreferrer" className="block">
                  <Card className="glass p-4 border-primary/20 flex items-center gap-4 hover:glow-cyan transition-all cursor-pointer h-full">
                    <div className="p-3 bg-accent/20 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <Github className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex flex-col items-center justify-start min-w-0 flex-1">
                      <div className="text-sm text-muted-foreground leading-tight mb-1">GitHub</div>
                      <div className="text-foreground hover:text-accent transition-colors leading-tight">View Profile</div>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground"
        >
          <p>© 2025 Sanmit Singh. Built with Next.js, Tailwind CSS, and Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  )
}
