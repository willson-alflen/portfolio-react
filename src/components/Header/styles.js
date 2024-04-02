import styled from 'styled-components'

export const Header = styled.header`
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
`

export const Logo = styled.img`
  width: 99%;
`

export const HeaderBrandText = styled.span`
  &:hover {
    color: ${(props) => props.theme.mainColor};
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

export const ToggleTheme = styled.div`
  cursor: pointer;

  & > * {
    font-size: 1.2rem;
  }
`
