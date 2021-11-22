import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Typography, Button, Grid, Link} from '@mui/material';

import '../../style2.css';


export default function PizzaCard({ pizza, addPizzaToCart, props }){

    
    return (
    <main>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
            <Card className="card">
                <Grid item xs={12} lg={8}>
                <CardHeader/>
                    <Button onClick={() => addPizzaToCart(pizza)}
                        sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C' }} 
                        className='add-button' variant="outlined" size="small">ADD
                    </Button>
                <CardContent>
                    <Typography  className="title" sx={{ fontsize: 16}} color="text.secondary" gutterBottom > 
                        { pizza.name }    
                    </Typography>
                    <Typography className="description" sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                        { pizza.description }  
                    </Typography>
                    <Typography className="allergens" sx={{ fontsize: 10}} color="text.secondary" gutterBottom> 
                        { pizza.allergens }   
                    </Typography>
                    <Typography variant="h6" className="price" sx={{ fontsize: 10}} color="text.secondary" gutterBottom> 
                        { pizza.price }   
                    </Typography>                
                </CardContent>
                <CardHeader/>
                
                </Grid>
            </Card>
        </Grid>
    </main>
    )
}
