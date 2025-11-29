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
      value: '3+',
      label: 'Internships',
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: 'Projects Impacted',
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
                I&apos;m a 3rd-year <span className="text-foreground font-semibold">Honours Computer Science</span> student
                at McMaster University with a <span className="text-primary font-semibold">3.9 GPA</span>.
                As a two-time Dean&apos;s List recipient, I combine strong academic excellence with practical industry experience.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently working as a <span className="text-foreground font-semibold">Technical Specialist and Business Analyst</span> at
                Tetra Tech, I&apos;ve delivered automation solutions that improved efficiency by up to 90% and built
                data integration systems impacting 20+ active client projects.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m skilled in <span className="text-accent font-semibold">full-stack development</span>, with expertise in
                C#, TypeScript, Python, React, ASP.NET, and cloud-based solutions. I thrive at the intersection of
                technical execution and business strategy, building solutions that deliver measurable impact.
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
