import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import SideDishesCard from './SideDishesCard';
import Navbar from '../navbar/Navbar';
import HeroImg from '../HeroImg';
import Footer from '../footer/Footer';

import '../../style.css';
import '../../style2.css';

function SideDishesList({ sideDishesList, addSideDishesToCart }) {

    //Navigate to other menus//
    const navigate = useNavigate()
    const goToPizzaMenu = () =>{ navigate("/pizzaList") }
    const goToPastaMenu = () =>{ navigate("/pastaList") }
    const goToBeveragesMenu = () =>{ navigate("/beveragesList")}
    const goToCheckOut = () =>{ navigate("/checkOut") }


    return (
        <main>
            <head>
                <Navbar/>
                <HeroImg />
            </head>
            <body>
                <Container className="sideDishesMenu-container" maxWidth="xl"> 
                <Typography className="pizzaMenu-header" component="h1" variant="h2" color="text.secondary" 
                            sx={{ fontWeight: '700', justifyContent:'center', letterSpacing: '8px', mt: '2em', mb: '1em' }}>
                            SIDE DISHES
                </Typography>
                <Box className="pizzaMenu-text" sx={{ fontWeight: '700', justifyContent:'center' }}>
                    <Typography component="h2" variant="body2" color="text.secondary" sx={{ fontWeight: '700', justifyContent:'center', mt: '2em', mb: '5em' }}> 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                took a galley of type and scrambledit to make a type specimen book.
                    </Typography>
                </Box>
                <Box sx={{ justifyContent: 'center', justifyContent:"space-between", textAlign: 'center', mb: '5em' }} item xs={6}>
                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                            onClick ={() => goToPizzaMenu()} 
                            className='toNextMenu-button' variant="outlined">PIZZA 
                    </Button>

                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined", marginLeft: '10px', marginRight: '10px'}} 
                            onClick ={() => goToPastaMenu()}
                            className='toNextMenu-button' variant="outlined">PASTA 
                    </Button>

                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                            onClick ={() => goToBeveragesMenu()}
                            className='toNextMenu-button' variant="outlined">BEVERAGE
                    </Button>
                </Box>

                <Grid container spacing={1}>
                    {sideDishesList.map((sideDish, index) => {
                        return <Grid item xs={12} lg={6} key={index}><SideDishesCard addSideDishesToCart={addSideDishesToCart} sideDish={sideDish}/></Grid>
                    })}
                </Grid>
               
                <Box sx={{ justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                    <Button onClick ={() => goToCheckOut()} 
                            sx={{ backgroundColor: '#1D1F2C', fontSize: 18, width: '18em', height: '3em', color: 'white', letterSpacing: '4px', mt: '5em', mb:'5em' }} 
                            variant="text" size="medium"> CHECKOUT
                    </Button>
                </Box>
                </Container>
            </body>
            <footer>
            <Footer />
            </footer>
        </main>
    )
}
export default SideDishesList;