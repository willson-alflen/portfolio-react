import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  font-weight: bold;
  padding: 1rem 2rem;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.mainColor};

  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
  }
`

export const Logo = styled.img`
  width: 99%;
`

export const HeaderBrandText = styled.span`
  &:hover {
    color: ${(props) => props.theme.mainColor};
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  a:hover {
    color: ${(props) => props.theme.mainColor};
  }
`

export const Hamburger = styled.div`
  display: none;
  line-height: 0;

  .hamburger-icon {
    font-size: 1.2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  .nav-link {
    cursor: pointer;
  }

  .nav-link.active {
    color: ${(props) => props.theme.mainColor};
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    gap: 0;

    ${(props) =>
      props.$isOpen &&
      `
        flex-direction: column;
        position: absolute;
        z-index: 10;
        top: 80px;
        right: 2rem;
        background-color: ${props.theme.accentColor};
        padding: 0.5rem 0;
        border-radius: 0  0 8px 8px;

        a {
          text-align: right;
          color: ${props.theme.textColorAlt};
          transition: color 0.3s ease;
          padding: 0.5rem 2rem;
          width: 100%;

          &:hover {
            color: ${props.theme.textColor};
            background-color: ${props.theme.backgroundColorOpacity};
          }
        }
      `}
  }

  @media (max-width: 375px) {
    top: 72px;
    font-size: 0.9rem;
  }
`

export const ToggleTheme = styled.div`
  cursor: pointer;
  line-height: 0;

  & > * {
    font-size: 1.2rem;
  }
`
