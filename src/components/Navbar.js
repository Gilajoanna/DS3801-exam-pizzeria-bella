import { Toolbar, Typography } from "@mui/material";
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
                    sx={{ flex }}
                >
                    <Link style={{ textDecoration: 'none', color: 'inherit' }}>Pizza Bella</Link>
                </Typography>    
            </Toolbar>
        </navbar>
    )
}

