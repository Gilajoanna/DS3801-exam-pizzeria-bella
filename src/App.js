import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import images from './images/images';
import PizzaList from './components/PizzaList';
import PastaList from './components/PastaList';
import AddOnsList from './components/AddOnsList';
import DrinkList from './components/DrinkList';


function App() {

    const [statePizza, setStatePizza] = useState (() => [
        {name: "MARGHERITA", description: "Tomato sauce, mozzarella, basil, oregano", allergens:"WHEAT, MILK", price: 189 },
        {name: "PIZZA ALLA SALSICCIA", description: "Tomato sauce, mozzarella, Salsiccia piccante, olives, red onion, ruccula, parmesan", allergens:"WHEAT, MILK", price:229 },
        {name: "PIZZA POLLO", description: "Tomato sauce, mozzarella, chicken, red onion, garlic, olives, ruccula, pesto rosso, parmesan", allergens:"WHEAT, MILK, CASHEW NUTS", price: 229 },
        {name: "PIZZA CON GAMBERI", description: "Tomato sauce, mozzarella, chili and garlic marinated scampi, red onion, parsley, lime", allergens:"WHEAT, SHELLFISH, MILK", price: 229 },
        {name: "PROSCIUTTO E FUNGHI", description: "Tomato sauce, mozzarella, ham, mushrooms", allergens:"WHEAT, MILK", price: 199 },
        {name: "PIZZA SALAME", description: "Tomato sauce, mozzarella, pepperoni Calabra, red onion, cherry tomato", allergens:"WHEAT, MILK", price: 229},
        {name: "PARMA", description: "Tomato sauce, mozzarella, parma ham, ruccula, parmesan", allergens:"WHEAT, MILK", price: 229 },
        {name: "PIZZA PANCHETTA", description: "Tomato sauce, mozzarella, pancetta, red onion, parmesan, oregano", allergens:"WHEAT, MILK", price: 229 },
        {name: "CALABRESE", description: "Tomato sauce, mozzarella, Marchisio salami with black truffle, truffle oil, ruccula", allergens:"WHEAT, MILK, SULPHITES", price: 229 },
        {name: "INFERNO", description: "Tomato sauce, mozzarella, Negrini salami spicy pepperoni, marinated chili pepper", allergens:"WHEAT, MILK", price: 229 }
    ])

    const [statePasta, setStatePasta] = useState (() => [
        {name:"RISOTTO ALLA VENTRICINA", description:"Risotto, ventricina salami, tomato, onion, garlic and parmesan", allergens:"MILK, SULPHITES", price: 215 },
        {name:"RISOTTO AI FUNGHI PORCINI", description:"Risotto, mushrooms, onions, garlic, white wine, parmesan", allergens:"MILK, SULPHITES", price:215 },
        {name:"SPAGHETTI CONN PICCANTE SALSICCIA", description:"Fresh spaghetti with Salsiccia piccante, tomato sauce, fennel and parmesan", allergens:"WHEAT, DURUM WHEAT, MILK, CELERY", price: 229},
        {name:"SPAGHETTI CON POLPETTE VEGETARIANE", description:"Fresh spaghetti, tomato sauce, veggie buns, basil", allergens:"WHEAT, DURUM WHEAT", price:199},
        {name:"SPAGHETTI AGLIO OLIO E PEPERONCINO", description:"Fresh spaghetti, olive oil, garlic, chilli flakes, parsley and parmesan", allergens:"WHEAT, MILK, CELLERY", price:185 },
        {name:"LASAGNA DELLA CASA", description:"The house lasagne is served with salad and focaccia", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELERY, SULPHITTER", price: 219 },
        {name:"TAGLIATELLE AL BOLOGNAISE", description:"Fresh tagliatelle, meat sauce, parmesan and parsley", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELLERY, SOY, SULPHITES", price: 205 },
        {name:"TAGLIATELLE GORGONZOLA", description:"Fresh tagliatelle with beef tenderloin, spring onions, chili and gorgonzola sauce", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, SOY, CELLERY", price: 239 },
        {name:"TAGLIATELLE CON PORCINI", description:"Tagliatelle with creamy mushrooms", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK", price: 239 },
        {name:"STROZZAPRETI CON POLLO", description:"Fresh strozzapreti, chicken fillet, bacon, peppers, spring onions, garlic, cream and basil", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELERY, SULPHITES", price: 229 }
    ])

    const [stateAddOns, setStateAddOns] = useState (() => [
      {name:"BRUSCHETTA CON AVOCADO E PROSCIUTTO DI PARMA", description:"Grilled country bread with avocado, parma ham, cherry tomato, red onion, garlic, pesto rosso and mozzarella", allergens:"WHEAT, RYE, MILK, PINE NUTS", price: 185 },
      {name:"BRUSCHETTA AL POMODORO E BASILICO", description:"Grilled country bread with cherry tomato, garlic, basil, olive oil and parmesan", allergens:"WHEAT, RYE, MILK", price: 155 },
      {name:"BRUSCHETTA CON FUNGHI PORCINI", description:"Grilled country bread with stone mushroom puree", allergens:"WHEAT, RYE, MILK, SOY", price: 185 },
      {name:"CONFITTO DI QUAGLIA", description:"Cofitert quail with quail glace, celery cream, focacciacrust", allergens:"WHEAT, DURUM WHEAT, MILK, CELLERY, SOY, SULPHITES", price: 185 },
      {name:"ANTIPASTO ALL'ITALIANA", description:"Parma ham, ventricina salami, marchisio salami with truffle, pecorino, mozzarella, cherry tomato, arugula, olives, capers, aioli and focaccia", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, PINE NUTS, SULPHITER", price: 345 },
      {name:"CARPACCIO DI VITELLO", description:"Thin, raw slices of veal, truffle cream, lemon, olive oil, pickled beets, pine nuts", allergens:"FISH, EGGS, MILK", price: 185 },
      {name:"ZUPPA DI ARAGOSTA", description:"Lobster soup served with scallops and herbs", allergens:"WHEAT, MILK, SOY, CELLERY", price: 199 },
      {name:"PESTO ROSSO", description:"", allergens:"MILK, CASHEW NUTS", price: 30 },
      {name:"PESTO GENOVESE", description:"", allergens:"MILK, PINE CEREALS", price: 30 },
      {name:"GARLIC DRESSING", description:"", allergens:"MILK", price: 30 },
      {name:"AIOLI", description:"", allergens:"EGG", price: 30 }
    ])

    const [stateDrink, setStateDrink] = useState (() => [
      {name:"SAN PELLEGRINO", description:"Mineral water with carbon dioxide, 75 cl", price: 99 },
      {name:"GAZZOSA", description:"Italian lemon soda, 27.5 cl", price: 59 },
      {name:"ARANCIATA", description:"Italian orange soda, 27.5 cl", price: 59 },
      {name:"CHINOTTO", description:"Italian bittersweet lemon soda, 27.5 cl", price: 59 },
      {name:"MANDARINO VERDE", description:"Italian mandarin bruS, 27.5 cl", price: 59 },
      {name:"GINGER BEER ", description:"Ginger beer, 27.5 cl", price: 59 },
      {name:"GALVANINA PEACH", description:"Fresh peaches, 35.5 cl", price: 60 },
      {name:"COCA COLA", description:"Box, 33 cl", price: 45 },
      {name:"COCA-COLA ZERO", description:"Box, 33cl", price: 45 },
      {name:"FANTA ORANGE", description:"Box, 33cl", price: 45 },
      {name:"CLAUSTHALER", description:"Non-alcoholic beer, 33 cl", price: 65 },
      {name:"PERONI LIBERA", description:"Non-alcoholic beer, 33 cl", price: 70 },
      {name:"ESPRESSO", description:"Freshly ground coffe topped with worm water", price: 44 },
      {name:"AMERICANO", description:"100% Arabica dark roast", price: 44 }
    ])


    const addPizzaToCart = (name, description, allergens, price) => {
      setStatePizza(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }

    const addPastaToCart = (name, description, allergens, price) => {
      setStatePasta(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }

    const addAddOnToCart = (name, description, allergens, price) => {
      setStateAddOns(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }

    const addDrinkToCart = (name, description, price) => {
      setStateDrink(prevState => {
        return [...prevState, {name, description, price}]
      })
    }

    useEffect(() => {
      console.log(statePizza)
    }, [statePizza])
    
    
    useEffect(() => {
      console.log(statePasta)
    }, [statePasta])

  
    useEffect(() => {
      console.log(stateAddOns)
    }, [stateAddOns])

    useEffect(() => {
      console.log(stateDrink)
    }, [stateDrink])
    

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home img={ images[0] }/>}/>
          <Route exact path="/" element={<PizzaList/>}/>
          <Route exact path="/" element={<PastaList/>}/>
          <Route exact path="/" element={<AddOnsList/>}/>
          <Route exact path="/" element={<DrinkList/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
