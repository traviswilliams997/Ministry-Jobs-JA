import { AppBar, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
})

function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ mr: '5vh', ml: '5vh', display: { xs: 'none', sm: 'block' } }}
        >
          Ministry of Health{' '}
        </Typography>
        <Typography
          variant="h6"
          sx={{ mr: '5vh', ml: '5vh', display: { xs: 'none', sm: 'block' } }}
        >
          Mininstry of Science and Technology
        </Typography>

        <Typography
          variant="h6"
          sx={{ mr: '5vh', ml: '5vh', display: { xs: 'none', sm: 'block' } }}
        >
          Ministry of Industry
        </Typography>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
