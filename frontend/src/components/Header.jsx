import React from 'react'
import {Box, Typography, useTheme} from '@mui/material';

function Header(props) {
    const theme = useTheme();
  return (
    <Box ml="5px">
        <Typography variant="h2" color={theme.palette.secondary[100]} fontWeight="bold" sx={{mb: "5px"}}>{props.title}</Typography>
        <Typography variant="h5" color={theme.palette.secondary[300]}>{props.subtitle}</Typography>
    </Box>
  )
}

export default Header