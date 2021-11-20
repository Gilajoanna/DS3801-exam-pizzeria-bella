import { Container, Box, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../style2.css';

import PastaList from './PastaList';
import PizzaList from './PizzaList';




export default function OrderOnline(){

    return(
        <main className="orderOnline-container">
            <Container>
            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}>
                <h1 className="orderOnline-header">ORDER ONLINE</h1>
            </Typography>
    
            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component= {Link} to='/PizzaList'
                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C'}} 
                    className='orderOnline-button' variant="outlined"  size="large">PIZZA  
                </Button>
            </Box>
            

            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component= {Link} to={'/pastaList'}
                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">PASTA
                </Button>
            </Box>
        

            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component= {Link} to={'/SideDishesList'} 
                    style={{  backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">SIDE DISHES
                </Button>
            </Box>
                

            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component= {Link} to={'/BeveragesList'} 
                    style={{ backgroundColor: '#FFFFFF', color: '#1D1F2C', letterSpacing: '4px', fontSize: 28, borderColor: '#1D1F2C' }} 
                    className='orderOnline-button' variant="outlined" size="large">BEVERAGES
                </Button>
            </Box>
            </Container>
       
        </main>
    )
}