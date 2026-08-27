import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/axios.js'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      const res = await axios.post('/auth/login', formData)
      localStorage.setItem('token', res.data.token)
      navigate('/admin/dashboard')
    } catch (err) {
      setError('Email ya password galat hai')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-[#F2EDE3] flex items-center justify-center px-6'>
      <div className='bg-[#FAFAF7] rounded-2xl p-8 md:p-10 w-full max-w-sm border border-[#E2DDD4]'>

       <p className='text-lg font-medium text-[#1A1F12] mb-1'>
        Farmacy <span className='text-[#4D7C1A]'>by Navi</span>
      </p>
        <p className='text-xs text-[#7A7560] mb-8'>Admin Panel</p>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <input
            type='email'
            name='email'
            placeholder='Email address'
            value={formData.email}
            onChange={handleChange}
            required
            className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#F2EDE3] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A]'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
            className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#F2EDE3] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A]'
          />
          {error && (
            <p className='text-xs text-red-500'>{error}</p>
          )}
          <button
            type='submit'
            disabled={loading}
            className='bg-[#1A1F12] text-[#F0EDE6] py-3 rounded-full text-sm hover:opacity-90 disabled:opacity-50 mt-2'
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

      </div>
    </div>
  )
}

export default Login