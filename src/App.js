import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
function App() {

  /*
const pizza = [state, setState] = useState (() => [
    {name: "MARGHERITA", description: "Tomato sauce, mozzarella, basil, oregano", allergens:"WHEAT, MILK", price: 189 },
    {name: "PIZZA ALLA SALSICCIA", description: "Tomato sauce, mozzarella, Salsiccia piccante, olives, red onion, ruccula, parmesan", allergens:"WHEAT, MILK", price:229 },
    {name: "PIZZA POLLO", description: "Tomato sauce, mozzarella, chicken, red onion, garlic, olives, ruccula, pesto rosso, parmesan", allergens:"WHEAT, MILK, CASHEW NUTS", price: 229 },
    {name: "PIZZA CON GAMBERI", description: "Tomato sauce, mozzarella, chili and garlic marinated scampi, red onion, parsley, lime", allergens:"WHEAT, SHELLFISH, MILK", price: 229 },
    {name: "PROSCIUTTO E FUNGHI", description: "Tomato sauce, mozzarella, ham, mushrooms", allergens:"WHEAT, MILK", price: 199 },
    {name: "PIZZA SALAME", description: "Tomato sauce, mozzarella, pepperoni Calabra, red onion, cherry tomato", allergens:"WHEAT, MILK", price: 229},
    {name: "PARMA", description: "Tomato sauce, mozzarella, parma ham, ruccula, parmesan", allergens:"WHEAT, MILK", price: 229 },
    {name: "PIZZA PANCHETTA", description: "Tomato sauce, mozzarella, pancetta, red onion, parmesan, oregano", allergens:"WHEAT, MILK", price: 229 },
    {name: "CALABRESE", description: "Tomato sauce, mozzarella, Marchisio salami with black truffle, truffle oil, ruccula", allergens:"WHEAT, MILK, SULFITES", price: 229 },
    {name: "INFERNO", description: "Tomato sauce, mozzarella, Negrini salami spicy pepperoni, marinated chili pepper", allergens:"WHEAT, MILK", price: 229 }
])

const pasta [state, setState] = useState (() => [
    {name:"RISOTTO ALLA VENTRICINA", description="Risotto, ventricina salami, tomato, onion, garlic and parmesan", alargenes="MILK, SULFITES", price= 215 },
    {name:"RISOTTO AI FUNGHI PORCINI", description="Risotto, mushrooms, onions, garlic, white wine, parmesan", alargenes="MILK, SULFITES", price= 215 },
    {name:"SPAGHETTI CONN PICCANTE SALSICCIA", description="Fresh spaghetti with Salsiccia piccante, tomato sauce, fennel and parmesan", alargenes="WHEAT, DURUM WHEAT, MILK, CELERY", price= 229},
    {name:"SPAGHETTI CON POLPETTE VEGETARIANE", description="Fresh spaghetti, tomato sauce, veggie buns, basil", alargenes="WHEAT, DURUM WHEAT", price= 199},
    {name:"", description="", alargenes="", price= },
    {name:"", description="", alargenes="", price= },
    {name:"", description="", alargenes="", price= },
    {name:"", description="", alargenes="", price= },
    {name:"", description="", alargenes="", price= },
    {name:"", description="", alargenes="", price= }
])

const addOns [state, setState] = useState (() => [
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= }
])

const drinks [state, setState] = useState (() => [
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
  {name:"", description="", alargenes="", price= },
])

*/

  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
