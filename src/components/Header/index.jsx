import { Link, NavLink } from 'react-router-dom'
import ProfilePicture from '../../assets/images/profile-picture.png'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { MdOutlineLightMode } from 'react-icons/md'
import * as S from './styles'

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext)

  const activeStyles = {
    color: 'var(--main-color)', // This is the same as props.theme.mainColor
    fontWeight: 'bold',
  }

  return (
    <S.Header>
      <Link to="/">
        <S.HeaderBrand>
          <S.LogoContainer>
            <S.Logo src={ProfilePicture} alt="Willson Alflen" />
          </S.LogoContainer>
          <S.HeaderBrandText>Willson Alflen</S.HeaderBrandText>
        </S.HeaderBrand>
      </Link>

      <S.HeaderNav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Contact
        </NavLink>
        <S.ToggleTheme>
          <MdOutlineLightMode onClick={toggleTheme} />
        </S.ToggleTheme>
      </S.HeaderNav>
    </S.Header>
  )
}
