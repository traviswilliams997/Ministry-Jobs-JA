import { Box, AppBar, styled, Toolbar, Typography } from '@mui/material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  height: '100vh',
})

function Navbar() {
  return (
    <Box bgcolor={'#F7F5e6'} width={'50vw'} position={'fixed'}>
      <StyledToolbar>
        <Typography
          variant="h2"
          color={'#333A56'}
          fontWeight={700}
          mb={'50px'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          FIND GOVERNMENT JOBS{' '}
        </Typography>
        <Typography
          variant="h4"
          color={'#333A56'}
          width={'500px'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Ministry Of Health and Wellness{' '}
        </Typography>
        <Typography
          variant="h4"
          width={'500px'}
          color={'#333A56'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Mininstry of Science and Energy
        </Typography>

        <Typography
          variant="h4"
          color={'#333A56'}
          width={'500px'}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Ministry of Industry and Commerce
        </Typography>
      </StyledToolbar>
    </Box>
  )
}

export default Navbar
