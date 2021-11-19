import { Container, Fab, Grid } from '@mui/material';
import { useHistory } from 'react-router';

import PastaCard from './PastaCard';

export default function PastaList({pastaList, addPastaToCart}) {
    /*
    let history = useHistory();

    const goToCartPasta = () => {
        history.push("/addPastaToCart")
    }
    */

    
    return (
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {pastaList.map((pasta, index) => {
                    return <Grid item xs={12} lg={6} key={index}><PastaCard pasta={pasta}/></Grid>
                })}
            </Grid>
        </Container>
    );

}