import { motion } from 'framer-motion'

const links = [
  { label: 'GitHub', href: 'https://github.com/Siddharth186', icon: '⟐' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth-s-186', icon: '⟡' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/jxn7yLvSW8', icon: '⟢' },
  { label: 'Email', href: 'mailto:rathinamsiddharth1@gmail.com', icon: '⟣' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'none' }}>/</span>Connect
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            maxWidth: '500px',
            margin: '0 auto 48px',
            lineHeight: 1.8,
          }}>
            I'm always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass glow-border"
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '32px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                fontFamily: 'var(--font-mono)',
              }}>
                @
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  EMAIL
                </div>
                <a href="mailto:rathinamsiddharth1@gmail.com" style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s',
                }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  rathinamsiddharth1@gmail.com
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--secondary)',
                fontFamily: 'var(--font-mono)',
              }}>
                #
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  PHONE
                </div>
                <a href="tel:+919360488902" style={{
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s',
                }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--secondary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  +91 9360488902
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(236, 72, 153, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontFamily: 'var(--font-mono)',
              }}>
                L
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  LOCATION
                </div>
                <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  Tiruppur, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            borderTop: '1px solid rgba(139, 92, 246, 0.1)',
            paddingTop: '24px',
          }}>
            {links.map((link) => (
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
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'var(--primary)'
                  e.target.style.borderColor = 'rgba(139, 92, 246, 0.2)'
                  e.target.style.background = 'rgba(139, 92, 246, 0.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'var(--text-muted)'
                  e.target.style.borderColor = 'transparent'
                  e.target.style.background = 'transparent'
                }}
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
