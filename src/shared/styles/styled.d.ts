import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryHover: string
      error: string
      success: string
      warning: string
      text: string
      textSecondary: string
      background: string
      surface: string
      border: string
      muted: string
    }
    radii: {
      sm: string
      md: string
      lg: string
      round: string
    }
    shadow: {
      sm: string
      md: string
    }
    layout: {
      maxContentWidth: string
      pagePadding: string
    }
    typography: {
      fontFamily: string
      baseSize: string
    }
    breakpoints: {
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}


