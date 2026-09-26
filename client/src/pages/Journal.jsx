import { useState } from 'react'

// Route: <Route path="/journal" element={<Journal />} />

// public/ folder ki photos ke naam yaha badal do
const PHOTO_CANADA = '/Canada-farm.jpg'
const PHOTO_FARMERS = '/all.jpeg'

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const h2sm = "font-['Fraunces',Georgia,serif] text-[30px] font-normal leading-[1.15] md:text-[36px] lg:text-[40px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'

// image: null rakhoge to hari placeholder box dikhega. Photo ho to uska path likh do.
const articles = [
  { tag: 'The Standard', title: "Why we'll never call our cucumbers organic", read: '6 min read', image: null },
  { tag: 'Farm build', title: 'Inside Structure 1: building an 8,000 sq m polyhouse in Kharar', read: '9 min read', image: null },
  { tag: 'Canada to Punjab', title: "What Canada's grocery audits taught me about food safety", read: '7 min read', image: PHOTO_CANADA },
  { tag: 'Water', title: "Punjab's water crisis and the case for drip fertigation", read: '8 min read', image: null },
  { tag: 'For farmers', title: 'Is a polyhouse right for your land? An honest cost check', read: '10 min read', image: PHOTO_FARMERS },
  { tag: 'Behind the scenes', title: 'Cocopeat from Tamil Nadu to Mohali: sourcing our growing medium', read: '5 min read', image: null },
]

function Journal() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    // TODO: yaha server pe email save karne ka API call aayega (abhi sirf message dikhata hai)
    setSubscribed(true)
  }

  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO */}
      <section className="flex min-h-[440px] items-end bg-[#17261C] md:min-h-[480px] lg:min-h-[520px]">
        <div className={`${wrap} flex flex-col gap-[18px] pb-11 lg:pb-20`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>The Journal</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] text-[#F5F1E8] md:text-[60px] lg:text-[76px]">
            Notes from<br />
            <em className="text-[#C9DE9E]">the rows.</em>
          </h1>
          <p className="max-w-[560px] text-base leading-[1.7] text-[#E6E0D2] lg:text-lg">
            What we're learning, what's working and what isn't. Straight from the farm, in English and Punjabi.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className={sec}>
        <div className={`${wrap} grid gap-[22px] md:grid-cols-2 lg:grid-cols-3 lg:gap-7`}>
          {articles.map((a) => (
            <article key={a.title} className="flex flex-col overflow-hidden rounded-[22px] bg-[#EDE6D8]">
              {a.image ? (
                <img src={a.image} alt="" className="h-[180px] w-full object-cover lg:h-[210px]" />
              ) : (
                <div className="flex h-[180px] items-center justify-center bg-[#D9E6BF] p-5 text-center text-[13px] font-semibold text-[#3F5A22] lg:h-[210px]">
                  [Article photo]
                </div>
              )}
              <div className="flex flex-col gap-2 p-5">
                <span className={eyebrow}>{a.tag}</span>
                <h3 className="font-['Fraunces',serif] text-[21px] font-normal leading-[1.3]">{a.title}</h3>
                <span className="text-xs text-[#6B6455]">{a.read}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WATCH */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:items-center lg:gap-[72px]`}>
          <div className={col}>
            <span className={`${eyebrow} !text-[#C9DE9E]`}>Watch</span>
            <h2 className={`${h2} text-[#F5F1E8]`}>The farm on ThinkWithNavi</h2>
            <p className="text-base leading-[1.7] text-[#D9D2C2]">Follow the build, the harvests and the lessons, every week.</p>
            <a
              href="https://instagram.com/thinkwithnavi"
              target="_blank"
              rel="noreferrer"
              className="flex h-[54px] items-center justify-center rounded-[27px] bg-[#C9DE9E] px-7 text-[15px] font-bold text-[#17261C] no-underline md:w-fit"
            >
              Follow on Instagram
            </a>
          </div>
          {/* Video embed aane par is div ki jagah iframe laga dena */}
          <div className="flex h-[220px] items-center justify-center rounded-[22px] bg-[#D9E6BF] p-5 text-center text-[13px] font-semibold text-[#3F5A22] md:h-[320px] lg:h-[360px]">
            [Latest farm video embed]
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className={`${sec} bg-[#EDE6D8]`}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:items-center lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>The Farmacy Letter</span>
            <h2 className={h2sm}>One honest email a month</h2>
            <p className="text-[15px] leading-[1.7] text-[#4A5248]">
              Harvest updates, lab results and farm lessons. No spam, unsubscribe any time.
            </p>
          </div>

          {subscribed ? (
            <p className="rounded-[14px] bg-[#F5F1E8] p-5 text-[15px] font-semibold text-[#17261C]">
              Thank you. You're on the list.
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex max-w-[520px] flex-col gap-[22px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="newsletter-email" className="text-[13px] font-semibold">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="h-[52px] rounded-[14px] border border-[#CFC4AD] bg-white px-4 text-[15px] outline-none focus:border-[#17261C]"
                />
              </div>
              <button
                type="submit"
                className="flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] text-[15px] font-bold text-[#F5F1E8] hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Journal