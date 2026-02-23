import { useContext } from 'react'
import { useProject } from '@/hooks/useProject'
import PuffLoader from 'react-spinners/PuffLoader'
import { ProjectsContext } from '@/contexts/ProjectsContext'
import * as S from './styles'

export default function Project() {
  const { project: currentProject } = useProject()
  const { isLoading } = useContext(ProjectsContext)

  if (isLoading) {
    return (
      <S.ProjectWrapper>
        <S.ProjectContainer>
          <PuffLoader color="rgb(0, 98, 185)" loading={true} size={150} />
        </S.ProjectContainer>
      </S.ProjectWrapper>
    )
  }

  if (!currentProject) {
    return (
      <S.ProjectWrapper>
        <S.ProjectContainer>
          <S.ProjectHeading>Project not found</S.ProjectHeading>
          <S.ProjectDescription>
            The requested project could not be found. Please check the link or return to the homepage.
          </S.ProjectDescription>
          <S.HeroLink>
            <S.ProjectLink to="/" aria-label="Back to Home">
              Back to Home
            </S.ProjectLink>
          </S.HeroLink>
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
              rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  aria-label={`Live Link to ${currentProject.name}`}
                  className="overview-live-link"
                >
                  Live Link
                </S.ProjectLink>
                <S.ProjectLink
                  to={currentProject.projectLinks.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
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
