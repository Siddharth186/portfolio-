import { motion } from 'framer-motion'
import { stagger, scaleIn, fadeUpLight, lineGrow } from '../animations'

const items = [
  {
    title: 'AI Navigation Assistant',
    desc: 'Real-time object detection for visually impaired users using Python, OpenCV, and YOLO. Features distance-based audio alerts and live camera processing.',
    tags: ['Python', 'OpenCV', 'YOLO'],
    github: 'https://github.com/Siddharth186',
    gradient: 'linear-gradient(135deg, #7C3AED, #A78BFA)',
  },
  {
    title: 'ShopGPT Comparison System',
    desc: 'E-commerce product comparison tool with Python backend, responsive front-end, and MCP Server integration for real-time data retrieval and analysis.',
    tags: ['Python', 'JavaScript', 'MCP'],
    github: 'https://github.com/Siddharth186/shopgpt-A-comparison-analysis-between-products',
    gradient: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
  },
  {
    title: 'Leave Management System',
    desc: 'Web-based system for organizations to handle employee leave requests, approvals, and tracking with a clean interface and efficient backend workflows.',
    tags: ['Web App', 'CRUD', 'Database'],
    github: 'https://github.com/Siddharth186/Leave-management-system',
    gradient: 'linear-gradient(135deg, #A78BFA, #C4B5FD)',
  },
  {
    title: 'Portfolio Website',
    desc: 'This portfolio — built with React, Three.js, and Framer Motion. Features immersive 3D background, smooth micro-animations, and a clean lavender-themed design.',
    tags: ['React', 'Three.js', 'Framer'],
    github: 'https://github.com/Siddharth186',
    gradient: 'linear-gradient(135deg, #F472B6, #FB923C)',
  },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Featured <span className="hl">Work</span>
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '40px',
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              className="card"
              style={{ padding: 0, overflow: 'hidden' }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <motion.div
                style={{
                  height: '140px',
                  background: item.gradient,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)',
                  fontFamily: 'var(--font-mono)', fontWeight: 700,
                  position: 'relative', overflow: 'hidden',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 100%)',
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>{'</>'}</span>
              </motion.div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                  {item.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.83rem',
                  lineHeight: 1.7, marginBottom: '14px',
                }}>
                  {item.desc}
                </p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {item.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <motion.a
                  href={item.github}
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '7px 16px', fontSize: '0.8rem' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on GitHub →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
