import { Button, Grid } from '@mui/material';
import React from 'react';

function Basket({ shoppingCartItems, removeItem }) {

    const itemsPrice = shoppingCartItems.reduce((a, b) => a + b.price * b.qty, 0);

    return(
        <div>
            <div> {shoppingCartItems.length === 0 && <div>Shopping cart is empty</div>} </div>
            {shoppingCartItems.map((item) => (
                <Grid containers spacing ={2} key={item.id} className="product-row">
                    <Grid item xs={4} lg={4}> 
                        {item.name} 
                    </Grid>
                    <Grid item xs={4} lg={4}>
                        {item.qty} x {item.price}kr
                        <Button onClick={() => removeItem(item)} className="remove-item" sx={{ ml: 10, color: 'black' }}>
                                remove
                        </Button></Grid>
                </Grid>
            ))}

            {shoppingCartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className="price-row">
                    <div>Totalt Price</div>
                    <div>{itemsPrice}kr</div>
                </div>
                </>
            )}
        </div>
    );
}

export default Basket;