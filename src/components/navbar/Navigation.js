import { Typography } from "@mui/material";
import { Grid, Container } from "@mui/material";

import NavBarLinks from './NavBarLinks';

import '../../style.css';
import '../../style2.css';

function Navigation () {
    return(
        <nav className='nav-bar'>
            <Grid container>
                <Typography className="nav-header"
                            component="h1"
                            variant="h3"
                            noWrap
                            sx={{ flex: 1, mb: 4, mt: 5, ml: 4, letterSpacing: '6px', fontWeight: 700, color: "#0C4916" }}>
                            PIZZERIA BELLA
                        </Typography>
                        <NavBarLinks />
            </Grid>    
        </nav>
    );
}

export default Navigation;