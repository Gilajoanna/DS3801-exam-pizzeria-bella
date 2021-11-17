import { Container, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';


export default function OrderFood(){

    return(
        <Container maxWidth="md" className="orderFodd-container">
            <Typography sx={{ justifyContent: 'center'}}>
                <h1>ORDER FOOD</h1>
            </Typography>
            <Button sx={{ justifyContent: 'center', color: '#1D1F2C', letterSpacing: '4px', fontSize: 22 }} 
                className='orderFood-button' variant="outlined" size="large">PIZZA
            </Button>
            <Button sx={{ justifyContent: 'center', color: '#1D1F2C', letterSpacing: '4px', fontSize: 22 }} 
                className='orderFood-button' variant="outlined" size="large">PASTA
            </Button>
            <Button sx={{ justifyContent: 'center', color: '#1D1F2C', letterSpacing: '4px', fontSize: 22 }} 
                className='orderFood-button' variant="outlined" size="large">SIDE DISHES
            </Button>
            <Button sx={{ justifyContent: 'center', color: '#1D1F2C', letterSpacing: '4px', fontSize: 22 }} 
                className='orderFood-button' variant="outlined" size="large">BEVERAGES
            </Button>
        </Container>
    )
}