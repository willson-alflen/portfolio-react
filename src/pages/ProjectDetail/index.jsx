import Project from '@/components/Project'
import SEO from '@/components/SEO'
import { useProject } from '@/hooks/useProject'

export default function ProjectDetail() {
  const { project } = useProject()

  return (
    <>
      {project && (
        <SEO
          title={`${project.name} | Willson Alflen`}
          description={project.intro}
        />
      )}
      <Project />
    </>
  )
}
