import { Link } from 'react-router-dom'

// public/ folder ki photos ke naam yaha badal do
const HERO_IMG = '/all.jpeg'
const PHOTO_TOMATO = '/Cluster.jpeg'

const wrap = 'mx-auto w-full max-w-[1140px] px-6 md:px-10'
const eyebrow = 'text-[11px] font-bold uppercase tracking-[3px] text-[#8A6420]'
const h2 = "font-['Fraunces',Georgia,serif] text-[34px] font-normal leading-[1.15] md:text-[40px] lg:text-[46px]"
const p = 'text-base leading-[1.7] text-[#4A5248]'
const sec = 'py-16 md:py-[88px] lg:py-[110px]'
const col = 'flex flex-col gap-[22px]'

// image: null rakhoge to hari placeholder box dikhega (placeholderText uske andar likha jaayega)
const punjab = [
  {
    tag: 'Punjab · Season from [Feb 2027]',
    name: 'English Cucumber',
    text: 'Seedless, thin-skinned and crisp. Eat it straight, no peeling needed. Grown from premium European seed.',
    image: null,
    placeholder: '[Cucumber, sliced and whole]',
    rows: [
      ['Pack', '[500 g / 1 kg / 5 kg crate]'],
      ['Best for', 'Salads, raita, juicing'],
      ['Shelf life', '[7–10 days chilled]'],
    ],
  },
  {
    tag: 'Punjab · Season from [Feb 2027]',
    name: 'Coloured Bell Peppers',
    text: 'Red and yellow, thick-walled and naturally sweet. The grade premium hotels and retailers ask for.',
    image: null,
    placeholder: '[Red and yellow bell peppers]',
    rows: [
      ['Pack', '[500 g / 1 kg / 5 kg crate]'],
      ['Best for', 'Grilling, salads, stir-fry'],
      ['Shelf life', '[10–14 days chilled]'],
    ],
  },
]

const canada = {
  tag: 'Ontario · Sold in Canada',
  name: 'Greenhouse Tomatoes',
  text: 'On-the-vine, beefsteak and Roma, grown year-round for Canadian retail chains.',
  image: PHOTO_TOMATO,
  rows: [
    ['Available', 'Canada, through retail partners'],
    ['Varieties', 'TOV, beefsteak, Roma'],
  ],
}

