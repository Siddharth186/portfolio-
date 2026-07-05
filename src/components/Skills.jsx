import { motion } from 'framer-motion'

const groups = [
  { cat: 'Languages', items: ['Java', 'Python', 'C', 'JavaScript'], color: '#7C3AED' },
  { cat: 'Web', items: ['HTML', 'CSS', 'React'], color: '#8B5CF6' },
  { cat: 'Tools', items: ['OpenCV', 'YOLO', 'Git', 'GitHub', 'Three.js'], color: '#A78BFA' },
  { cat: 'Concepts', items: ['OOP', 'DSA', 'Computer Vision', 'AI/ML'], color: '#C4B5FD' },
]

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <motion.div {...fade}>
          <div className="section-label">Skills</div>
          <h2 className="section-title">
            Tech <span className="hl">Stack</span>
          </h2>
          <div className="line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          marginTop: '28px',
        }}>
          {groups.map((g) => (
            <motion.div key={g.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: g.color,
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {g.cat}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {g.items.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade} transition={{ duration: 0.4, delay: 0.15 }}
          style={{
            marginTop: '20px',
            padding: '14px 20px',
            borderRadius: '8px',
            background: 'var(--primary-dim)',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            {'>'} LeetCode: <span style={{ color: 'var(--primary)', fontWeight: 600 }}>35+ problems</span> (Easy / Medium)
          </span>
        </motion.div>
      </div>
    </section>
  )
}
