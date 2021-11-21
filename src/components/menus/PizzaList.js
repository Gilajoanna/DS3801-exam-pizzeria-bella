import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PizzaCard from './PizzaCard';
import Navbar from '../navbar/Navbar';
import HeroImg from '../HeroImg';
import Footer from '../footer/Footer';



function PizzaList({ pizzaList, props, addPizzaToCart}) {

    const navigate = useNavigate()

    const goToPastaMenu = () =>{
        navigate("/pastaList")
    }
    
    const goToSideDishesMenu = () =>{
        navigate("/sideDishesList")
    }

    const goToBeveragesMenu = () =>{
        navigate("/beveragesList")
    }

    return (
    <>    
    <Navbar/>
    <HeroImg/>
    <Container className="pizzaMenu-container" maxWidth="xl">
        
        <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '42px' }}>
            <h1>PIZZA</h1>
        </Typography>
       
        <Box sx={{ justifyContent: 'center', justifyContent:"space-between", textAlign: 'center', margin: '2em' }} item xs={6}>
            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                    onClick ={() => goToPastaMenu()}
                    className='toNextMenu-button' variant="outlined">PASTA 
            </Button>

            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                    onClick ={() => goToSideDishesMenu()}
                    className='toNextMenu-button' variant="outlined">SIDE DISHES 
            </Button>

            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                    onClick ={() => goToBeveragesMenu()}
                    className='toNextMenu-button' variant="outlined">BEVERAGE
            </Button>
        </Box>
                <Grid container spacing={3}>
                    {pizzaList.map((pizza, index) => {
                        return <Grid item xs={12} lg={6} key={index}><PizzaCard pizza={pizza} /></Grid>
                    })}
                </Grid>
    </Container> 
    <Footer /> 
    </>
    );
    
}

export default PizzaList;