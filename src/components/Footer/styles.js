import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 600px;
  }
`

export const FooterText = styled.div``

export const Heading = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;

  &.developer {
    color: rgb(255, 165, 0);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`

export const Quotation = styled.blockquote`
  font-size: 1.25rem;
  line-height: 1.5;
  font-style: italic;

  cite {
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.25;

    cite {
      display: block;
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`

export const FooterSocial = styled.div`
  width: fit-content;
  justify-self: end;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SocialLink = styled.a`
  display: inline-block;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  img {
    width: 2rem;
    transition: filter 0.3s ease, transform 0.3s ease;

    &:hover {
      filter: ${({ theme }) =>
        theme === 'light' ? 'invert(0.8)' : 'invert(0.2)'};

      transform: scale(1.1);
    }
  }

  @media (max-width: 425px) {
    margin-right: 1.5rem;

    img {
      width: 1.25rem;
    }
  }
`
