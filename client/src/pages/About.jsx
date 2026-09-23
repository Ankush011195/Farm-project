import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

function About() {
  return (
    <div>

      {/* Hero */}
      <section className='relative px-6 md:px-10 py-20 md:py-32 overflow-hidden min-h-[500px] flex items-center'>
        <video
          src='/story.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-6'>Our Story</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-6xl font-medium text-[#F0EDE6] leading-tight max-w-2xl'>
              We did not start a business. <br />
              <em className='text-[#C0DD97] not-italic'>We started a farm.</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Main Story */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-20 md:py-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center'>
          <FadeIn direction='right'>
            <img
              src='/founder-pic.jpeg'
              alt='Navpreet Singh Pandher'
              className='rounded-3xl w-full h-72 md:h-96 object-contain object-top'
            />
          </FadeIn>
          <FadeIn direction='left'>
            <div>
              <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>The beginning</p>
              <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] leading-snug mb-6'>
                Navpreet Singh Pandher's <br /> farming journey
              </h2>
              <p className='text-sm text-[#5C5845] leading-relaxed mb-4'>
                Farmacy by Navi started with one simple belief — that food should be
                grown honestly, without chemicals, without shortcuts.
                That belief has never changed.
              </p>
              <p className='text-sm text-[#5C5845] leading-relaxed mb-4'>
                What began in 2021 on 5 acres of Canadian land has now grown into
                two farms across two countries — Canada and India — with the same
                values at the heart of everything.
              </p>
              <p className='text-sm text-[#5C5845] leading-relaxed'>
                8 acres. 2 countries. 1 mission — real farming, done the honest way.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className='bg-[#F2EDE3] px-6 md:px-10 py-20 md:py-28'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Our journey</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-10 md:mb-16'>How we got here</h2>
        </FadeIn>
        <div className='flex flex-col gap-0'>

          {/* Step 1 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-14 border-t border-[#E2DDD4]'>
            <FadeIn direction='right'>
              <div>
                <p className='text-5xl font-medium text-[#D9E8C0] mb-4'>01</p>
                <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-3'>2021 · Canada</p>
                <h3 className='text-xl font-medium text-[#1A1F12] mb-3'>Where it all began</h3>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  In 2021, Navpreet Singh Pandher started Farmacy by Navi in Canada
                  on 5 acres of fertile land. A clear vision, honest values, and one
                  simple rule — no chemicals, ever.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction='left' delay={0.15}>
              <div className='bg-[#EAE4D8] rounded-3xl h-52 md:h-56 flex items-center justify-center'>
                <p className='text-sm text-[#7A7560]'>Canada farm photo</p>
              </div>
            </FadeIn>
          </div>

          {/* Step 2 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-14 border-t border-[#E2DDD4]'>
            <FadeIn direction='right' delay={0.15}>
              <div className='md:order-1 order-2 bg-[#EAE4D8] rounded-3xl h-52 md:h-56 flex items-center justify-center'>
                <p className='text-sm text-[#7A7560]'>Farm photo</p>
              </div>
            </FadeIn>
            <FadeIn direction='left'>
              <div className='md:order-2 order-1'>
                <p className='text-5xl font-medium text-[#D9E8C0] mb-4'>02</p>
                <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-3'>Growing · Canada</p>
                <h3 className='text-xl font-medium text-[#1A1F12] mb-3'>Learning from the land</h3>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  Years of learning, experimenting, and refining on Canadian soil.
                  Figuring out what the land needed, what crops worked best, and how
                  to farm truly naturally without compromising on quality.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Step 3 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-14 border-t border-[#E2DDD4]'>
            <FadeIn direction='right'>
              <div>
                <p className='text-5xl font-medium text-[#D9E8C0] mb-4'>03</p>
                <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-3'>2026 · Punjab, India</p>
                <h3 className='text-xl font-medium text-[#1A1F12] mb-3'>Bringing it back home</h3>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  In 2026, the same vision came to India — 3 acres of Punjab's
                  rich soil, farmed the same honest way that started it all in Canada.
                  Different land, same heart.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction='left' delay={0.15}>
              <div className='bg-[#EAE4D8] rounded-3xl h-52 md:h-56 flex items-center justify-center'>
                <p className='text-sm text-[#7A7560]'>India farm photo</p>
              </div>
            </FadeIn>
          </div>

          {/* Step 4 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center py-10 md:py-14 border-t border-[#E2DDD4]'>
            <FadeIn direction='right' delay={0.15}>
              <div className='md:order-1 order-2 bg-[#EAE4D8] rounded-3xl h-52 md:h-56 flex items-center justify-center'>
                <p className='text-sm text-[#7A7560]'>Photo</p>
              </div>
            </FadeIn>
            <FadeIn direction='left'>
              <div className='md:order-2 order-1'>
                <p className='text-5xl font-medium text-[#D9E8C0] mb-4'>04</p>
                <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-3'>Today · 2 Countries</p>
                <h3 className='text-xl font-medium text-[#1A1F12] mb-3'>Two farms, one mission</h3>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  Canada and India — 8 acres of natural farming across two countries.
                  Farmacy by Navi is still the same farm it was on day one — just
                  on more land, with more people who believe in eating real.
                </p>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* The People */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-20 md:py-28'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>The people</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-6'>
            Behind the farm
          </h2>
          <p className='text-sm text-[#5C5845] leading-relaxed max-w-xl mb-10 md:mb-16'>
            Farmacy by Navi is built on the dedication of people who show up
            every day with the same care and commitment to doing things right.
          </p>
        </FadeIn>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {[
            { emoji: '🧑‍🌾', bg: '#D9E8C0', name: 'Navpreet Singh Pandher', role: 'Founder · Farmacy by Navi', text: 'Started with 5 acres in Canada and one belief — that honest farming is the only farming worth doing.' },
            { emoji: '🌾', bg: '#C5DDE8', name: 'The Team', role: 'India and Canada', text: 'A small, hardworking team that treats the land with the same respect as the people who eat from it.' },
            { emoji: '🤝', bg: '#EAE4D8', name: 'Our Community', role: 'Growing every day', text: 'The people who believe in what we do — and keep us going with their trust, support, and love for real food.' },
          ].map((person, index) => (
            <FadeIn key={person.name} delay={index * 0.15} direction='up'>
              <div className='bg-[#F2EDE3] rounded-3xl p-7 md:p-8'>
                <div className='w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6' style={{ backgroundColor: person.bg }}>
                  {person.emoji}
                </div>
                <h3 className='text-base font-medium text-[#1A1F12] mb-2'>{person.name}</h3>
                <p className='text-xs text-[#4D7C1A] mb-3'>{person.role}</p>
                <p className='text-sm text-[#7A7560] leading-relaxed'>{person.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#EDE8DC] px-6 md:px-10 py-20 md:py-28 text-center'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Come visit</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-6'>
            Want to see the farm <br /> for yourself?
          </h2>
          <p className='text-sm text-[#7A7560] leading-relaxed mb-10 max-w-md mx-auto'>
            We love meeting people who care about food and farming.
            Come visit, ask questions, or just say hello.
          </p>
          <Link to='/connect' className='bg-[#1A1F12] text-[#F0EDE6] px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 no-underline'>
            Connect with us
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}

export default About