import { Container, Box, Fab, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate, useHistory } from 'react-router-dom'
import { useState } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../style2.css';


import PizzaList from './PizzaList';
import PastaList from './PastaList';
import SideDishesList from './SideDishesList';
import App from '../App';


export default function OrderOnline ({PizzaList, PastaList, sideDishesList, BeveragesList}){

    //let history = useHistory()
    const navigate = useNavigate()

    const goToPizzaMenu = () =>{
        navigate("/pizzaList")
    }
    const goToPastaMenu = () =>{
        navigate("/pastaList")
    }
    const goToSideDishesMenu = () =>{
        navigate("/sideDishesList")
    }

    const goToBeveragesMenu = () =>{
        navigate("/beveragesList")
}

    return(
        <main className="orderOnline-container">
            <Container >
    
            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}>
                <h1 className="orderOnline-header">ORDER ONLINE</h1>
            </Typography>
    
            
            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button  onClick ={() => goToPizzaMenu()}
                    style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C'}} 
                    className='orderOnline-button' variant="outlined"  size="large">PIZZA  
                </Button>
            </Box>
            
            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button onClick ={() => goToPastaMenu()}
                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">PASTA
                </Button>
            </Box>
        

            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button onClick ={() => goToSideDishesMenu()}
                    style={{  backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">SIDE DISHES
                </Button>
            </Box>
                

            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    onClick ={() => goToBeveragesMenu()}
                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">BEVERAGES
                </Button>
            </Box>
            
            </Container>
       
        </main>
    )
}
