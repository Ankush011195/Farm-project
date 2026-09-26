import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'
import AdminNavbar from '../../components/AdminNavbar.jsx'

const tabs = [
  ['pending', 'Pending'],
  ['approved', 'Approved'],
  ['info', 'Awaiting info'],
  ['declined', 'Declined'],
]
const tabLabel = Object.fromEntries(tabs)

const badgeStyle = {
  pending: 'bg-[#F3E3C8] text-[#5C4213]',
  approved: 'bg-[#D9E6BF] text-[#2F4A17]',
  info: 'bg-[#DCE3EC] text-[#26405E]',
  declined: 'bg-[#EFD6D0] text-[#7A2616]',
}

function VisitAdmin() {
  const [visits, setVisits] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('pending')
  const [selectedId, setSelectedId] = useState(null)
  const navigate = useNavigate()

  const token = () => localStorage.getItem('token')

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const t = token()
        if (!t) {
          navigate('/admin/login')
          return
        }
        const res = await axios.get('/visits', { headers: { Authorization: `Bearer ${t}` } })
        setVisits(res.data)
      } catch (err) {
        navigate('/admin/login')
      } finally {
        setLoading(false)
      }
    }
    fetchVisits()
  }, [navigate])

  const setStatus = async (id, status) => {
    try {
      const res = await axios.put(`/visits/${id}`, { status }, { headers: { Authorization: `Bearer ${token()}` } })
      setVisits(visits.map((v) => (v._id === id ? res.data : v)))
      setTab(status)
    } catch (err) {
      console.log(err)
    }
  }

  const list = visits.filter((v) => v.status === tab)
  const countFor = (s) => visits.filter((v) => v.status === s).length
  const selected = list.find((v) => v._id === selectedId) || list[0]

  const farmLabel = (v) => {
    if (v.farm === 'punjab') return 'Farmacy Punjab'
    if (v.farm === 'ontario') return 'Ontario greenhouse'
    if (v.farm === 'navi') return `Meet Navi${v.mode ? ` (${v.mode})` : ''}`
    return v.farm
  }

  return (
    <div className="min-h-screen bg-[#F2EDE3]">
      <AdminNavbar />

      {loading ? (
        <p className="p-8 text-sm text-[#7A7560]">Loading...</p>
      ) : (
        <div className="flex flex-col lg:h-[calc(100vh-73px)] lg:flex-row lg:overflow-hidden">
          {/* SIDEBAR (client design: dark green, vertical tab list) */}
          <aside className="flex shrink-0 flex-col gap-7 bg-[#0F1A13] p-5 lg:w-[240px] lg:p-8">
            <div className="flex flex-col">
              <span className="font-['Fraunces',Georgia,serif] text-xl tracking-[4px] text-[#F5F1E8]">FARMACY</span>
              <span className="text-[10px] font-semibold tracking-[3px] text-[#C9A45C]">VISIT DESK</span>
            </div>
            <div className="flex flex-row gap-1.5 overflow-x-auto lg:flex-col lg:overflow-visible">
              {tabs.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => { setTab(key); setSelectedId(null) }}
                  className={`flex shrink-0 items-center justify-between gap-4 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold ${
                    tab === key ? 'bg-[#F5F1E8] text-[#17261C]' : 'bg-transparent text-[#D9D2C2] hover:bg-[#1A2A1F]'
                  }`}
                >
                  <span>{label}</span>
                  <span className="text-xs font-bold">{countFor(key)}</span>
                </button>
              ))}
            </div>
            <div className="hidden flex-col gap-2 text-xs leading-[1.6] text-[#8C8574] lg:mt-auto lg:flex">
              <span>Target: every request answered within [48 hours].</span>
              <span>Approved passes are sent on WhatsApp with a gate QR code.</span>
            </div>
          </aside>

          {/* LIST */}
          <section className="flex shrink-0 flex-col gap-4 border-b border-[#DCD2BE] p-5 lg:w-[380px] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:p-6">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]">Visit requests</span>
              <h1 className="font-['Fraunces',Georgia,serif] text-2xl font-normal text-[#17261C]">{tabLabel[tab]}</h1>
            </div>

            {list.length === 0 ? (
              <p className="text-sm text-[#6B6455]">Nothing here right now.</p>
            ) : (
              <div className="flex flex-col gap-2.5">
                {list.map((v) => (
                  <button
                    key={v._id}
                    onClick={() => setSelectedId(v._id)}
                    className={`flex flex-col gap-1.5 rounded-2xl p-4 text-left ${
                      selected?._id === v._id ? 'border-2 border-[#17261C] bg-white' : 'border border-[#DCD2BE] bg-[#EDE6D8]'
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-[15px] font-bold text-[#17261C]">{v.name}</span>
                      <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[11px] font-bold ${badgeStyle[v.status]}`}>
                        {tabLabel[v.status]}
                      </span>
                    </span>
                    <span className="text-[13px] text-[#4A5248]">{farmLabel(v)} · {v.purpose}</span>
                    <span className="text-xs text-[#6B6455]">{v.size} · {v.preferredDate} · received {new Date(v.createdAt).toLocaleDateString('en-IN')}</span>
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* DETAIL */}
          <section className="flex-1 p-5 lg:overflow-y-auto lg:p-10">
            {!selected ? (
              <p className="text-sm text-[#6B6455]">Select a request to see details.</p>
            ) : (
              <div className="flex max-w-[640px] flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold text-[#8A6420]">{selected.reference}</span>
                    <h2 className="font-['Fraunces',Georgia,serif] text-[32px] font-normal leading-tight text-[#17261C]">{selected.name}</h2>
                    <span className="text-sm text-[#4A5248]">{selected.organisation || 'No organisation given'} · {selected.city} · {selected.phone}</span>
                  </div>
                  <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold ${badgeStyle[selected.status]}`}>
                    {tabLabel[selected.status]}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    ['Request', farmLabel(selected)],
                    ['Purpose', selected.purpose],
                    ['Visitors', selected.size],
                    ['Preferred dates', `${selected.preferredDate}${selected.alternativeDate ? ` or ${selected.alternativeDate}` : ''}`],
                    ['Time', selected.slot],
                    ['Other farm, last 48h', selected.otherFarmVisit],
                  ].map(([k, v]) => (
                    <div key={k} className={`flex flex-col gap-1 rounded-2xl p-3.5 ${k === 'Other farm, last 48h' && selected.otherFarmVisit === 'Yes' ? 'bg-[#F3E3C8]' : 'bg-[#EDE6D8]'}`}>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6455]">{k}</span>
                      <span className="text-sm font-bold text-[#17261C]">{v || '—'}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]">In their words</span>
                  <p className="font-['Fraunces',Georgia,serif] text-lg leading-[1.5] text-[#17261C]">"{selected.about}"</p>
                </div>

                {(selected.status === 'pending' || selected.status === 'info') && (
                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => setStatus(selected._id, 'approved')} className="rounded-full bg-[#17261C] px-7 py-3 text-sm font-bold text-[#F5F1E8] hover:opacity-90">
                      Approve and send pass
                    </button>
                    <button onClick={() => setStatus(selected._id, 'info')} className="rounded-full border border-[#17261C] px-6 py-3 text-sm font-semibold text-[#17261C]">
                      Ask for more info
                    </button>
                    <button onClick={() => setStatus(selected._id, 'declined')} className="rounded-full border border-[#A3321F] px-6 py-3 text-sm font-semibold text-[#A3321F]">
                      Decline politely
                    </button>
                  </div>
                )}

                {selected.status === 'approved' && (
                  <a
                    href={`https://wa.me/91${selected.phone.replace(/\D/g, '').slice(-10)}?text=${encodeURIComponent(
                      `Hi ${selected.name.split(' ')[0]}, your Farmacy visit (${selected.reference}) is approved for ${selected.preferredDate}, ${selected.slot}. Please bring a matching photo ID.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit rounded-full bg-[#17261C] px-7 py-3 text-sm font-bold text-[#F5F1E8] no-underline hover:opacity-90"
                  >
                    Send pass on WhatsApp
                  </a>
                )}

                {selected.status === 'declined' && (
                  <p className="text-sm leading-[1.6] text-[#4A5248]">A polite decline can be sent, with a link to the Journal and farm videos so they can still follow along.</p>
                )}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  )
}

export default VisitAdmin