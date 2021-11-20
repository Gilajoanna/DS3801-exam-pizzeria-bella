import { Container, Fab, Grid } from '@mui/material';

import PastaCard from './PastaCard';
import Navbar from './navbar/Navbar';



function PastaList({pastaList, addPastaToCart}) {
    return (
        <>
        <Navbar/>
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {pastaList.map((pasta, index) => {
                    return <Grid item xs={12} lg={6} key={index}><PastaCard pasta={pasta}/></Grid>
                })}
            </Grid>
        </Container>
        </>
    );

}

export default PastaList;