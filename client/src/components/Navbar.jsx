import {
  Box,
  styled,
  Toolbar,
  Typography,
  Link,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import CircleIcon from '@mui/icons-material/Circle'
import { useState } from 'react'

function Navbar({ selected, setSelected }) {
  const isMediumScreen = useMediaQuery('(min-width:1100px)')
  const [open, setOpen] = useState(false)

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    height: '100vh',
  })
  const MenuLink = styled(Link)(({}) => ({
    color: '#333A56',
    fontWeight: '500',
    textDecoration: 'none',
    '&:hover': { borderBottom: `3px solid #333A56` },
  }))

  return (
    <Box>
      {isMediumScreen ? (
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
      ) : (
        <Box
          bgcolor={'#F7F5e6'}
          width={'100vw'}
          height={'80px'}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          position={'relative'}
        >
          <Box>
            <Typography
              variant="h2"
              color={'#333A56'}
              fontWeight={700}
              mt={'20px'}
            >
              FIND JOBS{' '}
            </Typography>
          </Box>
          <Box mt={'20px'} mr={'20px'}>
            <MenuIcon
              onClick={() => setOpen(true)}
              sx={{
                height: '40px',
                width: '40px',
                color: '#333A56',
              }}
            />
            <Menu
              id="positioned-menu"
              aria-labelledby="positioned-button"
              open={open}
              onClose={(e) => setOpen(false)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem>
                <MenuLink
                  variant="h5"
                  href="#"
                  onClick={() => setSelected('MOH')}
                >
                  Ministry Of Health and Wellness{' '}
                  {selected === 'MOH' ? (
                    <CircleIcon color="#333A56" />
                  ) : undefined}{' '}
                </MenuLink>{' '}
              </MenuItem>
              <MenuItem>
                <MenuLink
                  variant="h5"
                  href="#"
                  onClick={() => setSelected('MTM')}
                >
                  Mininstry of Science and Energy{' '}
                  {selected === 'MTM' ? (
                    <CircleIcon color="#333A56" />
                  ) : undefined}{' '}
                </MenuLink>
              </MenuItem>
              <MenuItem>
                {' '}
                <MenuLink
                  variant="h5"
                  href="#"
                  onClick={() => setSelected('MIIC')}
                >
                  Ministry of Industry and Commerce
                  {selected === 'MIIC' ? (
                    <CircleIcon color="#333A56" />
                  ) : undefined}{' '}
                </MenuLink>
              </MenuItem>
              <MenuItem>
                {' '}
                <MenuLink variant="h5" onClick={() => setSelected('MOA')}>
                  Ministry of Agriculture and Fisheries
                  {selected === 'MOA' ? (
                    <CircleIcon color="#333A56" />
                  ) : undefined}{' '}
                </MenuLink>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Navbar
