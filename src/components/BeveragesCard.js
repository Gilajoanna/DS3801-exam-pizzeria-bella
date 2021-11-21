import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Button from '@mui/material/Button';



function BeveragesCard({ beverage, addBeverageToCart }){

    return (
        <Card elevation={3}>
            <CardHeader/>
                <CardContent>
                    <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                        <p>{beverage.name}</p>
                    </Typography>
                    <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                        <p>{beverage.description}</p>
                        <p>{beverage.price}</p>
                    </Typography>
                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='add-button' variant="text" size="medium">ADD
                    </Button>
                </CardContent>
            <CardHeader/>
        </Card>
    )
}

export default BeveragesCard;
