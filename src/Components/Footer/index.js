 import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
 

function Footer() {
    return ( 
        <Paper >
            <Grid container direction="row" justifyContent="center"  alignItems="flex-start" py={5}>
                <Grid item md={4} xs={12} container direction="row" justifyContent="center"  alignItems="center">
                    <Paper elevation={1} className="rounded-3 bg-black" sx={{width:"200px", height:'200px'}}></Paper>
                </Grid>
                <Grid item md={4} xs={12}>
                   <Typography className="logoText" variant='p' component="div">Dealerz.</Typography>
                   <Typography className="text-16 pt-3" variant='p' component="div">Privacy Policy</Typography>
                   <Typography className="text-16 pt-1 pb-4"  variant='p' component="div">Terms and Condition</Typography>
                   <Typography className="text-16 align-text-bottom" variant='p' component="div">@2020 TanahAir Studio. All rights reserved.</Typography>
                
                </Grid>
                <Grid item md={4} xs={12} className="d-flex">
                <div  className="rounded-circle bg-orange  text-center text-white mx-1" style={{width:'30px', height:'30px'}}>ab</div>
                <div  className="rounded-circle bg-orange  text-center text-white mx-1" style={{width:'30px', height:'30px'}}>ab</div>
                <div  className="rounded-circle bg-orange  text-center text-white mx-1" style={{width:'30px', height:'30px'}}>ab</div>
                <div  className="rounded-circle bg-orange  text-center text-white mx-1" style={{width:'30px', height:'30px'}}>ab</div>
                </Grid>
            </Grid>
        </Paper>
        
     );
}

export default Footer;