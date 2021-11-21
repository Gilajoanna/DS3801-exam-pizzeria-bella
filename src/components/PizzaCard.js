import React from 'react';
import { Card, CardContent, CardHeader, Button, Container} from '@mui/material';
import { Typography } from '@mui/material';

export default function PizzaCard({ pizza, addPizzaToCart }){

    return (
    <>
    <Container className="checkout-container" maxWidth="xl">
        <Card elevation={3}>
            <CardHeader/>
                <Typography>
                    {pizza.name}
                </Typography>
            <CardContent>
                <Typography>
                    {pizza.description}
                    {pizza.allergens}
                    {pizza.price}
                </Typography>
                <Button
                    sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                    className='navbar-button' variant="text" size="medium">ADD
                </Button>
            </CardContent>
            <CardHeader/>
        </Card>
        </Container>
    </>
    )
}
