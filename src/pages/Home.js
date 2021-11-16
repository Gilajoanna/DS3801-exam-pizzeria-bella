import { Container } from '@mui/material'
import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';

function Home() {
    return(
        <Container maxWidth="md">
            <Navbar />
            <HeroImg />
        </Container>
    )
}

export default Home;