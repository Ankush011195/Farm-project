import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Jab visit-register page ban jaye to yaha uska path daal do (abhi Contact pe jaata hai)
const VISIT = '/visit'

const links = [
  ['/OurFarms', 'Our Farms', 'Ontario and Punjab'],
  ['/farmacy-standard', 'The Farmacy Standard', 'Five promises we prove'],
  ['/produce', 'Produce', 'For homes, stores and hotels'],
  ['/grow-with-us', 'Grow with Us', 'Academy and partner farms'],
  ['/journal', 'Journal', 'Notes from the rows'],
  ['/connect', 'Contact', 'Talk to our team'],
]
// Desktop navbar me Contact nahi dikhta (client ke design ke hisaab se), wo "Order produce" button se khulta hai
const desktopLinks = links.slice(0, 5)

function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex flex-col no-underline">
      {/* Purana image logo chahiye to ye 2 span hata kar ye lagao: <img src="/logofarmweb.png" alt="Farmacy" className="h-10 w-auto" /> */}
      <span className="font-['Fraunces',Georgia,serif] text-[22px] font-medium tracking-[6px] text-[#17261C] lg:text-[26px] lg:tracking-[8px]">FARMACY</span>
      <span className="text-[10px] font-semibold tracking-[3px] text-[#8A6420] lg:text-[11px] lg:tracking-[4px]">BY NAVI</span>
    </Link>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  // Menu khula ho to peeche ka page scroll na ho
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2D9C6] bg-[#F5F1E8] font-['Manrope','Helvetica_Neue',sans-serif]">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 lg:h-24 lg:px-12">
        <Logo onClick={close} />

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
          {desktopLinks.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[15px] font-medium no-underline transition-colors hover:text-[#8A6420] ${isActive ? 'text-[#8A6420]' : 'text-[#17261C]'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop button */}
        <Link
          to="/connect"
          className="hidden h-11 items-center rounded-full bg-[#17261C] px-6 text-sm font-bold text-[#F5F1E8] no-underline hover:opacity-90 lg:flex"
        >
          Order produce
        </Link>

        {/* Mobile: visit button + hamburger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <Link
            to={VISIT}
            onClick={close}
            className="flex h-11 items-center rounded-full bg-[#17261C] px-4 text-[13px] font-bold text-[#F5F1E8] no-underline"
          >
            Request a visit
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#17261C" strokeWidth="1.6">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="7" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (header ke neeche poori screen) */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-[#17261C] px-6 pb-10 pt-6 lg:hidden">
          <span className="mb-6 block text-[11px] font-bold uppercase tracking-[3px] text-[#C9DE9E]">Menu</span>
          {links.map(([to, label, sub]) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className="flex flex-col gap-1 border-t border-[#2C3D30] py-[18px] no-underline"
            >
              <span className="font-['Fraunces',serif] text-[28px] text-[#F5F1E8]">{label}</span>
              <span className="text-[13px] text-[#BDB6A6]">{sub}</span>
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-7">
            <Link
              to={VISIT}
              onClick={close}
              className="flex h-[54px] items-center justify-center rounded-[27px] bg-[#C9DE9E] text-[15px] font-bold text-[#17261C] no-underline"
            >
              Request a farm visit
            </Link>
            <Link
              to="/connect"
              onClick={close}
              className="flex h-[54px] items-center justify-center rounded-[27px] border border-[#C9DE9E] text-[15px] font-semibold text-[#F5F1E8] no-underline"
            >
              Order produce on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar