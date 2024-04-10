import { Stack } from '@mui/material'
import Navbar from '../components/Navbar'
import JobList from '../components/JobList'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const mtmPosts = useSelector((state) => state.global.mtm)
  const mohPosts = useSelector((state) => state.global.moh)
  const miicPosts = useSelector((state) => state.global.miic)
  const moaPosts = useSelector((state) => state.global.moa)

  const [selected, setSelected] = useState('MTM')

  const [posts, setPosts] = useState(mtmPosts)

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <Stack>
      <Navbar selected={selected} setSelected={setSelected} />
      <JobList selected={selected} posts={posts} />
    </Stack>
  )
}

export default HomePage
