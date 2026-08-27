import { motion } from 'framer-motion'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn