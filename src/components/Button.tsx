'use client'

import { motion } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'outline-white' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold tracking-wider uppercase rounded-full transition-all duration-300 cursor-pointer'

  const variants: Record<string, string> = {
    primary:
      'bg-grove-gold text-grove-green-dark hover:bg-grove-gold-light hover:shadow-lg hover:shadow-grove-gold/25',
    outline:
      'border-2 border-grove-gold text-grove-gold hover:bg-grove-gold hover:text-grove-green-dark',
    'outline-white':
      'border-2 border-grove-white/60 text-grove-white hover:border-grove-gold hover:text-grove-gold',
    ghost:
      'text-grove-gold hover:bg-grove-gold/10',
  }

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={classes}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <button className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    </motion.div>
  )
}
