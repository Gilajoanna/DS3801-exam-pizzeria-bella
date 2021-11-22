import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import images from './images/images';
import CheckOut from './components/checkout/CheckOut';
import PizzaList from "./components/menus/PizzaList";
import PastaList from "./components/menus/PastaList";
import SideDishesList from './components/menus/SideDishesList';
import BeveragesList from './components/menus/BeveragesList';

import './style2.css';
import PizzaCard from "./components/menus/PizzaCard";
import OrderOnline from "./components/OrderOnline";



function App() {

    const [statePizza, setStatePizza] = useState (() => [
      { id:'1', name: "MARGHERITA", description: "Tomato sauce, mozzarella, basil, oregano", allergens:"WHEAT, MILK", price: 189 },
      { id:'2', name: "PIZZA ALLA SALSICCIA", description: "Tomato sauce, mozzarella, Salsiccia piccante, olives, red onion, ruccula, parmesan", allergens:"WHEAT, MILK", price:229 },
      { id:'3', name: "PIZZA POLLO", description: "Tomato sauce, mozzarella, chicken, red onion, garlic, olives, ruccula, pesto rosso, parmesan", allergens:"WHEAT, MILK, CASHEW NUTS", price: 229 },
      { id:'4', name: "PIZZA CON GAMBERI", description: "Tomato sauce, mozzarella, chili and garlic marinated scampi, red onion, parsley, lime", allergens:"WHEAT, SHELLFISH, MILK", price: 229 },
      { id:'5', name: "PROSCIUTTO E FUNGHI", description: "Tomato sauce, mozzarella, ham, mushrooms", allergens:"WHEAT, MILK", price: 199 },
      { id:'6', name: "PIZZA SALAME", description: "Tomato sauce, mozzarella, pepperoni Calabra, red onion, cherry tomato", allergens:"WHEAT, MILK", price: 229},
      { id:'7', name: "PARMA", description: "Tomato sauce, mozzarella, parma ham, ruccula, parmesan", allergens:"WHEAT, MILK", price: 229 },
      { id:'8', name: "PIZZA PANCHETTA", description: "Tomato sauce, mozzarella, pancetta, red onion, parmesan, oregano", allergens:"WHEAT, MILK", price: 229 },
      { id:'9', name: "CALABRESE", description: "Tomato sauce, mozzarella, Marchisio salami with black truffle, truffle oil, ruccula", allergens:"WHEAT, MILK, SULPHITES", price: 229 },
      { id:'10', name: "INFERNO", description: "Tomato sauce, mozzarella, Negrini salami spicy pepperoni, marinated chili pepper", allergens:"WHEAT, MILK", price: 229 }
  ])

 

    const [statePasta, setStatePasta] = useState (() => [
        { id:'1', name:"RISOTTO ALLA VENTRICINA", description:"Risotto, ventricina salami, tomato, onion, garlic and parmesan", allergens:"MILK, SULPHITES", price: 215},
        { id:'2', name:"RISOTTO AI FUNGHI PORCINI", description:"Risotto, mushrooms, onions, garlic, white wine, parmesan", allergens:"MILK, SULPHITES", price:215 },
        { id:'3', name:"SPAGHETTI CONN PICCANTE SALSICCIA", description:"Fresh spaghetti with Salsiccia piccante, tomato sauce, fennel and parmesan", allergens:"WHEAT, DURUM WHEAT, MILK, CELERY", price: 229},
        { id:'4', name:"SPAGHETTI CON POLPETTE VEGETARIANE", description:"Fresh spaghetti, tomato sauce, veggie buns, basil", allergens:"WHEAT, DURUM WHEAT", price:199},
        { id:'5', name:"SPAGHETTI AGLIO OLIO E PEPERONCINO", description:"Fresh spaghetti, olive oil, garlic, chilli flakes, parsley and parmesan", allergens:"WHEAT, MILK, CELLERY", price:185 },
        { id:'6', name:"LASAGNA DELLA CASA", description:"The house lasagne is served with salad and focaccia", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELERY, SULPHITTER", price: 219 },
        { id:'7', name:"TAGLIATELLE AL BOLOGNAISE", description:"Fresh tagliatelle, meat sauce, parmesan and parsley", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELLERY, SOY, SULPHITES", price: 205 },
        { id:'8', name:"TAGLIATELLE GORGONZOLA", description:"Fresh tagliatelle with beef tenderloin, spring onions, chili and gorgonzola sauce", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, SOY, CELLERY", price: 239 },
        { id:'9', name:"TAGLIATELLE CON PORCINI", description:"Tagliatelle with creamy mushrooms", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK", price: 239 },
        { id:'10', name:"STROZZAPRETI CON POLLO", description:"Fresh strozzapreti, chicken fillet, bacon, peppers, spring onions, garlic, cream and basil", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, CELERY, SULPHITES", price: 229 }
    ])

    const [stateSideDishes, setStateSideDishes] = useState (() => [
      { id:'1', name:"BRUSCHETTA CON AVOCADO E PROSCIUTTO DI PARMA", description:"Grilled country bread with avocado, parma ham, cherry tomato, red onion, garlic, pesto rosso and mozzarella", allergens:"WHEAT, RYE, MILK, PINE NUTS", price: 185 },
      { id:'2', name:"BRUSCHETTA AL POMODORO E BASILICO", description:"Grilled country bread with cherry tomato, garlic, basil, olive oil and parmesan", allergens:"WHEAT, RYE, MILK", price: 155 },
      { id:'3', name:"BRUSCHETTA CON FUNGHI PORCINI", description:"Grilled country bread with stone mushroom puree", allergens:"WHEAT, RYE, MILK, SOY", price: 185 },
      { id:'4', name:"CONFITTO DI QUAGLIA", description:"Cofitert quail with quail glace, celery cream, focacciacrust", allergens:"WHEAT, DURUM WHEAT, MILK, CELLERY, SOY, SULPHITES", price: 185 },
      { id:'5', name:"ANTIPASTO ALL'ITALIANA", description:"Parma ham, ventricina salami, marchisio salami with truffle, pecorino, mozzarella, cherry tomato, arugula, olives, capers, aioli and focaccia", allergens:"WHEAT, DURUM WHEAT, EGGS, MILK, PINE NUTS, SULPHITER", price: 345 },
      { id:'6', name:"CARPACCIO DI VITELLO", description:"Thin, raw slices of veal, truffle cream, lemon, olive oil, pickled beets, pine nuts", allergens:"FISH, EGGS, MILK", price: 185 },
      { id:'7', name:"ZUPPA DI ARAGOSTA", description:"Lobster soup served with scallops and herbs", allergens:"WHEAT, MILK, SOY, CELLERY", price: 199 },
      { id:'8', name:"PESTO ROSSO", description:"", allergens:"MILK, CASHEW NUTS", price: 30 },
      { id:'9', name:"PESTO GENOVESE", description:"", allergens:"MILK, PINE CEREALS", price: 30 },
      { id:'10', name:"GARLIC DRESSING", description:"", allergens:"MILK", price: 30 },
      { id:'11', name:"AIOLI", description:"", allergens:"EGG", price: 30 }
    ])
    
    const [stateBeverage, setStateBeverage] = useState (() => [
      { id:'1', name:"SAN PELLEGRINO", description:"Mineral water with carbon dioxide, 75 cl", price: 99 },
      { id:'2', name:"GAZZOSA", description:"Italian lemon soda, 27.5 cl", price: 59 },
      { id:'3', name:"ARANCIATA", description:"Italian orange soda, 27.5 cl", price: 59 },
      { id:'4', name:"CHINOTTO", description:"Italian bittersweet lemon soda, 27.5 cl", price: 59 },
      { id:'5', name:"MANDARINO VERDE", description:"Italian mandarin bruS, 27.5 cl", price: 59 },
      { id:'6', name:"GINGER BEER ", description:"Ginger beer, 27.5 cl", price: 59 },
      { id:'7', name:"GALVANINA PEACH", description:"Fresh peaches, 35.5 cl", price: 60 },
      { id:'8', name:"COCA COLA", description:"Box, 33 cl", price: 45 },
      { id:'9', name:"COCA-COLA ZERO", description:"Box, 33cl", price: 45 },
      { id:'10', name:"FANTA ORANGE", description:"Box, 33cl", price: 45 },
      { id:'11', name:"CLAUSTHALER", description:"Non-alcoholic beer, 33 cl", price: 65 },
      { id:'12', name:"PERONI LIBERA", description:"Non-alcoholic beer, 33 cl", price: 70 },
      { id:'13', name:"ESPRESSO", description:"Freshly ground coffe topped with worm water", price: 44 },
      { id:'14', name:"AMERICANO", description:"100% Arabica dark roast", price: 44 }
    ])

    const [stateCheckOut, setStateCheckOut] = useState (() => [])

   
    /* const addPizzaToCart = (name, description, allergens, price) => {
      setStatePizza(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }
    */


     /*

    const addPastaToCart = (name, description, allergens, price) => {
      setStatePasta(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }

    const addSideDishesToCart = (name, description, allergens, price) => {
      setStateSideDishes(prevState => {
        return [...prevState, {name, description, allergens, price}]
      })
    }

    const addBeverageToCart = (name, description, price) => {
      setStateBeverage(prevState => {
        return [...prevState, {name, description, price}]
      })
    }
    */

    
    /*const pizzaItems = (name, description, allergens, price) => {
      
    }*/

    
    useEffect(() => {
      console.log(statePizza)
    }, [statePizza])
    
    
    useEffect(() => {
      console.log(statePasta)
    }, [statePasta])

  
    useEffect(() => {
      console.log(stateSideDishes)
    }, [stateSideDishes])

    useEffect(() => {
      console.log(stateBeverage)
    }, [stateBeverage])

    
    //Add pizza to shoppingcart
    const { pizzaList } = statePizza;
    const [shoppingCartItems, setShoppingCartItems] = useState([]);

    const addPizzaToCart = (pizza) => {
      const exist = shoppingCartItems.find(x => x.id === pizza.id);
      if (exist) {
        setShoppingCartItems(
          shoppingCartItems.map((x) => 
            x.id === pizza.id ? {...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setShoppingCartItems([...shoppingCartItems, {...pizza, qty: 1 }])
      }
    }

    /*
    const addPizzaToCart = (pizza) => {
      const exist = shoppingCartItems.find(x => x.id === pizza.id);
      if (exist) {
          setShoppingCartItems(
              shoppingCartItems.map((x) =>
                  x.id === pizza.id ? { ...exist, qty: exist.qty + 1 } : x
              )
          );
      } else {
          setShoppingCartItems([...shoppingCartItems, { ...pizza, qty: 1}]);
      }
    };
    */
    
    return (
      <div className="App">
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={ <Home img={ images[0] } /> } />
                <Route path= "/pizzaList" element={ <PizzaList pizzaList={statePizza} addPizzaToCart={addPizzaToCart}/>}/> 
                <Route path= "/pastaList" element={ <PastaList pastaList={statePasta}/>}/> 
                <Route path= "/sideDishesList" element={ <SideDishesList sideDishesList={stateSideDishes} /> } />
                <Route path= "/beveragesList" element={ <BeveragesList beveragesList={stateBeverage} /> } />
                <Route path= "/checkOut" element={ <CheckOut addPizzaToCart={addPizzaToCart} shoppingCartItems={shoppingCartItems} /> } />
                <Route path= "/orderOnline" element={ <OrderOnline /> } />
            </Routes>
        </BrowserRouter>
      </div>
      
    );
}


export default App;
