import styled from 'styled-components'

export const About = styled.section`
  background: ${(props) => props.theme.backgroundColorAlt};
  padding: 6rem 3rem;
`

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const AboutHeading = styled.div`
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
    margin-bottom: 4rem;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 375px) {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const AboutText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props) => props.theme.textColorAlt2};
    width: 85%;
  }

  @media (max-width: 968px) {
    text-align: center;

    p {
      width: 85%;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.75rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 375px) {
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`

export const AboutSkills = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-transform: uppercase;
    text-align: right;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 1rem;

    li {
      font-weight: 500;
      color: ${(props) => props.theme.textColorAlt2};
      padding: 0.5rem 1rem;
      background: ${(props) => props.theme.backgroundColorAlt2};
      border-radius: 6px;
    }
  }

  @media (max-width: 968px) {
    text-align: center;

    h3 {
      text-align: center;
    }

    ul {
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.75rem;
    }

    ul {
      li {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 375px) {
    h3 {
      font-size: 1.5rem;
    }

    ul {
      li {
        font-size: 0.8rem;
      }
    }
  }
`
