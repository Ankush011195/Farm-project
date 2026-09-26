import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurFarms from './pages/OurFarms'
import Connect from './pages/Connect'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageGallery from './pages/admin/ManageGallery'
import WhatsAppButton from './components/WhatsAppButton'
import Produce from './pages/Produce'
import Training from './pages/Training'
import Standard from './pages/Standard'
import Journal from './pages/Journal'
import VisitRegister from './pages/VisitRegister'
import Privacy from './pages/Privacy'
import VisitAdmin from './pages/admin/VisitAdmin'

function Layout() {
  const location = useLocation()
  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/produce' element={<Produce />} />
        <Route path="/OurFarms" element={<OurFarms />} />
        <Route path="/farmacy-standard" element={<Standard />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/visit" element={<VisitRegister />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/grow-with-us' element={<Training />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/gallery' element={<ManageGallery />} />
        <Route path='/admin/visits' element={<VisitAdmin />} />
      </Routes>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <WhatsAppButton />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App