import React from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PizzaCard({ pizza, addPizzaToCart }){
 
     
    return (
    <main>
        <Card className="card">
            <CardHeader/>
                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                    className='add-button' variant="outlined" size="small">ADD
                </Button>
            <CardContent>
                <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                    { pizza.name }    
                </Typography>
                <Typography>
                    {pizza.description}
                    {pizza.allergens}
                    {pizza.price}
                </Typography>
                
            </CardContent>
            <CardHeader/>
        </Card>
    </main>
    )
}
