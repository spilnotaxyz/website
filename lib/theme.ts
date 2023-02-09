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
        'linear-gradient(180deg, rgba(154, 154, 154, 0) -5.42%%, #68A1F6 40%, rgba(154, 154, 154, 0) 80%, #68A1F6 100%)'
    },
    secondary: {
      main: '#D4D4D4'
    }
  }
})
