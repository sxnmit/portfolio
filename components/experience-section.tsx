'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building2, MapPin, Calendar } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Scotiabank',
      role: 'Incoming Product Manager Intern',
      location: 'Toronto, ON',
      period: 'Jan 2026 – Apr 2026',
      description: [
        'Championing exceptional user experience by optimizing product sign-up flows while collaborating with internal controls (AML, fraud), retail and business banking teams to meet identity verification and fraud prevention requirements',
        'Supporting problem discovery to understand client needs and working closely with design and engineering partners to build reusable, scalable client-facing digital features',
        'Using data-driven decision making and establishing clear OKRs to monitor, measure and assess product performance and KPIs',
      ],
      technologies: ['Product Management', 'Agile', 'Data Analytics', 'OKRs', 'Stakeholder Management', 'UX Design'],
      color: 'accent',
    },
    {
      company: 'Tetra Tech',
      role: 'Technical Specialist and Business Analyst Intern',
      location: 'Pickering, ON',
      period: 'May 2025 – Present',
      description: [
        'Developed an end-to-end Excel automation full-stack web application using ReactJS and C#, enabling teams to drag-and-drop inputs and automatically generate client-ready deliverables, streamlining tasks by 90%',
        'Built and documented 5+ reusable React components using Storybook, improving UI development efficiency by over 25% and cutting new developer onboarding time by 2+ hours per project',
        'Built an API integration application to retrieve 10,000+ client feedback comments from Autodesk Construction Cloud and developed a PowerBI dashboard with scheduled refreshes',
        'Collaborating cross-functionally with engineers, project managers, and stakeholders to gather requirements and translate business needs into technical deliverables',
      ],
      technologies: ['React', 'C#', '.NET', 'PowerBI', 'Storybook', 'TypeScript'],
      color: 'primary',
    },
    {
      company: 'InsightAI',
      role: 'Software Engineer Intern',
      location: 'Remote',
      period: 'Aug 2024 – Dec 2024',
      description: [
        'Refactored client AI knowledge base updates on the InsightAI platform by developing a RAG retrieval application that processes conversational data, reducing manual update effort by 70%',
        'Integrated OpenAI\'s API to convert raw text (up to 500,000 characters) into structured JSON data for optimized data organization and accessibility',
        'Implemented test-driven development with pytest, ensuring robust API functionality, data validation, and seamless file processing for multi-format inputs',
      ],
      technologies: ['Python', 'OpenAI API', 'RAG', 'pytest', 'Flask'],
      color: 'secondary',
    },
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            Delivering measurable impact through technical innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-8 border-primary/20 hover:glow-purple transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="glass border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
