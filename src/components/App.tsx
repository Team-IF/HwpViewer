import React from 'react'
import { GlobalStyles } from '../styles/index'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import { useDarkMode } from './hooks/useDarkMode'

const App: React.FC = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <>{children}</>
      </>
    </ThemeProvider>
  )
}

export default App
