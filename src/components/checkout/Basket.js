import React from 'react';

function Basket({ shoppingCartItems, addPizzaToCart }) {

    return(
        <div>
            <div> {shoppingCartItems.length === 0 && <div>Shopping cart is empty</div>} </div>
            {shoppingCartItems.map((item) => (
                <div key={item.id} className="product-row">
                    <div>{item.name}</div>
                    <div>{item.qty} x {item.price}kr</div>
                </div>
            ))}
        </div>
    );
}

export default Basket;