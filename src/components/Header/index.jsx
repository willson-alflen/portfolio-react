import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfilePicture from '../../assets/images/profile-picture.png'
import { ThemeContext } from '../../contexts/ThemeContext'
import { MdMenu, MdOutlineLightMode } from 'react-icons/md'
import * as S from './styles'

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext)
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
        <S.Hamburger>
          <MdMenu
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-icon"
          />
        </S.Hamburger>
        <S.NavLinks $isOpen={isMenuOpen}>
          {isHomePage ? (
            <>
              <a href="#hero" className="nav-link" onClick={closeMenu}>
                Home
              </a>
              <a href="#projects" className="nav-link" onClick={closeMenu}>
                Projects
              </a>
              <a href="#about" className="nav-link" onClick={closeMenu}>
                About
              </a>
              <a href="#contact" className="nav-link" onClick={closeMenu}>
                Contact
              </a>
              <Link to="/resume" className="nav-link" onClick={closeMenu}>
                Resume
              </Link>
            </>
          ) : (
            <>
              <Link
                to={{ pathname: '/', hash: '#hero' }}
                className="nav-link"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to={{ pathname: '/', hash: '#projects' }}
                className="nav-link"
                onClick={closeMenu}
              >
                Projects
              </Link>
              <Link
                to={{ pathname: '/', hash: '#about' }}
                className="nav-link"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="nav-link"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link to="/resume" className="nav-link" onClick={closeMenu}>
                Resume
              </Link>
            </>
          )}
        </S.NavLinks>
        <S.ToggleTheme>
          <MdOutlineLightMode onClick={toggleTheme} />
        </S.ToggleTheme>
      </S.HeaderNav>
    </S.Header>
  )
}
