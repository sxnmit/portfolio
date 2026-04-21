'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Award, TrendingUp, Briefcase } from 'lucide-react'

export function AboutSection() {
  const stats = [
    {
      icon: Award,
      value: '3.9 GPA',
      label: "2x Dean's List",
    },
    {
      icon: Briefcase,
      value: '5',
      label: 'Internships',
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: 'Tools in Production',
    },
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Passionate about building scalable solutions that drive real business impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <Image
                src="/my-hero-image.jpg"
                alt="Sanmit Singh"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="relative rounded-full object-cover glass"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m a <span className="text-foreground font-semibold">Honours Computer Science</span> co-op student
                at McMaster University with a <span className="text-primary font-semibold">3.9 GPA</span>.
                As a two-time Dean&apos;s List recipient, I bring strong academic excellence combined with hands-on experience across multiple companies and roles.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;ve contributed to diverse teams across <span className="text-foreground font-semibold">Scotiabank</span>, <span className="text-foreground font-semibold">Tetra Tech</span>, and <span className="text-foreground font-semibold">InsightAI</span>,
                delivering automation solutions that improved efficiency by up to 90%, building scalable web applications, and engineering AI-powered pipelines.
                I balance technical depth with business acumen, transitioning between software engineering, product management, and business analysis roles.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m proficient in <span className="text-primary font-semibold">full-stack development</span>, with expertise in
                Next.js, React, TypeScript, C#, Python, and cloud technologies. Beyond traditional roles, I&apos;ve built personal projects including
                a Chrome extension for university navigation, a pool hall management SaaS, and an automated news digest agent—each solving real problems with modern tech stacks.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass p-6 text-center border-primary/20 hover:glow-purple transition-all">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
