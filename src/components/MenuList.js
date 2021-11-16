import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import MenuCard from './MenuCard';

export default function MenuList({menuList, addPizzaToCart}) {
    /*
    let history = useHistory();

    const goToCartPizza = () => {
        history.push("/addPizzaToCart")
    }
    */

    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {menuList.map((pizza, index) => {
                    return <Grid item xs={12} lg={6} key={index}><MenuCard pizza={pizza}/></Grid>
                })}
            </Grid>
        </Container>
    )
}