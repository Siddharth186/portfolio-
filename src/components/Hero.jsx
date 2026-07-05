import { motion } from 'framer-motion'
import { stagger, fadeUp, lineGrow } from '../animations'
import profileImg from '../assets/images/photo.jpg'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 'var(--nav-h)',
    }}>
      <motion.div
        className="section-inner hero-grid"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: 0 }}>
          <motion.div variants={fadeUp}>
            <div className="section-label">AIML Engineer — Full Stack Developer</div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}>
              SIDDHARTH{' '}
              <motion.span
                className="text-gradient"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', display: 'inline-block' }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                S
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp}>
            <motion.div variants={lineGrow} className="line" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              maxWidth: '600px',
              lineHeight: 1.9,
            }}
          >
            Computer Science student passionate about building intelligent systems that make a real impact.
            I specialize in <strong style={{ color: 'var(--primary)' }}>artificial intelligence</strong>,
            <strong style={{ color: 'var(--primary)' }}> computer vision</strong>, and
            <strong style={{ color: 'var(--primary)' }}> modern web technologies</strong> —
            turning complex problems into elegant, production-ready solutions. From real-time object detection
            systems to AI-powered web applications, I bring ideas to life through clean code and creative engineering.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <motion.a
              href="#gallery"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work <span style={{ fontSize: '1.2rem' }}>→</span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginTop: '4px' }}
          >
            {[
              { label: 'GitHub', href: 'https://github.com/Siddharth186' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth-s-186' },
              { label: 'LeetCode', href: 'https://leetcode.com/u/jxn7yLvSW8' },
              { label: 'Email', href: 'mailto:rathinamsiddharth1@gmail.com' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: 'var(--primary)' }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.82rem',
                  color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '6px',
                }}
              >
                <span style={{ color: 'var(--primary)' }}>◆</span>
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div variants={fadeUp}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.04, rotate: 0, boxShadow: '0 0 0 4px #7C3AED, 0 0 50px rgba(124,58,237,0.35)' }}
            style={{
              width: 340, height: 340, borderRadius: '50%', overflow: 'hidden',
              background: 'var(--primary-soft)',
              border: '3px solid var(--primary)',
              boxShadow: '0 0 0 4px rgba(124,58,237,0.12), 0 8px 32px rgba(124,58,237,0.15)',
              transition: 'boxShadow 0.4s',
              flexShrink: 0,
            }}
          >
            <img
              src={profileImg} alt="Siddharth S"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; text-align: center; justify-items: center; }
          .hero-grid .line { margin: 0 auto; }
          .hero-grid > div:last-child { align-items: center; }
          .hero-grid > div:first-child { order: 2; }
          .hero-grid > div:last-child { order: 1; }
        }
      `}</style>
    </section>
  )
}
