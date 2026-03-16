import Projects from '@/components/Projects'
import SEO from '@/components/SEO'

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects | Willson Alflen"
        description="Explore my software projects, case studies and live demos."
      />
      <Projects />
    </>
  )
}
