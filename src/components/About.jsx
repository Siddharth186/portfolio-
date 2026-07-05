import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="glass hud-corner"
          style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}
        >
          <div className="section-label">Objective</div>
          <h2 className="section-title">About Me</h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.9,
            marginBottom: '24px',
          }}>
            Computer Science Engineering student (2024–2028) with hands-on experience in Python, Java, and computer vision.
            Completed an internship in full stack web development and built two independent projects using OpenCV and YOLO.
            Looking for an internship where I can contribute to real software work and keep learning.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}>
            {[
              { label: 'Name', value: 'Siddharth S' },
              { label: 'Location', value: 'Tiruppur, Tamil Nadu' },
              { label: 'Email', value: 'rathinamsiddharth1@gmail.com' },
              { label: 'Phone', value: '+91 9360488902' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '16px',
                borderRadius: '8px',
                background: 'rgba(139, 92, 246, 0.05)',
                border: '1px solid rgba(139, 92, 246, 0.08)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--primary)',
                  marginBottom: '4px',
                }}>
                  {item.label}
                </div>
                <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
