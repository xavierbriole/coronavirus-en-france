import { useMemo, useEffect } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'

import ReactGA from 'react-ga'

import Root from './UI/Root'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  useEffect(() => {
    const isDevelopment = process.env.NODE_ENV === 'development'

    ReactGA.initialize('UA-127796557-2', {
      testMode: isDevelopment,
      debug: isDevelopment,
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Root />
      </Box>
    </ThemeProvider>
  )
}
