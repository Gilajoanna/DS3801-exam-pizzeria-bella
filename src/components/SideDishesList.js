
import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import SideDishesCard from './SideDishesCard';

export default function SideDishesList({addAddOnsList: addSideDishesList, addSideDishesToCart}) {
    /*
    let history = useHistory();

    const goToCartAddOns = () => {
        history.push("/addAddOnToCart")
    }
    */

    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {addSideDishesList.map((addOns, index) => {
                    return <Grid item xs={12} lg={6} key={index}><SideDishesCard addOns={addOns}/></Grid>
                })}
            </Grid>
        </Container>
    )
}