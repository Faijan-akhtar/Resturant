import React, { useState } from 'react';
import {Box,AppBar, Typography, Toolbar, IconButton, Drawer, Divider} from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import{NavLink} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import '../../Style/HeaderStyle.css'

const Header = () => {
    const [MobileOpen,setMobileOpen]=useState(false)
    const HandalDrawer=()=>{
        setMobileOpen(!MobileOpen)
    }
    const drawer=(
        <Box onclick={HandalDrawer} sx={{textAlign:'center'}}>
          <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1, my:2
          ,m:3}}>
                <FastfoodIcon/>
                My resturent
            </Typography>
            <Divider/>
            
              <ul className='mobilenav'>
                <li><NavLink activeClassname="active" to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>

              </ul>
        
        </Box>
    )
  return (
    <>
    <Box>
        
        <AppBar component={"nav"}sx={{bgcolor:"black"}}>
        <Toolbar>
            
            <IconButton color='inherit' area-label="open drawer" edge="start"
            sx={{mr:2}}
            onClick={HandalDrawer}
            >
           <MenuIcon/>
            </IconButton>
            <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1}}>
                <FastfoodIcon/>
                My resturent
            </Typography>
            
            <Box sx={{display:{xs:'none',sm:'block'}}}>

              <ul className='navigation'>
                <li><NavLink activeClassname="active" to={'/home'}>Home</NavLink></li>
                <li><NavLink to={'/menu'}>Menu</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>

              </ul>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component='nav'>
           <Drawer variant='temporary' open={MobileOpen} 
           onClose={HandalDrawer} sx={{display:{xs:'block',"&.MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
           }}}}>
            {drawer}
           </Drawer>
            
        </Box>
        <Toolbar/>
    </Box>
    </>
  );
}

export default Header;
