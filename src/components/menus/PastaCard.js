import React from 'react';
import { Card, CardContent, CardHeader, Typography, Button, Grid} from '@mui/material';



export default function PastaCard({ pasta, addPastaToCart }){

    return (
        <>
        <Grid item lg={12} sx={{flexDirection: 'column'}}>
            <Card className="card" elevation={0} sx={{ justifyContent: 'center', color: '#1D1F2C' }}>
                <Grid item xs={12}>
                <CardHeader sx={{ml: '2em', mr: '2em'}} >
                    <Button onClick={() => addPastaToCart(pasta)}
                            sx={{ justifyContent: 'flex-end', color: '#1D1F2C', backgroundColor: '#FFFFFF', letterSpacing: '4px', fontSize: 18, borderColor: '#1D1F2C', ml: '2em', mr: '3em', mt:'1em' }} 
                            className='add-button' variant="outlined" size="small">ADD
                    </Button>
                    <Typography sx={{ fontsize: 16}} color="text.secondary" > 
                        { pasta.name }    
                    </Typography>
                </CardHeader>
                    <CardContent sx={{ml: '3em', mr: '3em'}}>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.description }   
                        </Typography>
                        <Typography sx={{ fontsize: 9}} color="text.secondary" gutterBottom> 
                            { pasta.allergens }   
                        </Typography>
                        <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                            { pasta.price }  
                        </Typography>
                    </CardContent>
               
                </Grid>
            </Card>
        </Grid>
        </>
    )
}
 
