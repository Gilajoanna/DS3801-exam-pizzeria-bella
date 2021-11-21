import { Container, Fab, Grid, Typography } from '@mui/material';

import PastaCard from './PastaCard';
import Navbar from './navbar/Navbar';



function PastaList({pastaList, addPastaToCart}) {
    return (
        <>
        <Container className="pastaMenu-container" maxWidth="xl">
            <Navbar/>
            <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '8px', fontSize: '48px' }}>
                    <h1>PASTA</h1>
            </Typography>
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