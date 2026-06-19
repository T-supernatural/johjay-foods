import { useEffect, useMemo, useState } from 'react'
import { fetchAdminMessages, updateMessageStatus } from '../../api/adminService.js'
import { ChevronDown, Search } from 'lucide-react'

const statusOptions = ['all', 'new', 'read', 'responded']
const statusLabel = {
  new: 'New',
  read: 'Read',
  responded: 'Responded',
}

const statusPill = (status) => {
  const classes = {
    new: 'bg-blue-500/10 text-blue-300',
    read: 'bg-slate-500/10 text-slate-300',
    responded: 'bg-green-500/10 text-green-300',
  }
  return classes[status] || 'bg-white/10 text-white'
}

const AdminMessages = () => {
  const [messages, setMessages] = useState([])
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadMessages = async () => {
      const messageData = await fetchAdminMessages()
      setMessages(messageData)
    }
    loadMessages()
  }, [])

  const filteredMessages = useMemo(() => {
    return messages
      .filter((message) => {
        if (statusFilter !== 'all' && message.status !== statusFilter) {
          return false
        }

        if (!query) {
          return true
        }

        return [message.name, message.email].some((field) => field.toLowerCase().includes(query.toLowerCase()))
      })
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  }, [messages, query, statusFilter])

  const saveStatus = async (messageId, status) => {
    setSaving(true)
    setError(null)
    try {
      const updated = await updateMessageStatus(messageId, status)
      setMessages((current) => current.map((message) => (message.id === messageId ? updated : message)))
    } catch (err) {
      setError('Unable to update message status. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-3xl text-white">Messages</h1>
          <p className="mt-2 text-sm text-jj-muted">Track and update incoming contact inquiries.</p>
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
                {option === 'all' ? 'All' : statusLabel[option]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredMessages.length === 0 ? (
        <div className="rounded-[1.75rem] border border-white/10 bg-[#141414] p-12 text-center text-sm text-jj-muted">
          No messages found. New contact inquiries will appear here.
        </div>
      ) : (
        <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#141414] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          {filteredMessages.map((message) => {
            const isExpanded = expandedId === message.id
            return (
              <div key={message.id} className="border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : message.id)}
                  className="group w-full px-6 py-5 text-left hover:bg-white/5"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-medium text-white">{message.name}</p>
                      <p className="text-sm text-jj-muted">{message.email}</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-jj-muted">
                      <span>{message.subject}</span>
                      <span className={`rounded-full px-3 py-1 ${statusPill(message.status)}`}>{statusLabel[message.status] || message.status}</span>
                      <span>{new Date(message.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t border-white/10 bg-[#0f0f0f] px-6 py-5">
                    <p className="text-sm text-jj-muted">Message</p>
                    <p className="mt-3 rounded-3xl border border-white/10 bg-[#141414] p-4 text-sm leading-7 text-white">{message.message}</p>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="jj-label mb-2 block text-[0.75rem] font-semibold uppercase tracking-[0.25em] text-jj-muted">Status</label>
                        <select
                          value={message.status}
                          onChange={(event) => saveStatus(message.id, event.target.value)}
                          disabled={saving}
                          className="w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-jj-orange focus:ring-2 focus:ring-jj-orange/20"
                        >
                          {Object.entries(statusLabel).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111111] p-4">
                        <p className="text-sm text-jj-muted">Phone</p>
                        <p className="mt-2 text-white">{message.phone || 'No phone provided'}</p>
                      </div>
                    </div>
                    {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
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

export default AdminMessages
