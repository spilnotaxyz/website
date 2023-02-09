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
        'linear-gradient(180deg, #000000 15.44%, #68A1F6 40.15%, #000000 71.45%, #000000 87.92%, #68A1F6 100%)'
    },
    secondary: {
      main: '#D4D4D4'
    }
  }
})
