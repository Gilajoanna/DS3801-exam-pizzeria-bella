import { Container } from '@mui/material'
import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import OrderOnline from '../components/OrderOnline';
import '../style2.css';

function Home(props) {
    return(
        <Container maxWidth="xl">
            <Navbar />
            <HeroImg img={ props.img } />
            <OrderOnline />
                       
        </Container>
    )
}

export default Home;