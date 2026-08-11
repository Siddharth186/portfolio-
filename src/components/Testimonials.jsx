import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Siddharth demonstrated strong problem-solving skills and a deep understanding of AI concepts during his internship. His work on UI components and API integration showed great attention to detail.',
    author: 'Nextskill Technologies',
    role: 'Full Stack Internship',
    highlight: 'Professional Growth',
  },
  {
    quote: 'Built a real-time object detection system from scratch using YOLO and OpenCV. The project was well-architected and the audio alert system added real practical value for visually impaired users.',
    author: 'AI Navigation Project',
    role: 'Independent Project',
    highlight: 'Technical Excellence',
  },
  {
    quote: '100+ LeetCode problems solved across Easy and Medium difficulties. Strong foundation in data structures, algorithms, and object-oriented programming principles.',
    author: 'Problem Solving',
    role: 'DSA Practice',
    highlight: 'Analytical Skills',
  },
]

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="section-inner">
        <motion.div {...fade} style={{ textAlign: 'center' }}>
          <div className="section-label">Highlights</div>
          <h2 className="section-title">
            What They <span className="hl">Say</span>
          </h2>
          <div className="line" style={{ margin: '0 auto 0' }} />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          marginTop: '40px',
        }}>
          {testimonials.map((t, i) => (
            <motion.div key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--primary)', fontWeight: 600, marginBottom: '12px',
                textTransform: 'uppercase', letterSpacing: '2px',
              }}>
                {t.highlight}
              </div>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.9rem',
                lineHeight: 1.8, flex: 1, marginBottom: '16px',
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>
              <div style={{
                borderTop: '1px solid var(--border-light)',
                paddingTop: '12px',
              }}>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>
                  {t.author}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
