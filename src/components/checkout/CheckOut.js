import React from 'react';
import { Box, Container, Typography } from "@mui/material";

import Navbar from '../navbar/Navbar';

function CheckOut() {
    return(
        <>
            <Navbar />
            <Container className="checkout-container" maxWidth="xl">
                <Box maxWidth="sm">
                    <Typography>
                        Your Order
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default CheckOut;