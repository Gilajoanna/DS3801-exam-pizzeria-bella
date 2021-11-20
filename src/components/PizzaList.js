import { Container, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

import PizzaCard from './PizzaCard';
import Navbar from './navbar/Navbar';



function PizzaList({ pizzaList, addPizzaToCart}) {
    return (
    <>    

        <Navbar/>

        <Container maxwidth="md">
            <Typography>
                <h1>PIZZA</h1>
            </Typography>
            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }}
            className='pizzaGoToPsta' variant="contained" size="medium">PASTA
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToSideDishes' variant="contained" size="medium">SIDE DISHES
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToDrinks' variant="contained" size="medium">DRINKS
            </Button>
            <PizzaCard/>
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