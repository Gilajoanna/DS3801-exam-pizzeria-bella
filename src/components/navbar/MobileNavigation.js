import { useState } from 'react';
import { IconButton } from "@mui/material";
import NavBarLinks from './NavBarLinks';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

import '../../style.css';
import '../../style2.css';

function MobileNavigation() {

    const [ clickedNav, setClickedNav ] = useState(false);

    return (
        <nav className='mobile-nav-bar'>
            <Typography className="nav-header"
               component="h1"
                variant="h3"
                noWrap
                sx={{ flex: 1, mb: 4, mt: 5, ml: 4, letterSpacing: '6px', fontWeight: 700, color: "#0C4916" }}>
                PIZZERIA BELLA
            </Typography> 
            <IconButton sx={{ ml: 4, mr: 4 }}
                color="primary" aria-label="menu icon">
                <MenuIcon className='nav-burger' sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 40 }} 
                onClick={ () => setClickedNav(!clickedNav) }/>
                { clickedNav && <NavBarLinks sx={{ ml: 4, mr: 4 }} /> }
            </IconButton>
        </nav>
    ); 
}

export default MobileNavigation;