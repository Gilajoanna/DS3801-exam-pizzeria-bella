import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import DrinkCard from './DrinkCard';

export default function DrinkList({ drinkList, addDrinkToCart }) {
    /*
    let history = useHistory();

    const goToCartDrink = () => {
        history.push("/addDrinkToCart")
    }
    */

    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {drinkList.map((drink, index) => {
                    return <Grid item xs={12} lg={6} key={index}><DrinkCard drink={drink}/></Grid>
                })}
            </Grid>
        </Container>
    )
}
