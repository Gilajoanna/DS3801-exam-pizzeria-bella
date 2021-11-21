import React from 'react';
import { Card, CardContent, CardHeader, Typography} from '@mui/material';
import Button from '@mui/material/Button';



export default function PastaCard({ pasta, addPastaToCart }){

    return (
        <main>
            <Card className="card">
                <CardHeader/>
                        <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C' }} 
                            className='navbar-button' variant="outlined" size="medium">ADD
                        </Button>
                    <CardContent>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.name }    
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.description }   
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.allergens }   
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.price }  
                        </Typography>
                    </CardContent>
                <CardHeader/>
            </Card>
           
        </main>
    )
}
 
