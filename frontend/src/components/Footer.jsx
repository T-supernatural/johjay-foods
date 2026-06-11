import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-primary-100 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h2 className="font-serif text-xl font-bold text-primary-800">Johjay Foods</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-primary-800/70">
            Professional catering and event food services for weddings, corporate events, private gatherings, and special occasions.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Explore</h3>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary-800/70">
            <Link to="/services">Services</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">Get Started</h3>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary-800/70">
            <Link to="/request-quote">Request a Quote</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-100 py-4 text-center text-xs text-primary-800/60">
        © {new Date().getFullYear()} Johjay Foods. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer