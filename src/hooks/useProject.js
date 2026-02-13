import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '@/contexts/ProjectsContext'

export const useProject = () => {
  const { projectName } = useParams()
  const { projects } = useContext(ProjectsContext)

  const project = projects.find(
    (project) => project.name.replace(' ', '-') === projectName
  )

  return { project }
}
