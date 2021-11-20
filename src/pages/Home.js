import { Container } from '@mui/material'
import React from 'react';


import Navbar from '../components/navbar/Navbar';
import HeroImg from '../components/HeroImg';
import OrderOnline from '../components/OrderOnline';
import '../style2.css';


function Home(props) {
    return(
       <div className='container'>
            <Navbar />
            <HeroImg img={ props.img } />
            <OrderOnline/>
        
        </div>      
    );
}

export default Home;