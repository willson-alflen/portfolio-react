import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '@/contexts/ProjectsContext'
import { slugify } from '@/utils/slugify'

export const useProject = () => {
  const { projectName } = useParams()
  const { projects } = useContext(ProjectsContext)

  const project = projects.find((project) => slugify(project.name) === projectName)

  return { project }
}
