import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import{ Box, Typography } from '@mui/material'
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center',bgcolor:"#1A1A19",color:'white',p:2}}>
        <Box sx={{my:1,"& svg":{
            fontSize:"50px",
            cursor:'pointer',
            mr:1
        },
        '& svg:hover':{
            color:'goldenrod',
            transform:'translatex(5px)',
            transition:'all 400ms'
        }
        }}>
          < InstagramIcon/>
          <TwitterIcon/>
          <GitHubIcon/>
          < YouTubeIcon/>
        </Box>
        <Typography variant='h5' sx={{'@media(max-width:600px)'
        :{fontSize:"1rem"}}}>
            All right reserve &copy:techimfo
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
