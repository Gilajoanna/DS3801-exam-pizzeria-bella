import { Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
import React from "react";

function Navbar() {
   
    return (
        <navbar>
            <Toolbar sx={{ mb: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    noWrap
                    //sx={{ flex }}
                >
                Hej Hej    
                </Typography>    
            </Toolbar>
        </navbar>
    )
}

export default Navbar;
