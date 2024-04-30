import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import * as S from './styles'

export default function Projects() {
  const { projects } = useContext(ProjectsContext)

  return (
    <S.ProjectsSection id="projects">
      <S.ProjectsContainer>
        <S.ProjectsHeading>
          <h2>Projects</h2>
          <p>
            Here are some of the projects I&apos;ve worked on recently. All my
            projects include links to the code and live version. Click on the
            images or the button to see more details.
          </p>
        </S.ProjectsHeading>

        <S.ProjectsContent>
          {projects.map((project) => (
            <React.Fragment key={project.id}>
              <S.Project>
                <Link
                  to={`/${project.name.replace(' ', '-')}`}
                  aria-label={`See more about ${project.name}`}
                >
                  <img
                    src={project.imageUrl}
                    alt="Software Screenshot"
                    loading="lazy"
                  />
                </Link>
                <S.ProjectIntro>
                  <h3>{project.name}</h3>
                  <p>{project.intro}</p>
                  <Link
                    to={`/${project.name.replace(' ', '-')}`}
                    aria-label={`See more about ${project.name}`}
                  >
                    See more
                  </Link>
                </S.ProjectIntro>
              </S.Project>
            </React.Fragment>
          ))}
        </S.ProjectsContent>
      </S.ProjectsContainer>
    </S.ProjectsSection>
  )
}
