import { motion } from 'framer-motion'
import { fadeUp, fadeUpLight } from '../animations'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-light)',
      position: 'relative', zIndex: 2,
      padding: '40px 24px 24px',
    }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '32px',
            marginBottom: '32px',
          }}
          className="footer-grid"
        >
          <div>
            <motion.h4
              whileHover={{ x: 3 }}
              style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--text)', marginBottom: '8px' }}
            >
              Siddharth <span style={{ color: 'var(--primary)' }}>S</span>
            </motion.h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              AIML Engineer & Full Stack Developer. Building intelligent systems with AI, computer vision, and modern web technologies.
            </p>
          </div>

          {[
            { title: 'Navigation', links: ['About', 'Services', 'Projects', 'Certifications', 'Contact'] },
            { title: 'Connect', links: ['GitHub', 'LinkedIn', 'LeetCode'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
          ].map((col) => (
            <div key={col.title}>
              <h5 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                {col.title}
              </h5>
              {col.links.map((l) => (
                <motion.a
                  key={l}
                  href={col.title === 'Legal' ? undefined : l === 'Projects' ? '#gallery' : `#${l.toLowerCase()}`}
                  target={col.title === 'Connect' ? '_blank' : undefined}
                  rel={col.title === 'Connect' ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4, color: 'var(--primary)' }}
                  style={{
                    display: 'block', color: 'var(--text-muted)', textDecoration: 'none',
                    fontSize: '0.85rem', padding: '4px 0', cursor: col.title === 'Legal' ? 'default' : 'pointer',
                    transition: 'color 0.2s',
                  }}
                >
                  {l}
                </motion.a>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '20px',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '12px',
          }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Siddharth S. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
            Built with React, Three.js & Framer Motion
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 450px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  )
}
