import { Container, Box, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../style2.css';



export default function OrderOnline (){

    const navigate = useNavigate();
    navigate('/pizzaList')

    return(

        <main className="orderOnline-container">
            <Container>
    
            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}>
                <h1 className="orderOnline-header">ORDER ONLINE</h1>
            </Typography>
    
            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component={Link} to='/pizzaList'
                    onCLick={navigate}
                    style={{ 
                        backgroundColor: '#FFFFFF',
                        color: '#1D1F2C',
                        letterSpacing: '4px',
                        fontSize: 28, 
                        borderColor: '#1D1F2C'}} 
                    className='orderOnline-button' variant="outlined"  size="large">PIZZA  
                </Button>
            </Box>
            
            <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                <Button 
                    component= {Link} to={'/PastaList'}
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