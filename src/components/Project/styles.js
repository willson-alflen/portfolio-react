import styled from 'styled-components'
import CommonBG from '../../assets/svg/common-bg.svg'
import { Link } from 'react-router-dom'

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProjectHero = styled.section`
  color: ${(props) => props.theme.textColorAlt};
  background: linear-gradient(
      to right,
      ${(props) => props.theme.mainColorOpacity},
      ${(props) => props.theme.mainColorOpacity}
    ),
    url(${CommonBG});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;

  @media (max-width: 425px) {
    height: 70vh;
  }
`

export const ProjectContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`

export const ProjectHeading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 425px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.75rem;
  }
`

export const ProjectDescription = styled.p`
  font-size: 1.25rem;
  width: 90%;
  max-width: 820px;
  margin: 3rem auto;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin: 2rem auto;
  }
`

export const HeroLink = styled.div`
  margin: 5rem auto 0 auto;
  width: fit-content;
`

export const OverviewLinks = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }
`

export const ProjectLink = styled(Link)`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  padding: 1rem 3rem;
  width: fit-content;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  cursor: pointer;

  &.overview-live-link {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.textColorAlt};
  }

  &.overview-code-link {
    border: 2px solid ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.mainColor};
    background-color: transparent;
  }

  &:hover {
    transform: translateY(-3px);
  }

  a {
    font-size: 1rem;
    letter-spacing: 2px;
  }

  &.overview-live-link,
  &.overview-code-link {
    margin-top: 0;
  }

  @media (max-width: 768px) {
    a {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    a {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 425px) {
    padding: 0.75rem 1.5rem;
  }
`

export const ProjectDetails = styled.section`
  margin: 0 auto;
  padding: 5rem 2rem;

  @media (max-width: 600px) {
    padding: 3rem 0;
  }
`

export const ProjectScreenshot = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  }
`

export const ProjectOverview = styled.div`
  padding: 3rem 0;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 425px) {
    padding: 2rem 0;
  }
`

export const ProjectSubHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 325px) {
    font-size: 1.25rem;
  }
`

export const ProjectFeature = styled.div`
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.textColorAlt2};
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 425px) {
    margin-bottom: 2rem;

    h3 {
      font-size: 1.1rem;
      margin: 1rem 0;
    }

    p {
      font-size: 0.9rem;
    }
  }
`

export const ProjectTechStack = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      font-weight: 500;
      color: ${(props) => props.theme.textColorAlt2};
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.backgroundColorAlt2};
      border-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.25rem;
    }

    ul {
      li {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 425px) {
    h3 {
      font-size: 1.1rem;
    }

    ul {
      li {
        font-size: 0.75rem;
        padding: 0.25rem 0.75rem;
      }
    }
  }
`
