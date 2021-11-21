import React, { useState, useEffect, useNavigate, useHistory} from 'react';
import { Link } from 'react-router-dom';
import { Container, Fab, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';

import PizzaCard from './PizzaCard';
import Navbar from './navbar/Navbar';



function PizzaList({ pizzaList, addPizzaToCart}) {

    return (
    <>    
    <Container className="pizzaMenu-container" maxWidth="xl">
        <Navbar/>
        <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}>
            <h1>PIZZA</h1>
        </Typography>
            <Grid container spacing={3}>
                {pizzaList.map((pizza, index) => {
                    return <Grid item xs={12} lg={6} key={index}><PizzaCard pizza={pizza} /></Grid>
                })}
            </Grid>
    </Container>  
    </>
    );
    
}

export default PizzaList;