import { motion } from 'framer-motion'

const education = [
  {
    degree: 'B.E. in Computer Science and Engineering',
    school: 'Dr. NGP Institute of Technology',
    location: 'Coimbatore, India',
    period: '2024 – 2028',
    cgpa: '7.68 CGPA',
    details: ['Specializing in AI/ML', 'Active in tech communities', 'Project-based learning focus'],
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Education</div>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div style={{ position: 'relative', marginTop: '48px' }}>
          <div style={{
            position: 'absolute',
            left: '24px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
          }} />

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                position: 'relative',
                paddingLeft: '64px',
                marginBottom: '32px',
              }}
            >
              <div style={{
                position: 'absolute',
                left: '16px',
                top: '24px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--gradient-1)',
                border: '3px solid var(--bg-primary)',
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
              }} />

              <div className="glass" style={{ padding: '32px' }}>
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
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}>
                      {item.degree}
                    </h3>
                    <p style={{ color: 'var(--secondary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      {item.school} — {item.location}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span className="tag">{item.period}</span>
                    <div style={{
                      marginTop: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--gold)',
                    }}>
                      {item.cgpa}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.details.map((d, i) => (
                    <span key={i} className="tag">{d}</span>
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
