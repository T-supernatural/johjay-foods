import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="jj-scroll-top fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-jj-orange text-black transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
    >
      <span className="text-lg font-black leading-none">↑</span>
    </button>
  )
}

export default ScrollToTopButton