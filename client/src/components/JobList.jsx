import React from 'react'
import { Box, Stack, useMediaQuery } from '@mui/material'

import JobCard2 from './JobCard2'
import JobCard1 from './JobCard1'
import { useDispatch, useSelector } from 'react-redux'

const JobList = ({ selected, posts }) => {
  if (!posts) return null
  return (
    <Box display={'flex'} justifyContent={'right'}>
      <Box
        display="grid"
        gap="30px"
        width="50vw"
        minHeight="100vh"
        pt={'40px'}
        bgcolor="#333A56"
        justifyItems={'center'}
        gridTemplateColumns="repeat(1, minmax(0, 1fr))"
      >
        {selected === 'MTM' &&
          posts &&
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}

        {selected === 'MIIC' &&
          posts &&
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}
        {selected === 'MOH' &&
          posts &&
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
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}
      </Box>
    </Box>
  )
}

export default JobList
