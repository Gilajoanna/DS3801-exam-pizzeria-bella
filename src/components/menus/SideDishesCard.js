import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Button from '@mui/material/Button';



export default function SideDishesCard({sideDish, addSideDishesToCart}){

    return (
        <main>
            <Card className="card">
                <CardHeader/>
                    <CardContent>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            {sideDish.name}
                        </Typography>
                        <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                            {sideDish.description}
                            {sideDish.allergens}
                            {sideDish.price}
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                            className='add-button' variant="text" size="medium">ADD
                        </Button>
                    </CardContent>
                <CardHeader/>
            </Card>
        </main>
    )
}
 
