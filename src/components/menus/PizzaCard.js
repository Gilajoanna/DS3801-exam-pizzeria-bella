import React from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Grid, Container} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PizzaCard({ pizza, addPizzaToCart }){
 
     
    return (
    <main>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
                <Card className="card">
                    <CardHeader/>
                        <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C' }} 
                            className='add-button' variant="outlined" size="small">ADD
                        </Button>
                    <CardContent>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pizza.name }    
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pizza.description }  
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pizza.allergens }   
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pizza.price }   
                        </Typography>                
                    </CardContent>
                    <CardHeader/>
                </Card>
        </Grid>
    </main>
    )
}
