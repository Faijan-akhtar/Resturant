import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import{MenuList} from '../Data/Data'

const Menu = () => {
  return (
   <Layout>
    <Box sx={{display:"flex", flexWrap:'wrap', justifyContent:'center'}}>
      {
        MenuList.map(menu=>(<Card sx={{maxWidth:'250px',display:'flex',m:4}}>
          <CardActionArea>
            <CardMedia  sx={{minHeight:'300px'}}
              component={'img'}
              src={menu.image}
              alt={menu.name}
              />
            <CardContent sx={{color:'red'}}>
              <Typography variant='h5' gutterBottom component={'div'}>
                  {menu.name}
              </Typography>
              <Typography variant='body2'>
                {menu.description}
              </Typography>
              <Typography variant='body2'>
                {menu.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>))
      }
    </Box>
   </Layout>
  );
}

export default Menu;
