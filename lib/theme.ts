import { createTheme } from '@mui/system'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      dark: '#000000'
    },
    background: {
      default:
        'linear-gradient(180deg, #000000 15.44%, #303c5c 40.15%, #000000 71.45%, #000000 87.92%, #303c5c 100%)'
    },
    secondary: {
      main: '#D4D4D4'
    },
    gradients: {
      primary: 'linear-gradient(180deg, #000 20%, #303c5c 100%)',
      border:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, #FFFFFF 100%)'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 960,
      xl: 1440
    }
  }
})
