import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

function Training() {
  const programs = [
    {
      title: 'Organic Farming Basics',
      duration: 'Coming Soon',
      description: 'Learn the fundamentals of organic farming — soil health, natural fertilizers, and chemical-free growing techniques.',
      icon: '🌱'
    },
    {
      title: 'Modern Farm Management',
      duration: 'Coming Soon',
      description: 'Understand how to manage a farm efficiently — from planning and planting to harvesting and distribution.',
      icon: '🚜'
    },
    {
      title: 'Farm Visit & Experience',
      duration: 'Coming Soon',
      description: 'Come visit our farms in person — see how we grow, meet the team, and experience real farming firsthand.',
      icon: '🧑‍🌾'
    },
  ]

  return (
    <div>

      {/* Hero */}
      <section className='relative px-6 md:px-10 py-20 md:py-32 overflow-hidden min-h-[500px] flex items-center'>
        <img
          src='/training.jpg'
          alt='Training & Education'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10 max-w-2xl'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-6'>Training & Education</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-6xl font-medium text-[#F0EDE6] leading-tight'>
              Learn to farm <br />
              <em className='text-[#C0DD97] not-italic'>the right way</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className='text-sm md:text-base text-[#D4CFC6] leading-relaxed mt-6 max-w-lg'>
              We believe knowledge should be shared. Whether you are a beginner
              or an experienced farmer — there is always something new to learn.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Programs */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-16 md:py-24'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Our Programs</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-12'>What we offer</h2>
        </FadeIn>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {programs.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.15} direction='up'>
              <div className='bg-[#F2EDE3] rounded-3xl p-8'>
                <div className='w-14 h-14 rounded-full bg-[#EAF3DE] flex items-center justify-center text-3xl mb-6'>
                  {program.icon}
                </div>
                <span className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-2 block'>
                  {program.duration}
                </span>
                <h3 className='text-lg font-medium text-[#1A1F12] mb-3'>{program.title}</h3>
                <p className='text-sm text-[#7A7560] leading-relaxed'>{program.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className='bg-[#F2EDE3] px-6 md:px-10 py-16 md:py-24'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Why us</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-12'>
            Learn from real farmers
          </h2>
        </FadeIn>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {[
            { title: 'Real farm experience', text: 'Learn on actual working farms — not a classroom. Hands-on experience that you cannot get from a book.' },
            { title: 'Two countries, one knowledge', text: 'Benefit from farming experience across India and Canada — different climates, same honest approach.' },
            { title: '100% natural farming only', text: 'We only teach what we practice — chemical-free, sustainable, and honest farming methods.' },
            { title: 'Small groups, personal attention', text: 'We keep our groups small so everyone gets personal guidance and real learning — not just a tour.' },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1} direction='up'>
              <div className='flex gap-4 items-start'>
                <div className='w-2 h-2 rounded-full bg-[#4D7C1A] mt-2 shrink-0'></div>
                <div>
                  <h4 className='text-sm font-medium text-[#1A1F12] mb-2'>{item.title}</h4>
                  <p className='text-sm text-[#7A7560] leading-relaxed'>{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-[#EDE8DC] px-6 md:px-10 py-20 md:py-28 text-center'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Get started</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-6'>
            Interested in learning? <br /> Let us know.
          </h2>
          <p className='text-sm text-[#7A7560] leading-relaxed mb-10 max-w-md mx-auto'>
            Reach out and we will share details about upcoming programs,
            schedules, and how to join.
          </p>
          <Link to='/connect' className='bg-[#1A1F12] text-[#F0EDE6] px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 no-underline'>
            Connect with us
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}

export default Training