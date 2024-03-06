import { Box, Stack, useMediaQuery } from '@mui/material'
import Navbar from './components/Navbar'
import MohCard from './components/MohCard'
import {
  initializeMoh,
  initializeMtm,
  initializeMiic,
} from './redux/reducers/globalReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
function App() {
  const isNonMobile = useMediaQuery('(min-width:1200px)')
  const dispatch = useDispatch()

  const setIniitalState = async () => {
    dispatch(initializeMoh())
    dispatch(initializeMtm())
    dispatch(initializeMiic())
  }

  useEffect(() => {
    setIniitalState()
  }, [])

  return (
    <Stack>
      <Navbar />
      <Box display={'flex'} justifyContent={'right'}>
        <Box
          display="grid"
          gap="30px"
          width="50vw"
          pt={'40px'}
          bgcolor="#333A56"
          justifyItems={'center'}
          gridTemplateColumns="repeat(1, minmax(0, 1fr))"
        >
          <MohCard />
          <MohCard />
          <MohCard />
          <MohCard />
          <MohCard />
          <MohCard />
        </Box>
      </Box>
    </Stack>
  )
}

export default App
