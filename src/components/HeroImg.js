import { Container, Grid } from '@mui/material';
import React from 'react';

function HeroImg(props) {
    return(
        <section className='image-section'>
            <Container>
                <img sx={{ flex: 1 }} className="home-image" src={ props.img } alt='home_image' />
            </Container>
        </section>
    )
}

export default HeroImg;