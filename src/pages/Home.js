import { Container } from '@mui/material'
import React from 'react';

import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import OrderOnline from '../components/OrderOnline';

function Home(props) {
    return(
        <main className="home">
        
            <Navbar />
            <HeroImg img={ props.img } />
            <OrderOnline />        
            
        </main>
        
    )
}

export default Home;