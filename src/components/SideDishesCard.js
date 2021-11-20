import { DeleteOutlined } from '@mui/icons-material';
import { Card, CardContent, CardHeader} from '@mui/material';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';


export default function SideDishesCard({ sideDishes, useState, useEffect /*addSideDishesToCart*/ }){

    const [stateSideDishes, setStateSideDishes] = useState (() => [
        { name:"BRUSCHETTA CON AVOCADO E PROSCIUTTO DI PARMA", description:"Grilled country bread with avocado, parma ham, cherry tomato, red onion, garlic, pesto rosso and mozzarella", allergens:"WHEAT, RYE, MILK, PINE NUTS", price: 185 },
        { name:"BRUSCHETTA AL POMODORO E BASILICO", description:"Grilled country bread with cherry tomato, garlic, basil, olive oil and parmesan", allergens:"WHEAT, RYE, MILK", price: 155 },
        { name:"BRUSCHETTA CON FUNGHI PORCINI", description:"Grilled country bread with stone mushroom puree", allergens:"WHEAT, RYE, MILK, SOY", price: 185 },
        { name:"CONFITTO DI QUAGLIA", description:"Cofitert quail with quail glace, celery cream, focacciacrust", allergens:"WHEAT, DURUM WHEAT, MILK, CELLERY, SOY, SULPHITES", price: 185 },
        { name:"ANTIPASTO ALL'ITALIANA", description:"Parma ham, ventricina salami, marchisio salami with truffle, pecorino, mozzarella, cherry tomato, arugula, olives, capers, aioli and focaccia", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, PINE NUTS, SULPHITER", price: 345 },
        { name:"CARPACCIO DI VITELLO", description:"Thin, raw slices of veal, truffle cream, lemon, olive oil, pickled beets, pine nuts", allergens:"FISH, EGGS, MILK", price: 185 },
        { name:"ZUPPA DI ARAGOSTA", description:"Lobster soup served with scallops and herbs", allergens:"WHEAT, MILK, SOY, CELLERY", price: 199 },
        { name:"PESTO ROSSO", description:"", allergens:"MILK, CASHEW NUTS", price: 30 },
        { name:"PESTO GENOVESE", description:"", allergens:"MILK, PINE CEREALS", price: 30 },
        { name:"GARLIC DRESSING", description:"", allergens:"MILK", price: 30 },
        { name:"AIOLI", description:"", allergens:"EGG", price: 30 }
      ])

      /*
      const addSideDishesToCart = (name, description, allergens, price) => {
        setStateSideDishes(prevState => {
          return [...prevState, {name, description, allergens, price}]
        })
      }
      */


      useEffect(() => {
        console.log(stateSideDishes)
      }, [stateSideDishes])
      

    return (
        <Card elevation={3}>
            <CardHeader/>
                <CardContent>
                    <Typography sx={{ fontsize: 16}} color="text.secondary" gutterBottom> 
                        <p>{sideDishes.name}</p>
                    </Typography>
                    <Typography sx={{fontsize: 14}} color="text.secondary" gutterBottom>
                        <p>{sideDishes.description}</p>
                        <p>{sideDishes.allergens}</p>
                        <p>{sideDishes.price}</p>
                    </Typography>
                    <Button sx={{ justifyContent: 'flex-end', color: '#1D1F2C', letterSpacing: '4px', fontSize: 20 }} 
                        className='navbar-button' variant="text" size="medium">ADD
                    </Button>
                </CardContent>
            <CardHeader/>
        </Card>
    )
}
