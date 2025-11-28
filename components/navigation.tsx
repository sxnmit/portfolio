'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-sm border-b border-border/50 ${isScrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sanmit Singh"
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="glow-purple" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/50 p-6 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="glow-purple w-full" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
