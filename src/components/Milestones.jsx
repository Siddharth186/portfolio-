import { motion } from 'framer-motion'
import { stagger, scaleIn, fadeUpLight, lineGrow } from '../animations'

const milestones = [
  {
    quote: 'Strong problem-solving skills and deep understanding of AI concepts. His work on UI components and API integration showed great attention to detail and professional workflow.',
    author: 'Nextskill Technologies',
    role: 'Internship Completion',
    icon: '◆',
    color: '#7C3AED',
  },
  {
    quote: 'Built a complete real-time object detection system from scratch using YOLO and OpenCV. The audio alert system and distance-based warnings added real practical value for visually impaired users.',
    author: 'AI Navigation Project',
    role: 'Independent Research',
    icon: '◇',
    color: '#6D28D9',
  },
  {
    quote: '100+ LeetCode problems solved across Easy and Medium difficulty levels. Strong foundation in data structures, algorithms, and object-oriented programming with clean, efficient code.',
    author: 'Problem Solving',
    role: 'DSA Practice Journey',
    icon: '○',
    color: '#A78BFA',
  },
]

export default function Milestones() {
  return (
    <section id="milestones">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label">Milestones</div>
          <h2 className="section-title">
            Key <span className="hl">Achievements</span>
          </h2>
          <motion.div variants={lineGrow} className="line" style={{ margin: '0 auto 0' }} />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {milestones.map((m) => (
            <motion.div
              key={m.author}
              variants={scaleIn}
              className="card"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', borderTop: `3px solid ${m.color}` }}
              whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: `${m.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px', color: m.color, fontSize: '1.2rem', fontWeight: 700,
                }}
              >
                {m.icon}
              </motion.div>

              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.9rem',
                lineHeight: 1.8, flex: 1, marginBottom: '16px',
                fontStyle: 'italic',
              }}>
                &ldquo;{m.quote}&rdquo;
              </p>

              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '12px',
              }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>
                  {m.author}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {m.role}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