const steps = [
  ['1', 'Harvested at first light', 'Picked in the cool of the morning for peak freshness.'],
  ['2', 'Graded and packed on the farm', 'Every pack coded to its structure and harvest date.'],
  ['3', 'Delivered the same day', 'Straight to you, no middlemen, no cold-store months.'],
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

// Ek product ka card. wide = desktop pe photo left, text right
function ProductCard({ item, wide }) {
  const imgSize = wide ? 'lg:h-auto lg:min-h-[320px] lg:w-1/2' : 'lg:h-[240px]'
  return (
    <article className={`flex flex-col overflow-hidden rounded-3xl bg-[#EDE6D8] ${wide ? 'lg:flex-row' : ''}`}>
      {item.image ? (
        <img src={item.image} alt={item.name} className={`h-[220px] w-full object-cover ${imgSize}`} />
      ) : (
        <div className={`flex h-[220px] w-full items-center justify-center bg-[#D9E6BF] p-5 text-center text-[13px] font-semibold text-[#3F5A22] ${imgSize}`}>
          {item.placeholder}
        </div>
      )}
      <div className={`flex flex-col gap-3 p-6 ${wide ? 'lg:w-1/2 lg:justify-center lg:p-10' : ''}`}>
        <span className={eyebrow}>{item.tag}</span>
        <h3 className="font-['Fraunces',Georgia,serif] text-[26px] font-normal leading-tight">{item.name}</h3>
        <p className="text-[15px] leading-[1.7] text-[#4A5248]">{item.text}</p>
        <Rows rows={item.rows} />
      </div>
    </article>
  )
}

function Produce() {
  return (
    <main className="bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif] text-[#17261C]">
      {/* HERO */}
      <section className="relative flex min-h-[540px] items-end overflow-hidden bg-[#17261C] md:min-h-[620px] lg:min-h-[700px]">
        <img src={HERO_IMG} alt="Farmacy produce" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0F1A13]/[0.64]" />
        <div className={`${wrap} relative z-10 flex flex-col gap-[18px] pb-11 lg:pb-20`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>Our Produce</span>
          <h1 className="font-['Fraunces',Georgia,serif] text-[44px] font-normal leading-[1.05] text-[#F5F1E8] md:text-[60px] lg:text-[76px]">
            Picked at dawn.<br />
            <em className="text-[#C9DE9E]">On your table by dinner.</em>
          </h1>
          <p className="max-w-[560px] text-base leading-[1.7] text-[#E6E0D2] lg:text-lg">
            Greenhouse vegetables grown to the Farmacy Standard, harvested to order and delivered fresh across the Tricity.
          </p>
        </div>
      </section>

      {/* GROWN IN PUNJAB */}
      <section className={sec}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Grown in Punjab</span>
          <h2 className={h2}>Available from our Machhipur farm</h2>
          <div className="grid gap-[22px] md:grid-cols-2 lg:gap-7">
            {punjab.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* GROWN IN CANADA */}
      <section className="pb-16 md:pb-[88px] lg:pb-[110px]">
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>Grown in Canada</span>
          <ProductCard item={canada} wide />
          <p className="text-[13px] leading-[1.7] text-[#4A5248]">Ontario produce is sold in Canada only.</p>
        </div>
      </section>

      {/* HOW TO BUY */}
      <section className={`${sec} bg-[#17261C]`}>
        <div className={`${wrap} ${col}`}>
          <span className={`${eyebrow} !text-[#C9DE9E]`}>How to buy</span>
          <h2 className={`${h2} text-[#F5F1E8]`}>Two ways to get Farmacy</h2>
          <div className="grid gap-[22px] md:grid-cols-2 lg:gap-7">
            <div className="flex flex-col gap-2.5 rounded-[20px] bg-[#F5F1E8] p-[22px] lg:p-8">
              <span className={eyebrow}>For your home</span>
              <h3 className="font-['Fraunces',serif] text-[22px] font-normal leading-tight">The Farmacy Box</h3>
              <p className="text-[15px] leading-[1.7] text-[#4A5248]">
                A weekly box of fresh Farmacy vegetables, delivered on a fixed day. Pause or cancel any time.
              </p>
              <Rows rows={[['Delivery', '[Mohali, Chandigarh, Panchkula]'], ['Price', '[₹ per box]']]} />
              <Link to="/connect" className="mt-3 flex h-[54px] items-center justify-center rounded-[27px] bg-[#17261C] text-[15px] font-bold text-[#F5F1E8] no-underline hover:opacity-90">
                Subscribe on WhatsApp
              </Link>
            </div>

            <div className="flex flex-col gap-2.5 rounded-[20px] bg-[#F5F1E8] p-[22px] lg:p-8">
              <span className={eyebrow}>For business</span>
              <h3 className="font-['Fraunces',serif] text-[22px] font-normal leading-tight">Retail, hotels and restaurants</h3>
              <p className="text-[15px] leading-[1.7] text-[#4A5248]">
                Consistent grade, reliable weekly volumes and full traceability for your buyers and auditors.
              </p>
              <Rows
                rows={[
                  ['Minimum order', '[__ kg / week]'],
                  ['Grading', 'Size and colour graded'],
                  ['Documents', 'Batch codes, lab reports'],
                ]}
              />
              <Link to="/connect" className="mt-3 flex h-[54px] items-center justify-center rounded-[27px] border border-[#17261C] text-[15px] font-semibold text-[#17261C] no-underline">
                Request a trade price list
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FROM OUR ROWS TO YOUR TABLE */}
      <section className={sec}>
        <div className={`${wrap} ${col}`}>
          <span className={eyebrow}>From our rows to your table</span>
          <div className="border-b border-[#DCD2BE] lg:grid lg:grid-cols-3 lg:gap-7 lg:border-b-0">
            {steps.map(([n, title, text]) => (
              <div key={n} className="flex gap-[18px] border-t border-[#DCD2BE] py-5 lg:flex-col lg:gap-3">
                <span className="w-[34px] shrink-0 font-['Fraunces',serif] text-xl text-[#8A6420]">{n}</span>
                <div>
                  <b className="mb-1.5 block text-base">{title}</b>
                  <span className="text-sm leading-[1.6] text-[#4A5248]">{text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Produce