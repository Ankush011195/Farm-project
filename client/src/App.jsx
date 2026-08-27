import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Connect from './pages/Connect'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ManageGallery from './pages/admin/ManageGallery'
import WhatsAppButton from './components/WhatsAppButton'
import Produce from './pages/Produce'
import Training from './pages/Training'

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
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/connect' element={<Connect />} />
        <Route path='/training' element={<Training />} />
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/gallery' element={<ManageGallery />} />
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