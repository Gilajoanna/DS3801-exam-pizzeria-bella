import { useState } from 'react';
import { IconButton } from "@mui/material";
import NavBarLinks from './NavBarLinks';
import MenuIcon from '@mui/icons-material/Menu';

import '../../style.css';
import '../../style2.css';

function MobileNavigation() {

    const [clickedNav, setClickedNav ] = useState(false);

    return (
        <nav className='mobile-nav-bar'>
            <IconButton 
                color="primary" aria-label="menu icon">
                <MenuIcon className='nav-burger' sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 40 }} 
                onClick={ () => setClickedNav(!clickedNav) }/>
                { clickedNav && <NavBarLinks /> }
            </IconButton>
        </nav>
    ); 
}

export default MobileNavigation;