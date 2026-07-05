import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#gallery' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 25 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.div
        style={{ scaleX, originX: 0, height: 2.5, background: 'var(--gradient)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1001 }}
      />
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: 'var(--nav-h)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 24px',
          background: scrolled ? 'rgba(232, 224, 244, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-light)' : 'none',
          transition: 'all 0.4s',
        }}
      >
        <div style={{ maxWidth: 'var(--max-w)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            style={{
              fontWeight: 800, fontSize: '1.3rem',
              color: 'var(--primary)', textDecoration: 'none',
              letterSpacing: '-0.5px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            SS
          </motion.a>

          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {links.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  padding: '10px 18px', borderRadius: '8px',
                  fontSize: '0.9rem', fontWeight: 500,
                  textDecoration: 'none', color: 'var(--text-muted)',
                  transition: 'background 0.25s, color 0.25s',
                }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--primary)'; e.target.style.background = 'var(--primary-light)' }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--text-muted)'; e.target.style.background = 'transparent' }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  )
}
