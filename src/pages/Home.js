import React from 'react';

import Navbar from '..components/Navbar';

function Home() {
    return(
        <Container maxWidth="md">
            <Navbar/>
            <HeroImg img={ useThemeProps.img } />
        </Container>
    )
}

export default Home;