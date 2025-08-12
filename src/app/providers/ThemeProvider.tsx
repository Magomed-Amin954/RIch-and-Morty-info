import { ThemeProvider, createGlobalStyle } from 'styled-components'
import type { ReactNode } from 'react'
import { theme } from '@/shared/styles/theme'

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { font-size: ${({ theme }) => theme.typography.baseSize}; }
  body {
    margin: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: inherit; text-decoration: none; }
  img { display: block; max-width: 100%; }
  input, button { font: inherit; }
`

export const AppThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
