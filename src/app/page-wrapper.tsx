'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' as const } },
}

function ScrollToTop() {
  const pathname = usePathname()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
