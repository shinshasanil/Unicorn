import React  from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Container } from '@mui/system';


const HomeBanner = () => {
    return (
        <Box className='bg-white'>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={6}> </Grid>
                <Grid item md={6} py={10} sx={{height:{md:'500px', xs:'auto'}}} container justifyContent="center" alignItems="center" direction="column"> 
                    <Container>
                        <Typography className='text-64 text-start pb-3' variant='p' component='div'> Home Shopping, Your Choice!</Typography>
                        <Typography className='text-16 text-start' variant='p' component='div'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
                    </Container>

                </Grid>
            </Grid>
        </Box>
    );
  };
  
  export default HomeBanner;
