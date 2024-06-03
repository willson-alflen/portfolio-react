import styled from 'styled-components'

export const ProjectsSection = styled.section`
  padding: 6rem 3rem;
  background-color: ${(props) => props.theme.textColorAlt};
`

export const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const ProjectsHeading = styled.div`
  text-align: center;
  margin-bottom: 6rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 2rem;

    &::after {
      content: '';
      display: block;
      width: 75px;
      height: 6px;
      background: ${(props) => props.theme.mainColor};
      border-radius: 6px;
      margin: 1rem auto;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    width: 65%;
    margin: 0 auto;
    color: ${(props) => props.theme.textColorAlt2};
  }

  @media (max-width: 968px) {
    p {
      width: 85%;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`

export const ProjectsContent = styled.div`
  gap: 3rem;
`

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: 3rem;
  margin-bottom: 6rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    margin-bottom: 3rem;
  }
`

export const ProjectIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColorAlt2};
    margin-bottom: 2rem;
  }

  a {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 1rem 3rem;
    color: ${(props) => props.theme.textColorAlt};
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 6px;
    transition: background-color 0.3s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
      width: 85%;
    }

    a {
      font-size: 0.9rem;
      padding: 0.75rem 2rem;
    }
  }
`
