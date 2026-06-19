import { useEffect, useMemo, useState } from 'react'
import { fetchAdminLeads, fetchAdminMessages } from '../../api/adminService.js'
import { CheckCircle, Mail, MessageCircle, Star } from 'lucide-react'

const stats = [
  { label: 'Total Leads', icon: Star, field: 'totalLeads' },
  { label: 'New Leads', icon: CheckCircle, field: 'newLeads' },
  { label: 'Total Messages', icon: Mail, field: 'totalMessages' },
  { label: 'Unread Messages', icon: MessageCircle, field: 'unreadMessages' },
]

const statusLabel = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  converted: 'Converted',
  lost: 'Lost',
}

const AdminOverview = () => {
  const [leads, setLeads] = useState([])
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [leadData, messageData] = await Promise.all([fetchAdminLeads(), fetchAdminMessages()])
        setLeads(leadData)
        setMessages(messageData)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  const values = useMemo(() => ({
    totalLeads: leads.length,
    newLeads: leads.filter((lead) => lead.status === 'new').length,
    totalMessages: messages.length,
    unreadMessages: messages.filter((message) => message.status === 'new').length,
  }), [leads, messages])

  const recentLeads = leads.slice(0, 5)
  const recentMessages = messages.slice(0, 5)

  return (
    <div className="space-y-6 text-white">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, icon: Icon, field }) => (
          <div key={label} className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-jj-muted">{label}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{values[field]}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-jj-orange/10 text-jj-orange">
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <h2 className="font-heading text-xl text-white">Recent Leads</h2>
          {loading ? (
            <div className="mt-6 space-y-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-20 rounded-3xl bg-white/5" />
              ))}
            </div>
          ) : recentLeads.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-white/10 bg-black/40 p-8 text-center text-sm text-jj-muted">
              No leads yet. New quote requests will appear here.
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-medium text-white">{lead.name}</p>
                    <span className="text-xs uppercase tracking-[0.2em] text-jj-muted">{new Date(lead.event_date).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-2 text-sm text-jj-muted">{lead.event_type} · {lead.guest_count} guests</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-jj-orange">{statusLabel[lead.status] || lead.status}</span>
                    <span className="text-sm text-jj-muted">{lead.email}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <h2 className="font-heading text-xl text-white">Recent Messages</h2>
          {loading ? (
            <div className="mt-6 space-y-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-20 rounded-3xl bg-white/5" />
              ))}
            </div>
          ) : recentMessages.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-white/10 bg-black/40 p-8 text-center text-sm text-jj-muted">
              No messages yet. Contact inquiries will show here.
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {recentMessages.map((message) => (
                <div key={message.id} className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-medium text-white">{message.name}</p>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-jj-orange">{message.status}</span>
                  </div>
                  <p className="mt-2 text-sm text-jj-muted">{message.subject}</p>
                  <p className="mt-3 text-xs text-jj-muted">{new Date(message.created_at).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default AdminOverview
