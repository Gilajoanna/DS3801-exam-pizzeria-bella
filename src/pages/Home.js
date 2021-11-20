import { Container } from '@mui/material'
import React from 'react';


import Navbar from '../components/navbar/Navbar';
import HeroImg from '../components/HeroImg';
import OrderOnline from '../components/OrderOnline';
import PizzaCard from '../components/PizzaCard';
import '../style2.css';
import PizzaList from '../components/PizzaList';
import PastaCard from '../components/PastaCard';
import PastaList from '../components/PastaList';

function Home(props) {
    return(
       <div className='container'>
            <Navbar />
            <HeroImg img={ props.img } />
            <OrderOnline/>
            <PizzaList/>    
       </div>  
    );
}

export default Home;