import { Container, Grid } from '@mui/material';
import React from 'react';

function HeroImg(props) {
    return(
        <Container>
            <img sx={{ flex: 1 }} className="home-image" src={ props.img } alt='hero_img' />
        </Container>
    )
}

export default HeroImg;