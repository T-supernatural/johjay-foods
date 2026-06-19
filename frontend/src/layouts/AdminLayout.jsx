import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { useAuth } from '../context/useAuth.js'

const navItems = [
  { to: '/admin', label: 'Overview' },
  { to: '/admin/leads', label: 'Leads' },
  { to: '/admin/messages', label: 'Messages' },
]

const AdminLayout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="w-full border-b border-white/5 bg-[#0f0f0f] lg:w-80 lg:border-r lg:border-b-0">
          <div className="sticky top-0 z-20 flex h-full flex-col justify-between gap-8 p-6">
            <div>
              <div className="mb-10">
                <div className="text-2xl font-heading font-semibold text-white">Johjay Admin</div>
                <p className="mt-2 text-sm text-jj-muted">Leads & messages dashboard</p>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `block rounded-2xl px-4 py-3 text-sm font-medium transition ${isActive ? 'bg-jj-orange text-black' : 'text-white/80 hover:bg-white/5 hover:text-white'}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#141414] p-4">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-jj-muted">Admin panel</p>
                  <p className="font-semibold text-white">Secure access only</p>
                </div>
                <LogOut className="h-5 w-5 text-jj-orange" />
              </div>
              <button
                type="button"
                onClick={() => {
                  logout()
                  navigate('/login')
                }}
                className="inline-flex w-full items-center justify-center rounded-full bg-jj-orange px-4 py-3 text-sm font-semibold text-black transition hover:bg-orange-500"
              >
                Logout
              </button>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-[#0a0a0a] p-6 lg:p-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#101010]/90 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
