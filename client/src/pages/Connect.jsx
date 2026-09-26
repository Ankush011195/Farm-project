import { useState } from 'react'
import axios from '../api/axios.js'
import { Link } from 'react-router-dom'

const WHATSAPP = 'https://wa.me/919614600086'
// WhatsApp link, jisme pehle se likha hua message khulta hai
const wa = (msg) => `${WHATSAPP}?text=${encodeURIComponent(msg)}`

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const h2sm = "font-['Fraunces',Georgia,serif] text-[30px] font-normal leading-[1.15] md:text-[36px] lg:text-[40px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'
const input = 'w-full rounded-[14px] border border-[#CFC4AD] bg-white px-4 py-3.5 text-[15px] text-[#17261C] outline-none focus:border-[#17261C]'

// [title, chhota description, WhatsApp pe pehle se likha message]
const doors = [
  ['Buy produce for my home', 'The Farmacy Box, weekly delivery', "Hi Farmacy, I'd like to know about the Farmacy Box for my home."],
  ['Buy for my store, hotel or restaurant', 'Trade prices, volumes, documents', "Hi Farmacy, I'd like a trade price list for my business."],
  ['Farmacy Academy', 'Training batches and fees', "Hi Farmacy, I'd like to know about the next Academy batch and fees."],
  ['Become a partner farm', 'Land, setup and partnership', "Hi Farmacy, I'd like to talk about becoming a partner farm."],
  ['Media and collaborations', 'Press, creators, brands', "Hi Farmacy, I'd like to discuss a media or collaboration idea."],
]

const direct = [
  ['WhatsApp', '+91 96146 00086'],
  ['Email', 'Thinkwithnavi@gmail.com'],
  ['Office hours', '[Mon–Sat, 9 am–6 pm IST]'],
  ['Punjab', 'Village Machhipur, Block Kharar, Mohali'],
  ['Canada', 'St. Thomas, Ontario'],
]

function Connect() {
  // Ye poora form wala hissa aapka purana code hai, bina badle
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
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO + DOORS */}
      <section className="pb-14 pt-16 md:pt-[88px] lg:pb-[90px] lg:pt-[110px]">
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Contact</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] md:text-[60px] lg:text-[76px]">
            How can we <em>help?</em>
          </h1>
          <p className={`${p} max-w-[620px] lg:text-lg`}>
            Choose what you need. Each option opens WhatsApp with a ready-typed message, so the right person answers you first time.
          </p>
          <div className="mt-2 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {doors.map(([title, sub, msg]) => (
              <a
                key={title}
                href={wa(msg)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-[18px] bg-[#EDE6D8] p-5 no-underline transition-colors hover:bg-[#E4DBC8] lg:p-6"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-base font-bold text-[#17261C]">{title}</span>
                  <span className="text-[13px] text-[#4A5248]">{sub}</span>
                </span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#17261C" strokeWidth="1.6" className="shrink-0">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13,6 19,12 13,18" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VISITS AND MEETINGS */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:items-center lg:gap-[72px]`}>
          <div className={col}>
            <span className={`${eyebrow} !text-[#C9DE9E]`}>Visits and meetings</span>
            <h2 className={`${h2} text-[#F5F1E8]`}>By registration only</h2>
          </div>
          <div className={col}>
            <p className="text-base leading-[1.7] text-[#D9D2C2]">
              Our farms are working, food-safe growing environments. To protect the crop and give every guest proper time, we don't accept walk-ins. All farm visits and meetings with Navi are by approved registration.
            </p>
            {/* Visit-register page ban jaye to isko <Link to="/visit"> bana dena */}
          <Link
  to="/visit"
  className="flex h-[54px] items-center justify-center rounded-[27px] bg-[#C9DE9E] px-7 text-[15px] font-bold text-[#17261C] no-underline hover:opacity-90 md:w-fit"
>
  Request a visit or meeting
</Link>
          </div>
        </div>
      </section>

      {/* REACH US DIRECTLY */}
      <section className={sec}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>Reach us directly</span>
            <h2 className={h2sm}>Prefer to call or write?</h2>
            <p className="text-sm leading-[1.7] text-[#4A5248]">We reply to every message within [one working day].</p>
          </div>
          <div>
            {direct.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-[#DCD2BE] py-3 text-[13px]">
                <span className="text-[#6B6455]">{label}</span>
                <b className="text-right">{value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MESSAGE FORM (aapka purana form, jo server pe /contact me data bhejta hai) */}
      <section className={`${sec} bg-[#EDE6D8]`}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>Send a message</span>
            <h2 className={h2sm}>Or write to us here</h2>
            <p className="text-[15px] leading-[1.7] text-[#4A5248]">
              Leave your details and a short note. We'll get back to you soon.
            </p>
          </div>

          {success ? (
            <div className="flex flex-col items-start gap-2 rounded-[20px] bg-[#F5F1E8] p-6">
              <p className="text-base font-bold">Message sent successfully.</p>
              <p className="text-sm text-[#4A5248]">We will get back to you soon.</p>
              <button onClick={() => setSuccess(false)} className="mt-2 text-sm font-semibold text-[#8A6420] underline">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className={input} />
              <input type="text" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} required className={input} />
              <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required className={input} />
              <textarea name="message" placeholder="What is on your mind?" value={formData.message} onChange={handleChange} required rows={4} className={`${input} resize-none`} />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] text-[15px] font-bold text-[#F5F1E8] hover:opacity-90 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Connect