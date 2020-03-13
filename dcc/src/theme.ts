export const defaultTheme = {
  palette: {
    secondary: {
      // red color
      main: 'rgb(185, 31, 31)',
      dark: 'rgba(185, 31, 31, 0.7)',
      light: 'rgb(185, 31, 31, 0.3)'
    },
    primary: {
      main: '#ffffff',
      dark: 'rgba(255, 255, 255, 0.7)',
      light: 'rgba(255, 255, 255, 0.3)'
    },
  },
  fonts: {
    primary: {
      serif: 'Nunito',
      sansSerif: 'Nunito'
    },
    secondary: {
      serif: 'Nunito'
    }
  },
  typography: {
    // Use the system font.
    fontFamily:
      'Nunito,-apple-system,system-ui,BlinkMacSystemFont,' +
      '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
  },
  overrides: {

  } as any
}

export type ThemeType = typeof defaultTheme
