import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:'center',p:2,
      '& h4':{fontWeight:'bold',my:2,fontSize:'2rem'},
      '& p':{textAlign:'justify'},
      '@media (max-width:600px)':{
        mt:0,
        '& h4':{
          fontSize:'1.3rem'
        }
      }

      }}>
        <Typography variant='h4'>
          Welcome To My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit 
          amet consectetur adipisicing 
          elit. Ea quasi sequi laboriosam 
          ullam repudiandae molestiae suscipit 
          amet excepturi, rem repellat debitis incidunt
           ut aut minima modi voluptatum magnam,
            dignissimos eligendi!</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Cum provident tenetur natus quae, tempora quia eligendi iste
               numquam ipsam rem porro neque modi
               nulla consectetur quis consequuntur totam veritatis amet!</p>
      </Box>
    </Layout>
  );
}

export default About;
