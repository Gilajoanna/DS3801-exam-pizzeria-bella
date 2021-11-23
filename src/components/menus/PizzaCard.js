import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent, Typography, Button, Grid, Link, CardAction, title} from '@mui/material';

import '../../style2.css';


export default function PizzaCard({ pizza, addPizzaToCart, props, title }){

    
    return (
    <main>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
            <Card className="card" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', spacing:1}}  sx={{flexGrow: 1, flexBasis: 0, maxWidth:'50rem', maxHeight: '30rem', minWidth: 100, margin: '3rem'}}>
                                    
            <Grid item xs={12} lg={8} style={{display: 'flex', width: 'fitContent', height: 'fitContent'}}>
                    <CardHeader/>
                    <CardContent>
                        <Button onClick={() => addPizzaToCart(pizza)}
                                sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C' }} 
                                className='add-button' variant="outlined" size="small">ADD
                        </Button>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary">{ pizza.name }</Typography>
                        <Typography className="description" sx={{ fontSize: 14 }} color="text.secondary"> { pizza.description }</Typography>
                        <Typography className="allergens" sx={{ fontsize: 10}} color="text.secondary" gutterBottom> { pizza.allergens }   </Typography>
                        <Typography variant="h6" className="price" sx={{ fontsize: 10}} color="text.secondary" gutterBottom> { pizza.price }   
                        </Typography>                
                    </CardContent>
                </Grid>
            </Card>
        </Grid>
    </main>
  
    )
}
