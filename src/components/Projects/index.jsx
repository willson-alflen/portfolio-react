import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProjectsContext } from '../../contexts/ProjectsContext'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import * as S from './styles'

const MotionProject = S.Project

export default function Projects() {
  const { projects } = useContext(ProjectsContext)
  const [ref, inView] = useInView({
    triggerOnce: false,
  })

  return (
    <S.ProjectsSection id="projects" tabIndex={0}>
      <S.ProjectsContainer>
        <S.ProjectsHeading>
          <h2>Projects</h2>
          <p>
            Here are some of the projects I&apos;ve worked on recently. All my
            projects include links to the code and live version. Click on the
            images or the button to see more details.
          </p>
        </S.ProjectsHeading>

        <S.ProjectsContent ref={ref}>
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <MotionProject as={motion.div}>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
                  transition={{ delay: index * 0.5, duration: 0.5 }}
                >
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
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                  transition={{ delay: index * 0.5 + 0.1, duration: 0.5 }}
                >
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
                </motion.div>
              </MotionProject>
            </React.Fragment>
          ))}
        </S.ProjectsContent>
      </S.ProjectsContainer>
    </S.ProjectsSection>
  )
}

/**
 <S.ProjectsContent>
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <MotionProject
                as={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} // added for debugging
                whileHover={{ scale: 1.1 }} // added for debugging
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
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
              </MotionProject>
            </React.Fragment>
          ))}
        </S.ProjectsContent>
      </S.ProjectsContainer>
    </S.ProjectsSection>
 */

/**
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
 */
