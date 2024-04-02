import { createTheme } from '@mui/material'
import { responsiveFontSizes } from '@mui/material/styles'
const unResponsiveTheme = createTheme({
  palette: {
    primary: {
      main: '#3AAFA9',
      light: '#FEFFFF',
      dark: '#17252A',
    },
    secondary: {
      main: '#2B7A78',
      light: '#DEF2F1',
    },
  },
})
export const theme = responsiveFontSizes(unResponsiveTheme)
