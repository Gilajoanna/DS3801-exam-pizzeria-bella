import { Container, Fab, Grid } from '@mui/material';
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
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {pizzaList.map((pizza, index) => {
                    return <Grid item xs={12} lg={6} key={index}><PizzaCard pizza={pizza}/></Grid>
                })}
            </Grid>
        </Container>
    )
}