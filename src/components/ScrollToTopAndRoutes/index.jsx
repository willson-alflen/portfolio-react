import { useEffect, lazy, Suspense } from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'
import GlobalLayout from '@/components/GlobalLayout'
import Loading from '@/components/Loading'

const Home = lazy(() => import('@/pages/Home'))
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))
const ResumePage = lazy(() => import('@/pages/Resume'))

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
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<GlobalLayout />}>
          <Route index element={<Home />} />
          <Route path="/:projectName" element={<ProjectDetail />} />
          <Route path="/resume" element={<ResumePage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
