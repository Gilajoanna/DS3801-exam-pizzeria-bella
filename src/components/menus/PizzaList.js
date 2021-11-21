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
        <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '2px', fontSize: '14px' }}>
            <h3>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
        </Typography>
       
        <Box sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:'outlined', fontWeigth: 100}} 
                    onClick ={() => goToPastaMenu()}
                    className='toNextMenu-button' variant="outlined">PASTA 
            </Button>
       
        
            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined", marginLeft: '10px', marginRight: '10px'}} 
                    onClick ={() => goToSideDishesMenu()}
                    className='toNextMenu-button' variant="outlined">SIDE DISHES 
            </Button>
       
        
            <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                    onClick ={() => goToBeveragesMenu()}
                    className='toNextMenu-button' variant="outlined">BEVERAGES
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