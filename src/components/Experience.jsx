import { motion } from 'framer-motion'

const experience = [
  {
    title: 'Full Stack Development Intern',
    company: 'Nextskill Technologies Pvt. Ltd.',
    period: 'Internship',
    certificate: 'NS26/05/CERT680',
    details: [
      'Worked on front-end UI components and connected them to back-end APIs for web applications.',
      'Gained practical experience in how full stack projects are structured, built, and tested.',
      'Understood real-world development workflows including version control using Git.',
    ],
    tags: ['React', 'Node.js', 'APIs', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Career</div>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '48px' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glow-border"
              style={{ padding: '32px' }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '16px',
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{ color: 'var(--secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    {exp.company}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="tag">{exp.period}</span>
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '16px',
              }}>
                {exp.details.map((d, i) => (
                  <li key={i} style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    paddingLeft: '20px',
                    position: 'relative',
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      top: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                    }} />
                    {d}
                  </li>
                ))}
              </ul>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}>
                  Cert: {exp.certificate}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
