import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t border-jj-orange/15 bg-jj-black text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex flex-col leading-none">
            <h2 className="font-display text-2xl font-semibold text-white">Johjay Foods</h2>
            <span className="jj-label text-[0.58rem] text-jj-orange">Catering & Event Food Services</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-jj-muted">
            Premium Nigerian catering for weddings, corporate events, private dinners, and memorable celebrations across Lagos and beyond.
          </p>
          <div className="flex gap-3 text-xs text-white/80">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-jj-orange/30 hover:text-jj-orange">IG</a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-jj-orange/30 hover:text-jj-orange">FB</a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-jj-orange/30 hover:text-jj-orange">WA</a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-jj-orange/30 hover:text-jj-orange">TT</a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="jj-label text-[0.68rem] text-jj-gold">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm text-jj-muted">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/gallery" className="hover:text-white">Gallery</Link>
            <Link to="/testimonials" className="hover:text-white">Testimonials</Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="jj-label text-[0.68rem] text-jj-gold">Services</h3>
          <div className="flex flex-col gap-3 text-sm text-jj-muted">
            <span>Wedding Catering</span>
            <span>Corporate Events</span>
            <span>Private Dining</span>
            <span>Outdoor Events</span>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="jj-label text-[0.68rem] text-jj-gold">Contact</h3>
          <div className="flex flex-col gap-3 text-sm text-jj-muted">
            <p>info@johjayfoods.com</p>
            <p>+234 123 456 7890</p>
            <p>Lagos, Nigeria</p>
          </div>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Newsletter signup"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-[#666666] outline-none transition-all focus:border-jj-orange focus:ring-2 focus:ring-jj-orange/20"
            />
            <button type="button" className="jj-label w-full rounded-full bg-jj-orange px-4 py-3 text-[0.65rem] font-bold text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(232,101,26,0.35)]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-jj-muted sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>Made with ❤️ in Nigeria</p>
          <p>© {new Date().getFullYear()} Johjay Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer