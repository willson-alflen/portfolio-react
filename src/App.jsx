import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from '../GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/Theme'
import { ThemeContext } from './contexts/ThemeContext'
import GlobalLayout from './components/GlobalLayout'
import Home from './pages/Home'

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GlobalLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
