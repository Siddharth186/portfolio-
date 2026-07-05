import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { stagger, fadeUp, fadeRight, lineGrow } from '../animations'

const links = [
  { label: 'GitHub', href: 'https://github.com/Siddharth186' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddharth-s-186' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/jxn7yLvSW8' },
  { label: 'Email', href: 'mailto:rathinamsiddharth1@gmail.com' },
]

const inputStyle = {
  padding: '13px 18px', borderRadius: 'var(--radius-sm)',
  border: '2px solid var(--border-light)', fontFamily: 'var(--font)',
  fontSize: '0.95rem', background: 'var(--primary-dim)',
  color: 'var(--text)', outline: 'none', width: '100%',
  transition: 'border 0.25s, box-shadow 0.25s, background 0.25s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [sent, setSent] = useState(false)

  const hc = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const hs = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'b29e282f-370c-4407-911b-6ccb51d83aee',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      }
    } catch { /* fail silently */ }
  }

  const fi = (n) => focused === n
    ? { borderColor: 'var(--primary)', boxShadow: '0 0 0 4px rgba(124,58,237,0.12)', background: 'var(--primary-soft)' }
    : {}

  return (
    <section id="contact">
      <div className="section-inner contact-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '32px',
        alignItems: 'start',
      }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: '-60px' }}
        >
          <motion.div variants={fadeUp}>
            <div className="section-label">Contact</div>
            <h2 className="section-title">
              Get In <span className="hl">Touch</span>
            </h2>
            <motion.div variants={lineGrow} className="line" />
            <p style={{
              color: 'var(--text-secondary)', fontSize: '0.95rem',
              lineHeight: 1.9, marginBottom: '28px',
            }}>
              Have a project idea, internship opportunity, or just want to say hello?
              Drop me a message and I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeRight} className="card" style={{ padding: '28px' }}>
            <form onSubmit={hs} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'Your Email', type: 'email' },
              ].map((f) => (
                <motion.input
                  key={f.name}
                  {...f}
                  value={form[f.name]}
                  onChange={hc}
                  onFocus={() => setFocused(f.name)}
                  onBlur={() => setFocused(null)}
                  required
                  style={{ ...inputStyle, ...fi(f.name) }}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
              <motion.textarea
                name="message" placeholder="Your Message"
                value={form.message} onChange={hc}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                required rows={5}
                style={{ ...inputStyle, resize: 'vertical', ...fi('message') }}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                      padding: '14px', borderRadius: 'var(--radius-sm)',
                      background: 'rgba(6, 214, 160, 0.12)',
                      color: '#065F46',
                      textAlign: 'center', fontWeight: 600,
                      border: '1px solid rgba(6, 214, 160, 0.2)',
                      fontSize: '0.9rem',
                    }}
                  >
                    ✓ Message sent! I'll get back to you soon.
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <motion.button
                type="submit"
                className="btn btn-primary"
                style={{ justifyContent: 'center', width: '100%' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message →
              </motion.button>

              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text-muted)', textAlign: 'center',
              }}>
                Your message will be sent directly to rathinamsiddharth1@gmail.com
              </p>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ margin: '-60px' }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <motion.div variants={fadeUp} className="card" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text)' }}>
              Contact Information
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '@', label: 'Email', value: 'rathinamsiddharth1@gmail.com', href: 'mailto:rathinamsiddharth1@gmail.com' },
                { icon: '#', label: 'Phone', value: '+91 9360488902', href: 'tel:+919360488902' },
                { icon: '◈', label: 'Location', value: 'Tiruppur, Tamil Nadu, India' },
                { icon: '◉', label: 'Availability', value: 'Open for Internships / Freelance', dot: true },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{}}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ x: 3 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '14px',
                    padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                    background: 'var(--primary-dim)',
                    border: '1px solid var(--border-light)',
                    cursor: 'default',
                  }}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'var(--primary-soft)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{
                        color: 'var(--text)', textDecoration: 'none',
                        fontSize: '0.88rem', fontWeight: 500,
                        display: 'flex', alignItems: 'center', gap: '6px',
                      }}>
                        {item.dot && (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}
                          />
                        )}
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.88rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {item.dot && (
                          <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }}
                          />
                        )}
                        {item.value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="card" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.08, color: 'var(--primary)', background: 'var(--primary-soft)' }}
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
                  color: 'var(--text-muted)', textDecoration: 'none',
                  padding: '8px 18px', borderRadius: '8px', fontWeight: 500,
                  transition: 'background 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
