'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C#', 'C', 'C++', 'JavaScript', 'TypeScript', 'CSS', 'Elm', 'Haskell'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'ASP.NET Core',
        'Node.js',
        'React.js',
        'Next.js',
        'Angular',
        'Django',
        'Flask',
        'TailwindCSS',
        'Storybook',
      ],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Microsoft SQL Server', 'MySQL'],
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Postman', 'Jira', 'Confluence', 'Visual Studio', 'Cursor', 'PowerBI'],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-8 border-primary/20 hover:glow-purple transition-all">
                <h3 className="text-xl font-bold mb-6 gradient-text">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="outline"
                        className="glass border-primary/30 px-4 py-2 text-sm hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating tech icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-4 md:grid-cols-8 gap-8 max-w-4xl mx-auto"
        >
          {['⚛️', '🐍', '💻', '🚀', '⚡', '🔥', '🎨', '📊'].map((icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.2,
              }}
              className="aspect-square flex items-center justify-center text-4xl glass rounded-2xl glow-purple"
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
