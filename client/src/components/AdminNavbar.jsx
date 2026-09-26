import { useNavigate, useLocation, Link } from 'react-router-dom'

const navLinks = [
  ['/admin/visits', 'Visits'],
  ['/admin/dashboard', 'Messages'],
  ['/admin/gallery', 'Gallery'],
]

// Teeno admin pages (Dashboard, ManageGallery, VisitAdmin) isi component ko import karte hain,
// taaki navbar hamesha ek jaisa dikhe aur ek hi jagah se badle
function AdminNavbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/admin/login')
  }

  return (
    <div className="flex flex-col gap-3.5 border-b border-[#1E2E23] bg-[#0F1A13] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <Link to="/admin/dashboard" className="flex flex-col no-underline">
        <span className="font-['Fraunces',Georgia,serif] text-lg tracking-[4px] text-[#F5F1E8]">FARMACY</span>
        <span className="text-[9px] font-semibold tracking-[3px] text-[#8A6420]">ADMIN</span>
      </Link>
      <div className="flex flex-wrap items-center gap-1.5">
        {navLinks.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold no-underline ${
              pathname === to ? 'bg-[#C9DE9E] text-[#17261C]' : 'text-[#D9D2C2] hover:bg-[#1A2A1F]'
            }`}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="ml-1 rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#BDB6A6] hover:bg-[#1A2A1F] hover:text-[#EFD6D0]"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default AdminNavbar