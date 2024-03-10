import { Box, styled, Toolbar, Typography } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  height: '100vh',
})

function Navbar({ selected, setSelected }) {
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
          FIND PUBLIC SERVICE JOBS{' '}
        </Typography>
        <Typography
          variant="h4"
          color={'#333A56'}
          width={'600px'}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '&:hover': {
              fontWeight: 500,
            },
          }}
          onClick={() => setSelected('MOH')}
        >
          Ministry Of Health and Wellness{' '}
          {selected === 'MOH' ? <CircleIcon color="#333A56" /> : undefined}
        </Typography>
        <Typography
          variant="h4"
          width={'600px'}
          color={'#333A56'}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '&:hover': {
              fontWeight: 500,
            },
          }}
          onClick={() => setSelected('MTM')}
        >
          Mininstry of Science and Energy{' '}
          {selected === 'MTM' ? <CircleIcon color="#333A56" /> : undefined}
        </Typography>

        <Typography
          variant="h4"
          color={'#333A56'}
          width={'600px'}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '&:hover': {
              fontWeight: 500,
            },
          }}
          onClick={() => setSelected('MIIC')}
        >
          Ministry of Industry and Commerce
          {selected === 'MIIC' ? <CircleIcon color="#333A56" /> : undefined}
        </Typography>

        <Typography
          variant="h4"
          color={'#333A56'}
          width={'600px'}
          sx={{
            display: { xs: 'none', sm: 'block' },
            '&:hover': {
              fontWeight: 500,
            },
          }}
          onClick={() => setSelected('MOA')}
        >
          Ministry of Agriculture and Fisheries
          {selected === 'MOA' ? <CircleIcon color="#333A56" /> : undefined}
        </Typography>
      </StyledToolbar>
    </Box>
  )
}

export default Navbar
