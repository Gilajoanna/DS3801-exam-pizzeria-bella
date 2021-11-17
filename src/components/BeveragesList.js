import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import BeveragesCard from './BeveragesCard';

export default function BeveragesList({ beveragesList, addBeveragesToCart }) {
    /*
    let history = useHistory();

    const goToCartDrink = () => {
        history.push("/addDrinkToCart")
    }
    */

    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {beveragesList.map((beverage, index) => {
                    return <Grid item xs={12} lg={6} key={index}><BeveragesCard beverage={beverage}/></Grid>
                })}
            </Grid>
        </Container>
    )
}
