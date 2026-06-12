import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'
import Button from './Button.jsx'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
  { to: '/request-quote', label: 'Request Quote' },
]

const Header = () => {
  const { currentUser, isAuthenticated, logout } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [avatarOpen, setAvatarOpen] = useState(false)
  const avatarRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setAvatarOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)

    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const avatarLetter = useMemo(() => {
    const source = currentUser?.full_name || currentUser?.email || 'J'
    return source.trim().charAt(0).toUpperCase()
  }, [currentUser])

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-jj-orange/15 bg-jj-black/95 backdrop-blur-[20px]' : 'border-transparent bg-transparent backdrop-blur-0'}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-[1.4rem] font-semibold text-white">Johjay Foods</span>
          <span className="jj-label mt-1 text-[0.6rem] text-jj-orange">Catering & Event Food Services</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `border-b-2 px-3 py-2 text-[0.78rem] font-medium text-white transition-colors duration-300 hover:text-jj-orange ${isActive ? 'border-jj-orange text-jj-orange' : 'border-transparent'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/request-quote" className="hidden lg:block">
            <Button variant="primary" size="sm" className="shadow-[0_0_20px_rgba(232,101,26,0.16)]">
              Request Quote
            </Button>
          </Link>

          {isAuthenticated ? (
            <div className="relative" ref={avatarRef}>
              <button
                type="button"
                onClick={() => setAvatarOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-jj-orange/40 bg-jj-orange text-sm font-bold text-black shadow-[0_0_20px_rgba(232,101,26,0.22)]"
                aria-label="Open user menu"
              >
                {avatarLetter}
              </button>

              {avatarOpen && (
                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-jj-orange/15 bg-jj-card p-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="border-b border-white/10 pb-3">
                    <p className="text-xs text-jj-muted">Signed in as</p>
                    <p className="mt-1 text-sm font-medium text-white">{currentUser?.full_name || currentUser?.email}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setAvatarOpen(false)
                      logout()
                    }}
                    className="mt-3 w-full rounded-full border border-jj-orange/20 px-4 py-2 text-left text-sm text-jj-orange transition-colors hover:bg-jj-orange hover:text-black"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="hidden text-sm font-medium text-white/80 hover:text-jj-orange sm:inline">
                Login
              </Link>
              <Link to="/register" className="hidden sm:block">
                <Button variant="secondary" size="sm">Register</Button>
              </Link>
            </>
          )}

          <button
            type="button"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-jj-orange/30 hover:text-jj-orange lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            <span className="text-xl leading-none">☰</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-jj-black/95 px-6 py-24 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex h-full max-w-md flex-col items-center justify-center gap-4 text-center">
            {navItems.map((item, index) => (
              <div key={item.to} className="w-full">
                <NavLink
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) => `block py-3 font-display text-3xl tracking-wide ${isActive ? 'text-jj-orange' : 'text-white'}`}
                >
                  {item.label}
                </NavLink>
                {index < navItems.length - 1 && <div className="mx-auto mt-3 h-px w-24 bg-jj-orange/25" />}
              </div>
            ))}

            <Link to="/request-quote" onClick={() => setMobileOpen(false)} className="mt-8">
              <Button variant="primary" size="lg">Request Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header