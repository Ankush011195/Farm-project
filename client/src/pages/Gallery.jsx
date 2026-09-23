import { useState, useEffect } from 'react'
import axios from '../api/axios.js'
import FadeIn from '../components/FadeIn'

function Gallery() {
  const [images, setImages] = useState([])
  const [activeTab, setActiveTab] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true)
        const location = activeTab === 'all' ? '' : activeTab
        const res = await axios.get(`/gallery${location ? `?location=${location}` : ''}`)
        setImages(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [activeTab])

  return (
    <div>

      {/* Hero */}
      <section className='relative px-6 md:px-10 py-20 md:py-24 overflow-hidden min-h-[500px] flex items-center'>
        <img
          src='/inside.jpg'
          alt='Farm Life'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#1A1F12]/55'></div>
        <div className='relative z-10'>
          <FadeIn delay={0}>
            <p className='text-xs text-[#C0DD97] uppercase tracking-widest mb-4'>Farm Life</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className='text-4xl md:text-5xl font-medium text-[#F0EDE6] leading-tight'>
              A look inside <br />
              <em className='text-[#C0DD97] not-italic'>our farms</em>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='bg-[#FAFAF7] px-6 md:px-10 py-16 md:py-20'>

        {/* Tabs */}
        <FadeIn>
          <div className='flex gap-3 mb-10'>
            {['all', 'india', 'canada'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-5 py-2 rounded-full text-xs border transition-all capitalize
                  ${activeTab === tab
                    ? 'bg-[#1A1F12] text-[#F0EDE6] border-[#1A1F12]'
                    : 'bg-transparent text-[#7A7560] border-[#E2DDD4] hover:border-[#1A1F12]'
                  }`}
              >
                {tab === 'all' ? 'All Photos' : tab === 'india' ? '🇮🇳 India' : '🇨🇦 Canada'}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Loading */}
        {loading && (
          <div className='flex justify-center py-20'>
            <p className='text-sm text-[#7A7560]'>Loading...</p>
          </div>
        )}

        {/* Images Grid */}
        {!loading && images.length > 0 && (
          <div className='columns-1 sm:columns-2 md:columns-3 gap-4'>
            {images.map((img) => (
              <div key={img._id} className='mb-4 rounded-2xl overflow-hidden'>
                <img
                  src={img.imageUrl}
                  alt='farm'
                  className='w-full object-cover hover:scale-105 transition-transform duration-300'
                />
              </div>
            ))}
          </div>
        )}

        {/* No Images */}
        {!loading && images.length === 0 && (
          <div className='flex justify-center py-20'>
            <p className='text-sm text-[#7A7560]'>No photos yet</p>
          </div>
        )}

      </section>

    </div>
  )
}

export default Gallery