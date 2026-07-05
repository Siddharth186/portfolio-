import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'var(--nav-height)',
      position: 'relative',
    }}>
      <div className="section-inner" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '24px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--secondary)',
            letterSpacing: '4px',
          }}
        >
          {'< Hello World />'}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-2px',
          }}
        >
          <span style={{ color: 'var(--text-primary)' }}>SIDDHARTH</span>{' '}
          <span className="gradient-text">S</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span className="tag">AIML Engineer</span>
          <span className="tag">Full Stack Developer</span>
          <span className="tag">Computer Vision</span>
          <span className="tag">Open Source</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            lineHeight: 1.8,
          }}
        >
          Computer Science Engineering student passionate about AI, computer vision,
          and building impactful software. Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
            <span>→</span>
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            display: 'flex',
            gap: '24px',
            marginTop: '32px',
          }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/Siddharth186', icon: '⟐' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth-s-186', icon: '⟡' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/jxn7yLvSW8', icon: '⟢' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
          }}
        >
          <span>SCROLL</span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--primary), transparent)',
          }} />
        </motion.div>
      </div>
    </section>
  )
}
