import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
      borderTop: '1px solid rgba(139, 92, 246, 0.08)',
      position: 'relative',
      zIndex: 2,
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '8px',
        }}>
          {'<built_by>'} Siddharth S {'</built_by>'}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          opacity: 0.6,
        }}>
          © {new Date().getFullYear()} — Crafted with React, Three.js & Cosmic Energy
        </p>
      </motion.div>
    </footer>
  )
}
