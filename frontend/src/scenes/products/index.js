import React, {useState} from 'react';
import {Card, Box, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from '@mui/material';
import { useGetProductsQuery } from 'state/api';
import Header from 'components/Header';
import CircularProgress from '@mui/material/CircularProgress';
import { alignBox } from '@nivo/core';
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  return (<Card sx={{backgroundImage: "none", backgroundColor: theme.palette.background.alt, borderRadius: "0.55rem"}}>
    <CardContent>
      <Typography sx={{fontSize: 14}} color={theme.palette.secondary[700]} gutterBottom>{category}</Typography>
      <Typography variant="h5" component="div">{name}</Typography>
      <Typography sx={{mb: "1.5rem"}} color={theme.palette.secondary[400]}>Kes{Number(price).toFixed(2)}</Typography>
      <Rating value={rating} readOnly/>

      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="primary" onClick={()=>setIsExpanded(!isExpanded)}>
        See More
      </Button>
    </CardActions>
    <Collapse in={isExpanded} timeout="auto" unmountOnExit  sx={{color: theme.palette.neutral[300]}}>
      <CardContent>
        <Typography>Id: {_id}</Typography>
        <Typography>Supply Left: {supply}</Typography>
        <Typography>Yearly Sales this Year: {stat.yearlySalesTotal}</Typography>
        <Typography>Yearly Units Sold this Year: {stat.yearlyTotalSoldUnits}</Typography>
      </CardContent>
    </Collapse>
  </Card>)  
}


function Products() {
      const theme = useTheme();
    const { data, isLoading } = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="PRODUCTS" subtitle="A list of products"/>
        {!isLoading || data ? <Box  mt="20px"
         display="grid" 
         gridTemplateColumns="repeat(4, minmax(0, 1fr))"
         justifyContent="space-between"
         rowGap="20px"
         columnGap="1.33%"
         sx={{"& > div": {gridColumn: isNonMobile ? undefined : "span 4"} }}>

        {data?.map(({ _id,
                        name,
                        description,
                        price,
                        rating,
                        category,
                        supply,
                        stat})=>(<Product key={_id}
                          _id={_id}
                        name={name}
                        description={description}
                        price={price}
                        rating={rating}
                        category={category}
                        supply={supply}
                        stat={stat}
                        />))}
        </Box> :  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center"}}>
      <CircularProgress sx={{mt: "200px"}}  size="10rem"/>
    </Box>}
    </Box>
  )
}

export default Products