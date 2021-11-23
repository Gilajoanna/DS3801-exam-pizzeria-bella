import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import PizzaCard from './PizzaCard';
import Navbar from '../navbar/Navbar';
import HeroImg from '../HeroImg';
import images from '../../images/images';
import Footer from '../footer/Footer';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../../style.css';
import '../../style2.css';


function PizzaList({ pizzaList, addPizzaToCart}) {

    //Navigate to other menus//
    const navigate = useNavigate()
    
    const goToPastaMenu = () =>{ navigate("/pastaList") }
    const goToSideDishesMenu = () =>{ navigate("/sideDishesList")}
    const goToBeveragesMenu = () =>{ navigate("/beveragesList") }
    const goToCheckOut = () =>{ navigate("/checkOut") }
 

    return (  
        <>
            <Navbar/>
            <HeroImg className='hero-image' img={images[1]}/>
            <main>
                <Container className="pizzaMenu-container" maxWidth="100%">
                    <Typography className="pizzaMenu-header" component="h1" variant="h2" color="text.secondary" 
                                sx={{ fontWeight: '700', justifyContent:'center', letterSpacing: '8px', mt: '2em', mb: '1em' }}>
                                PIZZA
                    </Typography>
                    <Box className="pizzaMenu-text" sx={{ fontWeight: '700', justifyContent:'center' }}>
                        <Typography component="h2" variant="body2" color="text.secondary" sx={{ fontWeight: '700', justifyContent:'center', mt: '2em', mb: '5em' }}> 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                                    took a galley of type and scrambledit to make a type specimen book.
                        </Typography>
                    </Box>

                    <Box sx={{ justifyContent: 'center', textAlign: 'center', mb: '5em' }} item xs={6}>
                        <Button onClick ={() => goToPastaMenu()}
                                style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C'}} 
                                className='toNextMenu-button' variant="outlined">PASTA 
                        </Button>
                        <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined", marginLeft: '10px', marginRight: '10px'}} 
                                onClick ={() => goToSideDishesMenu()}
                                className='toNextMenu-button' variant="outlined">SIDE DISHES 
                        </Button>
                        <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                                onClick ={() => goToBeveragesMenu()}
                                className='toNextMenu-button' variant="outlined">BEVERAGE
                        </Button>
                    </Box>
                
                    <Box sx={{ justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex', ml: '5em', mr: '5em' }}>
                        <Grid container spacing={1} sx={{}}>
                            {pizzaList.map((pizza, index) => {
                                return <Grid item xs={12} md={6} lg={6} key={index} >
                                <PizzaCard addPizzaToCart={addPizzaToCart} pizza={pizza} />
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                    
                    <Box sx={{ justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                        <Button onClick ={() => goToCheckOut()} 
                                sx={{ backgroundColor: '#1D1F2C', fontSize: 18, width: '18em', height: '3em', color: 'white', letterSpacing: '4px', mt: '5em', mb:'5em' }} 
                                className="darkButton-medium" variant="text" size="medium"> CHECKOUT
                        </Button>
                    </Box>
                </Container> 
            </main>
            <Footer/> 
        </>
    );
    /*    
    <body maxWidth="xl">
        <header>
            <Navbar/>
            <HeroImg />
        </header>
        <Container className ="pizza-menu" maxWidth="xl">
            <Box>
            <Typography className="pizzaMenu-header"component="h1" variant="h2" sx={{ fontWeight: '700', justifyContent:'center', letterSpacing: '8px' }}>PIZZA</Typography>
            <Box className="pizzaMenu-text" sx={{ fontWeight: '700', justifyContent:'center' }}>
                <Typography component="h2" variant="body2" sx={{ fontWeight: '700', justifyContent:'center' }}> 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambledit to make a type specimen book.
                </Typography>
            </Box>
                <Grid container spacing={3}> 
                
                    <Grid item xs={12} md={6} lg={6} sx={{ mr: 60 }}>
                        
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Box sx={{flexDirection: 'row', display: 'flex', justifyContent: 'center', textAlign: 'center', margin: '2em'}}>
                            <Grid item >
                                <Button onClick ={() => goToPastaMenu()} 
                                        sx ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C',  letterSpacing: '4px', fontSize: 24,  borderColor: '#1D1F2C', variant:"outlined"}} 
                                        className='toNextMenu-button' variant="outlined">PASTA 
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button onClick ={() => goToSideDishesMenu()}
                                        sx ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined", marginLeft: '10px', marginRight: '10px'}} 
                                        className='toNextMenu-button' variant="outlined">SIDE DISHES 
                                </Button>
                            </Grid>
                            <Grid item >
                                <Button onClick ={() => goToBeveragesMenu()} 
                                        sx ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                                        className='toNextMenu-button' variant="outlined">BEVERAGE
                                </Button>
                            </Grid>
                        </Box>
                        <Box sx={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                            <Grid container>
                                {pizzaList.map((pizza, index) => {
                                return <Grid item xs={12} lg={6} key={index}><PizzaCard addPizzaToCart={addPizzaToCart} pizza={pizza} /></Grid>
                                })}
                            </Grid>
                        </Box>
                        <Box sx={{ justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                            <Button onClick ={() => goToCheckOut()} 
                                    sx={{ backgroundColor: '#1D1F2C', mb: '5em',  fontSize: 18,width: '18em',height: '3em',color: 'white',letterSpacing: '4px' }} 
                                    variant="text" size="medium"> CHECKOUT
                            </Button>
                        </Box>
                        
                    </Grid>
                </Grid>        
            </Box>
        </Container>
        <footer>
            <Footer />
        </footer>
    </body>
    )}
    */
    /*
        
    
    */

    /*
    <body>
        <header>
            <Navbar/>
            <HeroImg />
        </header>
        <main>
            <Container className="pizzaMenu-container" maxWidth="xl">
                <Typography variant="h1" sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '42px' }}>
                    PIZZA
                </Typography>

                <Grid item xs={12} lg={4} sx={{ mr: 39 }}>
                    <Typography component="h1" variant="h6" 
                    sx={{ justifyContent: 'center', textAlign: 'center', alignItem: 'center', width: '50%', margin: '2em', letterSpacing: '2px', fontSize: '14px' }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambledit to make a type specimen book.
                </Typography>
                </Grid>
                <Box sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToPastaMenu()}
                        className='toNextMenu-button' variant="outlined">PASTA 
                    </Button>
                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined", marginLeft: '10px', marginRight: '10px'}} 
                        onClick ={() => goToSideDishesMenu()}
                        className='toNextMenu-button' variant="outlined">SIDE DISHES 
                    </Button>
                    <Button style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 24, borderColor: '#1D1F2C', variant:"outlined"}} 
                        onClick ={() => goToBeveragesMenu()}
                        className='toNextMenu-button' variant="outlined">BEVERAGE
                    </Button>
                </Box>
             
                <Grid container>
                    {pizzaList.map((pizza, index) => {
                        return <Grid item xs={12} md ={6} lg={6} key={index} >
                        <PizzaCard addPizzaToCart={addPizzaToCart} pizza={pizza} />
                        </Grid>
                    })}
                </Grid>
                
                <Box sx={{ justifyContent: 'center', alignContent: 'center',  alignItems: 'center', flexDirection: 'row', display: 'flex' }}>
                    <Button onClick ={() => goToCheckOut()} 
                        sx={{ backgroundColor: '#1D1F2C', mb: '5em', 
                                fontSize: 18,
                                width: '18em',
                                height: '3em',
                                color: 'white',
                                letterSpacing: '4px' 
                                }} 
                                variant="text" size="medium">
                                CHECKOUT
                        </Button>
                </Box>
               
                <Box sx={{flexDirection: 'column', alignItem: 'center', justifyContent: 'center' }}item xs={6}>
               
                </Box>
            </Container> 
        </main>
        <Footer /> 
        </body>
    );
    
}*/
}
export default PizzaList;