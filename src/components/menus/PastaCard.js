import React from 'react';
import { Card, CardContent, CardHeader, Typography} from '@mui/material';
import Button from '@mui/material/Button';



export default function PastaCard({ pasta, addPastaToCart }){

    return (
        <main>
            <Card className="card">
                <CardHeader/>
                    <CardContent>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.name }    
                        </Typography>
                        <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                            { pasta.description }
                            { pasta.allergens }
                            { pasta.price }
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                            className='navbar-button' variant="text" size="medium">ADD
                        </Button>
                    </CardContent>
                <CardHeader/>
            </Card>
           
        </main>
    )
}
 
