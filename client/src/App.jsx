import { Box, Stack, useMediaQuery } from '@mui/material'
import Navbar from './components/Navbar'
import JobList from './components/JobList'

import {
  initializeMoh,
  initializeMtm,
  initializeMiic,
  initializeMoa,
} from './redux/reducers/globalReducer'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const isNonMobile = useMediaQuery('(min-width:1000px)')
  const dispatch = useDispatch()

  const mtmPosts = useSelector((state) => state.global.mtm)
  const mohPosts = useSelector((state) => state.global.moh)
  const miicPosts = useSelector((state) => state.global.miic)
  const moaPosts = useSelector((state) => state.global.moa)

  const [selected, setSelected] = useState('MTM')

  const [posts, setPosts] = useState(mtmPosts)

  const setIniitalState = async () => {
    dispatch(initializeMoh())
    dispatch(initializeMtm())
    dispatch(initializeMiic())
    dispatch(initializeMoa())
  }

  useEffect(() => {
    setIniitalState()
  }, [])
  useEffect(() => {
    if (selected === 'MTM') {
      setPosts(mtmPosts)
    }
    if (selected === 'MOH') {
      setPosts(mohPosts)
    }
    if (selected === 'MIIC') {
      setPosts(miicPosts)
    }
    if (selected === 'MOA') {
      setPosts(moaPosts)
    }
  }, [selected])

  return (
    <Stack>
      <Navbar selected={selected} setSelected={setSelected} />
      <JobList selected={selected} posts={posts} />
    </Stack>
  )
}

export default App
