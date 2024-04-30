import { createContext, useEffect, useState } from 'react'
import { getProjects } from '../../db/firebase'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

export const ProjectsContext = createContext()

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true)

      try {
        const projectsList = await getProjects()
        setProjects(projectsList)
        setIsLoading(false)
      } catch (error) {
        toast.error(error)
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <ProjectsContext.Provider value={{ projects, isLoading }}>
      {children}
    </ProjectsContext.Provider>
  )
}

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
