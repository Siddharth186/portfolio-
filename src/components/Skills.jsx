import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'], color: '#8B5CF6' },
  { category: 'Web Technologies', items: ['HTML', 'CSS', 'React'], color: '#06B6D4' },
  { category: 'Libraries & Tools', items: ['OpenCV', 'YOLO', 'Git', 'GitHub', 'Three.js'], color: '#EC4899' },
  { category: 'Concepts', items: ['OOP', 'Data Structures', 'Algorithms', 'Computer Vision', 'AI/ML'], color: '#F59E0B' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginTop: '48px',
        }}>
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass"
              style={{
                padding: '28px',
                borderTop: `3px solid ${group.color}`,
              }}
            >
              <h3 style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: group.color,
                marginBottom: '20px',
                letterSpacing: '2px',
              }}>
                {'<'} {group.category} {'/>'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {group.items.map((skill) => (
                  <div key={skill}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                    }}>
                      <span>{skill}</span>
                    </div>
                    <div style={{
                      height: '4px',
                      borderRadius: '2px',
                      background: 'rgba(255,255,255,0.05)',
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${70 + Math.random() * 25}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        style={{
                          height: '100%',
                          borderRadius: '2px',
                          background: `linear-gradient(90deg, ${group.color}, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass"
          style={{
            marginTop: '24px',
            padding: '20px 28px',
            textAlign: 'center',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}>
            {'>'} Problem Solving: <span style={{ color: 'var(--gold)' }}>35+ problems</span> on LeetCode (Easy / Medium)
          </span>
        </motion.div>
      </div>
    </section>
  )
}
