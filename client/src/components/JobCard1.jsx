import { Box, Typography, Link, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'

const JobCard2 = ({ title, purpose, salary, date, url }) => {
  const isMediumScreen = useMediaQuery('(min-width:1600px)')

  const StyledLink = styled(Link)(({}) => ({
    textDecoration: 'none',
  }))

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={isMediumScreen ? '250px' : '470px'}
      width={isMediumScreen ? '700px' : '300px'}
      bgcolor={'#52658F'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Typography variant="h4" color={'#E8E8E8'}>
        {truncateString(title, 40)}
      </Typography>
      <Typography variant="h6" color={'#E8E8E8'}>
        {salary}
      </Typography>
      <Typography fontSize={'14px'} color={'#E8E8E8'} pl={'5px'} pr={'5px'}>
        {truncateString(purpose, 300)}
      </Typography>
      <Typography variant="h6" color={'#E8E8E8'}>
        {date}
      </Typography>

      <StyledLink href={url}>
        {' '}
        <Typography variant="h6" color={'#E8E8E8'}>
          Go To Page{' '}
        </Typography>
      </StyledLink>
    </Box>
  )
}

export default JobCard2
