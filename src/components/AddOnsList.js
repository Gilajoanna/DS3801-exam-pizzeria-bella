
import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import AddOnsCard from './AddOnsCard';

export default function AddOnsList({addAddOnsList, addPastaToCart}) {
    /*
    let history = useHistory();

    const goToCartAddOns = () => {
        history.push("/addAddOnToCart")
    }
    */

    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {addAddOnsList.map((addOns, index) => {
                    return <Grid item xs={12} lg={6} key={index}><AddOnsCard addOns={addOns}/></Grid>
                })}
            </Grid>
        </Container>
    )
}