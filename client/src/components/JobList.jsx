import React from 'react'
import { Box, Stack, useMediaQuery } from '@mui/material'

import JobCard2 from './JobCard2'
import JobCard1 from './JobCard1'
import { useDispatch, useSelector } from 'react-redux'

const JobList = ({ selected, posts }) => {
  return (
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
        {selected === 'MTM' &&
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}

        {selected === 'MIIC' &&
          posts.map(({ title, text, urls }) => (
            <JobCard2 key={text} title={title} text={text} url={urls} />
          ))}
        {selected === 'MOH' &&
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
      </Box>
    </Box>
  )
}

export default JobList
