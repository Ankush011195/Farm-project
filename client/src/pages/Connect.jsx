import { useState } from 'react'
import axios from '../api/axios.js'
import FadeIn from '../components/FadeIn'

function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      setError('')
      await axios.post('/contact', formData)
      setSuccess(true)
      setFormData({ name: '', phone: '', email: '', message: '' })
    } catch (err) {
      setError('Something went wrong, please try again')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>

      {/* Hero */}
      <section className='relative px-6 md:px-10 py-20 md:py-24 overflow-hidden min-h-[500px] flex items-center'>
        <img
          src='/farmer.jpg'
          alt='Connect with us'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-4'>Connect</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-5xl font-medium text-[#F0EDE6] leading-tight'>
              We would love to <br />
              <em className='text-[#C0DD97] not-italic'>hear from you</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Connect Section */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-16 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>

          {/* Left Side */}
          <div>
            <FadeIn>
              <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-3'>Reach out</p>
              <h2 className='text-2xl md:text-3xl font-medium text-[#1A1F12] mb-8'>Get in touch</h2>
            </FadeIn>

            <FadeIn delay={0.1} direction='up'>
              <a
                href='https://wa.me/919614600086'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-4 p-5 bg-[#F2EDE3] rounded-2xl mb-3 no-underline hover:opacity-80 transition-all'
              >
                <div className='w-11 h-11 rounded-full bg-[#E2F5E9] flex items-center justify-center text-xl shrink-0'>
                  💬
                </div>
                <div>
                  <p className='text-sm font-medium text-[#1A1F12]'>WhatsApp</p>
                  <p className='text-xs text-[#7A7560] mt-0.5'>Quick chat, any time</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.2} direction='up'>
              <a
                href='mailto:Thinkwithnavi@gmail.com'
                className='flex items-center gap-4 p-5 bg-[#F2EDE3] rounded-2xl mb-3 no-underline hover:opacity-80 transition-all'
              >
                <div className='w-11 h-11 rounded-full bg-[#EAF3DE] flex items-center justify-center text-xl shrink-0'>
                  ✉️
                </div>
                <div>
                  <p className='text-sm font-medium text-[#1A1F12]'>Email</p>
                  <p className='text-xs text-[#7A7560] mt-0.5'>Thinkwithnavi@gmail.com</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.3} direction='up'>
              <a
                href='https://instagram.com/thinkwithnavi'
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-4 p-5 bg-[#F2EDE3] rounded-2xl mb-8 no-underline hover:opacity-80 transition-all'
              >
                <div className='w-11 h-11 rounded-full bg-[#FCE8F1] flex items-center justify-center text-xl shrink-0'>
                  📸
                </div>
                <div>
                  <p className='text-sm font-medium text-[#1A1F12]'>Instagram</p>
                  <p className='text-xs text-[#7A7560] mt-0.5'>Follow the farm life</p>
                </div>
              </a>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Our locations</p>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center gap-4 p-4 bg-[#F2EDE3] rounded-xl'>
                  <span className='text-xl'>🇮🇳</span>
                  <div>
                    <p className='text-sm font-medium text-[#1A1F12]'>Punjab, India</p>
                    <p className='text-xs text-[#7A7560] mt-0.5'>View on Google Maps</p>
                  </div>
                </div>
                <div className='flex items-center gap-4 p-4 bg-[#F2EDE3] rounded-xl'>
                  <span className='text-xl'>🇨🇦</span>
                  <div>
                    <p className='text-sm font-medium text-[#1A1F12]'>Canada</p>
                    <p className='text-xs text-[#7A7560] mt-0.5'>View on Google Maps</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Side — Form */}
          <FadeIn direction='left'>
            <div className='bg-[#F2EDE3] rounded-2xl p-6 md:p-8'>
              <h3 className='text-lg font-medium text-[#1A1F12] mb-6'>Send a message</h3>

              {success ? (
                <div className='bg-[#EAF3DE] rounded-xl p-5 text-center'>
                  <p className='text-2xl mb-2'>✅</p>
                  <p className='text-sm font-medium text-[#3B6D11]'>Message sent successfully!</p>
                  <p className='text-xs text-[#7A7560] mt-1'>We will get back to you soon</p>
                  <button
                    onClick={() => setSuccess(false)}
                    className='mt-4 text-xs text-[#4D7C1A] underline'
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#FAFAF7] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A]'
                  />
                  <input
                    type='text'
                    name='phone'
                    placeholder='Phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#FAFAF7] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A]'
                  />
                  <input
                    type='email'
                    name='email'
                    placeholder='Email address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#FAFAF7] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A]'
                  />
                  <textarea
                    name='message'
                    placeholder='What is on your mind?'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 rounded-xl border border-[#E2DDD4] bg-[#FAFAF7] text-sm text-[#1A1F12] outline-none focus:border-[#4D7C1A] resize-none'
                  />
                  {error && (
                    <p className='text-xs text-red-500'>{error}</p>
                  )}
                  <button
                    type='submit'
                    disabled={loading}
                    className='bg-[#1A1F12] text-[#F0EDE6] py-3 rounded-full text-sm hover:opacity-90 disabled:opacity-50 mt-1'
                  >
                    {loading ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

        </div>
      </section>

    </div>
  )
}

export default Connect