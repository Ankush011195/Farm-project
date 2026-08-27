import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from '../../api/axios.js'

function ManageGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [location, setLocation] = useState('both')
  const navigate = useNavigate()

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const token = localStorage.getItem('token')
        if (!token) {
          navigate('/admin/login')
          return
        }
        const res = await axios.get('/gallery')
        setImages(res.data)
      } catch (err) {
        navigate('/admin/login')
      } finally {
        setLoading(false)
      }
    }
    fetchImages()
  }, [navigate])

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!selectedFile) return
    try {
      setUploading(true)
      const token = localStorage.getItem('token')
      const formData = new FormData()
      formData.append('image', selectedFile)
      formData.append('location', location)
      const res = await axios.post('/gallery/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      })
      setImages([res.data, ...images])
      setSelectedFile(null)
      setLocation('both')
      e.target.reset()
    } catch (err) {
      console.log(err)
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this photo?')) return
    try {
      const token = localStorage.getItem('token')
      await axios.delete(`/gallery/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setImages(images.filter(img => img._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  return (
    <div className='min-h-screen bg-[#F2EDE3]'>

      {/* Admin Navbar */}
      <div className='bg-[#1A1F12] px-6 md:px-10 py-4 flex justify-between items-center'>
        <p className='text-base font-medium text-[#F0EDE6]'>
         Farmacy <span className='text-[#7A9955]'>by Navi</span>
          <span className='text-xs text-[#5A6048] ml-2'>Admin</span>
        </p>
        <div className='flex gap-4 md:gap-6 items-center'>
          <Link to='/admin/dashboard' className='text-xs text-[#5A6048] hover:text-[#7A9955] no-underline'>Messages</Link>
          <Link to='/admin/gallery' className='text-xs text-[#7A9955] no-underline'>Gallery</Link>
          <button onClick={handleLogout} className='text-xs text-[#5A6048] hover:text-red-400'>
            Logout
          </button>
        </div>
      </div>

      <div className='px-6 md:px-10 py-8 md:py-10'>
        <p className='text-xs text-[#4D7C1A] uppercase tracking-widest mb-2'>Admin</p>
        <h1 className='text-2xl md:text-3xl font-medium text-[#1A1F12] mb-8'>Manage Gallery</h1>

        {/* Upload Section */}
        <div className='bg-[#FAFAF7] rounded-2xl p-6 md:p-8 border border-[#E2DDD4] mb-10'>
          <h2 className='text-base font-medium text-[#1A1F12] mb-5'>Upload Photo</h2>
          <form onSubmit={handleUpload} className='flex flex-col gap-4'>

            <div
              className='border-2 border-dashed border-[#E2DDD4] rounded-xl p-8 text-center cursor-pointer hover:border-[#4D7C1A] transition-all'
              onClick={() => document.getElementById('fileInput').click()}
            >
              {selectedFile ? (
                <div>
                  <p className='text-sm text-[#1A1F12] font-medium'>{selectedFile.name}</p>
                  <p className='text-xs text-[#7A7560] mt-1'>Click to change</p>
                </div>
              ) : (
                <div>
                  <p className='text-2xl mb-2'>📸</p>
                  <p className='text-sm text-[#7A7560]'>Click to select a photo</p>
                  <p className='text-xs text-[#C8C2B5] mt-1'>JPG, PNG supported</p>
                </div>
              )}
              <input
                id='fileInput'
                type='file'
                accept='image/*'
                className='hidden'
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>

            <div className='flex gap-3 flex-wrap'>
              {['both', 'india', 'canada'].map((loc) => (
                <button
                  key={loc}
                  type='button'
                  onClick={() => setLocation(loc)}
                  className={`px-5 py-2 rounded-full text-xs border transition-all capitalize
                    ${location === loc
                      ? 'bg-[#1A1F12] text-[#F0EDE6] border-[#1A1F12]'
                      : 'bg-transparent text-[#7A7560] border-[#E2DDD4]'
                    }`}
                >
                  {loc === 'both' ? 'Both' : loc === 'india' ? '🇮🇳 India' : '🇨🇦 Canada'}
                </button>
              ))}
            </div>

            <button
              type='submit'
              disabled={uploading || !selectedFile}
              className='bg-[#1A1F12] text-[#F0EDE6] py-3 rounded-full text-sm hover:opacity-90 disabled:opacity-50'
            >
              {uploading ? 'Uploading...' : 'Upload Photo'}
            </button>

          </form>
        </div>

        {/* Images Grid */}
        {loading && (
          <p className='text-sm text-[#7A7560]'>Loading...</p>
        )}

        {!loading && images.length === 0 && (
          <div className='bg-[#FAFAF7] rounded-2xl p-10 text-center border border-[#E2DDD4]'>
            <p className='text-sm text-[#7A7560]'>No photos yet — upload one!</p>
          </div>
        )}

        {!loading && images.length > 0 && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {images.map((img) => (
              <div key={img._id} className='relative rounded-2xl overflow-hidden group'>
                <img
                  src={img.imageUrl}
                  alt='farm'
                  className='w-full h-52 object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center'>
                  <button
                    onClick={() => handleDelete(img._id)}
                    className='opacity-0 group-hover:opacity-100 bg-red-500 text-white text-xs px-4 py-2 rounded-full transition-all'
                  >
                    Delete
                  </button>
                </div>
                <span className='absolute top-3 left-3 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full capitalize'>
                  {img.location}
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

export default ManageGallery