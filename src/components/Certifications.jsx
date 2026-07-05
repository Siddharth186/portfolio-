import { motion } from 'framer-motion'

const certifications = [
  { name: 'Prompt Engineering', issuer: 'Industry Certification', icon: '⟐', color: '#8B5CF6' },
  { name: 'Python 101 for Data Science', issuer: 'IBM (Cognitive Class)', icon: '⟡', color: '#06B6D4' },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Credentials</div>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '48px',
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass hud-corner"
              style={{
                padding: '32px',
                textAlign: 'center',
                borderTop: `3px solid ${cert.color}`,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '16px',
                color: cert.color,
              }}>
                {cert.icon}
              </div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>
                {cert.name}
              </h3>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}>
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
