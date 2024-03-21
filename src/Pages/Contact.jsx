import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Bolt } from '@mui/icons-material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (

<Layout>
    <Box sx={{my:10,m:10,'& h4':{fontWeight:'bold',mb:2}}}>
      <Typography variant='h4'>
        Contact My Resturant
      </Typography>
        <p >Lorem, ipsum dolor sit amet consectetur
           adipisicing elit. Molestiae quas minus ipsam consequatur
            officia voluptatibus ad quaerat. Qui, iure fuga iste doloribus,
           deserunt magnam eum adipisci ipsa accusantium 
           corporis eveniet.</p>
           <Box sx={{m:3,width:'600px',ml:1,
           '@media(max-width:600px)':{
            width:'200px',marginLeft:'2px'
           }
         }}>
            <TableContainer component={Paper}>
              <Table aria-label='contact table'>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{bgcolor:'black',color:'white',}}align='center'>
                     Contact Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}}/> 1800-00-000(tollfree)
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    < MarkunreadIcon sx={{color:'skyblue', pt:1}}/> help@myrest.com
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>
                    < CallIcon sx={{color:'green', pt:1}}/> 123458092
                    </TableCell>
                  </TableRow>
                </TableBody>

              </Table>

            </TableContainer>
           </Box>
      
    </Box>
    </Layout>

  );
}

export default Contact;
