import React, { useState } from 'react';
import { Box, Container, Typography } from "@mui/material";

import Navbar from '../navbar/Navbar';

function CheckOut() {

    return(
        <>
            <Navbar />
            <Container className="checkout-container" maxWidth="xl">
                <Box className="order-container" sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, m: 10, border: 1, borderColor: '#A3A29E', padding: 5 }}>
                    <Typography>
                        Your Order
                    </Typography>
                    <Typography>

                    </Typography>


                </Box>
            </Container>
        </>
    );
}

export default CheckOut;