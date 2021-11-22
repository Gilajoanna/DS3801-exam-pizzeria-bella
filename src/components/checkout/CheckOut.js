import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from "@mui/material";

import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Basket from './Basket';


function CheckOut({ addPastaToCart, addPizzaToCart, removePizzaItem, shoppingCartItems, props }) {
    
    /*
    const { pizzaList, onAdd } = props;
    <div>
        {pizzaList.map(()=>(
        <PizzaList key={pizzaList.id} pizzaList={pizzaList} onAdd={onAdd}></PizzaList>
        ))}
    </div>
    */


    
    return(
        <>
            <Navbar />
            <main>
                <Container className="checkout-container" maxWidth="xl">
                    <Box className="order-container" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, m: 10, border: 1, borderColor: '#A3A29E', padding: 5 }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={7}>
                                <Typography component="h1" variant="h6" sx={{ letterSpacing: '4px' }}>
                                    YOUR ORDER
                                </Typography>
                                <Basket addPizzaToCart={addPizzaToCart} addPastaToCart={addPastaToCart} removePizzaItem={removePizzaItem} shoppingCartItems={shoppingCartItems} />
                                <Button sx={{ backgroundColor: '#1D1F2C', mt: 2, fontSize: 18, width: '15em', color: 'white' }} variant="text">GO TO PAYMENT</Button>
                            </Grid> 
                            <Grid item xs={12} lg={5}>
                                <Grid item lg={12}>
                                    <Button sx={{ backgroundColor: '#1D1F2C', mb: 1, fontSize: 18, width: '20em', color: 'white'  }} variant="text" size="large">ORDER MORE FOOD?</Button>
                                </Grid>
                                <Grid item lg={12}>             
                                    <Button sx={{ backgroundColor: '#1D1F2C', mb: 1, fontSize: 18, width: '20em', color: 'white'  }} variant="text" size="large">WANT ANOTHER SIDE DISH?</Button>
                                </Grid>
                                <Grid item lg={12}>    
                                    <Button sx={{ backgroundColor: '#1D1F2C', fontSize: 18, width: '20em', color: 'white'  }} variant="text" size="large">FORGOT TO ADD DRINKS?</Button> 
                                </Grid>
                            </Grid>     
                        </Grid>
                    </Box>   
                </Container>
            </main>
            <Footer />
        </>
    );
}
export default CheckOut;