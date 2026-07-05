import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI Navigation Assistant for Blind People',
    description: 'Built a real-time object detection system using Python, OpenCV, and YOLO to help visually impaired users navigate. The system processes a live camera feed, identifies nearby obstacles, and gives spoken audio alerts. Added distance-based safety alerts so the user is warned before getting too close to an object.',
    tags: ['Python', 'OpenCV', 'YOLO', 'Computer Vision'],
    links: { github: 'https://github.com/Siddharth186' },
    color: '#8B5CF6',
  },
  {
    title: 'ShopGPT – Product Comparison & Analysis System',
    description: 'Developed a web tool that fetches product data from e-commerce platforms and displays a side-by-side comparison. Built the back-end logic in Python and created a clean, responsive front-end using HTML, CSS, and JavaScript. Integrated an MCP Server to handle data retrieval and keep the interface updated with current product info.',
    tags: ['Python', 'HTML', 'CSS', 'JavaScript', 'MCP Server'],
    links: { github: 'https://github.com/Siddharth186' },
    color: '#06B6D4',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '24px',
          marginTop: '48px',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: `linear-gradient(90deg, ${project.color}, var(--secondary))`,
              }} />

              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: `${project.color}20`,
                border: `1px solid ${project.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '1.2rem',
                color: project.color,
                marginBottom: '20px',
              }}>
                {'</>'}
              </div>

              <h3 style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                lineHeight: 1.4,
              }}>
                {project.title}
              </h3>

              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                marginBottom: '20px',
                flex: 1,
              }}>
                {project.description}
              </p>

              <div style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  <span>⟐</span> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
