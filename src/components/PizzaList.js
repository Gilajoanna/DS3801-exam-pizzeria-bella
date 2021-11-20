import { Container, Fab, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { render } from '@testing-library/react';
import { useHistory } from 'react-router';

import PizzaCard from './PizzaCard';
import Navbar from './navbar/Navbar';

export default function PizzaList({pizzaList, addPizzaToCart}) {
   
    const pizza = [
        { name: "MARGHERITA", description: "Tomato sauce, mozzarella, basil, oregano", allergens:"WHEAT, MILK", price: 189 },
        { name: "PIZZA ALLA SALSICCIA", description: "Tomato sauce, mozzarella, Salsiccia piccante, olives, red onion, ruccula, parmesan", allergens:"WHEAT, MILK", price:229 },
        { name: "PIZZA POLLO", description: "Tomato sauce, mozzarella, chicken, red onion, garlic, olives, ruccula, pesto rosso, parmesan", allergens:"WHEAT, MILK, CASHEW NUTS", price: 229 },
        { name: "PIZZA CON GAMBERI", description: "Tomato sauce, mozzarella, chili and garlic marinated scampi, red onion, parsley, lime", allergens:"WHEAT, SHELLFISH, MILK", price: 229 },
        { name: "PROSCIUTTO E FUNGHI", description: "Tomato sauce, mozzarella, ham, mushrooms", allergens:"WHEAT, MILK", price: 199 },
        { name: "PIZZA SALAME", description: "Tomato sauce, mozzarella, pepperoni Calabra, red onion, cherry tomato", allergens:"WHEAT, MILK", price: 229},
        { name: "PARMA", description: "Tomato sauce, mozzarella, parma ham, ruccula, parmesan", allergens:"WHEAT, MILK", price: 229 },
        { name: "PIZZA PANCHETTA", description: "Tomato sauce, mozzarella, pancetta, red onion, parmesan, oregano", allergens:"WHEAT, MILK", price: 229 },
        { name: "CALABRESE", description: "Tomato sauce, mozzarella, Marchisio salami with black truffle, truffle oil, ruccula", allergens:"WHEAT, MILK, SULPHITES", price: 229 },
        { name: "INFERNO", description: "Tomato sauce, mozzarella, Negrini salami spicy pepperoni, marinated chili pepper", allergens:"WHEAT, MILK", price: 229 }
    ]
    
     /*
    let history = useHistory();

    const goToCartPizza = () => {
        history.push("/addPizzaToCart")
    }
    */

   
    return (
        
        <main className = "pizzaMeny">
            <Container>
            <header>
                <Container>
                    <Navbar/>
                </Container>
            </header>
            <Typography>
            </Typography>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToPsta' variant="contained" size="medium">PASTA
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToSideDishes' variant="contained" size="medium">SIDE DISHES
            </Button>

            <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
            className='pizzaGoToDrinks' variant="contained" size="medium">DRINKS
            </Button>

            <Container maxWidth="md"> 
                <Grid container spacing={3}>
                    {pizza.map((pizza) => {
                        <><Grid item xs={12} lg={6} key={pizza.name}><PizzaCard pizza={pizza} /></Grid></>
                    })}
                </Grid>
            </Container>
            </Container>
        </main>  
    );
    
}