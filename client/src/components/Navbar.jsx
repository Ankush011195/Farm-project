import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logofarmweb.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
   <nav className='flex justify-between items-center px-6 md:px-16 py-5 bg-[#FAFAF7] border-b border-[#E2DDD4] sticky top-0 z-50'>

      {/* Logo */}
      <Link to='/'>
        <img src={logo} alt='Farm Logo' className='h-10 w-auto' />
      </Link>

      {/* Desktop Links */}
      <div className='hidden md:flex gap-10 items-center'>
        {/* <Link to='/' className='text-[15px] text-[#3A3A2E] hover:text-[#1A1F12] no-underline font-medium'>Home</Link> */}
        <Link to='/about' className='text-[15px] text-[#3A3A2E] hover:text-[#1A1F12] no-underline font-medium'>Our Story</Link>

        {/* Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='text-[15px] text-[#3A3A2E] hover:text-[#1A1F12] flex items-center gap-1 font-medium'
          >
            Grow With Us
            <span className={`text-xs transition-all ${dropdownOpen ? 'rotate-180' : ''}`}>▾</span>
          </button>

          {dropdownOpen && (
            <div className='absolute top-8 left-0 bg-[#FAFAF7] border border-[#E2DDD4] rounded-xl p-2 w-48 shadow-sm'>
              <Link
                to='/training'
                onClick={() => setDropdownOpen(false)}
                className='block px-4 py-2.5 text-sm text-[#3A3A2E] hover:text-[#1A1F12] hover:bg-[#F2EDE3] rounded-lg no-underline'
              >
                Training & Education
              </Link>
              <Link
                to='/produce'
                onClick={() => setDropdownOpen(false)}
                className='block px-4 py-2.5 text-sm text-[#3A3A2E] hover:text-[#1A1F12] hover:bg-[#F2EDE3] rounded-lg no-underline'
              >
                Our Produce
              </Link>
            </div>
          )}
        </div>

        <Link to='/gallery' className='text-[15px] text-[#3A3A2E] hover:text-[#1A1F12] no-underline font-medium'>Farm Life</Link>
      </div>

      {/* Desktop Button */}
      <Link to='/connect' className='hidden md:block bg-[#1A1F12] text-[#F0EDE6] text-[15px] px-8 py-3 rounded-full no-underline hover:opacity-90 font-medium'>
        Get in touch
      </Link>

      {/* Mobile Hamburger */}
      <button
        className='md:hidden flex flex-col gap-1.5 cursor-pointer'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-[#1A1F12] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#1A1F12] transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#1A1F12] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-[#FAFAF7] border-b border-[#E2DDD4] px-6 py-6 flex flex-col gap-4'>
          {/* <Link to='/' onClick={() => setMenuOpen(false)} className='text-sm text-[#7A7560] no-underline'>Home</Link> */}
          <Link to='/about' onClick={() => setMenuOpen(false)} className='text-sm text-[#7A7560] no-underline'>Our Story</Link>
          <p className='text-xs text-[#4D7C1A] uppercase tracking-widest'>Grow With Us</p>
          <Link to='/produce' onClick={() => setMenuOpen(false)} className='text-sm text-[#7A7560] no-underline pl-3'>Our Produce</Link>
          <Link to='/training' onClick={() => setMenuOpen(false)} className='text-sm text-[#7A7560] no-underline pl-3'>Training & Education</Link>
          <Link to='/gallery' onClick={() => setMenuOpen(false)} className='text-sm text-[#7A7560] no-underline'>Farm Life</Link>
          <Link to='/connect' onClick={() => setMenuOpen(false)} className='bg-[#1A1F12] text-[#F0EDE6] text-sm px-6 py-2 rounded-full no-underline text-center'>
            Get in touch
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar