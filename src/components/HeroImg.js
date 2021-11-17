import { Container, Grid } from '@mui/material';
import React from 'react';

function HeroImg(props) {
    return(
        <img className="home-image" src={ props.img } alt='home_image' />

    )
}

export default HeroImg;