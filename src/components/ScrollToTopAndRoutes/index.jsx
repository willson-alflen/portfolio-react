import { useEffect } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import GlobalLayout from '../GlobalLayout'
import Home from '../../pages/Home'
import ProjectDetail from '../../pages/ProjectDetail'

export default function ScrollToTopAndRoutes() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<GlobalLayout />}>
        <Route index element={<Home />} />
        <Route path="/:projectName" element={<ProjectDetail />} />
      </Route>
    </Routes>
  )
}
