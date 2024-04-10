import { Box, useMediaQuery, Typography } from '@mui/material'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import JobCard2 from './JobCard2'
import JobCard1 from './JobCard1'

// eslint-disable-next-line react/prop-types
const JobList = ({ selected, posts }) => {
  const isMediumScreen = useMediaQuery('(min-width:1100px)')
  const isMtmLoading = useSelector((state) => state.global.isMtmLoading)
  const [doneLoading, setDoneLoading] = useState(false)

  const navigate = useNavigate()

  const handleDoneLoading = () => {
    navigate(0)
    setDoneLoading(true)
  }

  if (!posts) return null

  return (
    <Box display={'flex'} justifyContent={isMediumScreen ? 'right' : 'center'}>
      <Box
        display="grid"
        gap="30px"
        width={isMediumScreen ? '50vw ' : '100vw'}
        minHeight="100vh"
        pt={'40px'}
        bgcolor="#333A56"
        justifyItems={'center'}
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
      >
        {isMtmLoading && (
          <Box alignSelf={'center'}>
            {' '}
            <Typography vairant="h1" color={'white'} fontSize={'32px'}>
              Posts are loading...
            </Typography>
          </Box>
        )}
        {!isMtmLoading && !doneLoading && handleDoneLoading()}
        {selected === 'MTM' &&
          posts &&
          // eslint-disable-next-line react/prop-types
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}

        {selected === 'MIIC' &&
          posts &&
          // eslint-disable-next-line react/prop-types
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}
        {selected === 'MOH' &&
          posts &&
          // eslint-disable-next-line react/prop-types
          posts.map(({ title, date, salary, purpose, url }) => (
            <JobCard1
              key={`${title}+${url}`}
              title={title}
              date={date}
              salary={salary}
              purpose={purpose}
              url={url}
            />
          ))}
        {selected === 'MOA' &&
          posts &&
          // eslint-disable-next-line react/prop-types
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}
      </Box>
    </Box>
  )
}

export default JobList
