import { motion } from 'framer-motion'
import { stagger, fadeUp, fadeUpLight, fadeLeft, fadeRight, lineGrow } from '../animations'

const stats = [
  { label: 'LeetCode Problems', value: '100+' },
  { label: 'Projects Built', value: '3+' },
  { label: 'Languages', value: '4' },
  { label: 'Internships', value: '1' },
]

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">About</div>
          <h2 className="section-title">
            Turning Code Into <span className="hl">Intelligence</span>
          </h2>
          <motion.div variants={lineGrow} className="line" />
        </motion.div>

        <motion.div
          className="about-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '28px',
            marginTop: '28px',
            alignItems: 'start',
          }}
        >
          <motion.div variants={fadeLeft} className="card" style={{ padding: '36px' }}>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}>
              I'm a <strong style={{ color: 'var(--text)' }}>Computer Science Engineering student</strong> (2024–2028)
              at Dr. NGP Institute of Technology, Coimbatore — passionate about the intersection of
              <strong style={{ color: 'var(--primary)' }}> artificial intelligence</strong> and
              <strong style={{ color: 'var(--primary)' }}> software engineering</strong>.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.9,
              marginBottom: '20px',
            }}>
              With hands-on experience in <strong style={{ color: 'var(--text)' }}>Python, Java, and Computer Vision</strong>,
              I've built real-world projects using OpenCV, YOLO, and modern web frameworks.
              I completed an internship in full stack development where I learned how production systems
              are architected, tested, and deployed.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.9,
            }}>
              I'm actively seeking an <strong style={{ color: 'var(--primary)' }}>internship opportunity</strong> where I can
              contribute to meaningful software, collaborate with experienced engineers, and continue growing.
            </p>
          </motion.div>

          <motion.div variants={fadeRight} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <motion.div className="card" style={{ padding: '24px' }} whileHover={{ scale: 1.01 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ scale: 1.05, y: -2 }}
                    style={{
                      padding: '16px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--primary-soft)',
                      border: '1px solid var(--border-light)',
                      textAlign: 'center',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '4px' }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="card" style={{ padding: '20px 24px' }} whileHover={{ scale: 1.01 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { label: 'Name', value: 'Siddharth S' },
                  { label: 'Location', value: 'Tiruppur, Tamil Nadu' },
                  { label: 'Degree', value: 'B.E. Computer Science & Engineering' },
                  { label: 'CGPA', value: '7.82 / 10.0' },
                  { label: 'Available', value: 'Open for Internships', dot: true },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{}}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '8px 14px', borderRadius: '8px',
                      background: 'var(--primary-soft)',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--primary)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '1px',
                    }}>
                      {item.label}
                    </span>
                    <span style={{
                      color: 'var(--text)', fontSize: '0.85rem', fontWeight: 500,
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      {item.dot && (
                        <motion.span
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}
                        />
                      )}
                      {item.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <style>{`
          @media (max-width: 700px) { .about-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  )
}
