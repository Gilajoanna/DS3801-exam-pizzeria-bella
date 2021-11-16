import { DeleteOutlined } from '@mui/icons-material';
import { Card, CardContent, CardHeader} from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';


export default function AddOnsCard({ addOns, addAddOnsToCart }){

    return (
        <Card elevation={3}>
            <CardHeader/>
                <CardContent>
                    <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                        <p>{addOns.name}</p>
                    </Typography>
                    <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                        <p>{addOns.description}</p>
                        <p>{addOns.allergens}</p>
                        <p>{addOns.price}</p>
                    </Typography>
                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ADD
                    </Button>
                </CardContent>
            <CardHeader/>
        </Card>
    )
}
