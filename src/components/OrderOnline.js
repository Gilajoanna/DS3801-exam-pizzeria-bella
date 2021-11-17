import { Container, Box, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import '../style2.css';




export default function OrderOnline(){

    return(
        <main className="orderOnline-container">
            <Grid>
                <Container maxWidth="md" >
            
                    <Typography sx={{ justifyContent: 'center', textAlign: 'center', margin: '2em', letterSpacing: '4px' }}>
                        <h1 className="orderOnline-header">ORDER ONLINE</h1>
                    </Typography>

            
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                            <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                                className='orderOnline-button' variant="contained"  size="large">PIZZA
                            </Button>
                        </Box>
                 

                    <Grid>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                            <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                                className='orderOnline-button' variant="contained" size="large">PASTA
                            </Button>
                        </Box>
                    </Grid>

                    <Grid>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                            <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                                className='orderOnline-button' variant="contained" size="large">SIDE DISHES
                            </Button>
                        </Box>
                    </Grid>

                    <Grid>
                        <Box sx={{ flexDirection: 'column', justifyContent: 'center', textAlign: 'center', margin: '2em' }} item xs={6}>
                            <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                                className='orderOnline-button' variant="contained" size="large">BEVERAGES
                            </Button>
                        </Box>
                    </Grid>
                    
                </Container>
            </Grid>
        </main>
    )
}