import styled from 'styled-components'

export const Impact = styled.section`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 6rem 3rem;
`

export const ImpactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`

export const ImpactHeading = styled.div`
  text-align: center;
  margin-bottom: 3rem;

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
      background: ${(props) => props.theme.backgroundColorAlt};
      border-radius: 6px;
      margin: 1rem auto;
    }
  }

  p {
    font-size: 1.25rem;
    font-weight: 500;
    width: 60%;
    margin: 0 auto;
    color: ${(props) => props.theme.textColorAlt};
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

export const ImpactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1400px) {
    gap: 1.25rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`

export const ImpactStatement = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColorAlt2};
  opacity: 0.9;
  letter-spacing: 0.08rem;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
`

export const ImpactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.textColorAlt};
  border-radius: 8px;
  padding: 2rem 1rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease, border 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-3px) scale(1.02);
    filter: brightness(1.1);
    border: 2px solid ${(props) => props.theme.textColorAlt};
    box-shadow: 0 0 0 2px ${(props) => props.theme.textColorAlt}, 0 12px 24px 0 rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 400px) {
    padding: 1.5rem 1rem;
  }
`

export const ImpactValue = styled.div`
  font-size: clamp(2rem, 3vw, 2.75rem);
  font-weight: 900;
  color: ${(props) => props.theme.textColorAlt};
  line-height: 1.1;
  margin-bottom: 0.25rem;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`

export const ImpactLabel = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColorAlt};
  text-align: center;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.05rem;

  @media (max-width: 400px) {
    font-size: 0.95rem;
    letter-spacing: 0.04rem;
  }
`

export const ImpactIcon = styled.div`
  line-height: 0;
  margin-bottom: 0.5rem;

  & > * {
    font-size: 2rem;
    color: ${(props) => props.theme.textColorAlt};
  }
`


export const ImpactDesc = styled.p`
  font-size: 0.925rem;
  color: ${(props) => props.theme.textColorAlt};
  text-align: center;
  max-width: 18rem;
  opacity: 0.85;
  line-height: 1.5;

  @media (max-width: 400px) {
    font-size: 0.9rem;
    max-width: 22rem;
  }
`
