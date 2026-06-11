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

  return (
    <header className="sticky top-0 z-40 border-b border-primary-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-tight text-primary-800">Johjay Foods</span>
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold-600">Catering & Event Food Services</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `rounded-full px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-primary-800/70 hover:bg-cream-100 hover:text-primary-700'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="hidden text-sm text-primary-800/70 sm:inline">
                {currentUser?.full_name || currentUser?.email}
              </span>
              <Button variant="text" size="sm" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login" className="hidden text-sm font-medium text-primary-700 hover:text-primary-800 sm:inline">
                Login
              </Link>
              <Link to="/register">
                <Button variant="secondary" size="sm">Register</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="border-t border-primary-100 bg-white lg:hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-3 sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-primary-800/70 hover:bg-cream-100'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header