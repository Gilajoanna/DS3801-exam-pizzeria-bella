import { Toolbar, Typography, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import React from "react";

function Navbar() {
   
    return (
        <navbar>
            <Toolbar sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h3"
                    color="inherit"
                    noWrap
                    sx={{ flex: 1 }}>
                    Pizzeria Bella
                </Typography>  
                    <Button sx={{ justifyContent: 'flex-end' }} className='navbar-button' variant="text" size="medium">Order food</Button> 
                    <Button sx={{ justifyContent: 'flex-end' }} className='navbar-button' variant="text" size="medium">Contact</Button>
                    <Button sx={{ justifyContent: 'flex-end' }} className='navbar-button' variant="text" size="medium">About us</Button>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
            </Toolbar>
        </navbar>
    )
}

export default Navbar;
