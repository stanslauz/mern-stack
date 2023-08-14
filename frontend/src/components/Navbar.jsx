import React, { useState } from 'react';

import {LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined, Logout } from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import {useDispatch} from 'react-redux';
import {setMode} from 'state';
import profileImage from 'assets/profile.jpeg';
import { AppBar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, useTheme, Box, Typography} from '@mui/material';
function Navbar(props) {
    const dispatch = useDispatch();
    const theme =   useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = (event) => setAnchorEl(null);
  return <AppBar sx={{
    position: "static",
    background: "none",
    boxShadow: "none"
  }}>
    <Toolbar sx={{justifyContent: "space-between"}}>
        {/* left side */}
        <FlexBetween>
            <IconButton onClick={()=>{props.setIsSidebarOpen(!props.isSidebarOpen);}}>
                <MenuIcon/>
            </IconButton>
            <FlexBetween backgroundColor ={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem">
                <InputBase placeholder='search...'/>
                <IconButton>
                    <Search/>
                </IconButton>
            </FlexBetween>
        </FlexBetween>


        {/* right side */}

        <FlexBetween gap="1.5rem">
            <IconButton onClick={()=> dispatch(setMode())}>
               {
                theme.palette.mode === "light" ? (<DarkModeOutlined sx={{fontsize: "25px"}}/>)
                 : (<LightModeOutlined sx={{fontsize: "25px"}}/>) 
               }
            </IconButton>
            <IconButton>
                <SettingsOutlined sx={{fontsize: "25px"}}/>
            </IconButton>
            <FlexBetween>
                <Button onClick={handleClick} 
                sx={{display: "flex",
                 justifyContent: "space-between", 
                 alignItems: "center",
                  textTransform: "none", 
                  gap: "1rem"}}>

                    <Box 
                component="img" 
                alt="profile"
                src={profileImage}
                height="32px" width="32px" 
                borderRadius="50%"
                sx={{objectFit:"cover"}}/>
                 <Box textAlign="left">
                    <Typography fontWeight="bold" fontSize="0.85rem" sx={{color: theme.palette.secondary[100]}}>
                        {props.user.name}
                    </Typography>
                    <Typography fontWeight="bold" fontSize="0.75rem" sx={{color: theme.palette.secondary[200]}}>
                        {props.user.occupation}
                    </Typography>
                    </Box>
                    <ArrowDropDownOutlined sx={{color: theme.palette.secondary[300], fontSize: '25px'}}/>
                    
                  </Button>
                  <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                    <FlexBetween onClick={handleClose} gap="1rem" ml={2}>
                    <Logout/>
                    <MenuItem sx={{color: theme.palette.secondary[100], fontWeight: "400"}}>Log Out</MenuItem>
                    </FlexBetween>
                   
                  </Menu>
            </FlexBetween>
        </FlexBetween>
    </Toolbar>
  </AppBar>
}

export default Navbar