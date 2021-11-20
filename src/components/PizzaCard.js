import React from 'react';
import { Card, CardContent, CardHeader, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';


function PizzaCard({ pizza }){

    const navigate = useNavigate();

    const goToPastaMenu = () => {
        navigate('/pastaList')
    }

    return (
    <>
    <main>
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
                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ADD
                    </Button>
                </CardContent>
            <CardHeader/>
        </Card>
    </main>
    </>
    )
}
export default PizzaCard;