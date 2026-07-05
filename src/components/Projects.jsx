import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Navigation Assistant for Blind People',
    desc: 'Real-time object detection using Python, OpenCV, and YOLO. Processes live camera feed, identifies obstacles, and delivers spoken audio alerts with distance-based safety warnings.',
    tags: ['Python', 'OpenCV', 'YOLO', 'Computer Vision'],
    github: 'https://github.com/Siddharth186',
    color: '#7C3AED',
  },
  {
    title: 'ShopGPT – Product Comparison & Analysis System',
    desc: 'Web tool that fetches e-commerce product data with side-by-side comparisons. Python back-end with responsive HTML/CSS/JS front-end. MCP Server for real-time data retrieval.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'MCP Server'],
    github: 'https://github.com/Siddharth186',
    color: '#8B5CF6',
  },
  {
    title: 'Leave Management System',
    desc: 'A web-based leave management system for organizations to handle employee leave requests, approvals, and tracking. Built with a clean UI and efficient backend workflow.',
    tags: ['Web App', 'CRUD', 'Database', 'Full Stack'],
    github: 'https://github.com/Siddharth186/Leave-management-system',
    color: '#A78BFA',
  },
]

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <motion.div {...fade}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">
            Featured <span className="hl">Work</span>
          </h2>
          <div className="line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginTop: '28px',
        }}>
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                borderTop: `3px solid ${p.color}`,
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: `${p.color}15`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: '0.9rem',
                color: p.color, fontWeight: 700, marginBottom: '14px',
              }}>
                &lt;/&gt;
              </div>

              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text)', marginBottom: '8px', lineHeight: 1.4 }}>
                {p.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.83rem',
                lineHeight: 1.8, marginBottom: '14px', flex: 1,
              }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <a href={p.github} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '7px 16px', fontSize: '0.8rem', alignSelf: 'flex-start' }}
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
