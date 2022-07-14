
import { Typography } from '@mui/material';
import React from 'react';
import {BsArrowRightCircle} from 'react-icons/bs'

 function NewLetter() {
    return ( <div className='container my-4'>
        <div className='py-5 bg-white text-center justify-content-center align-items-center' >
            <Typography variant='h4' component="div">Join Our News Letters</Typography>
            <Typography variant='span' component="div" className='py-2 text-14'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster </Typography>
            <div className="input-group mb-3 w-50 container py-4">
                <input type="text" className="form-control" placeholder="Insert your mail here" aria-label="Insert your mail here" aria-describedby="basic-addon2"/>
                <span className="input-group-text bg-orange text-white p-1" id="basic-addon2">
                    <BsArrowRightCircle/>
                </span>
            </div>
        </div>
    </div> );
 }
 
 export default NewLetter;