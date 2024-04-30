import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '../GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { darkTheme, lightTheme } from './components/Theme'
import { ThemeContext } from './contexts/ThemeContext'
import { ProjectsProvider } from './contexts/ProjectsContext'
import ScrollToTopAndRoutes from './components/ScrollToTopAndRoutes'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <GlobalStyles />
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <ProjectsProvider>
          <ToastContainer />
          <BrowserRouter>
            <ScrollToTopAndRoutes />
          </BrowserRouter>
        </ProjectsProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
