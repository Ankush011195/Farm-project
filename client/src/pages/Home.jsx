import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

function Home() {
  return (
       <div>

      {/* Hero Section — animation nahi, already visible hai page load pe */}
      <section className='relative px-6 md:px-10 py-20 md:py-32 overflow-hidden min-h-[600px] flex items-center'>
        <video
          src='/Hero-video.mp4'
          autoPlay
          loop
          muted
          playsInline
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10 max-w-2xl'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-6'>
              Est. in the fields · Growing since day one
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-6xl font-medium text-[#F0EDE6] leading-tight mb-6'>
              Farming done <br />
              <em className='text-[#C0DD97] not-italic'>the honest way</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className='text-sm md:text-base text-[#D4CFC6] leading-relaxed mb-10 max-w-lg'>
              We grow food the way it was meant to be grown — with patience,
              care, and deep respect for the land. No shortcuts, no chemicals.
              Just real farming.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link to='/gallery' className='bg-[#C0DD97] text-[#1A1F12] px-8 py-4 rounded-full text-sm hover:opacity-90 no-underline text-center font-medium'>
                See our farms
              </Link>
              <Link to='/connect' className='border border-[#C0DD97] text-[#C0DD97] px-8 py-4 rounded-full text-sm hover:opacity-90 no-underline text-center'>
                Say hello
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className='bg-[#1A1F12] px-6 md:px-10 py-8 grid grid-cols-2 md:flex md:justify-around gap-6'>
        <FadeIn delay={0} direction='up'>
          <div className='text-center'>
            <p className='text-3xl md:text-4xl font-medium text-[#C0DD97]'>2</p>
            <p className='text-xs text-[#7A9955] uppercase tracking-wider mt-2'>Countries</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} direction='up'>
          <div className='text-center'>
            <p className='text-3xl md:text-4xl font-medium text-[#C0DD97]'>2021</p>
            <p className='text-xs text-[#7A9955] uppercase tracking-wider mt-2'>Est</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction='up'>
          <div className='text-center'>
            <p className='text-3xl md:text-4xl font-medium text-[#C0DD97]'>100%</p>
            <p className='text-xs text-[#7A9955] uppercase tracking-wider mt-2'>Natural</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.3} direction='up'>
          <div className='text-center'>
            <p className='text-3xl md:text-4xl font-medium text-[#C0DD97]'>2</p>
            <p className='text-xs text-[#7A9955] uppercase tracking-wider mt-2'>Farms</p>
          </div>
        </FadeIn>
      </section>

      {/* About Section */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-20 md:py-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center'>
          <FadeIn direction='right'>
            <div>
              <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Our Story</p>
              <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] leading-snug mb-6'>
                Built on the belief <br /> that farming matters
              </h2>
              <p className='text-sm text-[#5C5845] leading-relaxed mb-4'>
                What started as a simple commitment to grow food honestly has grown
                into something much bigger — two farms across two countries, and a
                community of people who believe in eating real.
              </p>
              <p className='text-sm text-[#5C5845] leading-relaxed mb-10'>
                We believe the land gives back what you put in. Treat it with respect,
                farm with patience, and the results speak for themselves. That has always
                been our way — and it always will be.
              </p>
              <Link to='/about' className='bg-[#1A1F12] text-[#F0EDE6] px-7 py-3.5 rounded-full text-sm hover:opacity-90 no-underline'>
                Read our story
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction='left'>
            <img
              src='/src/assets/Canada-farm.jpg'
              alt='Farmacy by Navi'
              className='rounded-3xl w-full h-72 md:h-96 object-cover'
            />
          </FadeIn>
        </div>
      </section>

      {/* Two Farms Section */}
      <section className='bg-[#F2EDE3] px-6 md:px-10 py-20 md:py-28'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Our Farms</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-10 md:mb-16'>Two lands, same heart</h2>
        </FadeIn>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <FadeIn delay={0} direction='up'>
            <div className='bg-[#FAFAF7] rounded-3xl overflow-hidden'>
              <div className='bg-[#D9E8C0] h-52 md:h-64 flex items-center justify-center'>
                <p className='text-sm text-[#3B6D11]'>India farm photo</p>
              </div>
              <div className='p-7 md:p-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-2xl'>🇮🇳</span>
                  <h3 className='text-xl font-medium text-[#1A1F12]'>India Farm</h3>
                </div>
                <p className='text-sm text-[#5C5845] leading-relaxed mb-3'>
                  Our roots. Traditional farming with modern care —
                  fresh and natural produce from the heartland of India.
                </p>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  Rich soil, honest hands, and a deep connection to the land —
                  our India farm is the foundation of everything we do.
                </p>
                <span className='inline-block mt-6 bg-[#EAF3DE] text-[#3B6D11] text-xs px-4 py-1.5 rounded-full'>
                  3 Acres · Punjab, India
                </span>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.15} direction='up'>
            <div className='bg-[#FAFAF7] rounded-3xl overflow-hidden'>
              <img
                src='/src/assets/about-hero.jpg'
                alt='Farmacy by Navi'
                className='rounded-3xl w-full h-52 md:h-64 object-cover'
              />
              <div className='p-7 md:p-10'>
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-2xl'>🇨🇦</span>
                  <h3 className='text-xl font-medium text-[#1A1F12]'>Canada Farm</h3>
                </div>
                <p className='text-sm text-[#5C5845] leading-relaxed mb-3'>
                  Expanding horizons. Sustainable farming in Canada's
                  fertile lands — same values, bigger scale.
                </p>
                <p className='text-sm text-[#5C5845] leading-relaxed'>
                  From the fields of India to the vast open lands of Canada —
                  our farming journey continues with the same heart and purpose.
                </p>
                <span className='inline-block mt-6 bg-[#DDF0F5] text-[#0F6E56] text-xs px-4 py-1.5 rounded-full'>
                  5 Acres · Canada
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-20 md:py-28'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>What we stand for</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-10 md:mb-16'>Our values</h2>
        </FadeIn>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {[
            { emoji: '🌱', title: '100% Natural', text: 'No chemicals, no pesticides. Ever. We farm the way nature intended — clean soil, clean crops, clean food.' },
            { emoji: '🤝', title: 'Open and Honest', text: 'We believe in transparency — about how we farm, what we grow, and who we are. No hidden processes, no shortcuts.' },
            { emoji: '🌍', title: 'Built to last', text: 'Sustainable farming is not a trend for us — it is the only way we know how to farm. For the land, for the future.' },
            { emoji: '☀️', title: 'Seasonal farming', text: "We grow what the season allows — respecting nature's rhythm and letting the land rest when it needs to." },
            { emoji: '💧', title: 'Water conscious', text: 'Smart irrigation, minimal waste. We treat water as the precious resource it is — on both our farms.' },
            { emoji: '🧑‍🌾', title: 'People first', text: 'Behind every farm is a team of hardworking people. We take care of our land and the people who work it.' },
          ].map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1} direction='up'>
              <div className='bg-[#F2EDE3] rounded-3xl p-7 md:p-8'>
                <div className='w-12 h-12 rounded-full bg-[#EAF3DE] flex items-center justify-center mb-6 text-2xl'>{value.emoji}</div>
                <h3 className='text-base font-medium text-[#1A1F12] mb-3'>{value.title}</h3>
                <p className='text-sm text-[#7A7560] leading-relaxed'>{value.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-[#EDE8DC] px-6 md:px-10 py-20 md:py-28 text-center'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Get in touch</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-6'>
            Want to know more? <br /> We would love to talk.
          </h2>
          <p className='text-sm text-[#7A7560] leading-relaxed mb-10 max-w-md mx-auto'>
            Whether you are curious about our farms, want to visit,
            or just want to say hello — reach out any time.
          </p>
          <Link to='/connect' className='bg-[#1A1F12] text-[#F0EDE6] px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 no-underline'>
            Connect with us
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}

export default Home