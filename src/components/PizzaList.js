import { Container, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

import PizzaCard from './PizzaCard';
import Navbar from '../navbar/Navbar';



function PizzaList({ pizzaList, addPizzaToCart}) {

    const navigate = useNavigate();

    const goToPastaMenu = () => {
        navigate('/pastaList')
    }
    
    return (
        <>
        <main className = "pizzaMeny">
            <Navbar/>
            <Container>
                <Fab onClick = {() => goToPastaMenu() }></Fab>
                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }}
                className='pizzaGoToPsta' variant="contained" size="medium">PASTA
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                className='pizzaGoToSideDishes' variant="contained" size="medium">SIDE DISHES
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                className='pizzaGoToDrinks' variant="contained" size="medium">DRINKS
                </Button>

                <Container maxWidth="md"> 
                    <Grid container spacing={3}>
                        {pizzaList.map((pizza, index) => {
                            return <Grid item xs={12} lg={6} key={index}><PizzaCard pizza={pizza} /></Grid>
                        })}
                    </Grid>
                <PizzaCard/>
        
            </Container>
            </Container>
        </main>  
        </>
    );
    
}

export default PizzaList;