import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios.js'

// Route: <Route path="/visit" element={<VisitRegister />} />

const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const heading = "font-['Fraunces',Georgia,serif] font-normal"
const label = 'text-[13px] font-bold text-[#17261C]'
const inputCls = 'w-full rounded-[14px] border border-[#CFC4AD] bg-white px-4 text-[15px] text-[#17261C] outline-none focus:border-[#17261C]'
const btnDark = 'flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] text-[15px] font-bold text-[#F5F1E8] hover:opacity-90 disabled:opacity-50'
const btnLine = 'flex h-[54px] items-center justify-center rounded-[27px] border border-[#17261C] text-[15px] font-semibold text-[#17261C]'

const farms = [
  { id: 'punjab', title: 'Visit Farmacy Punjab', desc: 'Machhipur, Kharar, Mohali' },
  { id: 'ontario', title: 'Visit our Ontario greenhouse', desc: 'St. Thomas, Canada' },
  { id: 'navi', title: 'Meet Navi', desc: 'In person or by video call' },
]
const purposes = ['Buying produce (home)', 'Buying for business', 'Partner farm / polyhouse setup', 'Farmacy Academy training', 'Investment or business', 'Media or collaboration', 'School or college group', 'Personal or family visit', 'Other']
const modes = ['In person at Machhipur', 'Video call']
const sizes = ['Just me', '2–5', '6–15', '16 or more']
const slots = ['Morning, 9–12', 'Afternoon, 2–5']
const yesNo = ['No', 'Yes']
const hearList = ['ThinkWithNavi', 'Instagram or YouTube', 'Friend or family', 'Other']
const rules = [
  'Entry only with an approved visit pass and matching government photo ID. Unregistered guests will be turned away at the gate.',
  'Arrive on time. Your slot is reserved for you and cannot be transferred.',
  'Follow our hygiene protocol: footbath, hand sanitising, closed shoes, and no touching plants unless a team member invites you.',
  'Children must stay with an adult at all times. Photos only in areas our team shows you.',
]

