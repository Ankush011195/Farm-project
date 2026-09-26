import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Har naye page (route) pe jaate hi scroll ko upar le jaata hai
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop