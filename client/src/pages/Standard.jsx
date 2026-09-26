
const HERO_IMG = '/all.jpeg'
const REPORT_PDF = '/reports/latest-lab-report.pdf'

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const h2sm = "font-['Fraunces',Georgia,serif] text-[30px] font-normal leading-[1.15] md:text-[36px] lg:text-[40px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'

const commitments = [
  ['01', 'Precision-fed', 'Every plant receives measured water and nutrition through drip fertigation, tuned to its stage of growth.', 'Daily EC and pH logs for every structure.'],
  ['02', 'Protected, not sprayed', 'Insect nets, a controlled environment and constant scouting keep pests out. Crop protection is minimal, need-based and never routine.', 'A spray register recording every application, product and waiting period.'],
  ['03', 'Tested, not just trusted', 'Produce is checked for pesticide residue by an accredited laboratory.', 'Results published on our website and linked from every batch.'],
  ['04', 'Traceable to the row', 'Every pack carries a code linking it to its structure and harvest date.', 'Scan the QR code on any Farmacy pack.'],
  ['05', 'Every drop counts', 'Water goes straight to the root, measured to the drop. In a state facing a groundwater crisis, that matters.', 'Water use tracked per structure, per week.'],
]

const never = [
  ['We will never call it organic', "Our crops are grown soilless with precise mineral nutrition. That is not organic, and we won't pretend it is."],
  ['We will never say "zero chemicals"', "Everything, including water, is chemistry. What matters is what, how much and whether it's tested. We show you all three."],
  ['We will never hide a result', "If a batch fails a test, it doesn't leave the farm. The record stays public."],
]

// Client se milte hi yaha asli details bhar do
const lab = [
  ['Accredited laboratory', '[Lab name, NABL no.]'],
  ['Last test date', '[DD MMM YYYY]'],
  ['Crops tested', '[Cucumber, bell pepper]'],
  ['Result', '[Within FSSAI limits]'],
]

export default function Standard() {
  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO */}
      <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[#17261C] md:min-h-[620px] lg:min-h-[700px]">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0F1A13]/[0.64]" />
        <div className={`${wrap} relative z-10 flex flex-col gap-[18px] pb-11 lg:pb-20`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>The Farmacy Standard</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] text-[#F5F1E8] md:text-[60px] lg:text-[76px]">
            Promises are easy.<br />
            <em className="text-[#C9DE9E]">Proof is rare.</em>
          </h1>
          <p className="max-w-[560px] text-base leading-[1.7] text-[#E6E0D2] lg:text-lg">
            Five commitments behind every Farmacy vegetable. Each one measured, recorded and open to you.
          </p>
        </div>
      </section>

      {/* WHY A STANDARD */}
      <section className={sec}>
        <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
          <div className={col}>
            <span className={eyebrow}>Why a standard</span>
            <h2 className={h2}>Because "fresh" and "natural" have stopped meaning anything</h2>
          </div>
          <p className={`${p} lg:self-end`}>
            Every label says natural. Every seller says fresh. You deserve more than adjectives. The Farmacy Standard turns our values into rules we follow and records you can check.
          </p>
        </div>
      </section>

      {/* FIVE COMMITMENTS */}
      {commitments.map(([num, title, text, proof], i) => {
        const odd = i % 2 === 1
        return (
          <section key={num} className={`${sec} ${odd ? 'bg-[#EDE6D8]' : ''}`}>
            <div className={`${wrap} ${col} lg:grid lg:grid-cols-2 lg:gap-[72px]`}>
              <div className={col}>
                <span className="font-['Fraunces',serif] text-[56px] leading-none text-[#8A6420] lg:text-[80px]">{num}</span>
                <h2 className={h2sm}>{title}</h2>
              </div>
              <div className={col}>
                <p className={p}>{text}</p>
                <div className={`flex flex-col gap-2.5 rounded-[20px] p-[22px] ${odd ? 'bg-[#F5F1E8]' : 'bg-[#EDE6D8]'}`}>
                  <span className={eyebrow}>How we prove it</span>
                  <p className="text-[15px] leading-[1.7] text-[#17261C]">{proof}</p>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* WHAT WE WILL NEVER CLAIM */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col}`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>What we will never claim</span>
          <h2 className={`${h2} text-[#F5F1E8]`}>
            Honesty includes what we <em>don't</em> say.
          </h2>
          <div className="border-b border-[#2C3D30] lg:grid lg:grid-cols-3 lg:gap-7 lg:border-b-0">
            {never.map(([title, text]) => (
              <div key={title} className="flex gap-[18px] border-t border-[#2C3D30] py-5 lg:flex-col lg:gap-3">
                <span className="w-[34px] shrink-0 font-['Fraunces',serif] text-xl text-[#C9DE9E]">×</span>
                <div>
                  <b className="mb-1.5 block text-base text-[#F5F1E8]">{title}</b>
                  <span className="text-sm leading-[1.6] text-[#D9D2C2]">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB REPORTS */}
      <section className={sec}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Latest results</span>
          <h2 className={h2sm}>Lab reports</h2>
          <div className="max-w-[640px]">
            {lab.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-[#DCD2BE] py-3 text-[13px]">
                <span className="text-[#6B6455]">{k}</span>
                <b className="text-right">{v}</b>
              </div>
            ))}
          </div>
          <a
            href={REPORT_PDF}
            download
            className="flex h-[54px] items-center justify-center rounded-[27px] border border-[#17261C] px-7 text-[15px] font-semibold text-[#17261C] md:w-fit"
          >
            Download latest report (PDF)
          </a>
        </div>
      </section>
    </main>
  )
}