import { Container, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';

import PizzaCard from './PizzaCard';

export default function PizzaList({pizzaList, addPizzaToCart}) {
    /*
    let history = useHistory();

    const goToCartPizza = () => {
        history.push("/addPizzaToCart")
    }
    */

    
    return (
        <main>
            <Typography>
                component="h1"
                variant="h3"
            </Typography>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToPsta' variant="contained" size="medium">PASTA
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToSideDishes' variant="contained" size="medium">SIDE DISHES
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToDrinks' variant="contained" size="medium">DRINKS
             </Button>

            <Container maxWidth="md"> 
                <Grid container spacing={3}>
                    {pizzaList.map((pizza, index) => {
                        return <Grid item xs={12} lg={6} key={index}><PizzaCard pizza={pizza}/></Grid>
                    })}
                </Grid>
            </Container>


        </main>
        
    )
}