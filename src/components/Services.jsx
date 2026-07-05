import { motion } from 'framer-motion'
import { stagger, scaleIn, fadeUpLight, lineGrow } from '../animations'

const services = [
  {
    icon: '◆',
    title: 'AI & Computer Vision',
    desc: 'Building intelligent systems with object detection, real-time video processing, and YOLO-based models — giving machines the power to see and understand the world around them.',
    tags: ['Python', 'OpenCV', 'YOLO'],
    color: '#7C3AED',
  },
  {
    icon: '◇',
    title: 'Full Stack Development',
    desc: 'Creating responsive, production-ready web applications from front-end UI to back-end APIs. Clean code, modern frameworks, and seamless user experiences end to end.',
    tags: ['React', 'JavaScript', 'APIs'],
    color: '#6D28D9',
  },
  {
    icon: '○',
    title: 'Problem Solving & DSA',
    desc: 'Strong foundation in data structures, algorithms, and object-oriented programming. 85+ LeetCode problems solved with a focus on clean, efficient, and scalable solutions.',
    tags: ['Java', 'Python', 'DSA'],
    color: '#A78BFA',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label">What I Do</div>
          <h2 className="section-title">
            Services & <span className="hl">Expertise</span>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={scaleIn}
              className="card"
              style={{
                padding: '32px',
                textAlign: 'center',
                borderTop: `3px solid ${s.color}`,
                cursor: 'default',
              }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                style={{
                  width: '56px', height: '56px', borderRadius: '14px',
                  background: `${s.color}15`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: s.color, fontSize: '1.5rem', fontWeight: 700,
                }}
              >
                {s.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)', marginBottom: '12px' }}>
                {s.title}
              </h3>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.9rem',
                lineHeight: 1.8, marginBottom: '18px',
              }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
