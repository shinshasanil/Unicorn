import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Shoe from '../images/shoe.png'

function FeaturedCard() {
    return ( 
        <Box>
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2} my={1}> 
                <Grid item>
                   <Box sx={{width:'60px', height:'60px', backgroundColor:'#fff', borderRadius:'4px'}}>
                        <img src={Shoe}  alt="productImg" className='img-fluid' />
                    </Box>            
                </Grid>
                <Grid item>
                    <Typography variant='p' className='text-14 text-dark'>
                        Tropical Playsuit
                    </Typography>
                    <Typography variant='span' component="div" className='text-16 text-color-orange'>$99</Typography>
                </Grid>
            </Grid>
        </Box>
     );
}

export default FeaturedCard;