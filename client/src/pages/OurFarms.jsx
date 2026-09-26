import { Link } from 'react-router-dom'

const HERO_IMG = '/Canada-farm.jpg'

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'
const two = 'flex flex-col gap-[22px] lg:flex-row lg:items-center lg:gap-[72px]'
const photo = 'h-[220px] w-full rounded-[22px] object-cover md:h-[340px] lg:h-[440px] lg:flex-1 lg:min-w-0'

const tags = ['High-wire tomatoes', 'Cucumbers', 'Peppers', 'Retail food-safety audited']

const lessons = [
  ['01', 'Measure everything', "Water, nutrients, climate and labour. If it isn't recorded, it isn't managed."],
  ['02', 'Quality is a system', 'Great produce comes from a thousand daily routines done right, not from luck.'],
  ['03', 'Food safety is non-negotiable', 'Clean hands, clean tools, clean records. Buyers check, so we check first.'],
  ['04', 'Respect the grower', 'Well-trained, well-treated people grow the best crops.'],
]

const specs = [
  ['Location', 'Machhipur, Kharar, Mohali'],
  ['Protected area', '8,000 sq m'],
  ['Structure', 'Naturally ventilated polyhouse'],
  ['Growing medium', 'Cocopeat grow bags'],
  ['Nutrition', 'Automated drip fertigation'],
  ['Crops', 'English cucumber, bell pepper'],
  ['First harvest', '[Feb 2027]'],
]

const steps = [
  ['I', 'Land and water tested', 'Soil and borewell water analysed before a single post went in.'],
  ['II', 'Structure raised', 'Polyhouse frame, polyfilm, insect nets and weed mat installed.'],
  ['III', 'Water secured', 'A dedicated RCC storage tank built for clean, reliable irrigation.'],
  ['IV', 'Precision installed', 'Fertigation system selected after a detailed technical comparison.'],
  ['V', 'Planted', 'Cocopeat sourced from Tamil Nadu, varieties chosen, first crop in.'],
]

function Item({ n, title, text, dark, bottomOnMd, stack }) {
  return (
    <div
      className={`flex gap-[18px] border-t py-5 ${dark ? 'border-[#2C3D30]' : 'border-[#DCD2BE]'} ${
        bottomOnMd ? 'md:border-b' : ''
      } ${stack ? 'lg:flex-col lg:gap-3' : ''}`}
    >
      <span className={`w-[34px] shrink-0 font-['Fraunces',serif] text-xl ${dark ? 'text-[#C9DE9E]' : 'text-[#8A6420]'}`}>{n}</span>
      <div>
        <b className={`mb-1.5 block text-base ${dark ? 'text-[#F5F1E8]' : ''}`}>{title}</b>
        <span className={`text-sm leading-[1.6] ${dark ? 'text-[#D9D2C2]' : 'text-[#4A5248]'}`}>{text}</span>
      </div>
    </div>
  )
}

export default function OurFarms() {
  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO */}
      <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#17261C] md:min-h-[620px] lg:min-h-[720px]">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0F1A13]/[0.64]" />
        <div className={`${wrap} relative z-10 flex flex-col gap-[18px] pb-11 lg:pb-20`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>Our Farms</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] text-[#F5F1E8] md:text-[60px] lg:text-[76px]">
            Two countries.<br />
            <em className="text-[#C9DE9E]">One standard.</em>
          </h1>
          <p className="max-w-[560px] text-base leading-[1.7] text-[#E6E0D2] lg:text-lg">
            A glass greenhouse in Ontario taught us how the world grows food at its best. A polyhouse in Punjab is where we put it to work for home.
          </p>
        </div>
      </section>

      {/* ONTARIO */}
      <section className={sec}>
        <div className={`${wrap} ${two}`}>
          <div className={`${col} lg:flex-1 lg:min-w-0`}>
            <span className={eyebrow}>Ontario, Canada</span>
            <h2 className={h2}>The proving ground</h2>
            <p className={p}>
              For more than fifteen years, Navi has grown high-wire tomatoes, cucumbers and peppers in a commercial glass greenhouse in St. Thomas, Ontario. The produce goes to some of Canada's largest grocery chains, where every crate is inspected, every input is recorded and food-safety audits are not optional.
            </p>
            <p className={p}>That is the school Farmacy comes from.</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="rounded-2xl border border-[#CFC4AD] px-3.5 py-2 text-xs font-semibold">{t}</span>
              ))}
            </div>
          </div>
          <img src={HERO_IMG} alt="Ontario greenhouse from above" className={photo} />
        </div>
      </section>

      {/* LESSONS */}
      <section className={`${sec} bg-[#EDE6D8]`}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>What Canada taught us</span>
          <h2 className={h2}>Four lessons we brought home</h2>
          <div className="border-b border-[#DCD2BE] md:grid md:grid-cols-2 md:gap-x-12 md:border-b-0">
            {lessons.map(([n, title, text], i) => (
              <Item key={n} n={n} title={title} text={text} bottomOnMd={i >= lessons.length - 2} />
            ))}
          </div>
        </div>
      </section>

      {/* PUNJAB */}
      <section className={sec}>
        <div className={`${wrap} ${two}`}>
          <div className={`${col} lg:order-2 lg:flex-1 lg:min-w-0`}>
            <span className={eyebrow}>Mohali, Punjab</span>
            <h2 className={h2}>Home soil, new standard</h2>
            <p className={p}>
              In Village Machhipur, Block Kharar, we built an 8,000 sq m naturally ventilated polyhouse from the ground up. Cucumber and bell pepper grow in cocopeat bags, fed drop by drop through computer-controlled fertigation, and run on the same playbook as Ontario.
            </p>
            <div>
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-[#DCD2BE] py-3 text-[13px]">
                  <span className="text-[#6B6455]">{k}</span>
                  <b className="text-right">{v}</b>
                </div>
              ))}
            </div>
          </div>
          {/* Punjab farm ki photo mile to ye div hata kar <img className={photo} src="/punjab-farm.jpg" alt="Machhipur polyhouse" /> lagao */}
          <div className="flex h-[230px] items-center justify-center rounded-[22px] bg-[#D9E6BF] p-5 text-center text-[13px] font-semibold text-[#3F5A22] md:h-[340px] lg:h-[440px] lg:flex-1 lg:min-w-0">
            [Drone shot: Structure 1, Machhipur]
          </div>
        </div>
      </section>

      {/* HOW IT WAS BUILT */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col}`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>How it was built</span>
          <h2 className={`${h2} text-[#F5F1E8]`}>From bare land to first planting</h2>
          <div className="border-b border-[#2C3D30] lg:grid lg:grid-cols-5 lg:gap-7 lg:border-b-0">
            {steps.map(([n, title, text]) => (
              <Item key={n} n={n} title={title} text={text} dark stack />
            ))}
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className={sec}>
        <div className={`${wrap} ${col}`}>
          <div className={`${col} max-w-[900px]`}>
            <span className={eyebrow}>What comes next</span>
            <h2 className={h2}>
              One farm is a start. A network is the <em>mission.</em>
            </h2>
            <p className={p}>
              Every Farmacy partner farm will meet the same standard, carry the same promise and share the same brand. Village by village, district by district.
            </p>
            <div className="flex flex-col gap-3 md:flex-row">
              <Link to="/grow-with-us" className="flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] px-7 text-[15px] font-bold text-[#F5F1E8]">
                Become a partner farm
              </Link>
              <Link to="/connect" className="flex h-[54px] items-center justify-center rounded-[27px] border border-[#17261C] px-7 text-[15px] font-semibold text-[#17261C]">
                Request a farm visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}