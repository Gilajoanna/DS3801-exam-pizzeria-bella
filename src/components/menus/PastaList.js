import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import PastaCard from './PastaCard';
import Navbar from '../navbar/Navbar';
import HeroImg from '../HeroImg';
import Footer from '../footer/Footer';



function PastaList({pastaList, addPastaToCart}) {

    const navigate = useNavigate()

    const goToPizzaMenu = () =>{
        navigate("/pizzaList")
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
        <HeroImg />
        <Container className="pastaMenu-container" maxWidth="xl">
            
            <Typography component="h1" variant="h1" sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '42px' }}>
                PASTA
            </Typography>
            <Typography component="h3" variant="h3" sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '2px', fontSize: '14px' }}>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <Box sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToPizzaMenu()} 
                        className='toNextMenu-button' variant="outlined">PIZZA 
                </Button>
           
                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:'outlined', marginLeft: '10px', marginRight: '10px'}} 
                        onClick ={() => goToSideDishesMenu()}
                        className='toNextMenu-button' variant="outlined">SIDE DISHES 
                </Button>

                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToBeveragesMenu()}
                        className='toNextMenu-button' variant="outlined">BEVERAGE
                </Button>
            </Box>
                <Grid container spacing={3}>
                    {pastaList.map((pasta, index) => {
                        return <Grid item xs={12} lg={6} key={index}><PastaCard pasta={pasta}/></Grid>
                    })}
                </Grid>
        </Container>
        <Footer />
        </>
    );
}

export default PastaList;