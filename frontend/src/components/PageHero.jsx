import { motion } from 'framer-motion'
import Container from './Container.jsx'

const PageHero = ({ title, subtitle, breadcrumb, eyebrow, align = 'center' }) => {
  return (
    <section className="relative overflow-hidden border-b border-jj-orange/10 bg-jj-black text-white">
      <div className="jj-noise absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(232,101,26,0.2)_0%,transparent_65%)]" />
      <div className="absolute inset-0 jj-hero-grid opacity-40" />

      <Container className="relative z-10 py-20 md:py-28">
        <div className={`mx-auto flex max-w-4xl flex-col gap-6 ${align === 'left' ? 'items-start text-left' : 'items-center text-center'}`}>
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="jj-label text-[0.65rem] text-jj-gold"
            >
              {eyebrow}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl leading-none text-white sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-2xl text-sm leading-7 text-[#b5b5b5] sm:text-base"
            >
              {subtitle}
            </motion.p>
          )}

          {breadcrumb && (
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="jj-label flex flex-wrap items-center justify-center gap-2 text-[0.62rem] text-jj-muted"
            >
              {breadcrumb.map((item, index) => (
                <span key={`${item.label}-${index}`} className="flex items-center gap-2">
                  <span className={index === breadcrumb.length - 1 ? 'text-jj-orange' : 'text-white/70'}>{item.label}</span>
                  {index < breadcrumb.length - 1 && <span className="text-jj-orange/70">/</span>}
                </span>
              ))}
            </motion.nav>
          )}
        </div>
      </Container>
    </section>
  )
}

export default PageHero