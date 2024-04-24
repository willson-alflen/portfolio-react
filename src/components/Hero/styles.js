import styled from 'styled-components'
import CommonBG from '../../assets/svg/common-bg.svg'

export const Hero = styled.section`
  color: ${(props) => props.theme.textColorAlt};
  background: linear-gradient(
      to right,
      ${(props) => props.theme.mainColorOpacity},
      ${(props) => props.theme.mainColorOpacity}
    ),
    url(${CommonBG});
  background-position: center;
  height: calc(100vh - 5rem);
  position: relative;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media (max-width: 375px) {
    padding: 0 1rem;
  }
`

export const HeroHeading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1.25;
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

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  width: 65%;
  max-width: 820px;
  margin: 3rem auto;
  text-align: center;

  strong {
    color: ${(props) => props.theme.accentColor};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 85%;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`

export const HeroCTA = styled.div`
  margin-top: 5rem;
  text-align: center;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 700;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  a {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;

    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    margin-top: 2rem;

    a {
      font-size: 0.9rem;
    }
  }
`

export const HeroSocials = styled.div`
  position: absolute;
  top: 50%;
  border: 2px solid rgb(255, 255, 255);
  transform: translateY(-50%);

  @media (max-width: 900px) {
    display: none;
  }
`

export const Social = styled.div`
  width: 4rem;

  &:not(:last-child) {
    border-bottom: 2px solid rgb(255, 255, 255);
  }

  a {
    width: 100%;
    display: block;
    padding: 1.2rem;
    transition: background 0.3s;

    &:hover {
      background: ${(props) => props.theme.mainColorOpacity};
    }

    img {
      width: 100%;
    }
  }
`

export const MouseAnimation = styled.div`
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 600px) {
    display: none;
  }
`

export const Mouse = styled.div`
  width: 2rem;
  height: 3rem;
  border: 2px solid #eee;
  border-radius: 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    background: #eee;
    border-radius: 50%;
    animation: wheel 1.5s infinite;
    -webkit-animation: wheel 1.5s infinite;
  }

  @keyframes wheel {
    to {
      opacity: 0;
      top: 27px;
    }
  }

  @-webkit-keyframes wheel {
    to {
      opacity: 0;
      top: 27px;
    }
  }

  @media (max-width: 768px) {
    width: 1.5rem;
    height: 2.5rem;

    &::before {
      width: 5px;
      height: 5px;
      top: 5px;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`
