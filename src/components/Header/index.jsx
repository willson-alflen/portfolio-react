import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfilePicture from '../../assets/images/profile-picture.png'
import { ThemeContext } from '../../contexts/ThemeContext'
import { MdMenu, MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import * as S from './styles'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768)
  const menuRef = useRef(null)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

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
        <S.Hamburger
          tabIndex={0}
          role="button"
          aria-label="Open/Close menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(!isMenuOpen)}
        >
          <MdMenu className="hamburger-icon" />
        </S.Hamburger>
        <S.NavLinks $isOpen={isMenuOpen}>
          {isHomePage ? (
            <>
              <a
                href="#hero"
                className="nav-link"
                aria-label="Home"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#projects"
                className="nav-link"
                aria-label="Projects"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a
                href="#about"
                className="nav-link"
                aria-label="About"
                onClick={closeMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="nav-link"
                aria-label="Contact"
                onClick={closeMenu}
              >
                Contact
              </a>
              <S.StyledNavLink
                to="/resume"
                aria-label="Resume"
                onClick={closeMenu}
              >
                Resume
              </S.StyledNavLink>
            </>
          ) : (
            <>
              <Link
                to={{ pathname: '/', hash: '#hero' }}
                className="nav-link"
                aria-label="Home"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to={{ pathname: '/', hash: '#projects' }}
                className="nav-link"
                aria-label="Projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                to={{ pathname: '/', hash: '#about' }}
                className="nav-link"
                aria-label="About"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="nav-link"
                aria-label="Contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <S.StyledNavLink
                to="/resume"
                aria-label="Resume"
                onClick={closeMenu}
              >
                Resume
              </S.StyledNavLink>
            </>
          )}
        </S.NavLinks>
        <S.ToggleTheme
          tabIndex={0}
          role="button"
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
        >
          {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </S.ToggleTheme>
      </S.HeaderNav>
    </S.Header>
  )
}