// Chhote buttons jaise Yes/No, time slot etc. Ek hi option select hota hai
function Chips({ title, options, value, onPick }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span className={label}>{title}</span>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onPick(o)}
            className={`min-h-[44px] rounded-full border px-4 py-2.5 text-[13px] font-semibold ${
              value === o ? 'border-[#17261C] bg-[#17261C] text-[#F5F1E8]' : 'border-[#CFC4AD] bg-white text-[#17261C]'
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  )
}

// Label + input/textarea ek saath
function Field({ id, title, textarea, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className={label}>{title}</label>
      {textarea ? (
        <textarea id={id} rows={5} className={`${inputCls} resize-y py-3.5 leading-normal`} {...props} />
      ) : (
        <input id={id} className={`${inputCls} h-[52px]`} {...props} />
      )}
    </div>
  )
}

function VisitRegister() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    farm: '', mode: '', purpose: '',
    name: '', phone: '', email: '', city: '', organisation: '',
    size: '', preferredDate: '', alternativeDate: '', slot: '', about: '', otherFarmVisit: '', hear: '',
    agreeRules: false, agreeData: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [reference, setReference] = useState('')

  const set = (key, value) => {
    setForm({ ...form, [key]: value })
    setError('')
  }
  const farmTitle = (farms.find((f) => f.id === form.farm) || {}).title || ''
  const today = new Date().toISOString().split('T')[0]

  const next1 = () => {
    if (!form.farm) return setError('Please choose what you would like to request.')
    if (form.farm === 'navi' && !form.mode) return setError('Please choose how you would like to meet.')
    if (!form.purpose) return setError('Please choose the purpose of your visit.')
    setStep(2)
  }

  const next2 = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim()) return setError('Please add your full name, WhatsApp number and city or village.')
    if (!form.size || !form.preferredDate || !form.slot || !form.about.trim() || !form.otherFarmVisit) return setError('Please answer the questions marked with *.')
    setStep(3)
  }

  const submit = async () => {
    if (!form.agreeRules || !form.agreeData) return setError('Please tick both boxes to submit your request.')
    try {
      setLoading(true)
      setError('')
      const res = await axios.post('/visits', form)
      setReference(res.data.reference)
      setStep(4)
    } catch (err) {
      setError('Something went wrong, please try again')
    } finally {
      setLoading(false)
    }
  }

  const summary = [
    ['Request', farmTitle + (form.farm === 'navi' && form.mode ? ` (${form.mode})` : '')],
    ['Purpose', form.purpose],
    ['Name', form.name],
    ['WhatsApp', form.phone],
    ['Visitors', form.size],
    ['Date', form.preferredDate],
    ['Time', form.slot],
  ]

  const errorBox = error && <span className="text-[13px] font-bold text-[#A3321F]">{error}</span>

  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO */}
      <section className="bg-[#17261C] py-12 lg:py-20">
        <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-4 px-6 md:px-10">
          <span className={`${eyebrow} !text-[#C9DE9E]`}>Visits &amp; meetings</span>
          <h1 className={`${heading} text-[40px] leading-[1.08] text-[#F5F1E8] md:text-[52px] lg:text-[64px]`}>
            Visits by <em className="text-[#C9DE9E]">invitation.</em>
          </h1>
          <p className="max-w-[640px] text-[15px] leading-[1.7] text-[#D9D2C2] lg:text-base">
            Our farms are working, food-safe growing environments. To protect the crop and give every guest our full attention, every visit and every meeting with Navi is by approved registration. No walk-ins.
          </p>
          <div className="flex flex-col gap-2.5 pt-1.5 text-[13px] text-[#F5F1E8]">
            <span>1. Tell us who you are and why you'd like to visit</span>
            <span>2. Our team reviews every request within [48 hours]</span>
            <span>3. Approved guests receive a personal visit pass on WhatsApp</span>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[720px] px-6 pb-16 pt-7 md:px-10 lg:pb-24 lg:pt-10">
        {/* PROGRESS */}
        {step < 4 && (
          <div className="mb-7 flex gap-2">
            {['Request', 'Details', 'Confirm'].map((t, i) => (
              <div key={t} className="flex flex-1 flex-col gap-2">
                <div className={`h-1 rounded-sm ${step > i ? 'bg-[#17261C]' : 'bg-[#DCD2BE]'}`} />
                <span className={`text-xs font-bold ${step > i ? 'text-[#17261C]' : 'text-[#9A937F]'}`}>{t}</span>
              </div>
            ))}
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <h2 className={`${heading} text-[28px]`}>What would you like to request?</h2>
            <div className="flex flex-col gap-2.5">
              {farms.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => set('farm', f.id)}
                  className={`flex min-h-16 w-full flex-col gap-1 rounded-2xl px-[18px] py-4 text-left ${
                    form.farm === f.id ? 'border-2 border-[#17261C] bg-[#17261C] text-[#F5F1E8]' : 'border border-[#CFC4AD] bg-white text-[#17261C]'
                  }`}
                >
                  <span className="text-base font-bold">{f.title}</span>
                  <span className={`text-[13px] ${form.farm === f.id ? 'text-[#C9DE9E]' : 'text-[#6B6455]'}`}>{f.desc}</span>
                </button>
              ))}
            </div>

            {form.farm === 'navi' && (
              <>
                <Chips title="How would you like to meet?" options={modes} value={form.mode} onPick={(v) => set('mode', v)} />
                <p className="text-[13px] leading-[1.6] text-[#6B6455]">
                  Meetings with Navi are limited each month and prioritised by purpose. Please be specific below.
                </p>
              </>
            )}
            {form.farm === 'ontario' && (
              <div className="rounded-2xl bg-[#EDE6D8] p-4 text-[13px] leading-[1.6] text-[#4A5248]">
                Our Ontario greenhouse follows strict Canadian food-safety rules. Visits there are approved only for trade buyers, partners and media.
              </div>
            )}

            <Chips title="Purpose of your visit" options={purposes} value={form.purpose} onPick={(v) => set('purpose', v)} />
            {errorBox}
            <button type="button" onClick={next1} className={btnDark}>Continue</button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-[22px]">
            <h2 className={`${heading} text-[28px]`}>Your details</h2>
            <Field id="v-name" title="Full name (as on photo ID) *" type="text" placeholder="e.g. Harpreet Kaur" value={form.name} onChange={(e) => set('name', e.target.value)} />
            <Field id="v-phone" title="WhatsApp number *" type="tel" placeholder="+91" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
            <Field id="v-email" title="Email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => set('email', e.target.value)} />
            <Field id="v-city" title="City or village *" type="text" placeholder="e.g. Sangrur" value={form.city} onChange={(e) => set('city', e.target.value)} />
            <Field id="v-org" title="Organisation, farm or school (if any)" type="text" placeholder="Optional" value={form.organisation} onChange={(e) => set('organisation', e.target.value)} />
            <Chips title="Number of visitors, including you *" options={sizes} value={form.size} onPick={(v) => set('size', v)} />
            <Field id="v-d1" title="Preferred date *" type="date" min={today} value={form.preferredDate} onChange={(e) => set('preferredDate', e.target.value)} />
            <Field id="v-d2" title="Alternative date" type="date" min={today} value={form.alternativeDate} onChange={(e) => set('alternativeDate', e.target.value)} />
            <Chips title="Preferred time *" options={slots} value={form.slot} onPick={(v) => set('slot', v)} />
            <Field
              id="v-about"
              title="Tell us about your visit *"
              textarea
              placeholder="What do you hope to see, learn or discuss? For farmers: land size, location and water source. For buyers: products and weekly volumes."
              value={form.about}
              onChange={(e) => set('about', e.target.value)}
            />
            <Chips title="Have you visited another farm, greenhouse or nursery in the last 48 hours? *" options={yesNo} value={form.otherFarmVisit} onPick={(v) => set('otherFarmVisit', v)} />
            {form.otherFarmVisit === 'Yes' && (
              <div className="rounded-2xl bg-[#F3E3C8] p-4 text-[13px] leading-[1.6] text-[#5C4213]">
                To protect our crop from pests and disease, please choose a visit date at least 48 hours after your last farm visit.
              </div>
            )}
            <Chips title="How did you hear about us?" options={hearList} value={form.hear} onPick={(v) => set('hear', v)} />
            {errorBox}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setStep(1)} className={btnLine}>Back</button>
              <button type="button" onClick={next2} className={btnDark}>Continue</button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="flex flex-col gap-[22px]">
            <h2 className={`${heading} text-[28px]`}>Review and agree</h2>
            <div className="flex flex-col gap-2.5 rounded-[20px] bg-[#EDE6D8] p-5">
              {summary.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <span className="text-[13px] text-[#6B6455]">{k}</span>
                  <span className="text-right text-[13px] font-bold">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className={eyebrow}>Visit rules</span>
              {rules.map((r) => (
                <span key={r} className="text-sm leading-[1.6] text-[#4A5248]">{r}</span>
              ))}
            </div>
            <label htmlFor="agree-rules" className="flex items-start gap-3 text-sm leading-normal">
              <input id="agree-rules" type="checkbox" checked={form.agreeRules} onChange={(e) => set('agreeRules', e.target.checked)} className="h-[22px] w-[22px] shrink-0 accent-[#17261C]" />
              I have read and agree to the visit rules.
            </label>
            <label htmlFor="agree-data" className="flex items-start gap-3 text-sm leading-normal">
              <input id="agree-data" type="checkbox" checked={form.agreeData} onChange={(e) => set('agreeData', e.target.checked)} className="h-[22px] w-[22px] shrink-0 accent-[#17261C]" />
              <span>
                I agree that Farmacy may use these details to review and manage my visit, as set out in the{' '}
                <Link to="/privacy" className="underline">Privacy Policy</Link>.
              </span>
            </label>
            {errorBox}
            <div className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => setStep(2)} className={btnLine}>Back</button>
              <button type="button" onClick={submit} disabled={loading} className={btnDark}>
                {loading ? 'Sending...' : 'Submit request'}
              </button>
            </div>
          </div>
        )}

        {/* DONE */}
        {step === 4 && (
          <div className="flex flex-col gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C9DE9E]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#17261C" strokeWidth="2">
                <polyline points="5,12 10,17 19,7" />
              </svg>
            </div>
            <h2 className={`${heading} text-[32px] leading-[1.15]`}>
              Request received. Thank you, {form.name.trim().split(' ')[0]}.
            </h2>
            <p className="text-[15px] leading-[1.7] text-[#4A5248]">
              Our team personally reviews every request. You'll hear from us on WhatsApp within [48 hours]. If approved, you'll receive your visit pass with your confirmed date, time, directions and a QR code for the gate.
            </p>
            <div className="flex flex-col gap-1.5 rounded-[20px] bg-[#17261C] p-5">
              <span className="text-[10px] font-bold tracking-[2px] text-[#C9DE9E]">YOUR REFERENCE</span>
              <span className="font-['Fraunces',serif] text-[28px] text-[#F5F1E8]">{reference}</span>
              <span className="text-xs text-[#BDB6A6]">Keep this handy if you contact us.</span>
            </div>
            <p className="text-[13px] leading-[1.6] text-[#6B6455]">
              Please don't come to the farm until you receive an approved pass. We can't admit guests without one.
            </p>
            <Link to="/" className={btnLine}>Back to home</Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default VisitRegister