import {
  initializeMoh,
  initializeMtm,
  initializeMiic,
  initializeMoa,
} from './redux/reducers/globalReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './views/HomePage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    setIniitalState()
  }, [])
  const setIniitalState = async () => {
    dispatch(initializeMoh())
    dispatch(initializeMtm())
    dispatch(initializeMiic())
    dispatch(initializeMoa())
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
