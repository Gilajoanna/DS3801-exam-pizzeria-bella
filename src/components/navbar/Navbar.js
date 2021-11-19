import React from "react";

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
        <div>
            <Navigation />
            <MobileNavigation />
        </div>    
    )
}

export default Navbar;
