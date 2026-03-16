import styled, { css } from 'styled-components'
import CommonBG from '@/assets/svg/common-bg.svg'

export const Contact = styled.section`
  color: ${(props) => props.theme.textColorAlt};
  background: linear-gradient(
      to right,
      ${(props) => props.theme.mainColorOpacity},
      ${(props) => props.theme.mainColorOpacity}
    ),
    url(${CommonBG});
  background-position: center;
  padding: 6rem 3rem;
`

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const ContactHeading = styled.div`
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

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  max-width: 600px;
  margin: 0 auto;

  .visually-hidden {
    position: absolute !important;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  button {
    background: ${(props) => props.theme.mainColorAlt};
    color: ${(props) => props.theme.textColorAlt};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;

    &:focus {
      border: 2px solid red;
    }

    &:hover {
      background: ${(props) => props.theme.accentColor};
    }
  }

  @media (max-width: 968px) {
    gap: 1rem;
  }

  @media (max-width: 375px) {
    gap: 0.75rem;
  }
`

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.backgroundColorAlt2};
  outline: none;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  background: ${(props) => props.theme.backgroundColorAlt};
  color: ${(props) => props.theme.textColor};

  &:focus {
    border: 2px solid ${(props) => props.theme.accentColor};
  }

  ${(props) =>
    props.$invalid &&
    css`
      border: 1px solid red;
    `}
`

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.backgroundColorAlt2};
  outline: none;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  background: ${(props) => props.theme.backgroundColorAlt};
  color: ${(props) => props.theme.textColor};
  margin-bottom: 0;

  &:focus {
    border: 2px solid ${(props) => props.theme.accentColor};
  }

  ${(props) =>
    props.$invalid &&
    css`
      border: 1px solid red;
    `}
`
