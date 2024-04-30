import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import PuffLoader from 'react-spinners/PuffLoader'
import * as S from './styles'

export default function Project() {
  const { projectName } = useParams()
  const { projects } = useContext(ProjectsContext)
  const currentProject = projects.find(
    (project) => project.name.replace(' ', '-') === projectName
  )

  if (!currentProject) {
    return (
      <S.ProjectWrapper>
        <S.ProjectContainer>
          <PuffLoader color="rgb(0, 98, 185)" loading={true} size={150} />
        </S.ProjectContainer>
      </S.ProjectWrapper>
    )
  }

  return (
    <S.ProjectWrapper>
      <S.ProjectHero>
        <S.ProjectContainer>
          <S.ProjectHeading>
            {currentProject.name.toUpperCase()}
          </S.ProjectHeading>
          <S.ProjectDescription>
            {currentProject.description}
          </S.ProjectDescription>
          <S.HeroLink>
            <S.ProjectLink
              to={currentProject.projectLinks.liveLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live Link to ${currentProject.name}`}
            >
              Live Link
            </S.ProjectLink>
          </S.HeroLink>
        </S.ProjectContainer>
      </S.ProjectHero>

      <S.ProjectContainer>
        <S.ProjectDetails>
          <S.ProjectScreenshot>
            <img
              src={currentProject.imageUrl}
              alt={`${currentProject.name} screenshot`}
            />
          </S.ProjectScreenshot>
          <S.ProjectOverview>
            <S.ProjectSubHeading>Project Overview</S.ProjectSubHeading>
            {currentProject.features.map((feature, index) => (
              <S.ProjectFeature key={index}>
                <h3>{feature.featureName}</h3>
                <p>{feature.featureDesc}</p>
              </S.ProjectFeature>
            ))}

            <S.ProjectTechStack>
              <h3>Tools Used</h3>
              <ul>
                {currentProject.techStacks.map((stack) => (
                  <li key={stack}>{stack}</li>
                ))}
              </ul>
            </S.ProjectTechStack>

            <S.OverviewLinks>
              <h3>See Live</h3>
              <div>
                <S.ProjectLink
                  to={currentProject.projectLinks.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Live Link to ${currentProject.name}`}
                  className="overview-live-link"
                >
                  Live Link
                </S.ProjectLink>
                <S.ProjectLink
                  to={currentProject.projectLinks.codeLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Code Link to ${currentProject.name}`}
                  className="overview-code-link"
                >
                  Code Link
                </S.ProjectLink>
              </div>
            </S.OverviewLinks>
          </S.ProjectOverview>
        </S.ProjectDetails>
      </S.ProjectContainer>
    </S.ProjectWrapper>
  )
}
