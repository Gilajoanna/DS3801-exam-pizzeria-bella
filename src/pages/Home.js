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
<<<<<<< HEAD
        
        </div>      
=======
        </div>        
>>>>>>> ad9c5a8f36c5a14d28cfe344acd57172eff0d722
    );
}

export default Home;