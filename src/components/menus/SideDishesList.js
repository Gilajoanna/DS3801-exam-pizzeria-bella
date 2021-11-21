import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SideDishesCard from './SideDishesCard';
import Navbar from '../navbar/Navbar';
import HeroImg from '../HeroImg';
import Footer from '../footer/Footer';

function SideDishesList({ sideDishesList, addSideDishesToCart }) {

    const navigate = useNavigate()

    const goToPizzaMenu = () =>{
        navigate("/pizzaList")
    }
    const goToPastaMenu = () =>{
        navigate("/pastaList")
    }
    
    const goToBeveragesMenu = () =>{
        navigate("/beveragesList")
    }


    return (
        <>
        <Navbar/>
        <HeroImg />
        <Container className="sideDishesMenu-container" maxWidth="xl"> 

            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '42px' }}>
                <h1>SIDE DISHES</h1>
            </Typography>
            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '2px', fontSize: '14px' }}>
            <h3>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h3>
            </Typography>
            <Box sx={{ justifyContent: 'center', justifyContent:"space-between", textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToPizzaMenu()} 
                        className='toNextMenu-button' variant="outlined">PIZZA 
                </Button>

                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToPastaMenu()}
                        className='toNextMenu-button' variant="outlined">PASTA 
                </Button>

                <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToBeveragesMenu()}
                        className='toNextMenu-button' variant="outlined">BEVERAGE
                </Button>
            </Box>
                <Grid container spacing={3}>
                    {sideDishesList.map((sideDish, index) => {
                        return <Grid item xs={12} lg={6} key={index}><SideDishesCard sideDish={sideDish}/></Grid>
                    })}
                </Grid>
        </Container>
        <Footer />
        </>
    )
}
export default SideDishesList;