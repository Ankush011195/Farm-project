import logo from '../assets/logofarmweb.png'

function Footer() {
  return (
    <footer className='bg-[#EDE8DC] px-6 md:px-16 py-8'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0 mb-6'>

        {/* Logo + Tagline */}
        <div>
          <img src={logo} alt='Farmacy by Navi' className='h-8 w-auto mb-2' />
          <p className='text-xs text-[#7A7560]'>Growing honestly, always.</p>
        </div>

        {/* Social Links */}
        <div className='flex gap-6'>
        <a href='https://instagram.com/thinkwithnavi' target='_blank' rel='noreferrer' className='text-xs text-[#7A7560] hover:text-[#1A1F12] no-underline'>Instagram</a>
        <a href='https://wa.me/919614600086' target='_blank' rel='noreferrer' className='text-xs text-[#7A7560] hover:text-[#1A1F12] no-underline'>WhatsApp</a>
        <a href='mailto:Thinkwithnavi@gmail.com' className='text-xs text-[#7A7560] hover:text-[#1A1F12] no-underline'>Email</a>
        </div>

      </div>

      <div className='border-t border-[#DDD8CC] pt-4 flex flex-col md:flex-row justify-between items-center gap-2'>
        <p className='text-xs text-[#A09880]'>© 2025 Farmacy by Navi. All rights reserved.</p>
        <p className='text-xs text-[#A09880]'>Punjab, India · Canada</p>
        <a href='/admin/login' className='text-xs text-[#3A4028] hover:text-[#7A7560] no-underline'>
          Admin
        </a>
      </div>

    </footer>
  )
}

export default Footer