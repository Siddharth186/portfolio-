import { motion } from 'framer-motion'

const events = [
  {
    period: '2024 – 2028',
    title: 'B.E. Computer Science & Engineering',
    org: 'Dr. NGP Institute of Technology, Coimbatore',
    meta: '7.68 CGPA',
    tags: ['AI/ML Focus', 'Project-Based'],
    type: 'education',
  },
  {
    period: '2025',
    title: 'Full Stack Development Intern',
    org: 'Nextskill Technologies Pvt. Ltd.',
    meta: 'NS26/05/CERT680',
    details: [
      'Built front-end UI components and connected to back-end APIs',
      'Learned full stack architecture, build, and testing workflows',
      'Used Git for version control in professional development',
    ],
    tags: ['React', 'APIs', 'Git'],
    type: 'work',
  },
]

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Timeline() {
  return (
    <section id="timeline">
      <div className="section-inner">
        <motion.div {...fade}>
          <div className="section-label">Journey</div>
          <h2 className="section-title">
            Education & <span className="hl">Experience</span>
          </h2>
          <div className="line" />
        </motion.div>

        <div style={{ marginTop: '32px' }}>
          {events.map((event, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                paddingLeft: '44px',
                paddingBottom: i < events.length - 1 ? '28px' : 0,
              }}
            >
              <div style={{
                position: 'absolute', left: '14px', top: '6px', bottom: 0,
                width: '2px',
                background: i < events.length - 1 ? 'var(--border)' : 'transparent',
              }} />
              <div style={{
                position: 'absolute', left: '6px', top: '6px',
                width: '18px', height: '18px', borderRadius: '50%',
                background: event.type === 'education' ? 'var(--gradient)' : 'var(--gradient-accent)',
                border: '3px solid var(--bg)',
                boxShadow: '0 0 0 3px var(--border-light)',
                zIndex: 1,
              }} />

              <div className="card" style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px',
                  marginBottom: event.details ? '12px' : '6px',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--primary)', fontWeight: 600,
                      marginBottom: '2px',
                    }}>
                      {event.period}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>
                      {event.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '2px' }}>
                      {event.org}
                    </p>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text-muted)', padding: '4px 10px',
                    borderRadius: '6px', background: 'var(--primary-dim)',
                  }}>
                    {event.meta}
                  </span>
                </div>

                {event.details && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
                    {event.details.map((d, j) => (
                      <li key={j} style={{
                        color: 'var(--text-secondary)', fontSize: '0.85rem',
                        lineHeight: 1.7, paddingLeft: '14px', position: 'relative',
                      }}>
                        <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--primary)' }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {event.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
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
