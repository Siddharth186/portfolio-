const ease = [0.22, 1, 0.36, 1]
const d = 0.6

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065 } },
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: d, ease } },
}

export const fadeUpLight = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: d, ease } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: d, ease } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease } },
}

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease, delay: 0.15 } },
}

export const staggerFade = (i) => ({
  initial: { opacity: 0, y: 20, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: {},
  transition: { duration: 0.55, ease, delay: i * 0.06 },
})
