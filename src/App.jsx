import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import GlobalStyles from '../GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { darkTheme, lightTheme } from '@/components/Theme'
import { ThemeContext } from '@/contexts/ThemeContext'
import { ProjectsProvider } from '@/contexts/ProjectsContext'
import ScrollToTopAndRoutes from '@/components/ScrollToTopAndRoutes'
import { THEME_TYPES } from '@/constants/theme'
import 'focus-visible'

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || THEME_TYPES.DARK
  )

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === THEME_TYPES.LIGHT ? THEME_TYPES.DARK : THEME_TYPES.LIGHT
    )
  }

  return (
    <HelmetProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider
          theme={theme === THEME_TYPES.LIGHT ? lightTheme : darkTheme}
        >
          <GlobalStyles />
          <ProjectsProvider>
            <ToastContainer />
            <BrowserRouter>
              <ScrollToTopAndRoutes />
            </BrowserRouter>
          </ProjectsProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </HelmetProvider>
  )
}

export default App
