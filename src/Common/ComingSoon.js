import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


function ComingSoon() {
    return ( <Grid  container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '50vh' }}
        direction="row"
        className='bg-light'
        ><h3 className='text-mute text-bold'>ComingSoon...</h3></Grid>
        
    );
}

export default ComingSoon;