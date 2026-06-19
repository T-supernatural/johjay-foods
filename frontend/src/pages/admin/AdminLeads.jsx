import { useEffect, useMemo, useState } from 'react'
import { fetchAdminLeads, updateLeadStatus } from '../../api/adminService.js'
import { ChevronDown, Search } from 'lucide-react'

const statusOptions = ['all', 'new', 'contacted', 'qualified', 'converted', 'lost']
const statusMap = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  converted: 'Converted',
  lost: 'Lost',
}

const statusPill = (status) => {
  const classes = {
    new: 'bg-blue-500/10 text-blue-300',
    contacted: 'bg-yellow-500/10 text-yellow-300',
    qualified: 'bg-purple-500/10 text-purple-300',
    converted: 'bg-green-500/10 text-green-300',
    lost: 'bg-red-500/10 text-red-300',
  }
  return classes[status] || 'bg-white/10 text-white'
}

const AdminLeads = () => {
  const [leads, setLeads] = useState([])
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadLeads = async () => {
      const leadData = await fetchAdminLeads()
      setLeads(leadData)
    }
    loadLeads()
  }, [])

  const filteredLeads = useMemo(() => {
    return leads
      .filter((lead) => {
        if (statusFilter !== 'all' && lead.status !== statusFilter) {
          return false
        }

        if (!query) {
          return true
        }

        return [lead.name, lead.email].some((field) => field.toLowerCase().includes(query.toLowerCase()))
      })
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  }, [leads, query, statusFilter])

  const saveStatus = async (leadId, status) => {
    setSaving(true)
    setError(null)
    try {
      const updated = await updateLeadStatus(leadId, status)
      setLeads((current) => current.map((lead) => (lead.id === leadId ? updated : lead)))
    } catch (err) {
      setError('Unable to update lead status. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl text-white">Leads</h1>
          <p className="mt-2 text-sm text-jj-muted">View and update incoming quote requests.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex items-center rounded-3xl border border-white/10 bg-[#111111] px-4 py-3 text-white/80">
            <Search className="mr-3 h-4 w-4 text-jj-orange" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or email"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setStatusFilter(option)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${statusFilter === option ? 'bg-jj-orange text-black' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                {option === 'all' ? 'All' : option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredLeads.length === 0 ? (
        <div className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-12 text-center text-sm text-jj-muted">
          No leads found. Check again after new quote requests arrive.
        </div>
      ) : (
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 bg-[#111111] px-6 py-4 text-xs uppercase tracking-[0.25em] text-white/70 sm:grid-cols-8">
            <div className="col-span-2">Name</div>
            <div className="hidden sm:block">Email</div>
            <div className="hidden md:block">Event Type</div>
            <div className="hidden lg:block">Event Date</div>
            <div className="hidden xl:block">Guests</div>
            <div className="hidden 2xl:block">Budget</div>
            <div>Status</div>
            <div>Date</div>
          </div>

          {filteredLeads.map((lead) => {
            const isExpanded = expandedId === lead.id
            return (
              <div key={lead.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : lead.id)}
                  className="group w-full px-6 py-4 text-left hover:bg-white/5"
                >
                  <div className="grid grid-cols-3 gap-4 sm:grid-cols-8">
                    <div className="col-span-2">{lead.name}</div>
                    <div className="hidden sm:block truncate text-sm text-jj-muted">{lead.email}</div>
                    <div className="hidden md:block text-sm text-jj-muted">{lead.event_type}</div>
                    <div className="hidden lg:block text-sm text-jj-muted">{new Date(lead.event_date).toLocaleDateString()}</div>
                    <div className="hidden xl:block text-sm text-jj-muted">{lead.guest_count}</div>
                    <div className="hidden 2xl:block text-sm text-jj-muted">{lead.budget}</div>
                    <div>
                      <span className={`rounded-full px-3 py-1 text-[0.72rem] ${statusPill(lead.status)}`}>
                        {statusMap[lead.status] || lead.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-jj-muted">
                      <span>{new Date(lead.created_at).toLocaleDateString()}</span>
                      <ChevronDown className={`ml-2 h-4 w-4 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#0f0f0f] px-6 py-5">
                    <div className="grid gap-4 lg:grid-cols-2">
                      <div className="space-y-3">
                        <p className="text-sm text-jj-muted">Message</p>
                        <p className="rounded-3xl border border-white/10 bg-[#141414] p-4 text-sm leading-7 text-white">{lead.message || 'No extra details provided.'}</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="jj-label mb-2 block text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-jj-muted">Status</label>
                          <select
                            value={lead.status}
                            onChange={(event) => saveStatus(lead.id, event.target.value)}
                            disabled={saving}
                            className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-jj-orange focus:ring-2 focus:ring-jj-orange/20"
                          >
                            {Object.entries(statusMap).map(([value, label]) => (
                              <option key={value} value={value}>{label}</option>
                            ))}
                          </select>
                        </div>
                        {error && <p className="text-sm text-red-400">{error}</p>}
                        <p className="text-xs text-jj-muted">Status updates are saved immediately when changed.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default AdminLeads
