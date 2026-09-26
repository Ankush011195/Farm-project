import { Link } from 'react-router-dom'

// Jab visit-register page ban jaye to yaha uska path daal do (abhi Contact pe jaata hai)
const VISIT = '/visit'

const pages = [
  ['/our-farms', 'Our Farms'],
  ['/farmacy-standard', 'The Farmacy Standard'],
  ['/produce', 'Produce'],
  ['/grow-with-us', 'Grow with Us'],
  ['/journal', 'Journal'],
  ['/connect', 'Contact'],
  [VISIT, 'Request a visit'],
  ['/privacy', 'Privacy'],
]

const social = [
  ['Instagram', 'https://instagram.com/thinkwithnavi'],
  ['WhatsApp', 'https://wa.me/919614600086'],
  ['Email', 'mailto:Thinkwithnavi@gmail.com'],
]

function Footer() {
  return (
    <footer className="bg-[#0F1A13] font-['Manrope','Helvetica_Neue',sans-serif] text-[#BDB6A6]">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-[22px] px-6 py-14 md:px-10 lg:grid lg:grid-cols-[1.2fr_1fr_1fr] lg:items-start lg:gap-12 lg:py-20">
        {/* Logo + tagline + social */}
        <div className="flex flex-col gap-[22px]">
          <Link to="/" className="flex flex-col no-underline">
            {/* Purana image logo chahiye to ye 2 span hata kar ye lagao: <img src="/logofarmweb.png" alt="Farmacy by Navi" className="h-10 w-auto" /> */}
            <span className="font-['Fraunces',serif] text-[26px] tracking-[7px] text-[#F5F1E8]">FARMACY</span>
            <span className="text-[11px] font-semibold tracking-[3px] text-[#C9A45C]">BY NAVI</span>
          </Link>
          <p className="font-['Fraunces',serif] text-lg italic text-[#C9DE9E]">Food is the first medicine.</p>
          <div className="flex flex-wrap gap-[18px]">
            {social.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="text-[13px] text-[#F5F1E8] no-underline hover:text-[#C9DE9E]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Page links */}
        <div className="grid grid-cols-2 gap-3">
          {pages.map(([to, label]) => (
            <Link key={label} to={to} className="text-[13px] text-[#F5F1E8] no-underline hover:text-[#C9DE9E]">
              {label}
            </Link>
          ))}
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1.5 text-[13px] leading-[1.6]">
          <span>Village Machhipur, Block Kharar, District Mohali, Punjab</span>
          <span>St. Thomas, Ontario, Canada</span>
          <span>FSSAI Lic. No. [ ]</span>
          <span>Farm visits by approved registration only. No walk-ins.</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex w-full max-w-[1140px] flex-col gap-2 border-t border-[#1E2E23] px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="text-xs text-[#8C8574]">© {new Date().getFullYear()} Farmacy by Navi. All rights reserved.</span>
        <Link to="/admin/login" className="text-xs text-[#5A6B5C] no-underline hover:text-[#8C8574]">
          Admin
        </Link>
      </div>
    </footer>
  )
}

export default Footer