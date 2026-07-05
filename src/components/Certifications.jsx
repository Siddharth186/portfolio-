import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, scaleIn, fadeUpLight, lineGrow } from '../animations'
import certDS from '../assets/images/cert-data-science.jpg'
import certPE from '../assets/images/cert-prompt-engineering.jpg'
import certIS from '../assets/images/cert-internship.jpg'

const certs = [
  { name: 'Data Science', issuer: 'IBM (Cognitive Class)', img: certDS },
  { name: 'Prompt Engineering', issuer: 'Industry Certification', img: certPE },
  { name: 'Internship', issuer: 'Nextskill Technologies', img: certIS },
]

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label">Credentials</div>
          <h2 className="section-title">
            Certifi<span className="hl">cations</span>
          </h2>
          <motion.div variants={lineGrow} className="line" style={{ margin: '0 auto 0' }} />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{}}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '36px',
          }}
        >
          {certs.map((c) => (
            <motion.div
              key={c.name}
              variants={scaleIn}
              className="card"
              style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelected(c)}
            >
              <div style={{
                height: 160, overflow: 'hidden', background: 'var(--primary-soft)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <motion.img
                  src={c.img} alt={c.name}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '16px 20px 20px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>
                  {c.name}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  {c.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(30, 27, 75, 0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '24px', backdropFilter: 'blur(8px)',
              cursor: 'zoom-out',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxWidth: '90vw', maxHeight: '90vh',
                borderRadius: '12px', overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={selected.img} alt={selected.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block', maxHeight: '85vh' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
