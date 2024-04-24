import { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ProfilePicture from '../../assets/images/profile-picture.png'
import { useTheme } from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeContext'
import { MdMenu, MdOutlineLightMode } from 'react-icons/md'
import * as S from './styles'

export default function Header() {
  const theme = useTheme()
  const { toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)
  const menuRef = useRef(null)
  const activeStyles = {
    color: theme.mainColor,
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const updateWindowWidth = () => {
      setIsLargeScreen(window.innerWidth > 768)
    }

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', updateWindowWidth)
    document.addEventListener('mousedown', handleClickOutside)

    updateWindowWidth()

    return () => {
      window.removeEventListener('resize', updateWindowWidth)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isLargeScreen) {
      setIsMenuOpen(false)
    }
  }, [isLargeScreen])

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

      <S.HeaderNav ref={menuRef}>
        <S.Hamburger>
          <MdMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-icon"
          />
        </S.Hamburger>
        <S.NavLinks $isOpen={isMenuOpen}>
          <NavLink
            to="/"
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </S.NavLinks>
        <S.ToggleTheme>
          <MdOutlineLightMode onClick={toggleTheme} />
        </S.ToggleTheme>
      </S.HeaderNav>
    </S.Header>
  )
}
