'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative px-4 pt-24 pb-16 lg:min-h-screen lg:flex lg:items-center lg:justify-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <p className="text-lg text-primary font-sans">Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="gradient-text">Sanmit Singh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground text-balance leading-tight">
              Software Developer & Technical Specialist
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            3rd-year Computer Science student at McMaster University with hands-on industry
            experience in automation, data workflows, full-stack development, and AI-powered systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="glow-purple group" asChild>
              <a href="#experience" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass" asChild>
              <a href="#contact">
                Let&apos;s Connect
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:sings246@mcmaster.ca"
              className="p-3 glass rounded-lg hover:glow-purple transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sanmit-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:glow-blue transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sxnmit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:glow-cyan transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right side - Developer illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Floating tech icons */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 p-4 glass rounded-2xl glow-purple"
            >
              <span className="text-3xl">⚛️</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 p-4 glass rounded-2xl glow-blue"
            >
              <span className="text-3xl">🐍</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 left-0 p-4 glass rounded-2xl glow-cyan"
            >
              <span className="text-3xl">💻</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-10 right-20 p-4 glass rounded-2xl glow-purple"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/workspace.jpg"
                alt="Developer workspace"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain opacity-90 scale-[1.35]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
