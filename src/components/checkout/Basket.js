import React from 'react';

function Basket(props) {

    const { shoppingCartItems } = props;

    return(
        <div>
            {shoppingCartItems.length === 0 && <div>Shopping cart is empty</div>}
        </div>
    )
}

export default Basket;