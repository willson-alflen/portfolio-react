import { createContext } from 'react'
import { THEME_TYPES } from '@/constants/theme'

export const ThemeContext = createContext({
  theme: THEME_TYPES.DARK,
  toggleTheme: () => {},
})
