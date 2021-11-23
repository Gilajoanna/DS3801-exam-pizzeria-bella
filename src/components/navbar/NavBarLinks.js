import { Toolbar, Typography, IconButton, Grid } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../../style.css';
import '../../style2.css';

function NavBarLinks({ shoppingCartItems }) {

    return(
            <Toolbar className="nav-content-container" sx={{ mt: 5, mb: 4 , justifyContent: 'right'}}>
                <Button sx={{ justifyContent: 'flex-end', underline: 'hover', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ORDER FOOD
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">CONTACT
                </Button>

                <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size='medium'><a href="#/footer-container">ABOUT US</a>
                </Button>

                <IconButton component={ Link } to="/checkOut" color='primary' aria-label='shopping cart'>
                          <AddShoppingCartIcon className='shopping-cart' sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 45 }} />
                </IconButton>
            </Toolbar>
    );
}

export default NavBarLinks;