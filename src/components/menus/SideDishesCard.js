import React from 'react';
import { Card, CardContent, CardHeader, Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';

import '../../style2.css';

export default function SideDishesCard({sideDish, addSideDishesToCart}){

    return (
    <main>
        <Card className="card">
            <Grid item xs={12} lg={8}>
                <CardHeader/>
                    <Button onClick={() => addSideDishesToCart(sideDish)}
                        sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C' }} 
                        className='add-button' variant="outlined" size="small">ADD
                    </Button>
                    <CardContent>
                        <Typography sx={{ fontsize: 14}} color="text.secondary"> 
                            {sideDish.name}
                        </Typography>
                        <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                            {sideDish.description}
                        </Typography>
                        <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                            {sideDish.allergens}
                        </Typography>
                        <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                            {sideDish.price}    
                        </Typography>            
                    </CardContent>
                <CardHeader/>
            </Grid>
        </Card>
    </main>
    )
}
 
