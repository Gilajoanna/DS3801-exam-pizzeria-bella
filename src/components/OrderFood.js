import { Container, Box, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';




export default function OrderFood(){

    return(
        <Grid item xs={12}>
            <Container maxWidth="md" className="orderFodd-container">
        
                <Typography sx={{ justifyContent: 'center', borderColor: '#1D1F2C'}}>
                    <h1 className="orderFodd-header">ORDER FOOD</h1>
                </Typography>

                <Grid item xs={6}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center' }} item xs={6}>
                        <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                            className='orderFood-button' variant="outlined"  size="large">PIZZA
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center' }} item xs={6}>
                        <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                            className='orderFood-button' variant="outlined" size="large">PASTA
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center' }} item xs={6}>
                        <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                            className='orderFood-button' variant="outlined" size="large">SIDE DISHES
                        </Button>
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box sx={{ flexDirection: 'column', justifyContent: 'center' }} item xs={6}>
                        <Button sx={{ color: '#1D1F2C', letterSpacing: '4px', fontSize: 28 }} 
                            className='orderFood-button' variant="outlined" size="large">BEVERAGES
                        </Button>
                    </Box>
                </Grid>
                
            </Container>
        </Grid>
    )
}