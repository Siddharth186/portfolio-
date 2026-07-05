import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = navItems.map((item) => {
      const el = document.querySelector(item.href)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(item.href) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        background: scrolled
          ? 'rgba(6, 6, 15, 0.8)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        maxWidth: 'var(--max-width)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#hero" style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '1.2rem',
          background: 'var(--gradient-1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
        }}>
          {'<SS />'}
        </a>

        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                color: active === item.href ? 'var(--primary)' : 'var(--text-muted)',
                background: active === item.href ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => { if (active !== item.href) e.target.style.color = 'var(--text-primary)' }}
              onMouseLeave={(e) => { if (active !== item.href) e.target.style.color = 'var(--text-muted)' }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            fontFamily: 'var(--font-mono)',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '[X]' : '[=]'}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          nav > div > div { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'rgba(6, 6, 15, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(139, 92, 246, 0.1)',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '8px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  color: active === item.href ? 'var(--primary)' : 'var(--text-muted)',
                  background: active === item.href ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
