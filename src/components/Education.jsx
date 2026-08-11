import { motion } from 'framer-motion'

const items = [
  {
    degree: 'B.E. Computer Science & Engineering',
    school: 'Dr. NGP Institute of Technology',
    location: 'Coimbatore',
    period: '2024 – 2028',
    cgpa: '7.82 CGPA',
    tags: ['AI/ML Focus', 'Project-Based Learning'],
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Education() {
  return (
    <section id="education">
      <div className="section-inner">
        <motion.div {...fadeUp}>
          <div className="section-label">Education</div>
          <h2 className="section-title">
            Academic <span className="hl">Background</span>
          </h2>
        </motion.div>

        <div style={{ marginTop: '28px' }}>
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                paddingLeft: '36px',
                borderLeft: '2px solid var(--border)',
                marginLeft: '6px',
              }}
            >
              <div style={{
                position: 'absolute', left: '-8px', top: '4px',
                width: '14px', height: '14px', borderRadius: '50%',
                background: 'var(--primary)',
                border: '3px solid var(--bg)',
              }} />

              <div className="card" style={{ padding: '28px' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px',
                  marginBottom: '10px',
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)' }}>
                      {item.degree}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginTop: '2px' }}>
                      {item.school} — {item.location}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tag">{item.period}</span>
                    <div style={{ marginTop: '4px', fontSize: '0.85rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)' }}>
                      {item.cgpa}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {item.tags.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
