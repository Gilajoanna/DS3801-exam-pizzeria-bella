
import { Container, Fab, Grid } from '@mui/material';

import OrderOnline from './OrderOnline';
import SideDishesCard from './SideDishesCard';
import Navbar from './navbar/Navbar';

export default function SideDishesList({ addSideDishesList, addSideDishesToCart }) {

    return (
        <>
        <Navbar/>
        <Container maxWidth="md"> 
            <Grid container spacing={3}>
                {addSideDishesList.map((sideDish, index) => {
                    return <Grid item xs={12} lg={6} key={index}><SideDishesCard sideDish={sideDish}/></Grid>
                })}
            </Grid>
        </Container>
        </>
    )
}