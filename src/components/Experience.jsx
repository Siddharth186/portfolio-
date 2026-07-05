import { motion } from 'framer-motion'

const items = [
  {
    role: 'Full Stack Development Intern',
    company: 'Nextskill Technologies Pvt. Ltd.',
    period: 'Internship',
    cert: 'NS26/05/CERT680',
    details: [
      'Built front-end UI components and connected them to back-end APIs',
      'Learned full stack project structure, build processes, and testing',
      'Used Git for version control in a professional development workflow',
    ],
    tags: ['React', 'APIs', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Experience</div>
          <h2 className="section-title">
            Where I've <span className="hl">Worked</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '28px' }}>
          {items.map((exp, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
              style={{ padding: '28px' }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px',
                marginBottom: '16px',
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.1rem', fontWeight: 600,
                    color: 'var(--text)',
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '2px' }}>
                    {exp.company}
                  </p>
                </div>
                <span className="tag">{exp.period}</span>
              </div>

              <ul style={{
                listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px',
                marginBottom: '16px',
              }}>
                {exp.details.map((d, j) => (
                  <li key={j} style={{
                    color: 'var(--text-secondary)', fontSize: '0.9rem',
                    lineHeight: 1.7, paddingLeft: '16px', position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0, top: '9px',
                      width: '4px', height: '4px', borderRadius: '50%',
                      background: 'var(--primary)',
                    }} />
                    {d}
                  </li>
                ))}
              </ul>

              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', flexWrap: 'wrap', gap: '8px',
              }}>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {exp.cert}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
