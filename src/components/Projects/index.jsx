import { Link } from 'react-router-dom'
import * as S from './styles'
import efoodFlavors from '../../assets/images/efood-flavors.png'
import miLanding from '../../assets/images/mi-landing.png'
import eplayGames from '../../assets/images/eplay-games.png'

export default function Projects() {
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
          <S.Project>
            <Link to="/efood-flavors" aria-label="See more about EFOOD Flavors">
              <img
                src={efoodFlavors}
                alt="Software Screenshot"
                loading="lazy"
              />
            </Link>
            <S.ProjectIntro>
              <h3>EFOOD Flavors</h3>
              <p>
                Embark on a culinary journey with Efood Flavors, where
                discovering new dining experiences is both exciting and
                user-friendly. Explore, order, and indulge in a seamless dining
                adventure with our beautifully crafted front-end application.
              </p>
              <Link
                to="/efood-flavors"
                aria-label="See more about EFOOD Flavors"
              >
                See more
              </Link>
            </S.ProjectIntro>
          </S.Project>

          <S.Project>
            <Link to="/eplay-games" aria-label="See more about EPLAY Games">
              <img src={eplayGames} alt="Software Screenshot" loading="lazy" />
            </Link>
            <S.ProjectIntro>
              <h3>EPLAY Games</h3>
              <p>
                Discover, explore, and elevate your gaming journey with EPLAY
                Games - where the world of video games comes to life. Immerse
                yourself in a responsive and feature-rich e-commerce platform
                tailored for gamers, by gamers.
              </p>
              <Link to="/eplay-games" aria-label="See more about EPLAY Games">
                See more
              </Link>
            </S.ProjectIntro>
          </S.Project>

          <S.Project>
            <Link
              to="/mi-landing"
              aria-label="See more about Mission Impossible Landing"
            >
              <img src={miLanding} alt="Software Screenshot" loading="lazy" />
            </Link>
            <S.ProjectIntro>
              <h3>MI Landing</h3>
              <p>
                A heart-pounding &quot;Mission Impossible&quot; themed landing
                page built with cutting-edge web technologies for a sleek,
                responsive, and high-performance experience. The page immerses
                visitors in a world of intrigue and suspense, drawing them
                deeper into the action with every scroll.
              </p>
              <Link
                to="/mi-landing"
                aria-label="See more about Mission Impossible Landing"
              >
                See more
              </Link>
            </S.ProjectIntro>
          </S.Project>
        </S.ProjectsContent>
      </S.ProjectsContainer>
    </S.ProjectsSection>
  )
}
