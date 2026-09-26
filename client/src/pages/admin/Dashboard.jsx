import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'
import AdminNavbar from '../../components/AdminNavbar.jsx'

function Dashboard() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          navigate('/admin/login')
          return
        }
        const res = await axios.get('/contact', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setMessages(res.data)
      } catch (err) {
        navigate('/admin/login')
      } finally {
        setLoading(false)
      }
    }
    fetchMessages()
  }, [navigate])

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem('token')
      await axios.put(`/contact/${id}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setMessages(messages.map(msg =>
        msg._id === id ? { ...msg, isRead: true } : msg
      ))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='min-h-screen bg-[#F2EDE3]'>
      <AdminNavbar />

      {/* Content */}
      <div className='px-6 md:px-10 py-8 md:py-10'>
        <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-2'>Inbox</p>
        <h1 className='text-2xl md:text-3xl font-medium text-[#1A1F12] mb-8'>Contact Messages</h1>

        {loading && (
          <p className='text-sm text-[#7A7560]'>Loading...</p>
        )}

        {!loading && messages.length === 0 && (
          <div className='bg-[#FAFAF7] rounded-2xl p-10 text-center border border-[#E2DDD4]'>
            <p className='text-sm text-[#7A7560]'>No messages yet</p>
          </div>
        )}

        {!loading && messages.length > 0 && (
          <div className='flex flex-col gap-4'>
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`bg-[#FAFAF7] rounded-2xl p-5 md:p-6 border transition-all
                  ${msg.isRead ? 'border-[#E2DDD4] opacity-60' : 'border-[#4D7C1A]'}`}
              >
                <div className='flex flex-col md:flex-row justify-between items-start gap-2 mb-3'>
                  <div>
                    <p className='text-sm font-medium text-[#1A1F12]'>{msg.name}</p>
                    <p className='text-xs text-[#7A7560] mt-0.5'>{msg.email} · {msg.phone}</p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <p className='text-xs text-[#7A7560]'>
                      {new Date(msg.createdAt).toLocaleDateString('en-IN')}
                    </p>
                    {!msg.isRead && (
                      <span className='bg-[#EAF3DE] text-[#3B6D11] text-xs px-2 py-0.5 rounded-full'>
                        New
                      </span>
                    )}
                  </div>
                </div>
                <p className='text-sm text-[#5C5845] leading-relaxed mb-4'>{msg.message}</p>
                {!msg.isRead && (
                  <button
                    onClick={() => markAsRead(msg._id)}
                    className='text-xs text-[#4D7C1A] border border-[#4D7C1A] px-4 py-1.5 rounded-full hover:bg-[#EAF3DE] transition-all'
                  >
                    Mark as read
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Dashboard