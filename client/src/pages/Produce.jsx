import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

function Produce() {
  const produce = [
    {
      name: 'Tomato',
      image: '/src/assets/roms.jpeg',
      description: 'Fresh, naturally grown tomatoes — rich in flavour and grown without any chemicals.',
      category: 'Tomatoes'
    },
    {
      name: 'Beef Tomato',
      image: '/src/assets/Beef.jpeg',
      description: 'Large, meaty tomatoes perfect for salads and cooking. Grown with care on our farms.',
      category: 'Tomatoes'
    },
    {
      name: 'Cluster Tomato',
      image: '/src/assets/Cluster.jpeg',
      description: 'Vine-ripened cluster tomatoes — sweet, juicy, and full of natural goodness.',
      category: 'Tomatoes'
    },
    {
      name: 'Roma Tomato',
      image: '/src/assets/roms.jpeg',
      description: 'Classic Roma tomatoes with thick flesh and rich taste — ideal for sauces and cooking.',
      category: 'Tomatoes'
    },
    {
      name: 'Yellow Peppers',
      image: null,
      description: 'Sweet and crisp yellow peppers — naturally grown and full of flavour.',
      category: 'Peppers'
    },
    {
      name: 'Red Peppers',
      image: null,
      description: 'Vibrant red peppers with a sweet, rich taste — grown the honest way.',
      category: 'Peppers'
    },
    {
      name: 'Bell Pepper',
      image: null,
      description: 'Crisp and colourful bell peppers — fresh from our farms, no chemicals ever.',
      category: 'Peppers'
    },
  ]

  const categories = ['All', 'Tomatoes', 'Peppers']
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? produce
    : produce.filter(p => p.category === activeCategory)

  return (
    <div>

      {/* Hero */}
      <section className='relative px-6 md:px-10 py-20 md:py-32 overflow-hidden min-h-[500px] flex items-center'>
        <img
          src='/src/assets/all.jpeg'
          alt='Our Produce'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-6'>Our Produce</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-6xl font-medium text-[#F0EDE6] leading-tight max-w-2xl'>
              Grown honestly, <br />
              <em className='text-[#C0DD97] not-italic'>harvested with care</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Produce Section */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-16 md:py-24'>

        {/* Filter Tabs */}
        <FadeIn>
          <div className='flex gap-3 mb-12 flex-wrap'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs border transition-all
                  ${activeCategory === cat
                    ? 'bg-[#1A1F12] text-[#F0EDE6] border-[#1A1F12]'
                    : 'bg-transparent text-[#7A7560] border-[#E2DDD4] hover:border-[#1A1F12]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {filtered.map((item, index) => (
            <FadeIn key={item.name} delay={index * 0.1} direction='up'>
              <div className='bg-[#F2EDE3] rounded-3xl overflow-hidden'>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-64 object-cover object-center'
                  />
                ) : (
                  <div className='w-full h-48 bg-[#EAE4D8] flex items-center justify-center'>
                    <p className='text-xs text-[#7A7560]'>Photo coming soon</p>
                  </div>
                )}
                <div className='p-6'>
                  <span className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-2 block'>
                    {item.category}
                  </span>
                  <h3 className='text-lg font-medium text-[#1A1F12] mb-3'>{item.name}</h3>
                  <p className='text-sm text-[#7A7560] leading-relaxed'>{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className='bg-[#EDE8DC] px-6 md:px-10 py-20 md:py-28 text-center'>
        <FadeIn>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-4'>Interested?</p>
          <h2 className='text-3xl md:text-4xl font-medium text-[#1A1F12] mb-6'>
            Want to know more <br /> about our produce?
          </h2>
          <p className='text-sm text-[#7A7560] leading-relaxed mb-10 max-w-md mx-auto'>
            Get in touch with us — we would love to tell you more about how we grow our food.
          </p>
          <Link to='/connect' className='bg-[#1A1F12] text-[#F0EDE6] px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 no-underline'>
            Connect with us
          </Link>
        </FadeIn>
      </section>

    </div>
  )
}

export default Produce