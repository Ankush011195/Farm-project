import { Link } from 'react-router-dom'

// Jab visit-register page ban jaye to yaha uska path daal do (abhi Contact pe jaata hai)
const VISIT = '/visit'

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const h2sm = "font-['Fraunces',Georgia,serif] text-[30px] font-normal leading-[1.15] md:text-[36px] lg:text-[40px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'
const btnDark = 'flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] px-7 text-[15px] font-bold text-[#F5F1E8] no-underline hover:opacity-90 md:w-fit'
const btnLine = 'flex h-[54px] items-center justify-center rounded-[27px] border border-[#17261C] px-7 text-[15px] font-semibold text-[#17261C] no-underline md:w-fit'

const academy = [
  { length: '1 day', title: 'Polyhouse Foundations', text: 'Is protected farming right for your land and budget? Structures, costs, subsidies and realistic returns.', who: 'Landowners, first-time growers' },
  { length: '[5] days', title: 'Hydroponic Grower Program', text: 'Hands-on in the rows: fertigation, EC and pH, crop training, scouting, harvest and hygiene.', who: 'Growers and farm managers' },
  { length: '1 day', title: 'Farm Business & Costing', text: 'Labour planning, input costing, packaging and selling. Run your farm like a business.', who: 'Owners and investors' },
]

const partnerSteps = [
  ['01', 'Site assessment', 'Land, water, power and access checked before any money is spent.'],
  ['02', 'Design and vendor selection', 'The right structure at the right price. We know what things should cost.'],
  ['03', 'Subsidy guidance', 'Help navigating NHB and MIDH eligibility, documents and timelines.'],
  ['04', 'Crop plan and setup', 'Varieties, planting windows and fertigation built for your market.'],
  ['05', 'Supervision and audits', 'Regular visits and checks so your farm stays at the Standard.'],
  ['06', 'Brand and market access', 'Grow under the Farmacy name, with [market access terms to be confirmed].'],
]

const fit = [
  ['Land', '[Minimum __ acres], clear title'],
  ['Water', 'Tested, reliable source'],
  ['Commitment', 'Follow the Farmacy Standard, fully'],
  ['Mindset', 'Long-term, open to learning'],
]

const questions = [
  ['Do you sell polyhouse structures?', 'No. We are growers, not vendors. We help you choose the right vendor at a fair price.'],
  ['Can you guarantee my income?', 'No honest person can. We give you a proven system, training and supervision to give you the best chance.'],
  ['What does a partnership cost?', 'It depends on farm size and scope. We share terms after the site assessment.'],
]

// Table jaisi rows (label ek side, value dusri side)
function Rows({ rows }) {
  return (
    <div>
      {rows.map(([label, value]) => (
        <div key={label} className="flex justify-between gap-4 border-b border-[#DCD2BE] py-3 text-[13px]">
          <span className="text-[#6B6455]">{label}</span>
          <b className="text-right">{value}</b>
        </div>
      ))}
    </div>
  )
}

function Training() {
  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO (photo lagani ho to section me relative aur img absolute inset-0 jod dena, jaisa Produce me hai) */}
      <section className="flex min-h-[500px] items-end bg-[#17261C] md:min-h-[560px] lg:min-h-[620px]">
        <div className={`${wrap} flex flex-col gap-[18px] pb-11 lg:pb-20`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>Grow with us</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] text-[#F5F1E8] md:text-[60px] lg:text-[76px]">
            We don't just grow food.<br />
            We build <em className="text-[#C9DE9E]">growers.</em>
          </h1>
          <p className="max-w-[600px] text-base leading-[1.7] text-[#E6E0D2] lg:text-lg">
            Punjab's farmers are among the hardest-working in the world. What's missing is the system. We hand over the one we built across two countries.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className={sec}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>The problem we're solving</span>
            <h2 className={h2}>Too many polyhouses in Punjab fail in the first three years</h2>
          </div>
          <p className={`${p} lg:self-end`}>
            Not because farmers don't work hard, but because they were sold a structure without a system: wrong vendor, wrong crop plan, no fertigation know-how, no buyer at the end. Farmacy fixes the whole chain.
          </p>
        </div>
      </section>

      {/* FARMACY ACADEMY */}
      <section className={`${sec} bg-[#EDE6D8]`}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Farmacy Academy</span>
          <h2 className={h2}>Learn on a working farm, not in a classroom</h2>
          <div className="grid gap-[22px] lg:grid-cols-3 lg:gap-7">
            {academy.map((c) => (
              <div key={c.title} className="flex flex-col gap-2.5 rounded-[20px] bg-[#F5F1E8] p-[22px] lg:p-7">
                <span className={eyebrow}>{c.length}</span>
                <h3 className="font-['Fraunces',serif] text-[22px] font-normal leading-tight">{c.title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#4A5248]">{c.text}</p>
                <Rows rows={[['For', c.who], ['Fee', '[₹ ]'], ['Next batch', '[Date]']]} />
              </div>
            ))}
          </div>
          <Link to="/connect" className={btnDark}>Register interest in Academy</Link>
        </div>
      </section>

      {/* PARTNER FARM PROGRAM */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col}`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>Partner farm program</span>
          <h2 className={`${h2} text-[#F5F1E8]`}>Your land. Our system. One brand.</h2>
          <p className="max-w-[720px] text-base leading-[1.7] text-[#D9D2C2]">
            Partner farms are built and run to the Farmacy Standard under our supervision, and grow under the Farmacy name.
          </p>
          <div className="border-b border-[#2C3D30] md:grid md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
            {partnerSteps.map(([n, title, text]) => (
              <div key={n} className="flex gap-[18px] border-t border-[#2C3D30] py-5">
                <span className="w-[34px] shrink-0 font-['Fraunces',serif] text-xl text-[#C9DE9E]">{n}</span>
                <div>
                  <b className="mb-1.5 block text-base text-[#F5F1E8]">{title}</b>
                  <span className="text-sm leading-[1.6] text-[#D9D2C2]">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE PARTNER WITH */}
      <section className={sec}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>Who we partner with</span>
            <h2 className={h2sm}>Is this for you?</h2>
          </div>
          <div className={col}>
            <Rows rows={fit} />
            <p className="text-[15px] leading-[1.7] text-[#4A5248]">
              We say no more often than yes. A single weak partner farm damages every farm that carries our name.
            </p>
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className={`${sec} bg-[#EDE6D8]`}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Questions we hear</span>
          <div className="border-b border-[#DCD2BE] lg:grid lg:grid-cols-3 lg:gap-7 lg:border-b-0">
            {questions.map(([q, a]) => (
              <div key={q} className="flex gap-[18px] border-t border-[#DCD2BE] py-5 lg:flex-col lg:gap-3">
                <span className="w-[34px] shrink-0 font-['Fraunces',serif] text-xl text-[#8A6420]">Q</span>
                <div>
                  <b className="mb-1.5 block text-base">{q}</b>
                  <span className="text-sm leading-[1.6] text-[#4A5248]">{a}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* START WITH A CONVERSATION */}
      <section className={sec}>
        <div className={`${wrap} ${col}`}>
          <div className={`${col} max-w-[720px]`}>
            <h2 className={h2sm}>Start with a conversation</h2>
            <p className={p}>Tell us about your land and goals. If it looks like a fit, we'll invite you to see the farm.</p>
            <div className="flex flex-col gap-3 md:flex-row">
              <Link to="/connect" className={btnDark}>Apply to be a partner farm</Link>
              <Link to={VISIT} className={btnLine}>Request a farm visit</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Training