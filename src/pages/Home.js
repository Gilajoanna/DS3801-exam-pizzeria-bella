import { Container } from '@mui/material'
import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';

function Home(props) {
    return(
        <Container maxWidth="xl">
            <Navbar />
            <HeroImg img={ props.img } />
        </Container>
    )
}

export default Home;