import React from "react";

import { Toolbar, Typography, IconButton } from "@mui/material";
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import '../../style.css';
import '../../style2.css';

function Navbar() {
    return (
        <div className='nav-bar-container'>
            <Navigation />
            <MobileNavigation />
        </div>
    )
}

export default Navbar;
