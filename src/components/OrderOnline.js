import { Container, Box, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../style2.css';


export default function OrderOnline (){

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
                <Grid>
                    <Typography variant='h1s' x={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}
                        className='orderOnline-header'>ORDER ONLINE
                    </Typography>
                </Grid>
           
                <Grid item lg={12} sx={{flexDirection: 'column'}}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                        <Button  onClick ={() => goToPizzaMenu()}
                            style ={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C'}} 
                            className='orderOnline-button' variant="outlined"  size="large">PIZZA  
                        </Button>
                    </Box>
                </Grid>
                <Grid item lg={12} sx={{flexDirection: 'column'}}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                        <Button onClick ={() => goToPastaMenu()}
                            style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                            className='orderOnline-button' variant="outlined" size="large">PASTA
                        </Button>
                    </Box>
                </Grid>
                <Grid item lg={12} sx={{flexDirection: 'column'}}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                        <Button onClick ={() => goToSideDishesMenu()}
                            style={{  backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                            className='orderOnline-button' variant="outlined" size="large">SIDE DISHES
                        </Button>
                    </Box>
                </Grid>
                    
                <Grid item lg={12} sx={{flexDirection: 'column'}}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                        <Button 
                            onClick ={() => goToBeveragesMenu()}
                            style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                            className='orderOnline-button' variant="outlined" size="large">BEVERAGES
                        </Button>
                    </Box>
                </Grid>
          
            
            </Container>
       
        </main>
    )
}
