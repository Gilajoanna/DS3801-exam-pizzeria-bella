import { Toolbar, Typography, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";

function Navbar() {
   
    return (
        <navbar>
            <Toolbar sx={{ mt: 4, mb: 4 }}>
                <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    noWrap
                    sx={{ flex: 1, letterSpacing: '6px', fontWeight: 700, color: "#0C4916" }}>
                    PIZZERIA BELLA
                </Typography>  
                    <Button sx={{ justifyContent: 'flex-end', underline: 'hover', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ORDER FOOD
                    </Button>

                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">CONTACT
                    </Button>

                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ABOUT US
                    </Button>

                    <IconButton 
                        color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 40 }} />
                    </IconButton>
            </Toolbar>
        </navbar>
    )
}

export default Navbar;
